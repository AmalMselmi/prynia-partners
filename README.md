# Prynia Partners Website

Live site: https://prynia.com
Backend API: https://api.prynia.com

Full production website for Prynia Partners ("Growing Prosperity"), built as a React frontend + separate Node.js backend for email handling. This README explains the whole setup so anyone picking this up later doesn't have to reverse-engineer it.

## Tech Stack

**Frontend**
- React 19 + Vite
- Tailwind CSS v4 (CSS-first config via `@theme`, no `tailwind.config.js`)
- React Router DOM
- Framer Motion
- Lucide React
- React Hook Form
- react-i18next (translations: EN / FR / AR, with RTL support for Arabic)

**Backend** (separate app, lives in `/server`)
- Node.js + Express
- Resend (email sending API)
- Deployed independently on Render, NOT on the same hosting as the frontend

## Design Direction

- **Palette** : navy `#023357`, teal `#2E8A98`, light grey `#E6E5E4`, coral `#FF5757` (used sparingly). These are the real brand colors, check `src/styles/index.css` `@theme` block for the CSS variables (`--color-ink`, `--color-gold`, etc. names are legacy from an earlier palette, the values are current).
- **Fonts** : Archivo Black for titles (substitute for Horizon, which is Canva-only and can't be licensed for web), Open Sans for everything else. Arabic uses Cairo instead of Archivo Black for titles (better script support)  see `[dir='rtl']` rules in `index.css`.
- **Signature device** : `GrowthRings` component, concentric arcs used as a recurring visual motif (Hero, CTASection, PageBanner, footer).

## Why frontend and backend are hosted separately

OVH's Startup hosting plan (what we have) does NOT support running Node.js servers, it's static-file/PHP hosting only. So:

- **Frontend** = built as static files (`npm run build` → `dist/`) and uploaded to OVH via FTP
- **Backend** = a normal Express server, which needs somewhere that can actually run Node, deployed on **Render** (free tier) instead

They're two completely separate deployments. The frontend calls the backend over the internet using its live Render URL, same as how it works with any external API.

## Getting Started (local dev)

```bash
npm install
npm run dev
```
Frontend runs at `http://localhost:5173`.

For the backend, in a separate terminal:
```bash
cd server
npm install
node index.js
```
Backend runs at `http://localhost:5000`.

**Note:** while developing locally, the fetch URLs in `ContactForm.jsx` and `DiscoveryCallForm.jsx` need to point at `http://localhost:5000/api/...` instead of the live Render URL. Swap this back before rebuilding for production.

## Folder Structure 
```
src/
├── assets/ # images, logos, carousel photos, team photos
├── components/
│ ├── layout/ # Navbar, MobileMenu, Footer
│ ├── ui/ # Button, SectionHeading, PageBanner, ServiceCard,
│ │ GrowthRings, TeamCard, LanguageSwitcher, ImageCarousel
│ ├── sections/ # Hero, WhyChoose, GrowthStats, MeetTheTeam,
│ │ CTASection, GalleryCarousel, RequestSession
│ └── forms/ # ContactForm, DiscoveryCallForm, SessionRequestForm,
│ NewsletterForm
├── pages/ # Home, Services, Contact, NotFound
├── data/ # navigation.js, company.js, services.js, team.js,
│ stats.js, carousel.js, trainingCatalogue.js
├── i18n/
│ ├── index.js # i18next config
│ └── locales/ # en.json, fr.json, ar.json  ALL site text lives here
├── styles/ # index.css  Tailwind + design tokens
├── App.jsx
└── main.jsx

server/
├── index.js # Express app  /api/contact and /api/discovery-call routes
├── package.json
└── .env # NOT committed to git  see Environment Variables below
```

**Important:** almost all visible text on the site comes from `src/i18n/locales/*.json`, not hardcoded in components. If something needs a copy change, check there first before hunting through components.

## Environment Variables (backend)

`server/.env` (local) and Render's Environment tab (production) both need:

EMAIL_USER=contact@prynia.com
RESEND_API_KEY=your_resend_api_key

No `PORT` variable : Render assigns this automatically, and the code already handles it (`process.env.PORT || 5000`).

We originally used Gmail/Nodemailer, then OVH SMTP, both failed on Render because Render's free tier blocks outbound SMTP connections. Resend (HTTP-based email API) is what actually works there. If migrating hosting again, keep this in mind, SMTP may not work on whatever platform runs the backend.

## Deployment : Frontend (OVH)

1. `npm run build` (from project root) → generates `dist/`
2. Connect to OVH via FileZilla (FTP, not FTPS; OVH's shared hosting only supports plain FTP on port 21)
3. Upload everything inside `dist/` into the `/www` folder on the server, overwrite existing files
4. Done : no restart needed, static files serve immediately

FTP credentials: OVH Manager → Hosting → FTP-SSH tab

## Deployment : Backend (Render)

Connected to this same GitHub repo, with **Root Directory** set to `server` so Render only builds/runs that folder.
- Build Command: `npm install`
- Start Command: `node index.js`
- Auto-deploys on every push to `main`

To redeploy: just `git push`, no manual FileZilla step needed for the backend, unlike the frontend.

## Email sending : how it works

- Both forms POST to the Render backend (`/api/contact`, `/api/discovery-call`)
- Backend uses Resend to send an email to `EMAIL_USER`
- Domain `prynia.com` is being verified in Resend (DKIM confirmed, SPF/MX record was pending at handoff, see Resend dashboard → Domains for current status). Until fully verified, sender address in `index.js` may still be Resend's shared test address (`onboarding@resend.dev`) rather than `contact@prynia.com`, check `FROM_ADDRESS` constant at the top of `server/index.js`.
- Discovery Call form is currently a plain form + confirmation message (no Calendly integration that was built, tested, then removed per request; code no longer present, kept simple on purpose)

## Domains / DNS

- `prynia.com`: main site (OVH hosting)
- `api.prynia.com`: CNAME pointing to Render, used only by the backend, not something visitors ever see
- DNS records for Resend (MX/TXT for SPF, TXT for DKIM/DMARC) are in OVH's DNS Zone tab

## Known pending items at handoff

- SPF/MX record verification on Resend was still pending (OVH wouldn't let it be added cleanly at root level needs checking with OVH support if it's still stuck)
- Carousel images in `src/assets/carousel/` are large (several MB each) worth compressing (e.g. TinyPNG) for better load times
- No database: form submissions are only ever emailed, nothing is stored/logged anywhere
- No CMS: all content edits require touching code directly (mainly the `i18n/locales` files for text)

## Where Future Integrations Plug In

| Concern | Where to add it |
|---|---|
| CMS | Replace static exports in `src/data/*.js` and `src/i18n/locales/*.json` with fetched content |
| Database | Add to the backend, both form routes currently just email and discard the data |
| Auth | Not present anywhere; would need adding from scratch |
| SEO | `index.html` has only base title/meta tags per-page metadata not yet implemented |

## Notes for whoever picks this up next

- Non-technical content edits (text, titles) → check the step-by-step guide in the shared drive first
- Anything structural (new features, backend logic, hosting changes) → should go through a developer, this is not meant for non-technical self-editing
- If red errors show up after any edit, it's almost always a missing import, mismatched translation key, or JSX tag mismatch. Check the browser console and terminal output first