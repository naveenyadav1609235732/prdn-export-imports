# PRDN Export & Imports

The website of PRDN Export & Imports — a Dubai trading house on Al Waha Street, Al Quoz 4, exporting fresh vegetables and fresh fruits, specialising in halal fresh goat meat, and trading spices.

**Contact:** +971 52 787 7428 · Instagram [@prdnexportandimports](https://www.instagram.com/prdnexportandimports/)

## What's on the site

- **Home** — brand story, the four product lines, goat meat spotlight, the sourcing-to-shipping process, exporter/importer entry points, map and Instagram.
- **Products** (`/products`) — searchable catalogue filtered by vegetables, fruits, goat meat and spices, with origin, packing and season for each line, plus "request a quote" links.
- **Exporter registration** (`/register/exporter`) — for farms, packhouses, abattoirs and spice processors who want to supply PRDN.
- **Importer registration** (`/register/importer`) — for wholesalers, retailers, hotels and distributors who want to buy.
- **Contact** (`/contact`) — call, WhatsApp, Instagram, Google Map and an enquiry form.

All three forms are handled by Netlify Forms — submissions appear in the Netlify dashboard under **Forms**, and email notifications can be switched on under Project configuration → Notifications.

## Tech

TanStack Start (React 19), Tailwind CSS 4, Netlify Forms, Netlify Image CDN, deployed on Netlify.

## Run locally

```bash
pnpm install
netlify dev        # or: pnpm dev (forms won't submit without Netlify emulation)
```

## Editing content

- Company details and the product list: `src/lib/site.ts`
- Photography: `public/img/`
- Colours and fonts: `src/styles.css`

If you change a form's fields, update `public/__forms.html` to match.
