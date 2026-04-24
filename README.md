# Bjorn Lab — bjornlab.github.io

The official studio site for Bjorn Lab.  
A solo software development & data analysis studio for a sustainable future.

🌐 **https://bjornlab.github.io**

---

## Tech Stack

- **Gatsby** (React-based static site generation)
- **GitHub Pages** (deployment)
- **GitHub Actions** (CI/CD)
- Single page, plain CSS (no external CSS frameworks)

## Local Development

```bash
npm install
npm run develop   # http://localhost:8000
```

## Build & Deploy

Pushing to the `main` branch triggers GitHub Actions to automatically build and deploy to GitHub Pages.

```bash
npm run build    # generates build output in the public/ directory
```

## Site Structure

| Section | Description |
|---------|-------------|
| **Hero** | Brand identity, CTA |
| **About** | Studio introduction, core values, career stats |
| **Stack** | Tech stack (Languages, Frontend, Data & AI, Backend, Visualization) |
| **Work** | Featured project portfolio |
| **Contact** | Contact information |