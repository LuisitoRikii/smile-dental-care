# Output Plan — smile-dentalcare.info clone

## Target

| Key | Value |
|---|---|
| Target URL | `https://smiledentalcare.info/` |
| `<app-root>` | `.` (repository root) |
| `<site-key>` | `smiledentalcare.info-b93df72c` (sha256("https://smiledentalcare.info")[0:8] = b93df72c) |
| `<page-key>` | `root-8a5edab2` (sha256("/")[0:8] = 8a5edab2) |
| Destination route | `src/app/page.tsx` (scaffold replacement — first clone in untouched template, approved by default) |

## Artifact roots

- Research: `docs/research/smiledentalcare.info-b93df72c/root-8a5edab2/`
  - Component specs: `docs/research/smiledentalcare.info-b93df72c/root-8a5edab2/components/*.spec.md`
- Screenshots: `docs/design-references/smiledentalcare.info-b93df72c/root-8a5edab2/`
- Components: `src/components/sites/smiledentalcare.info-b93df72c/root-8a5edab2/`
  - Shared icons: `src/components/sites/smiledentalcare.info-b93df72c/shared/icons.tsx`
- Assets: `public/sites/smiledentalcare.info-b93df72c/root-8a5edab2/`
- Downloader: `scripts/download-assets-smiledentalcare.info-b93df72c-root-8a5edab2.mjs`

## Collision check

- Existing routes: only scaffold `src/app/page.tsx` (verified untouched, single commit).
- No existing site component/research/screenshot/asset namespaces.
- No other plans in flight → no collisions.

## Shared foundation files to change

- `src/app/layout.tsx` — fonts (Open Sans 400/700, Playfair Display 400), metadata (title/description/OG/favicon).
- `src/app/globals.css` — design tokens (colors, container widths, typography helpers, keyframes) scoped so future routes are unaffected.
- `src/app/page.tsx` — replaced with clone assembly.

## Notes

- Nav links point at sibling pages (`/staff`, `/office`, …) that are out of scope (single-URL clone); links keep original hrefs (may 404 locally).
- Google Map reproduced with a Google Maps embed iframe (same center/zoom/marker) + original overlay directions button.
