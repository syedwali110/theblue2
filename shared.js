// THE BLUE KARACHI — Shared Components & CMS
// This file is loaded by every page

// ── INJECT GLOBAL CSS ──────────────────────────────────────────────────────
(function injectCSS() {
  const css = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cinzel+Decorative:wght@400;700&family=Glory:wght@300;400;500;600;800&family=IM+Fell+English:ital@0;1&display=swap');

@font-face {
  font-family: 'Korataki';
  src: url('korataki.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

:root{
  --navy:#0d1b2a;--navy-mid:#1a3a5c;--navy-deep:#071018;--navy-panel:rgba(7,16,24,0.96);
  --gold:#c9921a;--gold-light:#e8b84b;--gold-pale:#f0d080;--gold-dim:#8a6010;
  --gold-faint:rgba(201,146,26,0.10);--gold-border:rgba(201,146,26,0.22);--gold-border-strong:rgba(201,146,26,0.5);
  --white:#f0ece2;--off-white:#d4cfc3;--grey:#7a7a7a;
  --success:#40a860;--danger:#c94040;
  --ease:cubic-bezier(.4,0,.2,1);
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;font-size:16px}
body{background:var(--navy-deep);color:var(--white);font-family:'Glory',sans-serif;font-weight:300;overflow-x:hidden;cursor:none}
img{max-width:100%;display:block}a{text-decoration:none;color:inherit}
/* CURSOR */
#cur-dot{width:8px;height:8px;background:var(--gold);border-radius:50%;position:fixed;z-index:9999999;pointer-events:none;transform:translate(-50%,-50%);transition:transform .1s}
#cur-ring{width:36px;height:36px;border:1.5px solid var(--gold);border-radius:50%;position:fixed;z-index:9999998;pointer-events:none;transform:translate(-50%,-50%);transition:all .16s ease;opacity:.5}
/* NAV */
#nav{position:fixed;top:0;left:0;right:0;z-index:1000;padding:1.3rem 3.5rem;transition:all .4s var(--ease)}
#nav.scrolled{background:rgba(7,16,24,.97);backdrop-filter:blur(20px);padding:.85rem 3.5rem;border-bottom:1px solid var(--gold-border);box-shadow:0 4px 40px rgba(0,0,0,.5)}
.nav-in{max-width:1440px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:2rem}
.nav-logo{display:flex;align-items:center;gap:.8rem;flex-shrink:0}
.nav-logo-svg{width:42px;height:42px;flex-shrink:0;object-fit:contain}
.nav-logo-txt{display:flex;flex-direction:column;align-items:center}
.nlm{font-family:'Korataki',sans-serif;font-size:1.15rem;color:var(--white);letter-spacing:.12em;line-height:1.1;text-transform:uppercase;text-align:center}
.nls{font-family:'Korataki',sans-serif;font-size:.6rem;letter-spacing:.4em;color:var(--gold);line-height:1.3;text-transform:uppercase;font-weight:400;text-align:center}
.nav-links{display:flex;gap:1.8rem;list-style:none;flex:1;justify-content:center}
.nav-links a{font-family:'Glory',sans-serif;font-size:.88rem;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:rgba(240,236,226,.72);transition:color .3s;position:relative;padding-bottom:3px}
.nav-links a::after{content:'';position:absolute;bottom:0;left:0;right:100%;height:1px;background:var(--gold);transition:right .3s}
.nav-links a:hover,.nav-links a.active{color:var(--gold-light)}
.nav-links a:hover::after,.nav-links a.active::after{right:0}
.nav-cta{font-family:'Glory',sans-serif;font-weight:800;font-size:.6rem;letter-spacing:.12em;padding:.65rem 1.6rem;background:transparent;border:1px solid var(--gold);color:var(--gold);transition:all .3s;flex-shrink:0;white-space:nowrap;cursor:none}
.nav-cta:hover{background:var(--gold);color:var(--navy-deep)}
.nav-burger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:none;padding:4px}
.nav-burger span{width:24px;height:1.5px;background:var(--gold);display:block;transition:all .3s}
/* PAGE HERO BANNER */
.page-hero{padding:10rem 3.5rem 5rem;background:linear-gradient(180deg,#0a1f35 0%,var(--navy-deep) 100%);position:relative;overflow:hidden;text-align:center}
.page-hero::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 2px 2px,rgba(201,146,26,.06) 1px,transparent 0);background-size:38px 38px;pointer-events:none}
.page-hero-badge{font-family:'Glory',sans-serif;font-size:.75rem;font-weight:800;letter-spacing:.3em;color:var(--gold);text-transform:uppercase;margin-bottom:1.2rem;display:flex;align-items:center;justify-content:center;gap:1rem}
.page-hero-badge::before,.page-hero-badge::after{content:'';width:45px;height:1px;background:var(--gold);opacity:.5}
.page-hero-title{font-family:'Glory',sans-serif;font-weight:800;font-size:clamp(2.2rem,6vw,5rem);line-height:1.1;background:linear-gradient(180deg,#fff 0%,#e8d4a0 55%,var(--gold) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.page-hero-sub{font-family:'IM Fell English',serif;font-style:italic;font-size:1.1rem;color:var(--off-white);opacity:.8;margin-top:.8rem}
/* SHARED SECTION STYLES */
.container{max-width:1400px;margin:0 auto;padding:0 3.5rem}
.section-lbl{font-family:'Glory',sans-serif;font-size:.7rem;font-weight:800;letter-spacing:.3em;text-transform:uppercase;color:var(--gold);display:flex;align-items:center;gap:1rem}
.section-lbl::before{content:'';width:35px;height:1px;background:var(--gold)}
.section-h{font-family:'Glory',sans-serif;font-weight:800;font-size:clamp(1.8rem,3vw,3rem);line-height:1.2;color:var(--white);margin-top:.6rem}
.section-h em{font-style:italic;font-family:'IM Fell English',serif;color:var(--gold-light)}
.gold-rule{width:65px;height:2px;background:linear-gradient(90deg,var(--gold),transparent);margin:1.3rem 0}
/* BUTTONS */
.btn-g{display:inline-flex;align-items:center;gap:.5rem;font-family:'Glory',sans-serif;font-weight:800;font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;padding:.85rem 2.2rem;background:linear-gradient(135deg,var(--gold-dim),var(--gold),var(--gold-light));color:var(--navy-deep);border:none;cursor:none;transition:all .35s;position:relative;overflow:hidden}
.btn-g:hover{transform:translateY(-3px);box-shadow:0 15px 35px rgba(201,146,26,.35)}
.btn-ghost{display:inline-flex;align-items:center;gap:.5rem;font-family:'Glory',sans-serif;font-weight:800;font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;padding:.85rem 2.2rem;background:transparent;color:var(--gold);border:1px solid var(--gold-dim);cursor:none;transition:all .3s}
.btn-ghost:hover{background:var(--gold-faint);border-color:var(--gold);transform:translateY(-2px)}
/* TICKER */
.ticker-wrap{background:linear-gradient(90deg,var(--gold-dim),var(--gold),var(--gold-light),var(--gold),var(--gold-dim));padding:.8rem 0;overflow:hidden}
.ticker-track{display:flex;gap:3rem;white-space:nowrap;animation:ticker 30s linear infinite;width:max-content}
.t-item{font-family:'Glory',sans-serif;font-weight:800;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:var(--navy-deep)}
.t-sep{font-style:normal;margin-left:3rem;opacity:.5}
@keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
/* CARDS GENERIC */
.card-grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--gold-border)}
.card-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--gold-border)}
.card-grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem}
.item-card{background:var(--navy-deep);padding:2.2rem 1.8rem;display:flex;flex-direction:column;gap:1rem;transition:all .35s;position:relative;overflow:hidden;cursor:pointer}
.item-card::before{content:'';position:absolute;bottom:0;left:0;right:0;height:0;background:linear-gradient(0deg,rgba(26,58,92,.5),transparent);transition:height .4s}
.item-card:hover{transform:translateY(-6px);background:#0d2137;z-index:2}
.item-card:hover::before{height:100%}
.item-card-num{font-family:'Glory',sans-serif;font-size:.7rem;font-weight:800;letter-spacing:.2em;color:var(--gold-dim)}
.item-card-icon{width:50px;height:50px;border:1px solid var(--gold-border);display:flex;align-items:center;justify-content:center;font-size:1.3rem;transition:all .3s}
.item-card:hover .item-card-icon{border-color:var(--gold);background:var(--gold-faint);transform:rotate(8deg)}
.item-card-name{font-family:'Glory',sans-serif;font-weight:800;font-size:.9rem;color:var(--white);line-height:1.3;letter-spacing:.05em}
.item-card-desc{font-size:.95rem;color:var(--grey);line-height:1.65}
.item-card-floor{font-family:'Glory',sans-serif;font-weight:800;font-size:.7rem;letter-spacing:.15em;color:var(--gold-dim);margin-top:auto;text-transform:uppercase}
.item-card-link{font-family:'Glory',sans-serif;font-weight:800;font-size:.55rem;letter-spacing:.1em;color:var(--gold-dim);margin-top:auto;display:flex;align-items:center;gap:.5rem;transition:all .3s}
.item-card-link::after{content:'→';transition:transform .3s}
.item-card:hover .item-card-link{color:var(--gold)}
.item-card:hover .item-card-link::after{transform:translateX(5px)}
/* FOOTER */
footer{background:var(--navy-deep);border-top:1px solid var(--gold-border)}
.footer-top{padding:5rem 0 2.5rem}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:4rem}
.f-brand{display:flex;flex-direction:column;gap:1.2rem}
.f-logo{display:flex;align-items:center;gap:.8rem}
.f-logo-svg{width:46px;height:46px;object-fit:contain}
.f-logo-m{font-family:'Korataki',sans-serif;font-size:1rem;color:var(--white);letter-spacing:.12em}
.f-logo-s{font-family:'Glory',sans-serif;font-weight:800;font-size:.65rem;letter-spacing:.3em;color:var(--gold)}
.f-desc{font-size:.87rem;color:var(--grey);line-height:1.78;max-width:270px}
.f-soc{display:flex;gap:.7rem}
.f-soc a{width:34px;height:34px;border:1px solid var(--gold-border);display:flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-size:.62rem;color:var(--gold-dim);transition:all .3s}
.f-soc a:hover{border-color:var(--gold);color:var(--gold);transform:translateY(-3px);background:var(--gold-faint)}
.f-col h4{font-family:'Glory',sans-serif;font-weight:800;font-size:.8rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:1.1rem}
.f-col ul{list-style:none;display:flex;flex-direction:column;gap:.6rem}
.f-col ul li a{font-size:.95rem;color:var(--grey);transition:all .22s;display:flex;align-items:center;gap:.4rem}
.f-col ul li a::before{content:'—';font-size:.6rem;color:transparent;transition:color .22s}
.f-col ul li a:hover{color:var(--off-white);padding-left:.4rem}
.f-col ul li a:hover::before{color:var(--gold)}
.footer-bottom{border-top:1px solid var(--gold-border);padding:1.3rem 0}
.footer-bottom .container{display:flex;justify-content:space-between;align-items:center;font-family:'Glory',sans-serif;font-weight:800;font-size:.7rem;letter-spacing:.1em;color:var(--gold-dim)}
/* REVEAL */
[data-r]{opacity:0;transform:translateY(32px);transition:opacity .75s var(--ease),transform .75s var(--ease)}
[data-r=l]{opacity:0;transform:translateX(-32px);transition:opacity .75s var(--ease),transform .75s var(--ease)}
[data-r=r]{opacity:0;transform:translateX(32px);transition:opacity .75s var(--ease),transform .75s var(--ease)}
[data-r].vis,[data-r=l].vis,[data-r=r].vis{opacity:1;transform:translate(0)}
/* LOADER */
#loader{position:fixed;inset:0;background:var(--navy-deep);z-index:10000;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1.5rem;transition:opacity .8s,visibility .8s}
#loader.out{opacity:0;visibility:hidden}
.ld-svg{width:110px;height:110px;animation:spin 4s linear infinite}
.ld-bar{width:200px;height:2px;background:rgba(201,146,26,.15);overflow:hidden}
.ld-fill{height:100%;background:linear-gradient(90deg,var(--gold-dim),var(--gold-light));transform:translateX(-100%);animation:ldFill 2.2s ease forwards}
.ld-txt{font-family:'Glory',sans-serif;font-weight:800;font-size:.8rem;letter-spacing:.3em;color:var(--gold-dim);text-transform:uppercase}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes ldFill{to{transform:translateX(0)}}
/* RESPONSIVE */
@media(max-width:1024px){.card-grid-4{grid-template-columns:repeat(2,1fr)}.footer-grid{grid-template-columns:1fr 1fr;gap:2.5rem}}
@media(max-width:768px){
  #nav{padding:1rem 1.5rem}#nav.scrolled{padding:.75rem 1.5rem}
  .nav-links,.nav-cta{display:none}.nav-burger{display:flex}
  .nav-links.open{display:flex;flex-direction:column;position:fixed;inset:0;background:var(--navy-panel);align-items:center;justify-content:center;gap:2.5rem;z-index:999}
  .nav-links.open a{font-size:1.1rem}
  .container{padding:0 1.5rem}
  .card-grid-4,.card-grid-3{grid-template-columns:1fr}
  .card-grid-2{grid-template-columns:1fr}
  .footer-grid{grid-template-columns:1fr}
  .page-hero{padding:8rem 1.5rem 4rem}
}
`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.insertBefore(style, document.head.firstChild);
})();

// ── SHARED HTML FRAGMENTS ──────────────────────────────────────────────────

const LOGO_SVG = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="40" r="38" fill="#0d1b2a" stroke="#c9921a" stroke-width="2"/>
  <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(201,146,26,0.3)" stroke-width="1"/>
  <path d="M40 18C30 18 23 25 23 35c0 6 3 11 8 14-5 3-8 8-8 14 0 9 7 15 16 15h2c9 0 16-6 16-15 0-6-3-11-8-14 5-3 8-8 8-14 0-10-7-17-17-17z" fill="none" stroke="#c9921a" stroke-width="1.8" opacity="0.8"/>
</svg>`;

const FOOTER_LOGO_SVG = `<svg viewBox="0 0 70 70" class="f-logo-svg" xmlns="http://www.w3.org/2000/svg">
  <circle cx="35" cy="35" r="33" fill="#0d1b2a" stroke="#c9921a" stroke-width="1.5"/>
  <text x="35" y="32" text-anchor="middle" font-family="Korataki,sans-serif" font-size="9" fill="#c9921a" letter-spacing="1">THE</text>
  <text x="35" y="46" text-anchor="middle" font-family="Korataki,sans-serif" font-size="11" fill="#e8b84b" letter-spacing="1">BLUE</text>
</svg>`;

function getNavLinks(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'facilities.html', label: 'Facilities' },
    { href: 'about.html', label: 'About' },
    { href: 'shops.html', label: 'Shops' },
    { href: 'entertainment.html', label: 'Entertainment' },
    { href: 'events.html', label: 'Events' },
    { href: 'offers.html', label: 'Offers' },
    { href: 'contact.html', label: 'Contact' },
  ];
  return pages.map(p =>
    `<li><a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a></li>`
  ).join('');
}

function injectNav(activePage) {
  const el = document.getElementById('nav');
  if (!el) return;
  const logoSrc = CMS.get('settings').siteLogo;
  const logoEl = logoSrc ? `<img src="${logoSrc}" class="nav-logo-svg" alt="Logo">` : `<div class="nav-logo-svg">${LOGO_SVG}</div>`;
  el.innerHTML = `
    <div class="nav-in">
      <button class="nav-burger" id="burger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
      <a href="index.html" class="nav-logo">
        ${logoEl}
        <div class="nav-logo-txt"><span class="nlm">THE BLUE</span><span class="nls">KARACHI</span></div>
      </a>
      <ul class="nav-links" id="navLinks">${getNavLinks(activePage)}</ul>
      <a href="contact.html" class="nav-cta">Visit Us</a>
    </div>`;
  document.getElementById('burger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });
  document.querySelectorAll('#navLinks a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
  });
}

function injectFooter() {
  const el = document.getElementById('footer');
  if (!el) return;
  const logoSrc = CMS.get('settings').siteLogo;
  const logoEl = logoSrc ? `<img src="${logoSrc}" class="f-logo-svg" alt="Logo">` : FOOTER_LOGO_SVG;
  el.innerHTML = `
    <div class="footer-top"><div class="container"><div class="footer-grid">
      <div class="f-brand">
        <div class="f-logo">
          ${logoEl}
          <div class="f-logo-txt" style="display:flex;flex-direction:column;align-items:center">
            <div class="f-logo-m" style="font-family:'Korataki',sans-serif;text-align:center">THE BLUE</div>
            <div class="f-logo-s" style="font-family:'Korataki',sans-serif;text-align:center;font-size:0.55rem;letter-spacing:0.3em">KARACHI</div>
          </div>
        </div>
        <p class="f-desc">Karachi's most iconic shopping and lifestyle destination — where luxury, culture, and community converge.</p>
        <div class="f-soc">
          <a href="#">IG</a><a href="#">FB</a><a href="#">TT</a><a href="#">YT</a>
        </div>
      </div>
      <div class="f-col"><h4>Explore</h4><ul>
        <li><a href="shops.html">Store Directory</a></li>
        <li><a href="dining.html">Dining Guide</a></li>
        <li><a href="entertainment.html">Entertainment</a></li>
        <li><a href="events.html">Events Calendar</a></li>
        <li><a href="offers.html">Offers & Deals</a></li>
      </ul></div>
      <div class="f-col"><h4>Services</h4><ul>
        <li><a href="#">Gift Cards</a></li>
        <li><a href="#">Rewards Club</a></li>
        <li><a href="#">Valet Parking</a></li>
        <li><a href="#">Concierge</a></li>
        <li><a href="#">Leasing</a></li>
      </ul></div>
      <div class="f-col"><h4>Visit</h4><ul>
        <li><a href="contact.html">Opening Hours</a></li>
        <li><a href="contact.html">Getting Here</a></li>
        <li><a href="contact.html">Parking Info</a></li>
        <li><a href="contact.html">Floor Directory</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul></div>
    </div></div></div>
    <div class="footer-bottom"><div class="container">
      <span>© 2026 The Blue Karachi. All Rights Reserved.</span>
      <span>Clifton, Karachi · Open Daily 10 AM – 11 PM</span>
      <span><a href="admin/index.html" style="color:rgba(201,146,26,.25);font-size:.65rem">Admin ↗</a></span>
    </div></div>`;
}

function injectTicker() {
  const el = document.getElementById('ticker');
  if (!el) return;
  const items = ['Fashion','Fine Dining','Luxury Brands','Cinema','Beauty & Wellness','Kids World','Electronics','Jewellery','Entertainment','Home & Living'];
  const html = [...items, ...items].map(i => `<span class="t-item">${i}<em class="t-sep">✦</em></span>`).join('');
  el.innerHTML = `<div class="ticker-wrap"><div class="ticker-track">${html}</div></div>`;
}

function injectLoader() {
  const el = document.getElementById('loader');
  if (!el) return;
  el.innerHTML = `
    <svg class="ld-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#071018" stroke="#c9921a" stroke-width="2.5"/>
      <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(201,146,26,0.3)" stroke-width="1"/>
      <text x="50" y="46" text-anchor="middle" font-family="Korataki,sans-serif" font-size="10" fill="#c9921a" letter-spacing="2">THE</text>
      <text x="50" y="61" text-anchor="middle" font-family="Korataki,sans-serif" font-size="13" fill="#e8b84b" letter-spacing="1">BLUE</text>
    </svg>
    <div class="ld-bar"><div class="ld-fill"></div></div>
    <div class="ld-txt">Karachi's Premier Destination</div>`;
  window.addEventListener('load', () => setTimeout(() => el.classList.add('out'), 2000));
}

// ── CMS DATA ───────────────────────────────────────────────────────────────
const CMS = {
  cache: {},
  defaults: {
    categories: [
      {id:1,icon:'👗',name:'Fashion & Apparel',desc:'Pakistani couture to global fast fashion.',floor:'Level 2 & 3'},
      {id:2,icon:'💎',name:'Luxury & Jewellery',desc:'Fine jewellery, watches, and coveted accessories.',floor:'Level 1'},
      {id:3,icon:'🌸',name:'Beauty & Wellness',desc:'Luxury spas, salons, and global beauty counters.',floor:'Level 3'},
      {id:4,icon:'🏠',name:'Home & Living',desc:'Curated furniture, décor, and lifestyle brands.',floor:'Level 4'},
      {id:5,icon:'💻',name:'Electronics & Tech',desc:'Latest gadgets from authorised retailers.',floor:'Level 4'},
      {id:6,icon:'👟',name:'Sports & Footwear',desc:'International sports brands and footwear.',floor:'Level 3 & 4'},
      {id:7,icon:'📚',name:'Books & Stationery',desc:'Bookstores, art supplies, and gifts.',floor:'Level 2'},
      {id:8,icon:'🧒',name:'Kids & Toys',desc:'Toy stores and kids fashion.',floor:'Level 4'},
    ],
    dining: [
      {id:1,icon:'🍽️',name:'The Perch',tag:'Fine Dining · Rooftop',desc:'Karachi\'s most stunning rooftop dining experience with panoramic city views.',floor:'Level 7'},
      {id:2,icon:'🍛',name:'Karachi Kitchen',tag:'Pakistani Cuisine',desc:'Authentic Karachi street food and traditional recipes elevated to fine dining.',floor:'Level 3'},
      {id:3,icon:'☕',name:'Blue Brew',tag:'Café & Desserts',desc:'Artisan coffee, specialty teas, and handcrafted desserts in a luxurious setting.',floor:'Level 2'},
      {id:4,icon:'🍣',name:'Sakura',tag:'Japanese',desc:'Premium Japanese cuisine with a live sushi bar and teppanyaki stations.',floor:'Level 5'},
      {id:5,icon:'🍕',name:'Bianco',tag:'Italian · Mediterranean',desc:'Authentic Neapolitan pizza and handmade pasta in an elegant atmosphere.',floor:'Level 5'},
      {id:6,icon:'🥩',name:'The Grill House',tag:'Steakhouse',desc:'Premium cuts, live grill, and an extensive wine selection for discerning palates.',floor:'Level 6'},
    ],
    entertainment: [
      {id:1,icon:'🎬',name:'Cineplex Premium',tag:'Cinema',desc:'6-screen IMAX and luxury recliner cinema complex — Karachi\'s finest movie experience.',floor:'Level 5 & 6'},
      {id:2,icon:'🎮',name:'Game Zone X',tag:'Gaming & Arcades',desc:'Karachi\'s largest VR arena, laser tag, and over 120 arcade machines.',floor:'Level 4'},
      {id:3,icon:'🎡',name:'Blue Kids World',tag:'Children\'s Park',desc:'Indoor adventure park with themed rides, learning zones, and soft play areas.',floor:'Level 4'},
      {id:4,icon:'🎭',name:'Grand Atrium',tag:'Events & Performances',desc:'Stunning 4-floor atrium hosting live shows, fashion weeks, and cultural events.',floor:'Ground – Level 3'},
      {id:5,icon:'🎳',name:'Strike Lanes',tag:'Bowling',desc:'12-lane premium bowling alley with cosmic lighting and private party suites.',floor:'Level 4'},
      {id:6,icon:'🧘',name:'Serenity Spa',tag:'Luxury Spa & Wellness',desc:'Full-service luxury spa with international treatments, hammam, and wellness suites.',floor:'Level 6'},
    ],
    events: [
      {id:1,day:'22',month:'Mar',year:'2026',cat:'National Celebration',title:'Pakistan Day Grand Shopping Festival',time:'All Day · Entire Mall',images:[]},
      {id:2,day:'28',month:'Mar',year:'2026',cat:'Fashion',title:'Spring / Summer 2026 Designer Showcase',time:'3 PM – 9 PM · Grand Atrium',images:[]},
      {id:3,day:'05',month:'Apr',year:'2026',cat:'Food Festival',title:'International Cuisine Carnival — 30+ Cuisines',time:'12 PM – 11 PM · Level 5',images:[]},
      {id:4,day:'12',month:'Apr',year:'2026',cat:'Entertainment',title:'Family Fun Weekend — Live Shows & Kids\' Zone',time:'11 AM – 10 PM · Level 4',images:[]},
      {id:5,day:'20',month:'Apr',year:'2026',cat:'Luxury',title:'The Blue Jewellery & Watch Exhibition',time:'10 AM – 9 PM · Level 1',images:[]},
    ],
    offers: [
      {id:1,badge:'30% OFF',title:'End of Season Sale',store:'Khaadi',desc:'Massive discounts across the full Khaadi collection.',validity:'Valid until 31 March 2026',image:''},
      {id:2,badge:'BUY 2 GET 1',title:'Fragrance Festival',store:'MAC Cosmetics',desc:'Buy any 2 MAC fragrances and receive the third free.',validity:'Valid until 25 March 2026',image:''},
      {id:3,badge:'20% OFF',title:'Tech Week Deals',store:'Samsung Flagship',desc:'20% off all Galaxy smartphones and accessories.',validity:'Valid until 22 March 2026',image:''},
      {id:4,badge:'FLAT 25% OFF',title:'Casual Luxe Collection',store:'Sapphire',desc:'Sapphire\'s new casual luxe line — 25% off for members.',validity:'Valid until 30 March 2026',image:''},
      {id:5,badge:'FREE DELIVERY',title:'Home Makeover Month',store:'Home Centre',desc:'Free delivery on all purchases above Rs. 5,000.',validity:'Valid during April 2026',image:''},
      {id:6,badge:'2 FOR 1',title:'Cinema Tuesday Special',store:'Cineplex Premium',desc:'Two tickets for the price of one every Tuesday.',validity:'Every Tuesday',image:''},
    ],
    levels: [
      {id:1,name:'GROUND FLOOR',desc:'Jewellery, Luxury Brands, Bank...',image:''},
      {id:2,name:'FIRST FLOOR',desc:'Fashion Entry, Department Store...',image:''},
      {id:3,name:'SECOND FLOOR',desc:'Fashion (Pakistani), Books...',image:''}
    ],
    facilities: [
      {
        id: 1,
        name: 'FUN CITY',
        image: '',
        tag: 'Games & Attractions',
        desc: 'Fun City Pakistan stands as a trailblazer in the realm of indoor Amusement Parks in the nation. It is located at The Centaurus Mall 4th floor. Within this exciting venue, Fun City Pakistan showcases a diverse array of world-class indoor amusement rides, arcade games, virtual reality experiences, and soft play facilities.\n\nFun City play a vital role in society by providing a platform for social interaction and active play in a safe, secure, and easily accessible environment. Their vision extends beyond the current offerings, as they are committed to extraordinary business expansion initiatives nationwide. These ventures will feature exclusive facilities meticulously designed to captivate the hearts of the enthusiastic and fun-loving population.'
      },
      {
        id: 2,
        name: 'CINEPLEX',
        image: '',
        tag: 'Premium Cinema',
        desc: 'Experience the magic of cinema like never before. Our Cineplex offers the latest blockbusters in stunning 4K resolution with Dolby Atmos surround sound. Relax in our premium leather recliners and enjoy a curated selection of gourmet snacks.\n\nFrom international premieres to local hits, Cineplex is the heart of entertainment at The Blue Karachi. Our state-of-the-art screens and immersive technology ensure that every visit is an unforgettable journey into the world of film.'
      },
      {
        id: 3,
        name: 'EV SHOWROOM',
        image: '',
        tag: 'Modern Mobility',
        desc: 'Step into the future of transportation at our flagship Electric Vehicle Showroom. Discover the latest models from world-leading EV manufacturers, featuring cutting-edge battery technology, sustainable materials, and autonomous driving capabilities.\n\nOur expert consultants are here to guide you through the benefits of electric mobility, from environmental impact to long-term cost savings. Experience a test drive today and be part of the green revolution.'
      }
    ],
    latestBrands: [
      {id:1,name:'KHAAADI HOME',image:''},
      {id:2,name:'ZARA',image:''}
    ],
    reviews: [
      { id: 1, text: "An absolute joy! Exceptional variety, pleasant surroundings, and superb service. A one-stop destination for a fantastic day out. Thumbs up, The Blue!", name: "IRFAN AHMED" },
      { id: 2, text: "The Blue Karachi is family bliss! Diverse shops, kids' joy, and great dining options. Our family had a fantastic time. You're our go-to destination!", name: "FIZZA KAMRAN" },
      { id: 3, text: "The Blue caters to all ages with ease. Comfortable spaces, diverse shopping, and senior-friendly facilities. A perfect spot for us older folks. Appreciated!", name: "MR IKRAM" }
    ],
    settings: {
      siteLogo: '',
      splashEnabled: false,
      splashImage: '',
      splashText: 'Where Luxury Meets Culture.\nKarachi\'s Premier Shopping Destination.',
      splashPos: 'center',
      splashBtnEnabled: true
    }
  },
  async init() {
    const keys = Object.keys(this.defaults);
    for (const k of keys) {
      try {
        const response = await fetch(`https://raw.githubusercontent.com/syedwali110/theblue2/main/data/${k}.json`);
        if (response.ok) {
          this.cache[k] = await response.json();
        } else {
          this.cache[k] = this.defaults[k];
        }
      } catch (e) {
        console.warn(`Failed to load ${k} from GitHub, using defaults`);
        this.cache[k] = this.defaults[k];
      }
      // Also check localStorage as backup
      try {
        const local = localStorage.getItem('tb_'+k);
        if (local) {
          const localData = JSON.parse(local);
          // Merge or prefer GitHub, but for now use GitHub if loaded
          if (!this.cache[k] || this.cache[k] === this.defaults[k]) {
            this.cache[k] = localData;
          }
        }
      } catch {}
    }
  },
  get(k) {
    return this.cache[k] || this.defaults[k];
  },
  async set(k, v) {
    this.cache[k] = v;
    // Save to localStorage
    try {
      localStorage.setItem('tb_'+k, JSON.stringify(v));
    } catch(e) {
      console.error('CMS localStorage set failed', e);
    }
    // Save to GitHub
    try {
      const response = await fetch('/.netlify/functions/save-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: k, data: v })
      });
      if (!response.ok) {
        console.error('Failed to save to GitHub:', await response.text());
      }
    } catch(e) {
      console.error('GitHub save failed:', e);
    }
  }
};

// Initialize CMS on load
window.addEventListener('DOMContentLoaded', async () => {
  await CMS.init();
});

// ── SHARED UTILITIES ────────────────────────────────────────────────────────
function initCursor() {
  const dot = document.getElementById('cur-dot'), ring = document.getElementById('cur-ring');
  if (!dot || !ring) return;
  let rx=0,ry=0,mx=0,my=0;
  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
  (function loop(){ dot.style.left=mx+'px'; dot.style.top=my+'px'; rx+=(mx-rx)*.13; ry+=(my-ry)*.13; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(loop); })();
}

function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 70));
}

function initReveal() {
  const obs = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting) e.target.classList.add('vis'); }), { threshold:.1, rootMargin:'0px 0px -50px 0px' });
  document.querySelectorAll('[data-r]').forEach(el => obs.observe(el));
}

function initAll(page) {
  injectLoader();
  injectNav(page);
  injectTicker();
  injectFooter();
  initCursor();
  initNavScroll();
  initReveal();
}
