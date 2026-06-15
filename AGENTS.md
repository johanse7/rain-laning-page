# AGENTS.md

## Commands
- Use the root `package.json` scripts: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.
- There is no repo test script; `npm run lint` is the main fast check, and `npm run build` is the full verification.

## Structure
- This is a Next.js App Router project. The live page entrypoint is `app/(home)/page.tsx`.
- `app/layout.tsx` owns the global shell, metadata, fixed header/footer, and the Google Ads script.
- `components/hero/*` drives the landing hero; `lib/constants.ts` holds the `VIDEO_CLIPS` source list.
- Use the `@/*` TypeScript path alias for imports from the repo root.

## Gotchas
- SVG imports depend on `next.config.ts` Turbopack rules using `@svgr/webpack`; validate SVG-related changes with `next dev` or `next build`.
- Static social icons come from `public/assets/*`, and the logo is `public/images/logo.png`.
- ESLint is configured from `eslint.config.mjs`; avoid assuming a separate config file.
