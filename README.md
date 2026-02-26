# Adhith Shanmuga Sundaram — Portfolio

A dark-themed UX design portfolio built with vanilla HTML, CSS, and JavaScript. Features the Geist typeface and pastel accent colors.

## Pages

| File | Page | Description |
|---|---|---|
| `index.html` | Homepage | Project showcase with animated cards |
| `item-management.html` | Item Management | Enterprise B2B platform case study |
| `rxtogo.html` | RxToGo | Pharmacy delivery product suite case study |
| `allocatr.html` | Allocatr Insights | Enterprise finance platform case study |
| `about.html` | About Me | Personal story, interests, and philosophy |

## How to Run

This is a static site with no build step or dependencies required.

### Option 1 — Open directly

Double-click `index.html` to open it in your default browser.

> **Note:** Videos (`.mov` files) may not play when opened directly via `file://`. Use one of the server options below for full functionality.

### Option 2 — Python (built into macOS/Linux)

```bash
cd "My portfolio"
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

### Option 3 — Node.js

```bash
cd "My portfolio"
npx serve .
```

Then open the URL shown in the terminal (usually [http://localhost:3000](http://localhost:3000)).

### Option 4 — VS Code Live Server

1. Install the **Live Server** extension in VS Code
2. Open the project folder in VS Code
3. Right-click `index.html` and select **Open with Live Server**

## Project Structure

```
My portfolio/
  index.html              # Homepage
  item-management.html    # Item Management case study
  rxtogo.html             # RxToGo case study
  allocatr.html           # Allocatr Insights case study
  about.html              # About Me page
  AS_Logo_PtfTab_b.png    # Navigation logo (shared across all pages)
  *.png / *.jpg            # Project and about page images
  *.mov                    # Solution walkthrough videos
  README.md               # This file
```

## Tech Stack

- **HTML/CSS/JS** — No frameworks or build tools
- **Google Fonts** — Geist typeface
- **IntersectionObserver** — Scroll-triggered animations
