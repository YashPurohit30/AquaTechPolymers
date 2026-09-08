# Aqua Tech Polymers

Static marketing site. Astro 5 + TypeScript + Tailwind. Deploys to Hostinger shared hosting.

## Run

```bash
npm install
npm run dev          # localhost:4321
npm run build        # → dist/
npm run check        # typecheck
```

## Deploy

```bash
cp .env.example .env    # fill in FTP credentials
npm run deploy          # builds + mirrors dist/ to public_html
```

No Node on the server. Build locally, upload `dist/`.

## Adding a product

Drop a markdown file in `src/content/products/`. The route, spec table,
JSON-LD and nav entry all generate from the frontmatter. Zod validates it —
a missing spec or an over-length meta description fails the build.

## Rules that matter

**All content must be in the built HTML.** The product tab explorer renders
every panel and toggles with CSS. Never mount panels on click — AI crawlers
execute JS poorly, and that pattern would hide 4/5 of the product content.

**NAP data lives only in `src/consts.ts`.** Entity consistency across the
site, Google Business Profile and IndiaMART depends on not duplicating it.

**Images belong in `src/assets/`,** not `public/`. Files in `public/` bypass
Sharp entirely — no AVIF/WebP, no responsive srcsets.

## Before launch

- [ ] Replace `/public/images/hero-*.jpg` with client photography
- [ ] Set `PUBLIC_WEB3FORMS_KEY` in `.env`
- [ ] Real NAP data in `src/consts.ts` (phone, WhatsApp, address)
- [ ] Verify `robots.txt` on the live domain — Hostinger sometimes serves a default that blocks bots
- [ ] Validate schema at https://validator.schema.org
- [ ] Lighthouse on mobile throttle, home + one product page
- [ ] Test on real iPhone Safari and Android Chrome

## Current build

14 pages · 0 KB external JS (5.5 KB inlined) · 928 KB total incl. fonts
