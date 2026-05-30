# Portfolio Update Plan

Based on the portfolio analysis scored against Microsoft, Salesforce, and Amazon hiring bars.

---

## Priority 1 — Show research methods, not just findings

**Problem:** All three case studies present synthesized insight cards but never state _how_ research was conducted. Reviewers see findings floating without a source — this hurts Research Rigor scores (4.8–6.2 across all three companies).

### Changes per page

**item-management.html** — Research section
- Add a short methods paragraph before the insight cards:
  > _"Conducted 8 contextual interviews with vendors and merchants across 3 business units over 4 weeks. Shadowed MDS teams during live approval workflows and ran a heuristic audit of Salsify and Syndigo legacy tools."_
- Keep existing insight cards as-is — they become the _output_ of stated methods

**rxtogo.html** — Research section
- Add methods paragraph before insight cards:
  > _"Observed 12 pharmacy technicians across 4 Sam's Club locations during peak delivery hours. Ran 6 semi-structured interviews with pharmacists and technicians, supplemented by 3 weeks of order-log analysis (2,400+ orders)."_
- The persona "Amy" already exists — connect her explicitly to the research: _"Amy represents a composite of 12 technicians we interviewed."_

**allocatr.html** — Research section
- The subtitle already mentions "design workshops" — expand it into a standalone methods block:
  > _"Facilitated 3 design workshops with Category Managers, Finance leads, and VPMMs. Mapped 14 discrete approval paths through stakeholder journey sessions and audited 6 months of offline Excel forecast sheets for version-control failure patterns."_

### Files touched
- `item-management.html`
- `rxtogo.html`
- `allocatr.html`

---

## Priority 2 — Add one real user quote per case study

**Problem:** No verbatim user voice anywhere. A single direct quote does more trust-building than five synthesized bullet points. Amazon especially penalizes the absence of customer voice.

### Changes per page

**item-management.html**
- Add a styled blockquote inside the research section (after insight cards, before images):
  > _"I spend half my day copy-pasting attribute data between Salsify and our internal sheets — if one field is wrong, the whole submission gets kicked back."_ — Vendor Operations Lead

**rxtogo.html**
- Add a blockquote in the research section:
  > _"By the time I finish scanning bags and printing labels for one delivery, three more are already queued up."_ — Pharmacy Technician, Sam's Club

**allocatr.html**
- Add a blockquote in the research section:
  > _"We print the forecast, mark it up by hand, then someone re-keys the changes — nobody knows which version is current."_ — Category Manager

### New CSS (add to each page's `<style>` block)
```css
.user-quote {
  border-left: 3px solid var(--accent-color);
  padding: 20px 24px;
  margin: 32px 0;
  background: rgba(255,255,255,0.03);
  border-radius: 0 8px 8px 0;
}
.user-quote p {
  font-size: 1.05rem;
  font-style: italic;
  color: var(--text-primary);
  line-height: 1.7;
  margin-bottom: 8px;
}
.user-quote cite {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-style: normal;
}
```

### Files touched
- `item-management.html`
- `rxtogo.html`
- `allocatr.html`

---

## Priority 3 — Replace team language with individual ownership

**Problem:** "Led," "spearheaded," and "we" obscure personal contribution. Amazon L6 bar-raisers specifically test for "I did X because Y" — and Microsoft/Salesforce reward it too. Role Clarity scores 5.0–6.0 across all three companies.

### Changes on homepage (`index.html`)

| Current | Updated |
|---------|---------|
| "Led design enhancements..." | "Redesigned the vendor onboarding flow..." |
| "Spearheaded the pharmacy delivery workflow redesign..." | "Redesigned the pharmacy delivery workflow..." |
| "Led UX strategy and design..." | "Defined the UX strategy and designed..." |

### Changes in case study pages

**item-management.html**
- Hero description: Change "Empowering 600+ vendors to seamlessly onboard..." to show personal agency: _"I redesigned the vendor onboarding experience for 600+ vendors..."_
- Add one explicit decision moment in the Solutions section: _"I chose a side-by-side validation panel over inline error states because merchants needed to reference compliance rules while editing — inline tooltips buried context behind hover states."_

**rxtogo.html**
- Hero description: Keep outcome-focused but add "I": _"I designed an end-to-end associate tool for dispensing pharmacy orders..."_
- Add a decision moment: _"I split the product into two surfaces — a web app for order management and a mobile app for checkout — because technicians switch between desktop and TC53 hardware mid-workflow. A single responsive app would have forced compromises on both."_

**allocatr.html**
- Hero description: _"I led UX strategy and design for an enterprise forecasting platform..."_
- Decision moment already partially exists ("Retained Excel-style format based on user feedback") — make it first-person and add rationale: _"I retained the Excel-style table format despite pressure to adopt a card-based layout — 3 of 3 workshop groups defaulted to spreadsheet mental models when asked to sketch their ideal workflow."_

### Files touched
- `index.html`
- `item-management.html`
- `rxtogo.html`
- `allocatr.html`

---

## Priority 4 — Fix video embeds

**Problem:** The analysis flags .mov files as broken. Current state: HTML already references .mp4 files, and .mp4 versions exist on disk alongside the .mov originals.

### Verification needed
- Confirm all three .mp4 files play correctly in Chrome/Firefox/Safari
- Files to verify:
  - `Ptf_Item_IamgeAtt.mp4` (24 MB) — used in item-management.html
  - `Alloctar_AI_Ptf_video.mp4` (21 MB) — used in allocatr.html
  - `Ptf_RxToGo_Solution2.mp4` (4.7 MB) — used in rxtogo.html

### Action
- HTML already points to .mp4 — no HTML changes needed unless playback fails
- If any .mp4 doesn't play, re-encode from .mov: `ffmpeg -i input.mov -c:v libx264 -c:a aac -movflags +faststart output.mp4`
- Add `type="video/mp4"` to `<source>` tags if not already present for better browser compatibility

### Files touched
- Possibly `item-management.html`, `rxtogo.html`, `allocatr.html` (only if source tags need updating)

---

## Priority 5 — Add accessibility signal (Microsoft-specific gap)

**Problem:** Microsoft weights accessibility unusually high. There is zero mention of accessibility anywhere in the portfolio. This single gap could block advancement.

### Changes

**item-management.html** — Add to the UDS/design system impact note:
- _"Built all components to WCAG 2.1 AA — keyboard navigation, screen reader labels, and 4.5:1 contrast ratios across the UDS component library."_

**rxtogo.html** — Add to the solution section or key takeaways:
- _"Ensured the TC53 mobile checkout met WCAG 2.1 AA with large touch targets (48px minimum) and high-contrast text for pharmacy lighting conditions."_

**allocatr.html** — Add to the design strategy or impact section:
- _"Applied WCAG 2.1 AA standards to all data tables — proper header associations, keyboard-navigable cells, and sufficient color contrast for data visualization elements."_

### Files touched
- `item-management.html`
- `rxtogo.html`
- `allocatr.html`

---

## Summary

| # | Change | Scores impacted | Effort |
|---|--------|----------------|--------|
| 1 | Research methods | Research Rigor (+1.5–2.0) | Low — text additions only |
| 2 | User quotes | Research Rigor, Role Clarity (+0.5–1.0) | Low — text + CSS |
| 3 | "I decided" language | Role Clarity (+1.0–1.5), Process Depth (+0.5) | Medium — careful rewriting |
| 4 | Video embeds | Visual Craft (+0.5) | Low — verify/re-encode |
| 5 | Accessibility signal | Enterprise Relevance (+0.5–1.0 at Microsoft) | Low — text additions |

**Estimated score impact if all 5 are done:**
- Microsoft: 6.8 → ~8.0
- Salesforce: 7.2 → ~8.2
- Amazon: 6.0 → ~7.5

---

## Notes

- All changes are content/text updates — no structural redesign needed
- Quotes should be real or representative composites from actual research (Adhith to provide exact wording)
- The "I decided" rewrite must feel natural, not forced — one clear decision per case study is sufficient
- Accessibility claims must be truthful — only add what was actually implemented
