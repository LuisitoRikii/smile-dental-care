# VideoQuoteSection Specification

## Overview
- **Target file:** `src/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/VideoQuoteSection.tsx`
- **Screenshot:** `docs/design-references/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/videoquote-1440.png`
- **Interaction model:** time-driven (autoplaying tag marquee) + hover (radial-fill WELCOME FORM) — no scroll reveals in this section
- **Source root:** `section#brxe-ohoolt` — page y 4482.19, 1425 × 686.59
- **Note:** despite the "video" name, this section has **no `<video>` and no `<img>`** — the backdrop is a CSS background image + a dark scrim pseudo-element. (Third-party Zocdoc badge/popup overlays the bottom-right of the screenshot — ignore it.)

## DOM Structure
```
section#brxe-ohoolt .brxe-section          1425×686.59, flex column, align-items:center
├─ div#brxe-oidkvq .brxe-container         1425×54  (DESKTOP-ONLY tags marquee; padding:10px 0; width:100%)
│  └─ div#brxe-krkjuo .brxe-slider-nested.splide.brx-auto-height  1425×34, position:relative, role=region
│     └─ #brxe-krkjuo-track .splide__track  1425×34, overflow:hidden, z-index:0, inline style padding-left/right:0
│        └─ #brxe-krkjuo-list .splide__list  flex, inline transform:translateX(-2849.91px); transition:transform 40000ms cubic-bezier(0.25,1,0.5,1)
│           ├─ 4 clones (01-06) …
│           ├─ .splide__slide #brxe-xairqn (is-active is-visible)  → h3 > a "Teeth Whitening"
│           ├─ .splide__slide #brxe-zwliqe (is-visible is-next)    → h3 > a "Cosmetic Dentistry"
│           ├─ .splide__slide #brxe-tgxjkc (is-visible)            → h3 > a "Dental Veneers"
│           ├─ .splide__slide #brxe-bhmtiu                         → h3 > a "Invisalign Treatment"
│           └─ clones (07-12) …
├─ div#conteslider .brxe-container          1425×0 — HIDDEN at 1440: display:none (tablet/mobile duplicate, see Responsive)
│  └─ div#brxe-yqroih .brxe-slider-nested.splide  (same 4 tags, same data-splide config, all children bricks-lazy-hidden)
├─ div#brxe-sbvdse .brxe-container          1425×600 — PHOTO + QUOTE
│  ├─ ::before  inset:0, pointer-events:none, background:linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.28))
│  └─ div#brxe-bwuxje .brxe-text > p        1305×221 quote (position:relative, above the scrim)
└─ div#brxe-meefsx .brxe-block              1425×66.59, margin:-18px 0 (straddles the photo's bottom edge)
   ├─ div#brxe-yijcia .brxe-divider.horizontal   498.75×2  → div.line
   ├─ a#brxe-ucqmyh .btn-radial-4                 "WELCOME FORM" (427.5×66.59)
   └─ div#brxe-oxjjji .brxe-divider.horizontal   498.75×2  → div.line
```

## Computed Styles (exact values from getComputedStyle)

### Section
- `#brxe-ohoolt`: `width:1425px; height:686.594px; display:flex; flex-direction:column; align-items:center` (no background → white)

### Tags marquee (visible, `#brxe-oidkvq` / `#brxe-krkjuo`)
- `#brxe-oidkvq`: `padding:10px 0px; width:1425px; height:54px; display:flex; flex-direction:column` (base rule adds `width:100%`)
- `#brxe-krkjuo`: `width:1425px; height:34px; position:relative` ; classes `brxe-slider-nested splide brx-auto-height splide--loop splide--ltr splide--draggable is-active is-overflow is-initialized`
- track: `width:1425px; height:34px; position:relative; z-index:0; overflow:hidden` (inline `padding-left:0;padding-right:0`)
- list: `width:1425px; height:34px; display:flex; align-items:flex-start; transform:matrix(1,0,0,1,-1737.26,0); transition:transform 40s cubic-bezier(0.25,1,0.5,1)` (inline overrides: `transform: translateX(-2849.91px); height:34px; transition: transform 40000ms cubic-bezier(0.25,1,0.5,1)`)
- slide: `width:474.984px (inline: calc(33.3333% + 0px)); height:33.594px; display:flex; justify-content:center; align-items:center; position:relative; background-size:cover; margin-right:0` (rule `#brxe-krkjuo > .splide__track > .splide__list > .splide__slide { align-items:center; justify-content:center }`)
- `h3` heading: `font-size:24px; font-weight:600; font-family:Lato; line-height:33.6px; color:rgb(189,170,156); text-align:center; transition:0.4s` (rule `#brxe-slomeo{color:rgb(189,170,156);font-family:Lato;font-weight:600;font-size:24px;text-align:center;transition:0.4s}`)
- `a` inside: same typography, `display:inline; color:rgb(189,170,156); border:0; text-align:center` (inherited `:where(a){text-decoration:none;cursor:pointer}`)

### Photo + quote (`#brxe-sbvdse`)
- Base rule: `width:100%; background-image:url("https://advancedsmileclinic.com/wp-content/uploads/2025/08/shutterstock_1674146218-2.webp"); background-size:cover; background-position:center center; height:600px; position:relative; align-items:center; justify-content:flex-end; padding-right:60px; padding-bottom:80px; padding-left:60px; align-self:center !important`
- Computed: `background-image:url(...); background-size:cover; background-position:50% 50%; padding:0px 60px 80px; width:1425px; height:600px; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; position:relative`
- `#brxe-sbvdse::before`: `content:""; position:absolute; inset:0; pointer-events:none; background-image:linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.28))` — measured size 1425×600, opacity 1 (flat 28% black scrim, no color gradient)
- `:where(#brxe-sbvdse > :not(figcaption)) { position:relative }` → quote sits above the scrim
- `#brxe-bwuxje` / `p`: `font-size:65px; font-weight:400; font-family:"Playfair Display"; line-height:110.5px; color:rgb(255,255,255); text-align:center; width:1305px; height:221px; position:relative` (base rule uses `color:var(--bricks-color-b92a3f)` which resolves to white)
- No overlay gradients other than the `::before` scrim; no `box-shadow`.

### `#brxe-meefsx` (dividers + button)
- `width:1425px; height:66.594px; display:flex; justify-content:center; align-items:center; margin:-18px 0px` (base rule: `width:100%; flex-direction:row; margin-top:-18px; margin-bottom:-18px; align-self:center !important`)
- Document rect y 5120.2 → 5186.8; the photo ends at 5138.2 ⇒ the row overlaps the photo bottom by 18px and the remaining 48px sits on the white background below.
- `.brxe-divider.horizontal` (`#brxe-yijcia`, `#brxe-oxjjji`): `width:498.75px; height:2px; display:flex; align-items:center; gap:30px; font-size:30px; line-height:51px`
- `div.line` (each): `width:498.75px; height:2px; position:relative; flex:0 1 auto; border-top:2px solid rgb(232,218,209)`
- `a#brxe-ucqmyh` WELCOME FORM: `width:427.5px (30%); height:66.594px; font-size:18px; font-weight:600; font-family:Lato; line-height:30.6px; letter-spacing:0.5px; color:rgb(255,255,255); background-color:rgb(133,141,130); padding:18px 28px; display:flex; justify-content:center; align-items:center; gap:10px; border-radius:40px; box-shadow:rgba(0,0,0,0.4) 0px 4px 20px 0px; position:relative; z-index:99; transition:0.3s; overflow:hidden; text-align:center` → href `https://advancedsmileclinic.com/contact-us/`
  - Base rule: `#brxe-ucqmyh{width:30%; color:var(--bricks-color-b92a3f); font-family:Lato; font-weight:600; font-size:18px; background-color:var(--bricks-color-902b2a); border-radius:40px; padding:18px 28px; box-shadow:rgba(0,0,0,0.4) 0px 4px 20px 0px}`
- Layout math: 498.75 + 427.5 + 498.75 = 1425 (button is exactly 30% of 1425).

## States & Behaviors

### Tag marquee (Splide, from `data-splide` on `#brxe-krkjuo`)
- `{"type":"loop","direction":"ltr","keyboard":"global","height":"auto","gap":"0px","start":0,"perPage":3,"perMove":1,"speed":"40000","interval":"4000","autoHeight":true,"autoplay":true,"pauseOnHover":true,"pauseOnFocus":true,"arrows":false,"pagination":false,"mediaQuery":"max","breakpoints":{"1279":{"perPage":3,"speed":"40000","interval":"4000","autoHeight":true,"autoplay":true,"pauseOnHover":true,"pauseOnFocus":true},"991":{"perPage":2},"767":{"perPage":1,"speed":"2000"},"478":{"perPage":1}}}`
- **autoplay: true**, `interval: 4000ms` (a move starts every 4s), `speed: 40000ms` (each move takes 40s ⇒ overlapping moves = slow continuous crawl), easing `cubic-bezier(0.25,1,0.5,1)` (Splide default for this config).
- **loop: true**, **draggable: true**, **no arrows, no bullets**, `perPage: 3`, `perMove: 1`, `gap: 0`.
- Live inline list style observed: `transform: translateX(-2849.91px); height: 34px; transition: transform 40000ms cubic-bezier(0.25, 1, 0.5, 1)`.
- `pauseOnHover`/`pauseOnFocus` true ⇒ hovering the strip pauses the crawl.
- No arrows exist in the DOM (arrows:false), so all 4 tags were captured from the DOM (4 unique slides + loop clones).

### Reveal animations
- N/A — no `.brx-animated` / `data-interactions` elements inside `#brxe-ohoolt`.

### Hover states
- **`a#brxe-ucqmyh` (WELCOME FORM):** `#brxe-ucqmyh:hover { color: var(--bricks-color-b92a3f) }` — same value as the rest state (`rgb(255,255,255)`) ⇒ **no color change**. The visible hover is the shared `.btn-radial-4` radial fill (measured on `#brxe-ucqmyh:hover`): `::before` goes `width:0;height:0;bottom:0;opacity:0` → `width:513px (120%); height:250px; bottom:-125px; opacity:1`, `background:linear-gradient(45deg, rgb(118,97,72), rgb(118,97,72))`, `transition:0.4s cubic-bezier(0.25,0.46,0.45,0.94)`, clipped by `overflow:hidden; border-radius:40px`. Button background `rgb(133,141,130)` and white label unchanged; button `transition:0.3s`.
- **Tag links:** no `:hover` rule matches the `<a>` or `<h3>` (scanned all stylesheets) — declared `transition:0.4s` on the heading has nothing to animate; tags do not change color/underline on hover.

## Carousel / multi-state content (all 4 marquee slides, verbatim)
| # | Text | href | slide id |
|---|---|---|---|
| 1 | `Teeth Whitening` | `https://advancedsmileclinic.com/teeth-whitening/` | `#brxe-xairqn` (is-active) |
| 2 | `Cosmetic Dentistry` | `https://advancedsmileclinic.com/cosmetic-dentistry/` | `#brxe-zwliqe` |
| 3 | `Dental Veneers` | `https://advancedsmileclinic.com/cosmetic-dentistry/dental-veneers/` | `#brxe-tgxjkc` |
| 4 | `Invisalign Treatment` | `https://advancedsmileclinic.com/invisalign-treatment/` | `#brxe-bhmtiu` |

The hidden duplicate `#conteslider > #brxe-yqroih` contains the exact same 4 tags (ids `#brxe-crccte`, `#brxe-ifliod`, `#brxe-ajkmem`, `#brxe-uphnan`) with an identical `data-splide` config.

## Assets
| Element | URL | Intrinsic | Rendering |
|---|---|---|---|
| `#brxe-sbvdse` backdrop | `https://advancedsmileclinic.com/wp-content/uploads/2025/08/shutterstock_1674146218-2.webp` | 1366 × 606 | CSS background, `cover`, `background-position:center center`, box 1425 × 600, plus `::before` scrim `linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.28))` covering the full box; no alt text |

No `<img>` and no `<video>` elements anywhere in this section (background is a still photo, not a video).

## Text Content (verbatim)
- Tags: `Teeth Whitening` / `Cosmetic Dentistry` / `Dental Veneers` / `Invisalign Treatment`
- Quote: `Smile Designs that transform, empower, and inspire.` (single `<p>`, wraps to 2 lines at 65px over 1305px)
- Button: `WELCOME FORM`

## Responsive Behavior
Not measured (1440px only); media queries read from the page's stylesheets:
- `#brxe-oidkvq` (desktop marquee): `@media (max-width:991px){ display:none }`
- `#conteslider` (duplicate marquee): base `display:none; padding-top:10px; padding-bottom:10px; width:100%` → `@media (max-width:991px){ display:flex; position:relative }` plus `#conteslider::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:transparent;z-index:100}`. So the same strip is swapped in below 992px (Bricks element-level responsive visibility).
- Tag `h3`: base 24px → `@media (max-width:991px)` 22px.
- Quote `#brxe-bwuxje`: 65px → 55px (≤991) → 40px (≤767) → 30px (≤478).
- Photo `#brxe-sbvdse`: padding `0 60px 80px` → `0 40px 80px` (≤767) → `0 10px 80px` (≤478); height stays 600px (no rule overrides it).
- WELCOME FORM `#brxe-ucqmyh`: width 30% → 50% (≤767) → 60% + `font-size:16px; padding-left/right:10px` (≤478).
- Marquee breakpoints: ≤1279 same as desktop (3 per view), ≤991 → 2, ≤767 → 1 + `speed:2000`, ≤478 → 1.
