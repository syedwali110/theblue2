const https = require('https');
const { createHash } = require('crypto');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  try {
    const { data, key } = JSON.parse(event.body);
    const token = process.env.GITHUB_TOKEN;
    const repo = process.env.GITHUB_REPO; // e.g., 'syedwali110/theblue2'
    const branch = process.env.GITHUB_BRANCH || 'main';

    if (!token || !repo) {
      throw new Error('Missing GitHub credentials');
    }

    // Get current commit SHA
    const refResponse = await fetch(`https://api.github.com/repos/${repo}/git/refs/heads/${branch}`, {
      headers: { Authorization: `token ${token}` }
    });
    if (!refResponse.ok) throw new Error('Failed to get ref');
    const refData = await refResponse.json();
    const latestCommitSha = refData.object.sha;

    // Get latest commit tree
    const commitResponse = await fetch(`https://api.github.com/repos/${repo}/git/commits/${latestCommitSha}`, {
      headers: { Authorization: `token ${token}` }
    });
    if (!commitResponse.ok) throw new Error('Failed to get commit');
    const commitData = await commitResponse.json();
    const treeSha = commitData.tree.sha;

    // Create blob for data
    const dataStr = JSON.stringify(data, null, 2);
    const blobResponse = await fetch(`https://api.github.com/repos/${repo}/git/blobs`, {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: Buffer.from(dataStr).toString('base64'),
        encoding: 'base64'
      })
    });
    if (!blobResponse.ok) throw new Error('Failed to create blob');
    const blobData = await blobResponse.json();

    // Create new tree
    const treeResponse = await fetch(`https://api.github.com/repos/${repo}/git/trees`, {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        base_tree: treeSha,
        tree: [{
          path: `data/${key}.json`,
          mode: '100644',
          type: 'blob',
          sha: blobData.sha
        }]
      })
    });
    if (!treeResponse.ok) throw new Error('Failed to create tree');
    const treeData = await treeResponse.json();

    // Create commit
    const commitCreateResponse = await fetch(`https://api.github.com/repos/${repo}/git/commits`, {
      method: 'POST',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Update ${key} data`,
        tree: treeData.sha,
        parents: [latestCommitSha]
      })
    });
    if (!commitCreateResponse.ok) throw new Error('Failed to create commit');
    const newCommitData = await commitCreateResponse.json();

    // Update ref
    const refUpdateResponse = await fetch(`https://api.github.com/repos/${repo}/git/refs/heads/${branch}`, {
      method: 'PATCH',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sha: newCommitData.sha
      })
    });
    if (!refUpdateResponse.ok) throw new Error('Failed to update ref');

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, url: `https://raw.githubusercontent.com/${repo}/${branch}/data/${key}.json` })
    };
  } catch (error) {
    console.error('Save data error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};</content>
<parameter name="filePath">c:\Users\Lenovo\Downloads\files (1)\theblue-website\theblue2\netlify\functions\save-data.js