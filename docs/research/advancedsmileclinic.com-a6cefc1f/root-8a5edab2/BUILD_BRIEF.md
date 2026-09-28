# Build Brief — advancedsmileclinic.com homepage (clone #2)

You are a BUILDER agent. You implement ONE group of React components from an already-written
spec. You do not do browser research — the spec, the screenshots and the raw JSON are the source
of truth.

## Isolation rules (critical — a previous clone lives at `/`)
- This clone is served at **`/advanced-smile-clinic`**. The other clone owns `/`.
- Write ONLY the target files listed in your task (your `.tsx` components + your own
  `*.module.css` files). Nothing else.
- **Never edit**: `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`,
  `src/app/advanced-smile-clinic/layout.tsx`, `src/app/advanced-smile-clinic/asc.css`,
  `src/app/advanced-smile-clinic/page.tsx`, `package.json`, anything under
  `src/components/sites/smiledentalcare.info-b93df72c/`, or `public/sites/smiledentalcare...`.
- Do not run `npm install`, `npm run build`, `git`, or any command that rewrites files.
  `npx tsc --noEmit` is the only command you may run.

## Paths
- Component root: `src/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/`
- Spec dir: `docs/research/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/components/`
- Raw DOM/CSS JSON: `docs/research/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/raw/`
- Screenshots: `docs/design-references/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/`
- Responsive findings: `docs/research/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/RESPONSIVE.md`
  (if that file exists — read it; it tells you how your section changes at 1024/768/480/390)

## Styling rules
1. **Tailwind utilities first**, including arbitrary values for exact values from the spec
   (`bg-[#a49984]`, `text-[35px]`, `shadow-[0_4px_20px_rgba(0,0,0,0.14)]`,
   `tracking-[0.02em]`, `leading-[1.2]`, …). Match the spec numbers exactly.
2. For anything a utility can't express (keyframes, `::before` circles, `clip-path`,
   pseudo-element overlays, breakpoint rules that must be pixel-exact), use a **CSS Module**
   named after the component: `MySection.module.css`, imported from the component.
   Prefix every class and `@keyframes` name with the component name (e.g. `svcFlipFront`,
   `@keyframes svcBounce`) — never add bare/global class names.
   **CSS Modules rewrite animation names.** A `@keyframes` defined in `asc.css` (global) CANNOT be
   referenced directly from inside a `*.module.css` — the reference gets hashed and the animation
   dies. Either (a) apply the shared animation with a global class from `asc.css`
   (`className="asc-anim-left"`), or (b) go through a custom property, which is not rewritten:
   `--my-anim: asc-fade-in-left; animation: var(--my-anim) 1s both;`. If you define your own
   `@keyframes` inside your module, referencing it by name is fine (both get the same hash).
3. `src/app/advanced-smile-clinic/asc.css` is already loaded by the route layout and gives you:
   - `.asc-root` base typography (body Lato 15px `#363636`, h1 Playfair Display, h2/h3 Poppins)
   - color tokens: `--asc-brown:#766148`, `--asc-brown-dark:#62544e`, `--asc-tan:#a49984`,
     `--asc-beige:#bdaa9c`, `--asc-sage:#81897e`, `--asc-sage-2:#858d82`, `--asc-cream:#eee7e0`,
     `--asc-offwhite:#f6f4f2`, `--asc-yellow:#feed5a`, `--asc-dark:#263238`
   - shared keyframes: `asc-fade-in`, `asc-fade-in-left`, `asc-fade-in-right`,
     `asc-slide-down`, `asc-bounce-subtle`, `asc-mover-derecha-parpadeo` (use them by name)
   - `.asc-container` (max-width 1100px, 40px gutters → 20px ≤991px)
   Use those instead of redefining them. Do not redefine `.asc-root` rules.
4. No inline `style` attributes unless the value is genuinely dynamic (e.g. JS-driven state).
5. No comments in code. TypeScript strict — no `any`. Named exports, PascalCase components.

## Assets (already downloaded — use these local paths, never the remote URLs)
Base: `/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/`

| local path | original |
|---|---|
| `images/logo.webp` | header logo (667×461) |
| `images/logo-mobile.webp` | mobile logo |
| `images/logo-white.webp` | white footer logo (655×468) |
| `images/hero-poster.webp` | hero video poster |
| `images/about-portrait.webp` | about portrait |
| `images/service-emergency.webp` | services slide 1 |
| `images/service-general.webp` | services slide 2 |
| `images/service-smile-design.webp` | services slide 3 |
| `images/service-dentures.webp` | services slide 4 |
| `images/promotions-photo.webp` | promotions photo (1300×730) |
| `images/videoquote-bg.webp` | quote section backdrop (1366×606) |
| `images/why-center.webp` | why-choose-us centre photo (479×601) |
| `images/why-mobile.webp` | mobile "two sisters" photo |
| `images/dontwait-1.webp` / `dontwait-2.webp` / `dontwait-3.webp` | don't-wait switcher |
| `images/zocdoc-badge.png` | Zocdoc "Book online" badge |
| `images/ins-*.webp` | 11 insurer logos (blue-cross, careington, cigna, delta-dental, florida-combined, sunlife, humana, guardian, metlife, aetna, ameritas) |
| `videos/hero.mp4` | hero background video (autoplay, loop, muted, playsInline) |

If the spec references an asset that is not in this table, it was not downloadable — use the
closest downloaded one or omit it, and note it in your report. Never hot-link the original site.

## Interactions
- Anything interactive (carousels, sliders, toggles, scroll listeners, mobile drawer) →
  `"use client"` component.
- `@splidejs/splide` (vanilla, v4.1.4) is installed. For the original carousels use it:
  `import Splide from '@splidejs/splide'` + `import '@splidejs/splide/css'`, initialise in
  `useEffect` on a ref, and pass the exact options from the spec (perPage, gap, speed, interval,
  autoplay, loop, drag, breakpoints). Set `aria`/`hasTrackWrapper` as needed. If a carousel in the
  spec is a simple CSS marquee instead of Splide, reproduce that.
- Hover effects that the spec measures with `::before`/`::after` or pseudo-element circles must be
  reproduced (usually `overflow:hidden` + absolutely positioned pseudo element + transition).
- Scroll-reveal: the original triggers some animations on load (`contentLoaded`, not on scroll)
  — reproduce exactly what the spec says, with the same delay/duration/fill.
- Do not invent animations that are not in the spec.

## Content
Verbatim from the spec (English, exact phone numbers, addresses, prices, capitalization and typos).
Never translate, summarize or invent. Keep original `href`s (tel:, mailto:, absolute URLs).

## Verify before finishing
Run `npx tsc --noEmit` from the repo root and fix any error in YOUR files. (Errors from files you
do not own are not yours — report them instead.)

## Report back
Files written, how you implemented the key behaviors, and anything in the spec that looked wrong
or missing.
