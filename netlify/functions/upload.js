exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const { imageData, fileName } = JSON.parse(event.body);

  if (!imageData || !fileName) {
    return { statusCode: 400, body: 'Missing imageData or fileName' };
  }

  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO; // e.g. 'username/repo'
  const branch = 'main'; // or your branch

  if (!token || !repo) {
    return { statusCode: 500, body: 'Server configuration error' };
  }

  const [owner, repoName] = repo.split('/');

  // Remove data URL prefix
  const base64Data = imageData.replace(/^data:image\/[a-z]+;base64,/, '');

  const path = `images/${fileName}`;

  try {
    // Get latest commit SHA
    const refResponse = await fetch(`https://api.github.com/repos/${repo}/git/refs/heads/${branch}`, {
      headers: { Authorization: `token ${token}` }
    });
    if (!refResponse.ok) throw new Error('Failed to get ref');
    const refData = await refResponse.json();
    const latestCommitSha = refData.object.sha;

    // Get commit data
    const commitResponse = await fetch(`https://api.github.com/repos/${repo}/git/commits/${latestCommitSha}`, {
      headers: { Authorization: `token ${token}` }
    });
    if (!commitResponse.ok) throw new Error('Failed to get commit');
    const commitData = await commitResponse.json();
    const treeSha = commitData.tree.sha;

    // Create blob
    const blobResponse = await fetch(`https://api.github.com/repos/${repo}/git/blobs`, {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: base64Data,
        encoding: 'base64'
      })
    });
    if (!blobResponse.ok) throw new Error('Failed to create blob');
    const blobData = await blobResponse.json();

    // Create tree
    const treeResponse = await fetch(`https://api.github.com/repos/${repo}/git/trees`, {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        base_tree: treeSha,
        tree: [{
          path: path,
          mode: '100644',
          type: 'blob',
          sha: blobData.sha
        }]
      })
    });
    if (!treeResponse.ok) throw new Error('Failed to create tree');
    const treeData = await treeResponse.json();

    // Create commit
    const newCommitResponse = await fetch(`https://api.github.com/repos/${repo}/git/commits`, {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Add image ${fileName}`,
        tree: treeData.sha,
        parents: [latestCommitSha]
      })
    });
    if (!newCommitResponse.ok) throw new Error('Failed to create commit');
    const newCommitData = await newCommitResponse.json();

    // Update ref
    const updateRefResponse = await fetch(`https://api.github.com/repos/${repo}/git/refs/heads/${branch}`, {
      method: 'PATCH',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sha: newCommitData.sha
      })
    });
    if (!updateRefResponse.ok) throw new Error('Failed to update ref');

    // Return the raw URL
    const rawUrl = `https://raw.githubusercontent.com/${repo}/${branch}/${path}`;

    return {
      statusCode: 200,
      body: JSON.stringify({ url: rawUrl })
    };

  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: 'Internal server error' };
  }
};