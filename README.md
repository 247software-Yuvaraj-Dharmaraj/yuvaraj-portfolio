# Yuvaraj D — Portfolio

My personal portfolio site — a single-page, responsive, dark-themed showcase of my experience, projects, and skills.

**Live:** _deploy to Vercel and add the link here_

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tooling)
- **Tailwind CSS** (styling, dark theme)
- **lucide-react** (icons)
- Scroll-reveal animations via `IntersectionObserver` (no heavy animation deps)

## Highlights

- Fully responsive, mobile-first, accessible (semantic landmarks, keyboard-friendly nav)
- Content-driven — everything lives in [`src/data.ts`](./src/data.ts), so updating the site is a one-file edit
- Real project screenshots, live demos, and resume download
- SEO + Open Graph meta tags

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## Deploy (Vercel)

1. Push this folder to a GitHub repo (e.g. `portfolio`).
2. Import it on [vercel.com](https://vercel.com) — framework preset **Vite**, build `npm run build`, output `dist`.
3. Done. (Optional: add a custom domain.)

## Editing content

All text, experience, projects, and skills are in `src/data.ts`.
Project images live in `public/projects/`, and the resume PDF in `public/`.
