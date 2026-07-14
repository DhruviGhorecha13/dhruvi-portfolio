# Dhruvi Ghorecha — Portfolio

A clean, light-themed React portfolio built with Vite, featuring a cybersecurity-inspired
design (scan-ring monogram, terminal-style accents), soft-teal palette, small
scroll/hover animations, and lucide-react icons throughout.

## 1. Before you start

Check `src/data.js` — all resume content (name, education, skills, experience,
projects, certifications, achievements) lives there, so you can update it without
touching any component.

**Double-check these two fields** — they weren't fully spelled out on the resume, so
placeholders were used:
- `profile.linkedin` in `src/data.js` — set this to your real LinkedIn URL.
- Project links for the Phishing Link Detector — add a `live` / `github` URL in
  `src/data.js` if you want buttons on that card (currently only the Portfolio
  project has links, since that's what was on the resume).

## 2. Run it locally

You'll need [Node.js](https://nodejs.org) (v18+) installed.

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`) to preview the site.

## 3. Project structure

```
dhruvi-portfolio/
├─ src/
│  ├─ components/       one file per section (Hero, About, Skills, ...)
│  ├─ hooks/useReveal.js  scroll-in-view animation hook
│  ├─ data.js            all resume content — edit this to update the site
│  ├─ App.jsx
│  └─ index.css          all styling / design tokens (colors, fonts, spacing)
├─ index.html
├─ vite.config.js
└─ package.json
```

## 4. Deploy to GitHub Pages (the `.io` link)

You mentioned you already deploy via GitHub Pages, so here's the full flow for
*this* project, assuming your repo is `dhruvi-portfolio` under your GitHub account
`DhruviGhorecha13` (matching the link already on your resume).

### One-time setup

```bash
# from inside this project folder
npm install
npm install --save-dev gh-pages   # already in package.json, this just confirms it's installed
```

Confirm `vite.config.js` has:
```js
base: '/dhruvi-portfolio/'
```
This **must match your repo name exactly** — if your repo is named something else,
change this value (and the `homepage` field in `package.json`) to match.

### If this is a brand-new repo

```bash
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/DhruviGhorecha13/dhruvi-portfolio.git
git push -u origin main
```

### If you're replacing your existing portfolio repo

```bash
git add .
git commit -m "Redesign portfolio: new layout, theme and animations"
git push
```

### Publish to GitHub Pages

```bash
npm run deploy
```

This builds the site and pushes the `dist` folder to a `gh-pages` branch
automatically (via the `gh-pages` package). After it finishes:

1. Go to your repo on GitHub → **Settings → Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   branch `gh-pages`, folder `/ (root)`.
3. Save. Your site will be live at:
   `https://DhruviGhorecha13.github.io/dhruvi-portfolio` within a minute or two.

Whenever you update content later, just repeat:
```bash
git add .
git commit -m "Update content"
git push
npm run deploy
```

## 5. Customizing the look

All design tokens (colors, fonts, spacing, radius) are defined at the top of
`src/index.css` under `:root`. Change a value there and it updates everywhere —
for example, swap `--teal` for another accent color, or adjust `--radius-lg` for
sharper/rounder cards.
