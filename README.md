# Abdul Azeez Abdullah — Portfolio

Modern, minimal, research-professional single-page portfolio built with:

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn-style UI components (Radix UI primitives)
- Dark/Light mode (via `next-themes`)

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Customize content

- **Primary content**: edit `lib/content.ts`
  - Name/title/location, education, skills, experience, research interests, gallery items, socials
- **Profile image**: replace `public/images/profile.png`
- **Gallery images**: replace files under `public/images/gallery/`
- **Download CV button**: currently downloads `public/cv.png`
  - Replace with a PDF (e.g. `public/cv.pdf`) and update the link in `sections/hero-section.tsx`

## Folder structure

- `app/` — Next.js App Router entry
- `components/` — reusable UI + site components
- `sections/` — page sections (Hero, About, Education, etc.)
- `lib/` — helpers + content
- `public/images/` — optimized static images
- `styles/` — global theme + Tailwind tokens

## Deploy

Set `NEXT_PUBLIC_SITE_URL` in your environment for correct `sitemap.xml` and `robots.txt` URLs.
