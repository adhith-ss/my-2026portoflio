# Analytics Event Tracking Plan

## Overview
Custom event tracking via Vercel Web Analytics `va('event', ...)` on `index.html` and `about.html`.
Vercel Insights script (`/_vercel/insights/script.js`) is present on all 5 pages.

> **Updated 2026-07-07** after the V5 UI migration. The homepage no longer has footer email/LinkedIn
> links, and the about page no longer has a story resume button or contact section — so the
> `footer`/`story`/`contact` variants tied to those removed elements no longer apply. Line numbers
> are intentionally omitted below since they drift with edits; search each file for `va('event'` to
> find current locations.

---

## Events

| Event Name | `data` properties | Triggers |
|---|---|---|
| `resume_clicked` | `source: 'nav'` | Nav resume link (index.html, about.html) |
| `email_clicked` | `source: 'hero' \| 'contact'` | Hero "Email me" btn, contact section email link (index.html only) |
| `linkedin_clicked` | `source: 'contact'` | Contact section LinkedIn link (index.html only) |
| `case_study_clicked` | `project: 'rxtogo' \| 'item_management' \| 'allocatr'` | Project card image + "Preview project" link, homepage |

---

## Notes
- `va()` is safe to call before the deferred script loads — the queue shim (`window.vaq`) buffers events until the script initialises.
- `data` values must be strings (Vercel requirement).
- No changes needed to case study pages themselves; clicks are tracked at the card level on the homepage.
