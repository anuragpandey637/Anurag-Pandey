# 🌌 Anurag Pandey — Full-Stack AI & ML Engineer Portfolio

A state-of-the-art, high-performance developer portfolio and comprehensive showcase of **33+ open-source GitHub repositories**, live deployed applications, autonomous AI agents, computer vision models, and enterprise microservices.

Designed with an edge-to-edge full-screen fluid architecture, modern cyberpunk glassmorphism, interactive developer CLI emulator, spotlight command palette, Web Audio sound synthesizer, and dynamic theme switching.

---

## ⚡ Live Features

- **🌐 Fluid Edge-to-Edge Responsive Grid**: Full viewport dynamic scaling (`clamp` fluid typography and auto-filling CSS grid columns) designed to look stunning on ultra-wide monitors, 1080p/1440p displays, tablets, and phones.
- **✨ Interactive Particle Constellation**: Zero-dependency 60fps HTML5 Canvas background with dynamic particle physics and cursor interactivity.
- **💻 Interactive Developer CLI Terminal**: Built-in bash-like terminal emulator (`whoami`, `skills`, `projects`, `live`, `cat resume`, `theme matrix`, `clear`, etc.).
- **🔍 Spotlight Command Palette (`Ctrl + K`)**: Instant keyboard-driven global search and action launcher across all 33 repositories, navigation anchors, themes, and modals.
- **🎨 4 Cyber Themes**: Dynamic theme engine with persistent `localStorage` memory:
  - `Nebula` (Deep Cyan / Royal Violet / Dark Glass)
  - `Matrix` (Cyberpunk Green Terminal)
  - `Tokyo` (Vaporwave Neon Magenta & Electric Cyan)
  - `OLED` (Pure Black High Contrast)
- **🔊 Web Audio API Synthesizer**: Native synthesizers generating zero-latency subtle micro-interaction chimes with a mute toggle.
- **🔎 Real-Time Search & `<mark>` Highlighting**: Instant keystroke filtering with query highlights and category pill selectors.
- **⚡ Skill Matrix Click-to-Filter**: Click any skill badge (e.g. *FastAPI*, *PyTorch*, *LangChain*, *Docker*) to filter matching projects.
- **📱 PWA & SEO Optimization**: Standalone `manifest.json`, `favicon.svg`, `robots.txt`, `sitemap.xml`, and JSON-LD schema markup.

---

## 🚀 How to Deploy

This website is built with vanilla HTML5, CSS3, and JavaScript — requiring **no build step, no npm install, and zero complex bundler setups**. You can deploy it to any static hosting service in under 60 seconds.

### Option 1: Vercel (Recommended)
Deploy instantly with zero cold starts, global Edge CDN caching, and automated HTTPS:

**Via Vercel Dashboard (Easiest):**
1. Push this repository to your GitHub account (`git push origin main`).
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New"** → **"Project"**.
4. Import this repository and click **Deploy**.
5. The included `vercel.json` automatically configures clean URLs (`cleanUrls: true`), modern security headers, and edge asset caching.

**Via Vercel CLI:**
```bash
npx vercel
```

---

### Option 2: GitHub Pages
1. Push to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: portfolio ready for deployment"
   git push -u origin main
   ```
2. In your GitHub repository:
   - Navigate to **Settings** → **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions** (the included `.github/workflows/deploy.yml` will automatically build and publish).

---

### Option 3: Netlify
1. Log in to [netlify.com](https://netlify.com).
2. Drag and drop this folder directly into the Netlify "Sites" drop zone for instant live deployment.
3. Or link your GitHub repository with publish directory set to `.`.

---

## 💻 Local Testing & Development

Run any lightweight local server:

**Using Python:**
```bash
python -m http.server 8080
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

**Using Node.js:**
```bash
npx serve .
```

---

## 📁 Repository Structure

```
.
├── index.html              # Main semantic HTML structure & modals
├── style.css               # Fluid CSS3 design system, themes & animations
├── script.js               # 33 Projects catalog & interactive controllers
├── 404.html                # Cyberpunk 404 error page
├── favicon.svg             # Neon AP monogram vector badge
├── manifest.json           # Web App Manifest for PWA installation
├── robots.txt              # Search engine crawler directives
├── sitemap.xml             # XML sitemap for SEO discovery
├── vercel.json             # Vercel deployment routing & headers
├── .gitignore              # Git ignore rules
└── README.md               # Documentation & deployment guide
```

---

## 📬 Contact & Coordinates

- **Author**: Anurag Pandey
- **Email**: [anuragpandey.connect@gmail.com](mailto:anuragpandey.connect@gmail.com)
- **GitHub**: [github.com/Anurag637](https://github.com/Anurag637)
- **LinkedIn**: [linkedin.com/in/anurag-pandey-connect](https://www.linkedin.com/in/anurag-pandey-connect/)
