# InsuranceLogos Specification

## Overview
- **Target file:** `src/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/InsuranceLogos.tsx`
- **Screenshot:** `docs/design-references/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/insurancelogos-1440.png`
- **Interaction model:** time-driven (Splide autoplay, infinite loop)

## DOM Structure
```
<section id="brxe-cbrvmp" class="brxe-section">              y=2143.625, 1425 x 140, margin:80px 0
  <div id="brxe-peirgl" class="brxe-container brx-animated"  1100 x 140, margin:0 162.5px
       data-interactions='[{"id":"qsqgpj","trigger":"contentLoaded","action":"startAnimation",
                            "animationType":"fadeInRight","delay":"1.4s"}]'>
    <div id="brxe-ccgjmd" data-script-id="ccgjmd" class="brxe-slider-nested splide
         splide--loop splide--ltr splide--draggable is-active is-overflow is-initialized"
         data-splide="{…config…}">                            width:80% = 880px, height:140px
      <div class="splide__track splide__track--loop splide__track--ltr splide__track--draggable"
           id="brxe-ccgjmd-track" style="padding-left:0; padding-right:0">
        <div class="splide__list" id="brxe-ccgjmd-list">
          [6 clone slides prepended] 11 original slides  [5 clone slides appended]
          <div class="splide__slide" id="brxe-gapcha" style="margin-right:40px;
               width:calc(33.3333% - 26.6667px); height:140px">
            <img id="brxe-kcgnst" class="brxe-image css-filter size-full" alt="Humana_logo" …>
          </div> …
```
- No arrows: `.splide__arrow` count = **0** (`arrows:false`).
- No pagination: `.splide__pagination` count = **0** (`pagination:false`).
- 23 slide nodes total = 11 originals + 12 clones (Splide loop).

## Computed Styles (exact values from getComputedStyle)

### Container — `#brxe-cbrvmp`
- `background-color: rgba(0,0,0,0)` (transparent), `background-image:none`
- `width:1425px; height:140px; margin: 80px 0px`
- `display:flex; flex-direction:column; align-items:center`
- `max-width:100%; border:0; box-shadow:none`
- Media queries: `@media (max-width:767px){ margin:60px 0 }`, `@media (max-width:478px){ margin:40px 0 }`

### `#brxe-peirgl` (inner container)
- `width:1100px; height:140px; margin:0 162.5px`
- `display:flex; flex-direction:column; justify-content:center; align-items:center; align-self:center !important`
- `animation: 1s both` (`.brx-animated`), `animation-name:none` after completion
- `@media (max-width:478px){ height:280px; align-items:center; justify-content:center }`

### `#brxe-ccgjmd` (Splide root)
- `width: 80%` (rule `#brxe-ccgjmd { width:80% }`) → **880px** of the 1100px container
- `height:140px; max-width:100%; display:block; position:relative; min-width:0`
- `background-color: rgba(0,0,0,0)`
- `@media (max-width:767px){ width:80% }`, `@media (max-width:478px){ width:70% }`
- `.brxe-slider-nested { min-width:0; width:100% }` (overridden by the ID rule)

### `.splide__track` — `#brxe-ccgjmd-track`
- `width:880px; height:140px; overflow:hidden; position:relative; padding:0`
- inline `padding-left:0; padding-right:0`

### `.splide__list` — `#brxe-ccgjmd-list`
- `display:flex; flex-direction:row; width:880px; height:140px`
- transform is animated: `matrix(1,0,0,1,<x>,0)` where `<x>` steps by `-306.656px` per move
  (measured samples: `-3679.88` → `-3986.53` → `-4293.19`)

### `.splide__slide`
- inline style on every slide: `margin-right: 40px; width: calc(33.3333% - 26.6667px); height: 140px`
  → **266.656px** wide at 1440
- computed: `padding: 40px 0px; position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; max-width:100%`
- `background-color: rgba(0,0,0,0)`; no border/shadow
- CSS rules: `.brxe-slider-nested .splide__slide { align-items:center; display:flex; justify-content:center; position:relative }`,
  `#brxe-ccgjmd > .splide__track > .splide__list > .splide__slide { padding-top:40px; padding-bottom:40px }`

### `<img>` inside each slide
- `class="brxe-image css-filter size-full"` → `width: 100% (266.656px); height: auto (57.828px for 249x54 source); display:block; max-width:100%`
- `filter: none` (the `css-filter` class applies no filter here)
- `object-fit: fill` (irrelevant — image scales by width, aspect preserved)
- Images are lazy: `src` starts as a 1x1 SVG placeholder (`data:image/svg+xml,…`) and `data-src` / `data-srcset` hold the real URL; already-loaded slides have the real URL in `src`.

## States & Behaviors

### Autoplay (it IS auto-scrolling — stepped, not a continuous marquee)
- **Trigger:** Splide `autoplay:true`, timer runs continuously (page-load driven).
- **Measured behavior:** list transform advances exactly **1 slide (306.656px = 266.656 slide + 40 gap) every 3000 ms**; each move takes **800 ms** (`speed:800`). Sampled over 8 s:
  `-3679.88` (3 s) → `-3986.53` (3 s) → `-4293.19` (3 s).
- **Loop:** `type: "loop"` → infinite; 6 clones prepended + 5 appended; visible window is always 3 slides. `Splide#clone` nodes carry `aria-hidden="true"`.
- **Drag:** `splide--draggable` class present (`is-overflow` too) — drag is enabled.
- **Pause:** `pauseOnHover:false`, `pauseOnFocus:false` — never pauses.
- **Not a marquee:** it does not move continuously; it jumps one slide every 3 s with an 800 ms easing.

### Container entrance animation
- **Trigger:** `contentLoaded` → `startAnimation`, `animationType:"fadeInRight"`, `delay:"1.4s"`.
- **State A:** `opacity:0` (`data-interaction-hidden-on-load="1"`).
- **State B:** `opacity:1`, end state `animation-name:none`.
- **Transition:** `.brx-animated { animation-duration:1s; animation-fill-mode:both }` + `.brx-animate-fadeInRight { animation-name: fadeInRight }` with `animation-delay:1.4s`.

### Hover states
None. No `:hover` rule exists for `#brxe-cbrvmp`, `#brxe-peirgl`, `#brxe-ccgjmd`, the slides or the images (verified against the full list of `:hover` rules in the document). Slides are not links.

## Carousel configuration (verbatim `data-splide`)
```json
{
  "type": "loop",
  "direction": "ltr",
  "keyboard": "global",
  "height": "140px",
  "gap": "40px",
  "start": 0,
  "perPage": 3,
  "perMove": 1,
  "speed": "800",
  "interval": "3000",
  "autoHeight": false,
  "autoplay": true,
  "pauseOnHover": false,
  "pauseOnFocus": false,
  "arrows": false,
  "pagination": false,
  "mediaQuery": "max",
  "breakpoints": {
    "1279": { "height": "140px", "gap": "40px", "perPage": 3, "speed": "800", "autoplay": true },
    "767":  { "perPage": 2 },
    "478":  { "perPage": 1 }
  }
}
```

## Carousel / multi-state content — all 11 slides (DOM order = slide index 0…10)
| # | `id` | `alt` | intrinsic w×h | URL (`data-src`/`src`) |
|---|---|---|---|---|
| 1 of 11 | `brxe-gapcha` | `Humana_logo` | 249×54 | `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2025/08/Humana_logo-1.webp?fit=249%2C54&ssl=1` |
| 2 of 11 | `brxe-qvdxrr` | `guardian-logo` | 269×70 | `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2025/08/guardian-logo-1.webp?fit=269%2C70&ssl=1` |
| 3 of 11 | `brxe-gnbuxr` | `logo metlife` | 200×44 | `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2025/08/g74.webp?fit=200%2C44&ssl=1` |
| 4 of 11 | `brxe-fdnlul` | `aetna-logo` | 300×150 | `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2025/08/aetna-logo.webp?fit=300%2C150&ssl=1` |
| 5 of 11 | `brxe-yxcvgw` | `ameritas-logo` | 900×314 | `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2025/08/ameritas-logo.webp?fit=900%2C314&ssl=1` · srcset: `…ameritas-logo.webp?w=900&ssl=1 900w, …resize=300%2C105&ssl=1 300w, …resize=768%2C268&ssl=1 768w` |
| 6 of 11 | `brxe-ehsjvo` | `logo Blue-Cross-Blue` | 1024×576 | `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2025/08/Blue-Cross-Blue.webp?fit=1024%2C576&ssl=1` · srcset: `?w=1024&ssl=1 1024w, ?resize=300%2C169&ssl=1 300w, ?resize=768%2C432&ssl=1 768w` |
| 7 of 11 | `brxe-chrong` | `careington logo` | 509×150 | `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2025/08/careington.webp?fit=509%2C150&ssl=1` · srcset: `?w=509&ssl=1 509w, ?resize=300%2C88&ssl=1 300w` |
| 8 of 11 | `brxe-bztnqw` | `Cigna-logo` | 1024×444 | `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2025/08/Cigna-logo-.webp?fit=1024%2C444&ssl=1` · srcset: `?w=1024&ssl=1 1024w, ?resize=300%2C130&ssl=1 300w, ?resize=768%2C333&ssl=1 768w` |
| 9 of 11 | `brxe-caigcu` | `logo delta dental` | 1024×205 | `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2025/08/dental.webp?fit=1024%2C205&ssl=1` · srcset: `?w=1024&ssl=1 1024w, ?resize=300%2C60&ssl=1 300w, ?resize=768%2C154&ssl=1 768w` |
| 10 of 11 | `brxe-kkvkzx` | `logo florida combined life` | 300×100 | `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2025/08/florida.webp?fit=300%2C100&ssl=1` |
| 11 of 11 | `brxe-jxqouf` | `Sun_Life_Logo` | 620×264 | `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2025/08/Sun_Life_Logo.webp?fit=620%2C264&ssl=1` |

All 11 logos are hosted on the Jetpack/Photon CDN `i0.wp.com`. `start: 0` means the initial view is slides 1–3 (Humana / Guardian / MetLife); the strip is circular so any starting point looks equivalent.

## Text Content (verbatim)
No visible text — the section contains only images. Alt texts (used as the only text content):
`Humana_logo`, `guardian-logo`, `logo metlife`, `aetna-logo`, `ameritas-logo`, `logo Blue-Cross-Blue`, `careington logo`, `Cigna-logo`, `logo delta dental`, `logo florida combined life`, `Sun_Life_Logo`.

## Responsive Behavior
Not measured (no responsive work assigned). From the `data-splide` breakpoints and CSS media queries read:
- **≥1280px:** `perPage:3`, `gap:40px`, `height:140px`, `speed:800`, `autoplay:true`.
- **768–1279px:** `perPage:3` (the `1279` breakpoint re-states the same values).
- **480–767px:** `perPage:2`; section margin `60px 0`; slider width still 80%.
- **≤477px:** `perPage:1`; section margin `40px 0`; slider `width:70%`; inner container `height:280px`.
- `mediaQuery: "max"` → breakpoints apply at max-width.

## Design tokens
None specific to this component (inherits `color: rgb(54,54,54)`; transparent backgrounds).
