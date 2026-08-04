# Mansur Tabynskiy Portfolio

Modern bilingual portfolio website built with React, TypeScript, Vite, and Framer Motion.

## Features

- RU / EN localization with browser-based default detection and `localStorage` persistence
- Editorial one-page portfolio with dedicated project detail routes
- Data-driven content for projects, services, process, technologies, and contacts
- Motion-aware UI with `prefers-reduced-motion` support
- Basic SEO, manifest, sitemap, robots, and Vercel security headers

## Local Run

```bash
pnpm install
pnpm run dev
```

## Production Check

```bash
pnpm run lint
pnpm run build
```

`pnpm run lint` currently runs strict TypeScript validation for the whole project.

## Notes

- The contact form currently prepares a message for Telegram or WhatsApp instead of storing submissions on a backend.
- Canonical URLs and `sitemap.xml` use the placeholder domain `https://mansur-tabynskiy.vercel.app` and should be updated after final deployment.
