# Creative Kirat — Portfolio of Kirat Singh Dang

Premium, animated, single-page SEO portfolio. **Frontend-only**, statically generated, Vercel-ready.

- Stack: Next.js 14 (App Router) · TypeScript (strict) · Tailwind CSS 3 · Framer Motion 11 (`LazyMotion`) · Lucide React · `next/font` (Inter, `display: swap`) · `next/image`
- Routes: `/` (home), `not-found`, plus metadata routes `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, `/twitter-image`, `/icon.svg`, `/apple-icon`
- No backend, database, auth, API routes, server actions, or secrets.

## Sections (in order)

| # | Section | Anchor |
|---|---|---|
| 1 | Hero (only `<h1>`) | `#home` |
| 2 | About | `#about` |
| 3 | Expertise (12 cards, no percentages) | `#expertise` |
| 4 | Experience (animated timeline) | `#experience` |
| 5 | Featured Projects | `#projects` |
| 6 | Featured Reels (5 reels + modal preview) | `#reels` |
| 7 | Social profiles | — |
| 8 | Work Process | — |
| 9 | Contact (mailto + copy email) | `#contact` |

## Project structure

```
src/
  app/            layout.tsx, page.tsx, not-found.tsx, sitemap.ts, robots.ts,
                  opengraph-image.tsx, twitter-image.tsx, apple-icon.tsx, icon.svg, globals.css
  components/
    layout/       Navbar, MobileMenu, Footer, SkipLink, Logo
    sections/     Hero, About, Expertise, Experience, Projects, FeaturedReels,
                  Social, Process, Contact (+ small client helpers)
    reels/        ReelCard, ReelModal, ReelsGrid
    ui/           Button, Container, SectionHeading, Reveal, GlowCard, MotionProvider
    seo/          JsonLd
  config/         site.ts, content.ts, experience.ts, projects.ts, reels.ts   ← ALL content lives here
  hooks/          useActiveSection, useScrollLock, useFocusTrap, useReducedMotionSafe
  lib/            utils.ts (cn), reel-utils.ts (shortcode + build-time assertion), reel-thumbnails.ts
  types/          Reel, Project, Experience, Social …
public/reels/     owner-supplied reel thumbnails
```

## Local setup

```bash
npm install
cp .env.example .env.local    # set NEXT_PUBLIC_SITE_URL
npm run dev                   # http://localhost:3000
npm run lint
npm run typecheck             # tsc --noEmit
npm run build && npm run start
```

Requires Node.js ≥ 18.18.

## Environment variable

| Name | Required | Example |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | `https://creativekirat.com` (no trailing slash) |

Used for canonical URL, Open Graph, sitemap, robots and JSON-LD. If unset, the placeholder
`https://creative-kirat.example.com` (`PLACEHOLDER_SITE_URL` in `src/config/site.ts`) is used — **set it before going live**.

## Owner how-tos

### Add Reel thumbnails
Put the real cover frame of each reel in `public/reels/`:
`reel-1.webp` … `reel-5.webp` (or `.jpg` / `.jpeg` / `.png`). Recommended **1080×1920 (9:16), ≤150 KB each**.
They are detected automatically at build time (`src/lib/reel-thumbnails.ts`). Without a file the card shows an honest
"Watch on Instagram" placeholder — never a fake frame. Mapping is listed in `public/reels/README.md`.

### Add project URLs / descriptions
Edit `src/config/projects.ts`. Set `url` to the verified URL (shows "Visit Project"), add a verified
`description` and optional `tags`. Leave `url: null` to hide the link.

### Enable Unstop
In `src/config/site.ts` set the Unstop entry's `url` to the verified profile URL and `enabled: true`.
It then appears in Social cards and JSON-LD `sameAs` automatically.

### Experience
`src/config/experience.ts`. The 123webdesign role is shown as "From 15 June 2026 (resume date)" — it is
deliberately **not** labelled "Present". Change `dateLabel`/`end` once employment status is confirmed.

## Featured Reels — how it works
- 5 reels in `src/config/reels.ts`, validated at build time by `assertReels()` (exactly 5, order 1–5,
  URL matches `^https://www\.instagram\.com/reel/[A-Za-z0-9_-]+/$`, id = shortcode). Invalid data fails the build.
- Initial HTML contains only lightweight cards: no iframes, no Instagram scripts.
- Each card is one `<button>`; it opens a native `<dialog>` (focus trap, Esc, backdrop click, focus return, scroll lock).
- The official embed `https://www.instagram.com/reel/{id}/embed` is mounted on demand and unmounted on close.
  If it errors or hasn't loaded after 7 s, a fallback message appears. "Watch original Instagram Reel" is always shown.
- Hover/focus on a card adds a one-time `preconnect` to instagram.com.
- No oEmbed/Graph calls (they need an access token), no scraping.

## Security headers
`next.config.mjs` sets a narrow CSP (`frame-src https://www.instagram.com; object-src 'none'; base-uri 'self'; frame-ancestors 'self'`)
plus `nosniff`, `Referrer-Policy`, `Permissions-Policy`.

## Deploy to Vercel
1. Push this repo to GitHub/GitLab/Bitbucket.
2. Vercel → **Add New → Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected). Build command `next build`, output default.
4. Settings → Environment Variables → add `NEXT_PUBLIC_SITE_URL` = your production URL (Production + Preview).
5. **Deploy**. After adding a custom domain, update `NEXT_PUBLIC_SITE_URL` and redeploy.

## Owner action items
- Add 5 real thumbnails to `public/reels/`.
- Supply verified project URLs, categories and descriptions.
- Provide verified Unstop URL (currently hidden).
- Confirm current employment status at 123webdesign.
- Set `NEXT_PUBLIC_SITE_URL`.

## Known limitations
- Instagram may refuse embeds in some browsers / privacy settings / ad-blockers; the original-reel link is always available.
  Cross-origin iframes don't reliably fire `onError`, so the timeout fallback may appear even if the frame later loads in slow networks.
- Verification (lint / type-check / build / Lighthouse) must be run locally — see report in the delivery notes.
