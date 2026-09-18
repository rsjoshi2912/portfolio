# Ravi Joshi — portfolio

A personal portfolio built with React and Vite: warm paper colours, editorial typography, a portrait card, original CSS project illustrations, and accessible project and career details.

**Live:** https://rsjoshi2912.github.io/portfolio/

## Run locally

```sh
cd client
npm ci
npm run dev
```

Open the `/portfolio/` path shown by Vite. Run `npm run build` for a production build and `npm run preview` to inspect it locally.

## Update the content

- `client/src/App.jsx`: page sections, selected project summaries, navigation, and project dialogs.
- `client/src/data/portfolio.js`: career history, skills, certifications, and contact details.
- `client/src/index.css`: base visual design and project illustrations.
- `client/src/journey.css`: responsive typography, mobile portrait, chapter navigation, and motion.
- `client/src/components/Icons.jsx`: SVG icons that render consistently across platforms.
- `client/src/components/JourneyGuide.jsx`: chapter navigation, reading progress, and reduced-motion-aware entrances.
- `client/public/assets/`: portrait, résumé, and certification files.
- `client/index.html`: page metadata and social previews.

Project artwork is illustrative, rather than a reproduction of private client interfaces. The full career details remain available through expandable sections.

## Contact options

Email, copy-email, and LinkedIn work on GitHub Pages without a server. The optional contact form is disabled by default because the previously configured Railway application is unavailable.

To enable it, deploy the `server/` application, configure its database and email service, confirm its `/health` endpoint and GitHub Pages CORS origin, then set both `VITE_API_URL` and `VITE_CONTACT_FORM_ENABLED=true` in a local production environment file before rebuilding. See `client/.env.example` and `server/.env.example`. Do not commit credentials or local environment files.

## Publish to GitHub Pages

The repository is `rsjoshi2912/portfolio`. GitHub Pages serves the root of its `gh-pages` branch; the source is on `master`.

```sh
cd client
npm run deploy
```

This builds the site and publishes `dist/` to `gh-pages`, including a `.nojekyll` marker. Authentication with write access to the repository is required. Commit and push source updates to `master` separately.

## Validation

The design was checked in Chromium across 61 widths from 320px through 2540px and in WebKit with iPhone SE, 13 Mini, 13, 14 Pro Max, iPad Mini, and iPad Pro emulation in portrait and landscape. These are browser emulations, not physical-device tests. Checks cover chapter navigation, reduced motion, keyboard navigation, project dialog focus return, expandable sections, résumé downloads, and clipboard interactions. Contact form validation and failure/success states were verified with intercepted requests, without sending messages. Automated axe checks cover WCAG A/AA rules; these supplement manual visual and interaction checks.
