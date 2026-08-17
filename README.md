# Alishba Shahid — Portfolio

A premium, fully responsive personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com/new.
3. Framework preset: Next.js (auto-detected). No env vars needed.
4. Deploy.

## Structure

```
app/
  layout.tsx        Root layout, fonts, Navbar/Footer, metadata (SEO)
  page.tsx           Home page composing all sections
  cv/page.tsx         Dedicated CV preview + PDF download page
  globals.css         Design tokens (colors, fonts) for dark/light themes
components/           One component per section + shared UI (Navbar, Footer,
                       ThemeToggle, Avatar, Pulseline, ProjectCard, etc.)
context/ThemeContext.tsx  Dark/light theme provider (persists to localStorage)
lib/data.ts           All personal content: profile, skills, projects,
                       experience, education — edit this file to update
                       any text on the site
public/
  Alishba-Shahid-Resume.pdf   The downloadable CV
```

## Editing content

Almost everything on the site (name, bio, skills, project links, experience
bullet points) lives in `lib/data.ts`. Update the GitHub/demo URLs there once
the two projects (LifeLine, Test Generator) have public repos/live deployments.

## Regenerating the resume PDF

The PDF was generated with a small reportlab script. If you update
`lib/data.ts`, regenerate `public/Alishba-Shahid-Resume.pdf` to match (or
swap in your own designed PDF — the download button just links to that file).
