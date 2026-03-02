/* ═══════════════════════════════════════════════════════════════════
   WEBFLOW + AI PIPELINE — script.js
   ═══════════════════════════════════════════════════════════════════ */

'use strict';

// ─── Stage Data ─────────────────────────────────────────────────────────────
// Updated from seed.md deep research (Mar 2026) — 13 domains covered.

const STAGES = [
  {
    id: 'research',
    number: '01',
    label: 'Research',
    color: '#0ea5e9',
    iconSVG: `<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>`,
    tagline: 'Map the landscape against what you already own.',
    description: 'Identify which of the 13 Webflow domains reduce your manual template work and which overlap with infrastructure you already own (AWS, Cloudflare, Firebase).',
    tools: [
      { name: 'KDNuggets', desc: 'Data storytelling formats & modern web presentation techniques' },
      { name: 'Made in Webflow', desc: 'Design inspiration from real production Webflow sites' },
      { name: 'Webflow Changelog', desc: 'Check new features before planning — they change what\'s possible' },
      { name: 'GitHub — Webflow Examples', desc: '61+ repos of real patterns: Store Locator, CMS Slider, Filters' },
      { name: 'Finsweet Attributes Docs', desc: '30+ no-code solutions — understand what\'s free before coding' },
    ],
    tips: [
      'Study the decision framework first — the right tool makes everything easier downstream',
      'Note deprecated features: Webflow Logic (disabled June 2025) and Memberships (sunsetting)',
      'App Gen is free in public beta right now — experiment with it early in any project',
    ],
    links: [
      { label: 'Data Storytelling Formats — KDNuggets', url: 'https://www.kdnuggets.com/the-future-of-data-storytelling-formats-beyond-dashboards' },
      { label: 'GitHub — Webflow Examples Org (61 repos)', url: 'https://github.com/Webflow-Examples/code-components-examples' },
      { label: 'Finsweet Attributes — 30+ No-Code Solutions', url: 'https://finsweet.com/attributes/' },
    ],
  },
  {
    id: 'ai-generate',
    number: '02',
    label: 'AI Generate',
    color: '#8b5cf6',
    iconSVG: `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,
    tagline: 'Generate features you\'d normally build from scratch.',
    description: 'App Gen generates features from a prompt; MCP + Claude Skills run from Cursor for bulk CMS, audits, and safe publish. See sample prompt and output below.',
    tools: [
      { name: 'App Gen (beta, free)', desc: 'Full-stack apps from a prompt, grounded in your design system + CMS' },
      { name: 'Webflow AI Site Builder', desc: 'Multi-page site scaffold from a prompt, no code needed' },
      { name: 'Claude MCP — 19 tools', desc: 'Data + Designer API tools via OAuth; runs in Claude or Cursor' },
      { name: 'Claude Skills — 9 workflows', desc: 'Bulk CMS, Site Audit, Link Checker, Safe Publish, Asset Audit, Custom Code, CMS Setup' },
    ],
    tips: [
      'Enable App Gen: Workspace Settings → Webflow AI toggle (Enterprise: also per-site in Site Settings)',
      'Use the Goal → Success Criteria → Context → Constraints prompt structure for MCP tasks',
      'Claude Skills auto-activate — you don\'t call them explicitly; they detect the right moment',
    ],
    links: [
      { label: 'App Gen — Blog Post & Feature Page', url: 'https://webflow.com/blog/app-gen' },
      { label: 'Claude Skills Docs — 9 Production Workflows', url: 'https://developers.webflow.com/mcp/reference/claude-skills' },
      { label: 'Webflow AI Site Builder', url: 'https://webflow.com/ai-site-builder' },
    ],
  },
  {
    id: 'design',
    number: '03',
    label: 'Design',
    color: '#ec4899',
    iconSVG: `<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>`,
    tagline: 'Design systems, animations, and real-time collaboration — all free.',
    description: 'GSAP is free; Interactions use it under the hood. Set design token variables once — they propagate everywhere. Try the token demo below.',
    tools: [
      { name: 'GSAP — All Plugins Free', desc: 'ScrollTrigger, SplitText, ScrollSmoother, MorphSVG — no subscription needed' },
      { name: 'Webflow Interactions (GSAP-powered)', desc: 'Horizontal timeline UI, staggers, scroll-driven animations, no code' },
      { name: 'Webflow Variables', desc: 'Design tokens — color, font, spacing — propagate everywhere' },
      { name: 'SVG Path Editor — Yqnn', desc: 'Create custom icons and shapes visually, then paste into Webflow' },
      { name: 'Designer Extensions', desc: 'Custom iFrame tools inside the Webflow Designer panel (HTML/JS/React)' },
    ],
    tips: [
      'Interactions covers 80% of animation needs with no code — use custom GSAP only for physics/morphing/scrubbing',
      'Set design token variables before designing any pages — they propagate everywhere in the system',
      'Designer Extensions let you build custom auditors, content populators, and brand enforcers inside Webflow itself',
    ],
    links: [
      { label: 'Getting Started with GSAP in Webflow', url: 'https://help.webflow.com/hc/en-us/articles/40538857574419-Getting-started-with-GSAP-in-Webflow' },
      { label: 'GSAP + Webflow Resource Hub', url: 'https://gsap.com/resources/Webflow/' },
      { label: 'SVG Path Editor — Yqnn', url: 'https://yqnn.github.io/svg-path-editor/' },
    ],
  },
  {
    id: 'build',
    number: '04',
    label: 'Build',
    color: '#f59e0b',
    iconSVG: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
    tagline: 'Know the constraints before picking your tool.',
    description: 'Finsweet does filtering with data-attributes and zero custom JS. Code Components run in Shadow DOM — site CSS doesn\'t apply inside. Try both demos below.',
    tools: [
      { name: 'Finsweet Attributes v2', desc: '200M+ loads/month; 30+ solutions via HTML data attributes — zero JS' },
      { name: 'Wized', desc: 'App layer for Webflow — connect to any REST API (Xano, Supabase, Airtable, etc.)' },
      { name: 'Code Components (React)', desc: 'SSR, CMS-bindable, Shadow DOM — 50MB bundle cap, React only' },
      { name: 'DevLink', desc: 'Export Webflow components as production React — design → code sync' },
      { name: 'Data API v2 + Webhooks', desc: 'Full CRUD for CMS, pages, ecommerce, users — plus 7 webhook event types' },
    ],
    tips: [
      'Start with Finsweet Attributes before writing custom JS — it handles filtering, load more, and sort with zero code',
      'Code Components: site CSS classes don\'t apply inside the Shadow DOM — style components internally',
      'Use custom browser events or localStorage to share state between Code Component instances',
    ],
    links: [
      { label: 'Code Components Quick Start', url: 'https://developers.webflow.com/code-components/introduction/quick-start' },
      { label: 'Finsweet Attributes — 30+ Solutions', url: 'https://finsweet.com/attributes/' },
      { label: 'Wized — App Layer for Webflow', url: 'https://www.wized.com/' },
    ],
  },
  {
    id: 'enhance',
    number: '05',
    label: 'Enhance',
    color: '#10b981',
    iconSVG: `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`,
    tagline: 'Optimize, personalize, and prune the deprecated.',
    description: 'Optimize API: wf.ready() in head; wf.setAttributes() for segments. Embed limit 8K per element — host large scripts on a CDN. Logic is deprecated; use Webhooks + Make or Cloud.',
    tools: [
      { name: 'Webflow Optimize', desc: 'A/B testing + personalization; wf.ready(), wf.setAttributes() API' },
      { name: 'Chrome On-Device AI', desc: 'Progressively enhance CMS content with no API calls or latency' },
      { name: 'Conditional Visibility', desc: 'Show/hide by props, CMS fields, or locale — zero custom code' },
      { name: 'Webflow Localization', desc: 'Multi-language built into the platform, locale-aware API support' },
      { name: 'Memberstack', desc: 'Replacement for deprecated Webflow Memberships — tiered content gating' },
    ],
    tips: [
      'Place wf.ready() in the <head> custom code field — it fires before DOM renders and is never missed',
      'Custom code embed limit is 8KB per element — host large scripts on jsDelivr or Cloudflare Pages instead',
      'Webflow Logic is gone as of June 2025 — replace automations with Webhooks + Make/Zapier or Webflow Cloud',
    ],
    links: [
      { label: 'Webflow Optimize Browser API', url: 'https://developers.webflow.com/browser/optimize/quickstart' },
      { label: 'Chrome AI + Webflow CMS', url: 'https://webflow.com/blog/chrome-ai-cms-content' },
      { label: 'Flexible Components & Conditional Visibility', url: 'https://webflow.com/updates/create-more-flexible-components-and-cms-pages' },
    ],
  },
  {
    id: 'deploy',
    number: '06',
    label: 'Deploy',
    color: '#146ef5',
    iconSVG: `<polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>`,
    tagline: 'Edge hosting, full-stack apps, and AI-powered pre-publish audits.',
    description: 'Webflow Cloud for Next.js/Astro; CLI for deploy. Use api-cdn.webflow.com for CMS reads — cached, no rate limit. See snippet below.',
    tools: [
      { name: 'Webflow Cloud', desc: 'Edge hosting for Next.js/Astro — SQLite, KV, Object Storage, GitHub CI/CD' },
      { name: 'Webflow CLI', desc: 'webflow cloud deploy, webflow library share — CI/CD ready with --no-input flag' },
      { name: 'Claude MCP Skills — Audit Suite', desc: 'Site Audit, Asset Audit, Link Checker, Safe Publish before every deploy' },
      { name: 'Stripe Checkout Sessions', desc: 'Custom checkout via Webflow Cloud — server-side webhook handler required' },
    ],
    tips: [
      'CDN trick: swap api.webflow.com → api-cdn.webflow.com for cached CMS reads that don\'t hit rate limits',
      'CI/CD pattern: webflow library share --no-input && webflow cloud deploy -e production --auto-publish',
      'Always run MCP Site Audit + Asset Audit before publish — catches alt text, broken links, and meta gaps in bulk',
    ],
    links: [
      { label: 'Webflow Cloud Developer Docs', url: 'https://developers.webflow.com/webflow-cloud/intro' },
      { label: 'Webflow CLI — Command Reference', url: 'https://developers.webflow.com/cli/reference/webflow-cli' },
      { label: 'Webflow MCP — Getting Started', url: 'https://developers.webflow.com/mcp/reference/getting-started' },
    ],
  },
];

// ─── Decision Framework Data ─────────────────────────────────────────────────
// Sourced from the "Decision Framework" table in seed.md (Mar 2026).

const DECISIONS = [
  { goal: 'Build a whole app from a prompt',              approach: 'App Gen (beta, free)',               priority: 'high' },
  { goal: 'Bulk update CMS items from Cursor',            approach: 'MCP + Claude Skills (Bulk CMS)',    priority: 'high', demoStage: 1 },
  { goal: 'Add filtering, search, or load more to CMS',   approach: 'Finsweet Attributes (no code)',      priority: 'high', demoStage: 3, snippet: 'Add script + data attributes; no custom JS.' },
  { goal: 'You already have edge hosting elsewhere',      approach: 'Go headless with Data API v2',       priority: 'high', snippet: 'Fetch from api-cdn.webflow.com for cached reads.' },
  { goal: 'Animate without writing code',                 approach: 'Interactions with GSAP (visual)',    priority: 'medium', demoStage: 2 },
  { goal: 'Add a complex custom UI component',            approach: 'Code Components (React + SSR)',      priority: 'medium', demoStage: 3, snippet: 'Runs in Shadow DOM — see Build demo.' },
  { goal: 'Advanced scroll, physics, or SVG morphing',    approach: 'Custom GSAP code embed',            priority: 'medium' },
  { goal: 'Connect Webflow to your existing API',         approach: 'Custom embed or headless',           priority: 'medium' },
  { goal: 'Deploy a Next.js or Astro app',                approach: 'Cloudflare Pages or AWS Lambda',    priority: 'medium' },
  { goal: 'Your backend is already Firebase/Supabase',    approach: 'Data API only for Webflow CMS',     priority: 'medium' },
  { goal: 'Audit the entire site for issues',             approach: 'MCP Site Audit + Asset Audit',      priority: 'medium', demoStage: 1 },
  { goal: 'Sync design into a React codebase',            approach: 'DevLink (design-to-code sync)',     priority: 'low' },
  { goal: 'A/B test or personalize with code',            approach: 'Webflow Optimize or your tool',    priority: 'low', demoStage: 4 },
  { goal: 'Build a custom tool inside Webflow Designer',  approach: 'Designer Extension (niche)',         priority: 'low' },
  { goal: 'Use Webflow CMS in a separate React app',      approach: 'Headless API (Data API v2)',        priority: 'low', demoStage: 5, snippet: 'Use api-cdn.webflow.com for cached reads.' },
];

// ─── Demo config: which stage gets which demo (show, don't tell) ────────────
const STAGE_DEMOS = {
  0: null,
  1: 'mcp-snippets',
  2: 'tokens',
  3: 'filter',
  4: 'wf-snippet',
  5: 'api-cdn',
};

// ─── Demo HTML generators ───────────────────────────────────────────────────
function getDemoHTML(demoType, stageColor) {
  const borderStyle = stageColor ? `border-left-color: ${stageColor}` : '';
  switch (demoType) {
    case 'mcp-snippets':
      return `
        <div class="detail-card__demo" style="${borderStyle}">
          <p class="detail-card__demo-title">Sample MCP prompt (what you type in Cursor)</p>
          <div class="demo-snippets">
            <span class="demo-snippets__label">Prompt</span>
            <pre>Add 2 blog posts to the News collection with titles and excerpts.</pre>
            <span class="demo-snippets__label">What the Bulk CMS Skill does</span>
            <pre>Created 2 items in News. IDs: 65f1a..., 65f1b...</pre>
          </div>
        </div>`;
    case 'tokens':
      return `
        <div class="detail-card__demo demo-tokens" style="${borderStyle}" data-demo="tokens">
          <p class="detail-card__demo-title">Design tokens: change one variable, everything updates</p>
          <div class="demo-tokens__strip" id="demo-tokens-strip">
            <div class="demo-tokens__swatch" style="background: var(--demo-token, #0ea5e9);"></div>
            <div class="demo-tokens__swatch" style="background: var(--demo-token, #0ea5e9);"></div>
            <div class="demo-tokens__swatch" style="background: var(--demo-token, #0ea5e9);"></div>
          </div>
          <div class="demo-tokens__control">
            <label for="demo-token-select">Token value:</label>
            <select id="demo-token-select" aria-label="Change design token color">
              <option value="#0ea5e9">Sky</option>
              <option value="#8b5cf6">Violet</option>
              <option value="#ec4899">Pink</option>
              <option value="#f59e0b">Amber</option>
              <option value="#10b981">Emerald</option>
              <option value="#146ef5">Blue</option>
            </select>
          </div>
        </div>
        <div class="detail-card__demo" style="${borderStyle}">
          <p class="detail-card__demo-title">Scroll-triggered reveal (same idea as GSAP ScrollTrigger)</p>
          <div class="demo-scroll-reveal" id="demo-scroll-reveal-box">Scroll me into view</div>
        </div>`;
    case 'filter':
      return `
        <div class="detail-card__demo demo-filter" style="${borderStyle}" data-demo="filter">
          <p class="detail-card__demo-title">Filter a list — Finsweet does this with data-attributes and zero custom JS</p>
          <input type="text" class="demo-filter__input" id="demo-filter-input" placeholder="Type to filter..." aria-label="Filter list">
          <ul class="demo-filter__list" id="demo-filter-list">
            <li class="demo-filter__item" data-name="Research">Research</li>
            <li class="demo-filter__item" data-name="AI Generate">AI Generate</li>
            <li class="demo-filter__item" data-name="Design">Design</li>
            <li class="demo-filter__item" data-name="Build">Build</li>
            <li class="demo-filter__item" data-name="Enhance">Enhance</li>
            <li class="demo-filter__item" data-name="Deploy">Deploy</li>
          </ul>
        </div>
        <div class="detail-card__demo" style="${borderStyle}" data-demo="shadow">
          <p class="detail-card__demo-title">Code Components run in Shadow DOM — site CSS doesn't apply inside</p>
          <div class="demo-shadow-host" id="demo-shadow-host">
            <span class="demo-shadow-label">Inner content styled inside shadow root only.</span>
          </div>
        </div>`;
    case 'wf-snippet':
      return `
        <div class="detail-card__demo" style="${borderStyle}">
          <p class="detail-card__demo-title">Webflow Optimize: run in head so it fires before DOM</p>
          <div class="demo-snippets">
            <pre>wf.ready(function() {\n  wf.setAttributes("user", { plan: "pro" });\n});</pre>
          </div>
        </div>`;
    case 'api-cdn':
      return `
        <div class="detail-card__demo" style="${borderStyle}">
          <p class="detail-card__demo-title">Use CDN URL for CMS reads — cached, no rate limit on cache hits</p>
          <div class="demo-snippets">
            <span class="demo-snippets__label">Avoid</span>
            <pre>api.webflow.com/v2/collections/.../items</pre>
            <span class="demo-snippets__label">Use</span>
            <pre>api-cdn.webflow.com/v2/collections/.../items</pre>
          </div>
        </div>`;
    default:
      return '';
  }
}

function initDemo(demoType, panel) {
  if (!panel) return;
  switch (demoType) {
    case 'tokens': {
      const strip = panel.querySelector('#demo-tokens-strip');
      const select = panel.querySelector('#demo-token-select');
      if (strip && select) {
        strip.style.setProperty('--demo-token', select.value);
        select.addEventListener('change', () => {
          strip.style.setProperty('--demo-token', select.value);
        });
      }
      const scrollBox = panel.querySelector('#demo-scroll-reveal-box');
      if (scrollBox) {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
          },
          { threshold: 0.2 }
        );
        obs.observe(scrollBox);
      }
      break;
    }
    case 'filter': {
      const input = panel.querySelector('#demo-filter-input');
      const list = panel.querySelector('#demo-filter-list');
      if (!input || !list) return;
      const items = list.querySelectorAll('.demo-filter__item');
      input.addEventListener('input', () => {
        const q = (input.value || '').trim().toLowerCase();
        items.forEach(el => {
          const name = (el.dataset.name || '').toLowerCase();
          el.classList.toggle('is-hidden', q && name.indexOf(q) === -1);
        });
      });
      break;
    }
    case 'shadow': {
      const host = panel.querySelector('#demo-shadow-host');
      if (!host || host.shadowRoot) return;
      const root = host.attachShadow({ mode: 'open' });
      root.innerHTML = '<style>p { color: var(--c-primary, #146ef5); font-weight: 600; font-size: 0.875rem; margin: 0; }</style><p>This paragraph is inside Shadow DOM. Global CSS does not style it.</p>';
      break;
    }
    default:
      break;
  }
}

// ─── Shared SVG: external link icon ─────────────────────────────────────────
const EXTERNAL_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  <polyline points="15 3 21 3 21 9"/>
  <line x1="10" y1="14" x2="21" y2="3"/>
</svg>`;

// ─── Escape text before inserting into HTML ──────────────────────────────────
function esc(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ─── Build Pipeline ──────────────────────────────────────────────────────────
function buildPipeline() {
  const pipeline = document.getElementById('pipeline');
  if (!pipeline) return;

  pipeline.innerHTML = STAGES.map((stage, i) => {
    const isFirst = i === 0;

    const node = `
      <div class="pipeline__node${isFirst ? ' is-active' : ''}"
           role="tab"
           tabindex="${isFirst ? '0' : '-1'}"
           aria-selected="${isFirst}"
           aria-controls="detail-panel"
           data-stage="${i}"
           style="--stage-color: ${stage.color}">
        <span class="pipeline__node-num">${stage.number}</span>
        <div class="pipeline__node-ring">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round"
               width="22" height="22" aria-hidden="true">
            ${stage.iconSVG}
          </svg>
        </div>
        <span class="pipeline__node-label">${stage.label}</span>
      </div>`;

    const connector = i < STAGES.length - 1 ? `
      <div class="pipeline__connector" aria-hidden="true"
           style="--pulse-delay: ${(i * 0.5).toFixed(1)}s; --pulse-color: ${stage.color}">
      </div>` : '';

    return node + connector;
  }).join('');
}

// ─── Build Resources Grid ────────────────────────────────────────────────────
function buildResources() {
  const grid = document.getElementById('resources-grid');
  if (!grid) return;

  grid.innerHTML = STAGES.map(stage => {
    const links = stage.links.map(l => `
      <a href="${l.url}" class="resource-link" target="_blank" rel="noopener noreferrer">
        <span>${esc(l.label)}</span>
        ${EXTERNAL_ICON}
      </a>`).join('');

    return `
      <div class="resource-card" style="--stage-color: ${stage.color}">
        <div class="resource-card__header">
          <span class="resource-card__num">${stage.number}</span>
          <span class="resource-card__label">${stage.label}</span>
        </div>
        <div class="resource-card__links">${links}</div>
      </div>`;
  }).join('');
}

// ─── Render Detail Panel ─────────────────────────────────────────────────────
function renderDetailPanel(index) {
  const panel = document.getElementById('detail-panel');
  if (!panel) return;

  const stage = STAGES[index];

  const toolsHTML = stage.tools.map(t => `
    <div class="tool-item">
      <span class="tool-item__name">${esc(t.name)}</span>
      <span class="tool-item__desc">${esc(t.desc)}</span>
    </div>`).join('');

  const tipsHTML = stage.tips.map(t => `<li>${esc(t)}</li>`).join('');

  const linksHTML = stage.links.map(l => `
    <a href="${l.url}" class="detail-link" target="_blank" rel="noopener noreferrer">
      <span>${esc(l.label)}</span>
      ${EXTERNAL_ICON}
    </a>`).join('');

  const demoType = STAGE_DEMOS[index];
  const demoHTML = demoType ? getDemoHTML(demoType, stage.color) : '';

  panel.innerHTML = `
    <div class="detail-card" style="--stage-color: ${stage.color}" data-stage="${index}">
      <div class="detail-card__bar"></div>
      <div class="detail-card__header">
        <div class="detail-card__eyebrow">
          <span class="detail-card__num">Stage ${stage.number}</span>
        </div>
        <h3 class="detail-card__title">${esc(stage.label)}</h3>
        <p class="detail-card__tagline">${esc(stage.tagline)}</p>
      </div>
      <div class="detail-card__body">
        <div class="detail-card__desc">
          <h4>Overview</h4>
          <p>${esc(stage.description)}</p>
        </div>
        ${demoHTML ? `<div class="detail-card__demo-wrap">${demoHTML}</div>` : ''}
        <div class="detail-card__tools-col">
          <h4>Tools &amp; Technologies</h4>
          <div class="tools-grid">${toolsHTML}</div>
        </div>
      </div>
      <div class="detail-card__footer">
        <div class="detail-card__tips">
          <h4>Tips</h4>
          <ul>${tipsHTML}</ul>
        </div>
        <div class="detail-card__links-col">
          <h4>Resources</h4>
          <div class="detail-links">${linksHTML}</div>
        </div>
      </div>
    </div>`;

  if (demoType) {
    initDemo(demoType, panel);
    if (demoType === 'filter') initDemo('shadow', panel);
  }

  // Trigger slide-in animation after browser renders initial (invisible) state
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const card = panel.querySelector('.detail-card');
      if (card) card.classList.add('is-visible');
    });
  });

  // Scroll detail panel into view if it's off-screen on mobile
  requestAnimationFrame(() => {
    const rect = panel.getBoundingClientRect();
    if (rect.top > window.innerHeight || rect.bottom < 0) {
      panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

// ─── Activate Stage ──────────────────────────────────────────────────────────
function activateStage(index) {
  const nodes = document.querySelectorAll('.pipeline__node');

  nodes.forEach((node, i) => {
    const active = i === index;
    node.classList.toggle('is-active', active);
    node.setAttribute('aria-selected', active ? 'true' : 'false');
    node.setAttribute('tabindex', active ? '0' : '-1');
  });

  renderDetailPanel(index);
}

// ─── Stagger Pipeline Node Reveal ────────────────────────────────────────────
function revealPipelineNodes() {
  document.querySelectorAll('.pipeline__node').forEach((node, i) => {
    setTimeout(() => node.classList.add('is-revealed'), i * 90);
  });
}

// ─── Scroll Reveals via IntersectionObserver ─────────────────────────────────
function initScrollReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');

        // When the pipeline section enters view, stagger-reveal the nodes
        if (entry.target.id === 'pipeline-section') {
          revealPipelineNodes();
        }

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ─── Event Listeners ─────────────────────────────────────────────────────────
function initEventListeners() {
  const pipeline = document.getElementById('pipeline');
  if (!pipeline) return;

  // Click: select stage
  pipeline.addEventListener('click', e => {
    const node = e.target.closest('.pipeline__node');
    if (!node) return;
    const index = parseInt(node.dataset.stage, 10);
    activateStage(index);
    node.focus();
  });

  // Keyboard: roving tabindex navigation (ARIA tablist pattern)
  pipeline.addEventListener('keydown', e => {
    const nodes = [...pipeline.querySelectorAll('.pipeline__node')];
    const focused = document.activeElement.closest('.pipeline__node');
    if (!focused) return;

    const current = nodes.indexOf(focused);
    let next = current;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        next = Math.min(current + 1, nodes.length - 1);
        e.preventDefault();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        next = Math.max(current - 1, 0);
        e.preventDefault();
        break;
      case 'Home':
        next = 0;
        e.preventDefault();
        break;
      case 'End':
        next = nodes.length - 1;
        e.preventDefault();
        break;
      case 'Enter':
      case ' ':
        activateStage(current);
        e.preventDefault();
        return;
      default:
        return;
    }

    if (next !== current) {
      nodes.forEach((n, i) => n.setAttribute('tabindex', i === next ? '0' : '-1'));
      nodes[next].focus();
    }
  });
}

// ─── Build Decision Framework ────────────────────────────────────────────────
function buildDecisionFramework() {
  const grid = document.getElementById('decision-grid');
  if (!grid) return;

  grid.innerHTML = DECISIONS.map((d, i) => {
    const hasExpand = d.snippet || d.demoStage !== undefined;
    const expandContent = hasExpand
      ? `<div class="decision-item__expand" role="region" aria-label="Details">
          ${d.snippet ? `<p>${esc(d.snippet)}</p>` : ''}
          ${d.demoStage !== undefined ? `<p><button type="button" class="decision-item__demo-btn" data-stage="${d.demoStage}">See demo</button> — opens stage ${d.demoStage + 1} above.</p>` : ''}
         </div>`
      : '';
    return `
    <div class="decision-item decision-item--${d.priority}" data-index="${i}" ${hasExpand ? 'tabindex="0" role="button" aria-expanded="false"' : ''}>
      <span class="decision-item__goal">${esc(d.goal)}</span>
      <span class="decision-item__approach">${esc(d.approach)}</span>
      ${expandContent}
    </div>`;
  }).join('');

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.decision-item__demo-btn');
    if (btn) {
      e.preventDefault();
      const stage = parseInt(btn.dataset.stage, 10);
      if (!isNaN(stage)) {
        activateStage(stage);
        document.getElementById('pipeline-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
    const item = e.target.closest('.decision-item');
    if (!item || !item.querySelector('.decision-item__expand')) return;
    item.classList.toggle('is-expanded');
    item.setAttribute('aria-expanded', item.classList.contains('is-expanded') ? 'true' : 'false');
  });

  grid.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const item = e.target.closest('.decision-item');
    if (!item || e.target.closest('.decision-item__demo-btn')) return;
    e.preventDefault();
    if (item.querySelector('.decision-item__expand')) {
      item.classList.toggle('is-expanded');
      item.setAttribute('aria-expanded', item.classList.contains('is-expanded') ? 'true' : 'false');
    }
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────
function init() {
  buildPipeline();
  buildResources();
  buildDecisionFramework();
  initScrollReveals();
  initEventListeners();
  // Show first stage detail on load
  renderDetailPanel(0);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
