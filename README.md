# Webflow + AI Pipeline Visualization

An interactive, single-page article that visualizes a 6-stage website-building pipeline using Webflow and AI tools. Built with vanilla HTML, CSS, and JavaScript — zero dependencies, no build step.

**Live demo:** Open `index.html` in any modern browser.

---

## Project structure

```
webflowcomp/
  index.html    # Page structure and semantic markup
  styles.css    # Full styling system (~830 lines)
  script.js     # All interactivity and content data (~430 lines)
  seed.md       # Research notes and capability map (reference material)
  README.md     # This file
```

## What it does

The page presents a 6-stage development pipeline — Research, AI Generate, Design, Build, Enhance, Deploy — as an interactive horizontal track. Each stage is clickable and expands into a detail card with descriptions, tools, tips, and resource links, all sourced from the `seed.md` research.

### Page sections

| Section | Description |
|---------|-------------|
| **Hero** | Title, tagline, and quick-facts bar (6 stages, 0 dependencies). Dark background with CSS grid pattern overlay. |
| **Pipeline** | Horizontal row of 6 clickable stage nodes connected by animated pulse-dot connectors. Stagger-reveals on scroll. |
| **Detail panel** | Expands below the pipeline when a stage is selected. 2-column layout: overview + tools (left/right), tips + links (left/right). |
| **Why HTML/CSS/JS?** | Short editorial section explaining why this demo uses vanilla web tech instead of a framework. |
| **Resources** | Grid of cards with curated links organized by pipeline stage. |
| **Footer** | Attribution and link to jkjrdev.com. |

---

## Technical details

### HTML (`index.html`)

- Semantic structure: `<header>`, `<main>`, `<footer>`, `<section>` elements
- ARIA roles: pipeline uses `role="tablist"` / `role="tab"` with `aria-selected`, `aria-controls`, and `aria-live="polite"` on the detail panel
- `<noscript>` fallback for the pipeline section
- No inline scripts or styles — everything loads from external files

### CSS (`styles.css`)

**Design system via custom properties:**

| Token group | Examples |
|-------------|---------|
| Surface/borders | `--c-bg`, `--c-bg-subtle`, `--c-bg-surface`, `--c-border` |
| Text | `--c-text`, `--c-text-muted`, `--c-text-subtle` |
| Brand | `--c-primary`, `--c-primary-bg` |
| Layout | `--max-w` (1100px), `--pad` (fluid), `--section` (fluid) |
| Radii | `--r-sm` (6px) through `--r-full` (pill) |
| Shadows | `--shadow-sm`, `--shadow-md`, `--shadow-lg` |
| Transitions | `--t-fast` (150ms), `--t-base` (250ms), `--t-slow` (500ms) |

**Dark mode:** Automatic via `@media (prefers-color-scheme: dark)`. Overrides surface, text, border, and brand tokens. The hero section is always dark regardless of system preference.

**Responsive:** Single breakpoint at 768px. The pipeline track scrolls horizontally on narrow viewports. Detail card columns stack to a single column. The "Why" section switches from 2-column to single-column. A secondary breakpoint at 480px tightens hero stat spacing.

**Key animations:**
- `pulseDot` keyframe: animated dot that travels along each connector line with staggered `--pulse-delay` per connector
- `.reveal` class: `opacity: 0` + `translateY(28px)` → revealed by IntersectionObserver adding `.is-visible`
- Pipeline nodes: start invisible, stagger-reveal via JS-added `.is-revealed` class with 90ms delay per node
- Detail card: enters with `opacity: 0` + `translateY(10px)`, animated in via double-`requestAnimationFrame` trick

**Per-stage theming:** Each pipeline node and detail card receives a `--stage-color` custom property (e.g., `#0ea5e9` for Research, `#8b5cf6` for AI Generate). This single variable drives the ring highlight, active state, pulse dot color, tool item border, and link hover color.

### JavaScript (`script.js`)

**No dependencies.** Uses `'use strict'` mode.

**Data layer:** The `STAGES` array (lines 10–167) contains all 6 stages with:
- `id`, `number`, `label`, `color`
- `iconSVG` — inline SVG path data (Feather icon set)
- `tagline`, `description` — display text
- `tools[]` — array of `{name, desc}` objects
- `tips[]` — array of strings
- `links[]` — array of `{label, url}` objects

**Core functions:**

| Function | Purpose |
|----------|---------|
| `buildPipeline()` | Generates the 6 tab nodes + 5 connectors into `#pipeline`. Sets ARIA attributes and per-stage colors. |
| `buildResources()` | Generates the resource card grid into `#resources-grid`. |
| `renderDetailPanel(index)` | Replaces `#detail-panel` innerHTML with the expanded detail card for stage `index`. Uses double-`requestAnimationFrame` to ensure the browser paints the invisible state before triggering the CSS transition. Auto-scrolls into view on mobile if off-screen. |
| `activateStage(index)` | Toggles `.is-active` on the correct pipeline node, updates `aria-selected` and `tabindex`, then calls `renderDetailPanel`. |
| `revealPipelineNodes()` | Stagger-adds `.is-revealed` to each node with 90ms intervals. |
| `initScrollReveals()` | Creates one `IntersectionObserver` (threshold 0.08, -40px bottom margin). Observes all `.reveal` elements. When the pipeline section enters view, also triggers `revealPipelineNodes()`. Each element is unobserved after reveal. |
| `initEventListeners()` | Binds click handler (delegates from `#pipeline`) and keyboard handler (roving tabindex pattern). |
| `init()` | Orchestrates startup. Called on `DOMContentLoaded` or immediately if DOM is already ready. |

**Keyboard navigation (ARIA tablist pattern):**

| Key | Action |
|-----|--------|
| Arrow Right / Arrow Down | Move focus to next stage |
| Arrow Left / Arrow Up | Move focus to previous stage |
| Home | Jump to first stage |
| End | Jump to last stage |
| Enter / Space | Activate (expand) the focused stage |

**XSS protection:** The `esc()` function HTML-encodes `&`, `<`, `>` in all user-facing text before innerHTML insertion.

---

## Embedding in Webflow

This project is designed to be embeddable in a Webflow site via Custom Code:

1. **Site-wide:** Paste the CSS into Site Settings > Custom Code > Head. Paste the JS into Footer.
2. **Per-page embed:** Use a Code Embed element and paste the full HTML body content. Reference the CSS/JS from a CDN (jsDelivr, Cloudflare Pages, or your own Webflow Cloud endpoint).
3. **As a Webflow Cloud app:** Deploy the three files as a static site on Webflow Cloud at a mount path like `/pipeline`.

Character limits apply to custom code areas (10K site-wide, 5K per-page, 8,192 per embed element). If the JS exceeds the limit, host it externally and load via `<script src="...">`.

---

## Customization

**Add or modify stages:** Edit the `STAGES` array in `script.js`. Each stage object is self-contained — add new entries or change content without touching HTML or CSS.

**Change colors:** Update the `color` property in each stage object and/or the custom properties in `:root` in `styles.css`.

**Change typography:** Replace the `--font` custom property value. The entire page uses a system font stack by default for zero-latency loading.

**Disable dark mode:** Remove the `@media (prefers-color-scheme: dark)` block in `styles.css`.

---

## Browser support

Requires a browser with support for:
- CSS custom properties (`var()`)
- CSS `color-mix()` (Chrome 111+, Firefox 113+, Safari 16.2+)
- `IntersectionObserver` (all modern browsers)
- CSS `clamp()` (all modern browsers)
- `requestAnimationFrame` (all modern browsers)

IE11 is not supported.

---

## Research reference

The `seed.md` file contains the full Webflow + Code capability map covering 13 domains: App Gen, Webflow Cloud, Data API v2, MCP + Claude Skills, Code Components, GSAP, CLI, Finsweet/Wized ecosystem, Designer Extensions, Webflow Optimize, Ecommerce + Stripe, Headless CMS, and Custom Code Embeds. It also includes a decision framework for choosing the right approach for any given goal.
