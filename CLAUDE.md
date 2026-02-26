# Project Context — Adhith Shanmuga Sundaram Portfolio

## Overview
A dark-themed UX design portfolio for a Senior Product Designer. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies.

## Tech Stack
- **HTML/CSS/JS** — All styles are inline `<style>` blocks within each HTML file (no external CSS files)
- **Google Fonts** — Geist typeface (`100..900` weight range)
- **IntersectionObserver** — Scroll-triggered `.animate-on-scroll` → `.visible` animations via `<script>` at bottom of each page

## File Structure
All files live in the root directory (no subdirectories).

### Pages
| File | Page | Accent Color |
|---|---|---|
| `index.html` | Homepage — project showcase | Lavender |
| `item-management.html` | Item Management case study (Enterprise B2B) | Lavender |
| `rxtogo.html` | RxToGo case study (Pharmacy delivery) | Mint |
| `allocatr.html` | Allocatr Insights case study (Finance platform) | Sky |
| `about.html` | About Me — story, interests, gallery, philosophy | Rose/Sky |

### Project Order (as shown on homepage)
1. Item Management → 2. RxToGo → 3. Allocatr

### Shared Assets
- `AS_Logo_PtfTab_b.png` — Nav logo (used on all pages, height: 48px)

### Image Naming Conventions
- `Allocatr_Ptf_*.png` — Allocatr project images
- `Item_Ptf_*.png` — Item Management project images
- `RxToGo_*.png` — RxToGo project images
- `About_Ptf_*.jpg` — About page gallery images
- `PTF_AboutMe_IMG1.png` — About page profile photo
- `*_Index_ptf.png` — Homepage project card thumbnails
- `*.mov` — Solution walkthrough videos

## Design System

### CSS Variables (consistent across all pages)
```css
--bg-primary: #0A0A0A        /* Page background */
--bg-secondary: #111111      /* Secondary background */
--bg-card: #161616           /* Card background */
--border-subtle: #222222     /* Light borders */
--border-medium: #2A2A2A     /* Medium borders */
--text-primary: #E8E8E8      /* Headings */
--text-secondary: #B0B0B0    /* Body text */
--text-muted: #888888        /* Captions, labels */
--pastel-peach: #F4A89A
--pastel-mint: #8ED8B0
--pastel-lavender: #B8A9E8
--pastel-sky: #8AC4E8
--pastel-lemon: #E8D88A
--pastel-rose: #E89AB8
```

### Common CSS Classes
- `.container` — Max-width 960px centered wrapper
- `.hero` — Top section with tag, h1, description, hero image
- `.hero-image` — Cover image container (aspect-ratio: 16/8)
- `.section` — Content section with label, title, subtitle
- `.section-label` — Colored uppercase tag (e.g., "Business Challenge")
- `.image-placeholders` — Grid container for images (default: 2-column)
- `.image-placeholder` — Individual image container (aspect-ratio: 16/10)
- `.image-caption` — Centered muted text below images
- `.section-img` — Image inside placeholder (object-fit: cover by default)
- `.section-video` — Video inside placeholder (object-fit: contain)
- `.animate-on-scroll` — Hidden by default (opacity: 0), revealed with `.visible` class
- `.challenge-statement` — "The Core Question" block
- `.pain-points` / `.pain-point` — Numbered challenge items
- `.insight-card` — Research finding cards
- `.solution-card` — Solution overview cards
- `.impact-card` — Impact metric cards

### Page Structure Pattern (Project Pages)
```
NAV → HERO (tag + h1 + description + cover image)
  → META (Timeline, Role, Impact)
  → CHALLENGE (label + title + core question + pain points)
  → RESEARCH (label + title + insight cards + research images)
  → STRATEGY (label + title + strategy pillars)
  → SOLUTIONS (label + title + solution cards + solution images with captions)
  → IMPACT (label + title + impact cards + notes)
  → FOOTER
```

## Important Patterns

### Script Block at End of Each Page
Every page ends with an IntersectionObserver script. It **must** be complete or sections won't render:
```html
<script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
</script>
</body>
</html>
```
**Known issue:** These scripts have been truncated in the past, causing sections below the hero to not render. Always verify the script is complete.

### Image Fit
- `object-fit: cover` — Default, crops to fill container. Good for photos.
- `object-fit: contain` — Fits entire image inside container. Use for UI screenshots, workflow diagrams, and videos that shouldn't be cropped.
- When using `contain`, add a matching `background` color to avoid empty space.

### Solution Image Layout
- Allocatr and RxToGo use `grid-template-columns: 1fr` (vertical stacking)
- Item Management uses `.image-placeholders--stacked` class (vertical stacking)
- Each solution image/video has an `.image-caption` paragraph below it

### HEIC Images
Browsers don't support HEIC. Convert to JPEG using: `sips -s format jpeg input.HEIC --out output.jpg`

## Navigation
- All pages link to `index.html` (Home), `about.html` (About), and a Google Drive resume link
- Item Management and RxToGo have a "View Complete Case Study" CTA section (password-protected)
- Allocatr does not have this CTA (removed)
