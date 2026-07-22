# Prynia Partners — Website MVP

A first-version React site for **Prynia Partners** ("Growing Prosperity"),
built as a clean, scalable foundation for a full production build later.

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4 (CSS-first config via `@theme`, no `tailwind.config.js` needed)
- React Router DOM
- Framer Motion
- Lucide React
- React Hook Form

No CMS, backend, database, authentication, deployment config, or SEO
libraries are included — none of those decisions have been made yet.
The folder structure below is organized so each can be dropped in later
without restructuring the app.

## Design Direction

- **Palette** — deep diplomatic ink (`#101B26`), cool mist paper
  (`#EEF0EF`), muted antique-brass gold (`#A9832E`) and a deep emerald
  (`#1F5F4A`), used sparingly for the "growth" motif.
- **Type** — Fraunces (display serif) for headlines, Inter for body copy,
  IBM Plex Mono for eyebrow labels and small data/caption text.
- **Signature device** — `GrowthRings`, a set of concentric arcs that
  read at once as tree-growth rings ("Growing Prosperity"), a
  topographic contour map (on-the-ground international work), and a
  compass/seal (diplomatic credibility). It appears faintly behind the
  Hero, on the 404 and page banners, and small in the footer — the one
  recurring visual signature of the site.
- Flat, hairline-bordered surfaces throughout (no drop shadows, no
  rounded-xl cards) to stay in the minimal/premium/editorial register
  the brief asked for, rather than a "startup SaaS" look.

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (typically `http://localhost:5173`).

To produce a production build:

```bash
npm run build
npm run preview
```

## Folder Structure

```
src/
├── assets/                  # images/icons added later
├── components/
│   ├── layout/               # Navbar, MobileMenu, Footer
│   ├── ui/                   # Button, SectionHeading, PageBanner,
│   │                          # ServiceCard, GrowthRings
│   ├── sections/              # Hero, AboutPreview, ServicesPreview,
│   │                          # WhyChoose, CTASection
│   └── forms/                 # ContactForm
├── pages/                    # Home, About, Services, Contact, NotFound
├── data/                     # navigation.js, company.js, services.js
├── hooks/                    # reserved for future custom hooks
├── utils/                    # cn.js class-name helper
├── styles/                   # index.css — Tailwind import + design tokens
├── App.jsx                   # routing + persistent layout chrome
└── main.jsx                  # app entry point
```

## Where Future Integrations Plug In

| Concern         | Where to add it |
|------------------|------------------|
| CMS              | Replace the static exports in `src/data/*.js` with fetched content — components already consume data through those modules, not inline. |
| Backend / API    | `ContactForm.jsx`'s `onSubmit` has a single `TODO` marking where a real request replaces the simulated delay. |
| Auth             | No routes or components assume a signed-in state; add a route guard around `App.jsx`'s `<Routes>` when ready. |
| SEO / metadata   | `index.html`'s `<head>` currently holds only the base title/description/font links — a per-page `<title>` solution (React Helmet or otherwise) can be added without touching page components. |
| Deployment       | Standard Vite `dist/` output — no platform-specific config has been added. |

## Notes

- The contact form validates Name, Organization, Email, Country, and
  Message with React Hook Form and shows an in-page success state on
  submit (no network request is made yet).
- All animations respect `prefers-reduced-motion`.
- Focus states are visible and styled on every interactive element.
