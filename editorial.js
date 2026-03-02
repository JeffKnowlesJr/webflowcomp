/* ═══════════════════════════════════════════════════════════════════════
   WEBFLOW + AI PIPELINE — editorial.js
   Sticky progress bar + scroll tracking for the editorial article version
   ═══════════════════════════════════════════════════════════════════════ */

'use strict';

// Stage metadata — matches section IDs in editorial.html
const STAGES = [
  { id: 'stage-research',    label: 'Research',    num: '01', color: '#0ea5e9' },
  { id: 'stage-ai-generate', label: 'AI Generate', num: '02', color: '#8b5cf6' },
  { id: 'stage-design',      label: 'Design',      num: '03', color: '#ec4899' },
  { id: 'stage-build',       label: 'Build',       num: '04', color: '#f59e0b' },
  { id: 'stage-enhance',     label: 'Enhance',     num: '05', color: '#10b981' },
  { id: 'stage-deploy',      label: 'Deploy',      num: '06', color: '#146ef5' },
];

// ─── Build Progress Bar ──────────────────────────────────────────────────────

function buildProgressBar() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;

  const tabsHtml = STAGES.map((stage, i) => `
    <a href="#${stage.id}"
       class="progress-bar__tab${i === 0 ? ' is-active' : ''}"
       data-stage="${i}"
       style="--tab-color: ${stage.color}"
       aria-label="Go to ${stage.label} section">
      <span class="progress-bar__tab-num">${stage.num}</span>
      <span class="progress-bar__tab-label">${stage.label}</span>
    </a>`).join('');

  bar.innerHTML = `<div class="progress-bar__tabs" role="list">${tabsHtml}</div>`;
}

// ─── Set Active Tab ──────────────────────────────────────────────────────────

function setActiveStage(index) {
  document.querySelectorAll('.progress-bar__tab').forEach((tab, i) => {
    tab.classList.toggle('is-active', i === index);
    tab.setAttribute('aria-current', i === index ? 'true' : 'false');
  });
}

// ─── Scroll Tracking ─────────────────────────────────────────────────────────

function initScrollTracking() {
  const bar = document.getElementById('progress-bar');
  const header = document.getElementById('article-header');

  // Reveal the progress bar once the article header scrolls out of view
  if (header && bar) {
    const headerObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          bar.classList.toggle('is-visible', !entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );
    headerObserver.observe(header);
  }

  // Track which stage is currently in the reading zone (top 10%–40% of viewport)
  // When a stage section enters this band, it becomes the active dot
  const stageSections = STAGES.map(s => document.getElementById(s.id)).filter(Boolean);

  if (!stageSections.length) return;

  // Keep a map of which sections are currently intersecting
  const intersecting = new Set();

  const stageObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const idx = parseInt(entry.target.dataset.stage, 10);
        if (isNaN(idx)) return;

        if (entry.isIntersecting) {
          intersecting.add(idx);
        } else {
          intersecting.delete(idx);
        }
      });

      // Activate the lowest-indexed section currently in the reading zone
      // (the one highest up on the page that the reader is currently at)
      if (intersecting.size > 0) {
        setActiveStage(Math.min(...intersecting));
      }
    },
    {
      // A band from 10% to 60% down the viewport — the primary reading zone
      rootMargin: '-10% 0px -40% 0px',
      threshold: 0,
    }
  );

  stageSections.forEach(section => stageObserver.observe(section));
}

// ─── Smooth Scroll on Tab Click ──────────────────────────────────────────────

function initSmoothScroll() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;

  bar.addEventListener('click', e => {
    const tab = e.target.closest('.progress-bar__tab');
    if (!tab) return;

    e.preventDefault();

    const href = tab.getAttribute('href');
    const targetId = href ? href.slice(1) : null;
    const target = targetId ? document.getElementById(targetId) : null;

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Optimistically set the active tab immediately on click — the
      // IntersectionObserver will confirm or correct it once scrolling settles
      const index = parseInt(tab.dataset.stage, 10);
      if (!isNaN(index)) setActiveStage(index);
    }
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────

function init() {
  buildProgressBar();
  initScrollTracking();
  initSmoothScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
