# 🚀 Deploy Your Portfolio to GitHub Pages

## Step 1 — Create a GitHub repo
1. Go to https://github.com/new
2. Name it exactly: `dhruvi-portfolio`
3. Keep it **Public**
4. Click **Create repository** (don't add README)

## Step 2 — Update your GitHub username in the code
Open `package.json` and replace `YOUR-USERNAME` in the homepage field:
```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/dhruvi-portfolio"
```

Also update these files with your real links:
- `src/components/Nav.js` → LinkedIn & GitHub URLs  
- `src/sections/Projects.js` → your real GitHub repo links  
- `src/sections/Contact.js` → your real email & LinkedIn  

## Step 3 — Push code to GitHub
Open terminal in the `dhruvi-portfolio` folder and run:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/dhruvi-portfolio.git
git push -u origin main
```

## Step 4 — Deploy to GitHub Pages
```bash
npm run deploy
```
This runs the build and pushes to `gh-pages` branch automatically.

## Step 5 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select branch: `gh-pages`, folder: `/ (root)`
3. Click **Save**

## ✅ Done!
Your site will be live at:
`https://YOUR-USERNAME.github.io/dhruvi-portfolio`

(Takes 1–2 minutes to go live after deploy)

---

## 🔄 Update your portfolio later
Just edit the files, then run:
```bash
npm run deploy
```
That's it!
