# Project Context — Adhith Shanmuga Sundaram Portfolio

## Overview
A light-themed UX design portfolio for a Senior Product Designer. Built with vanilla HTML, CSS,
and JavaScript — no frameworks, no build tools, no dependencies.

## Tech Stack
- **HTML/CSS/JS** — Shared external stylesheet (`styles.css`); no inline `<style>` blocks
- **Adobe Fonts (Typekit)** — loaded via `<link rel="stylesheet" href="https://use.typekit.net/cgy1qed.css">` on every page. The CSP in `vercel.json` allows `use.typekit.net` (styles) and `p.typekit.net` (font files) — if fonts stop rendering in production, check both the CSP and that `www.adhith-s.com` is allow-listed in the Adobe Fonts kit settings.
- **Vercel Web Analytics** — `/_vercel/insights/script.js` + a `window.va` queue shim on every page; custom `va('event', ...)` click tracking on `index.html` and `about.html` (see inline `onclick` handlers — nav resume, hero email, project cards, contact links)
- **IntersectionObserver** — used for a scroll-spy table-of-contents (`.cs-toc`) on case study pages (`allocatr.html`, `item-management.html`, `rxtogo.html`), not for fade-in animations. `index.html` and `about.html` have no scroll-triggered JS.

## File Structure
```
index.html, about.html, allocatr.html, item-management.html, rxtogo.html
styles.css                # single shared stylesheet for all pages
assets/
  shared/                 # nav logo, Walmart/Albertsons logos (used across pages)
  home/                   # homepage project-card thumbnails
  About/                  # about page gallery images
  allocatr/               # Allocatr case study images/video
  item-management/        # Item Management case study images
  rxtogo/                 # RxToGo case study images/video
```

### Pages
| File | Page |
|---|---|
| `index.html` | Homepage — project showcase |
| `item-management.html` | Item Management case study (Enterprise B2B) |
| `rxtogo.html` | RxToGo case study (Pharmacy delivery) |
| `allocatr.html` | Allocatr Insights case study (Finance platform) |
| `about.html` | About Me |

### Project Order (as shown on homepage)
1. RxToGo → 2. Item Management → 3. Allocatr

## Design System (see `styles.css` for full source of truth)
- Color tokens: `--color-bg` (white), `--color-nav` (near-black), `--color-footer`, `--color-text`,
  `--color-text-soft`, `--color-text-faint`, `--color-line`
- Spacing scale (8pt grid): `--sp-1` through `--sp-24`
- Case study pages share a `cs-*` prefixed class system: `.cs-hero`, `.cs-section`,
  `.cs-section-label`, `.cs-meta` / `.cs-meta-item`, `.cs-image` / `.cs-image-caption`,
  `.cs-solution-frame`, `.cs-stat` / `.cs-stat-number`, `.cs-toc` (scroll-spy nav), `.cs-closing`.
- Homepage/about use their own classes: `.hero`, `.project`, `.project-card`/`.project-media`/
  `.project-cta`, `.t-card` (testimonials), `.contact-*`, `.about-*`.

## Important Patterns

### Analytics handlers
`index.html` and `about.html` have `onclick="va('event', {...})"` on nav resume, hero email,
project cards, and contact links. When editing these pages, preserve or update these handlers
rather than dropping them — see the historical mapping in `ANALYTICS_TRACKING.md`.

### Scroll-spy TOC (case study pages)
`allocatr.html`, `item-management.html`, and `rxtogo.html` end with an IntersectionObserver script
that highlights the active `.cs-toc` link based on which `.cs-section[id]` is in view. Keep the
script block intact and keep section `id`s in sync with the TOC `href`s.

### HEIC Images
Browsers don't support HEIC. Convert to JPEG using: `sips -s format jpeg input.HEIC --out output.jpg`

## Navigation
- All pages link to `index.html` (Home), `about.html` (About), a Google Drive resume link, and email
- There is no "View Complete Case Study" gated/password-protected section in this version
