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
    tagline: 'Map the full capability landscape before writing a line.',
    description: 'The Webflow ecosystem is now 13 deep domains — App Gen, Webflow Cloud, Data API v2, MCP + Claude Skills, Code Components, GSAP, CLI, Finsweet, Wized, Designer Extensions, Optimize, Ecommerce/Stripe, Headless CMS. Before picking an approach, study the decision framework: App Gen for prompt-built apps, Code Components for complex React UI, Finsweet Attributes for no-code filtering, Wized for REST API connections. Knowing which domain to use is the research stage.',
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
    tagline: 'From a prompt to a production app — grounded in your brand.',
    description: 'App Gen (public beta, free on all plans) is Webflow\'s biggest leap: describe an app in natural language and get production-grade code grounded in your existing design system. Unlike Bolt or Lovable, App Gen starts from your brand\'s operating system — your design variables, CMS schema, and component library. Supports location finders, job boards, pricing calculators, event calendars, multi-step forms, games, and business tools. The AI Site Builder handles site scaffolding (up to 5 pages). Both work alongside Claude\'s MCP connector and its 9 Claude Skills for ongoing management.',
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
    description: 'Webflow acquired GSAP in 2024. As of April 30, 2025, every GSAP plugin is 100% free — including previously paid Club GreenSock plugins (SplitText, ScrollSmoother, ScrambleText, DrawSVG, MorphSVG). The new Interactions are replatformed on GSAP with a horizontal timeline UI. Real-time collaboration is live on all plans (up to 25 concurrent users). Flexible components with conditional visibility (show/hide by props, CMS fields, or locale) dramatically cut variant sprawl. Build Designer Extensions for custom tooling inside the Webflow Designer panel itself.',
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
    tagline: 'The right tool for each layer: no-code, low-code, or full code.',
    description: 'The build stage spans four tool tiers. Finsweet Attributes (200M+ monthly loads, 30+ solutions, zero JS writing — just data attributes) handles CMS filtering, pagination, search, and more. Wized adds a full REST API app layer on top of Webflow without a backend rewrite. Code Components (React, SSR, CMS-bindable) handle complex UI — but note the Shadow DOM limitation: site CSS classes don\'t apply inside components, use 50MB bundle cap, and React Context doesn\'t cross component boundaries (use custom events or localStorage instead). DevLink syncs Webflow designs to a React codebase. Data API v2 provides full CRUD + webhooks for automation.',
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
    description: 'Webflow Optimize is a native A/B testing and personalization platform. The browser API (auto-enabled, no install) lets you call wf.ready() to track variations and wf.setAttributes() to define visitor segments for personalization. Custom Code Embeds have firm limits: 10,000 chars site-wide in header/footer, 8,192 chars per embed element — host large scripts on a CDN instead. Two important deprecations: Webflow Logic was disabled June 27, 2025 (replace with Webhooks + Zapier/Make, or Webflow Cloud serverless). Webflow User Accounts/Memberships is being sunset — use Memberstack for membership + content gating.',
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
    description: 'Webflow Cloud hosts full-stack Next.js and Astro applications on Cloudflare\'s edge network — sub-50ms global response times. Storage options: SQLite, Key-Value Store, Object Storage. Native GitHub CI/CD: commit → auto-deploy. CDN performance trick: use api-cdn.webflow.com instead of api.webflow.com for live CMS reads — responses are cached 5 minutes and cached calls don\'t count against rate limits. Run Claude MCP audits before any publish (Site Audit, Asset Audit, Link Checker skills auto-activate). Stripe Checkout Sessions require a Webflow Cloud server-side handler — the webhook on checkout.session.completed is the only reliable fulfillment signal.',
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
  { goal: 'Build a whole app from a prompt',              approach: 'App Gen',                           priority: 'high' },
  { goal: 'Deploy a Next.js or Astro app',                approach: 'Webflow Cloud',                     priority: 'high' },
  { goal: 'AI-manage your site from Claude or Cursor',    approach: 'Webflow MCP + Claude Skills',        priority: 'high' },
  { goal: 'Add filtering, search, or load more to CMS',   approach: 'Finsweet Attributes (no code)',      priority: 'high' },
  { goal: 'Add a complex custom UI component',            approach: 'Code Components (React + SSR)',      priority: 'medium' },
  { goal: 'Sync design into a React codebase',            approach: 'DevLink',                           priority: 'medium' },
  { goal: 'Animate without writing code',                 approach: 'Interactions with GSAP (visual)',    priority: 'medium' },
  { goal: 'Advanced scroll, physics, or SVG morphing',    approach: 'Custom GSAP code embed',            priority: 'medium' },
  { goal: 'Automate CMS content in bulk',                 approach: 'Data API v2 or MCP Bulk CMS Skill', priority: 'medium' },
  { goal: 'Connect Webflow to any REST API',              approach: 'Wized (low-code app layer)',         priority: 'medium' },
  { goal: 'Custom Stripe checkout flow',                  approach: 'Webflow Cloud + Stripe Sessions',   priority: 'medium' },
  { goal: 'A/B test or personalize with code',            approach: 'Webflow Optimize (wf.ready() API)', priority: 'low' },
  { goal: 'Build a custom tool inside Webflow Designer',  approach: 'Designer Extension (iframe panel)', priority: 'low' },
  { goal: 'Quick script — analytics, chat, tracking',     approach: 'Custom Code Embed + CDN for large', priority: 'low' },
  { goal: 'Use Webflow CMS in a separate React app',      approach: 'Headless CMS API + Webflow Cloud',  priority: 'low' },
];

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

  grid.innerHTML = DECISIONS.map(d => `
    <div class="decision-item decision-item--${d.priority}">
      <span class="decision-item__goal">${esc(d.goal)}</span>
      <span class="decision-item__approach">${esc(d.approach)}</span>
    </div>`).join('');
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
