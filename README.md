# Sanket Mane — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Pages

- `/` — hero, live pipeline trace, about, featured projects
- `/projects` and `/projects/[slug]` — 5 projects, each with a request-flow diagram
- `/skills` — grouped technical skills + "currently learning"
- `/blog` and `/blog/[slug]` — 3 starter posts (RAG chunking, MCP/FastMCP, job search)
- `/contact` — email/phone/socials + a form that opens a pre-filled email (no backend needed)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

Requires internet access during `build` — it self-hosts Space Grotesk, Inter,
and JetBrains Mono from Google Fonts via `next/font`. If you build in an
offline/sandboxed environment, that step will fail; it works normally on
Vercel, GitHub Actions, or any machine with internet access.

## Deploy (Vercel — recommended)

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new, import the repo.
3. Framework preset: Next.js (auto-detected). No environment variables needed.
4. Deploy.

Vercel will rebuild on every push to `main`.

## Deploy (Netlify / other static hosts)

This app is fully static (every route is prerendered — see the build output).
Run `npm run build`, then use the `@netlify/plugin-nextjs` adapter, or export
via a static host that supports Next.js output. Vercel needs zero config,
so it's the simplest option.

## Before you go live — things to personalize

- `lib/data.ts` → `contact.socials`: replace the placeholder GitHub/LinkedIn
  URLs with your real profile links.
- `app/layout.tsx` → `metadataBase`: currently set to `https://sanketmane.dev`
  as a placeholder; change it to your real domain once you have one (affects
  Open Graph image URLs).
- Add a real Open Graph image (`app/opengraph-image.png`, 1200×630) if you
  want a custom social preview card — Next.js will pick it up automatically.
- The 3 blog posts are starter content written from your actual project
  work — edit, extend, or replace them any time in `lib/data.ts`.
- Swap in a resume PDF: drop it in `public/resume.pdf` and link it from the
  nav or contact page if you want a direct download.

## Structure

```
app/                route pages (App Router)
components/         Nav, Footer, TerminalIntro, PipelineDiagram, ProjectCard, ContactForm
lib/data.ts         all content — projects, skills, blog posts, contact info
```

Everything content-related lives in `lib/data.ts` — update projects, skills,
or posts there without touching page components.
