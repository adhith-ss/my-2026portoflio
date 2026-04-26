# Analytics Event Tracking Plan

## Overview
Custom event tracking via Vercel Web Analytics `va('event', ...)` added to `index.html` and `about.html`.
Vercel Insights script is already present on both pages (`/_vercel/insights/script.js`).

---

## Events

| Event Name | `data` properties | Triggers |
|---|---|---|
| `resume_clicked` | `source: 'nav' \| 'contact' \| 'story'` | Nav resume link, contact section resume btn, about page story resume btn |
| `email_clicked` | `source: 'hero' \| 'contact' \| 'footer'` | Hero "Email me →" btn, contact section email btn, footer email link |
| `linkedin_clicked` | `source: 'contact' \| 'footer'` | Contact section LinkedIn btn, footer LinkedIn link |
| `case_study_clicked` | `project: 'rxtogo' \| 'item_management' \| 'allocatr'` | Project cards on homepage |

---

## Implementation

### index.html (10 handlers)

| Line | Element | Event call |
|---|---|---|
| 626 | Nav → Resume | `va('event', { name: 'resume_clicked', data: { source: 'nav' } })` |
| 645 | Hero → Email me → | `va('event', { name: 'email_clicked', data: { source: 'hero' } })` |
| 657 | Project card → RxToGo | `va('event', { name: 'case_study_clicked', data: { project: 'rxtogo' } })` |
| 677 | Project card → Item Management | `va('event', { name: 'case_study_clicked', data: { project: 'item_management' } })` |
| 697 | Project card → Allocatr | `va('event', { name: 'case_study_clicked', data: { project: 'allocatr' } })` |
| 726 | Contact → Email btn | `va('event', { name: 'email_clicked', data: { source: 'contact' } })` |
| 730 | Contact → LinkedIn btn | `va('event', { name: 'linkedin_clicked', data: { source: 'contact' } })` |
| 734 | Contact → Resume btn | `va('event', { name: 'resume_clicked', data: { source: 'contact' } })` |
| 746 | Footer → Email link | `va('event', { name: 'email_clicked', data: { source: 'footer' } })` |
| 747 | Footer → LinkedIn link | `va('event', { name: 'linkedin_clicked', data: { source: 'footer' } })` |

### about.html (5 handlers)

| Line | Element | Event call |
|---|---|---|
| 623 | Nav → Resume | `va('event', { name: 'resume_clicked', data: { source: 'nav' } })` |
| 645 | Story → View My Resume btn | `va('event', { name: 'resume_clicked', data: { source: 'story' } })` |
| 742 | Contact → Get in Touch btn | `va('event', { name: 'email_clicked', data: { source: 'contact' } })` |
| 753 | Footer → Email link | `va('event', { name: 'email_clicked', data: { source: 'footer' } })` |
| 754 | Footer → LinkedIn link | `va('event', { name: 'linkedin_clicked', data: { source: 'footer' } })` |

---

## Notes
- `va()` is safe to call before the deferred script loads — the queue shim (`window.vaq`) buffers events until the script initialises.
- `data` values must be strings (Vercel requirement).
- No changes needed to case study pages themselves; clicks are tracked at the card level on the homepage.
