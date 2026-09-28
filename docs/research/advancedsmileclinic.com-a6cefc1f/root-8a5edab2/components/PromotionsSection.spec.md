# PromotionsSection Specification

## Overview
- **Target file:** `src/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/PromotionsSection.tsx`
- **Screenshot:** `docs/design-references/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/promotions-1440.png`
- **Interaction model:** hover (radial-fill phone buttons) + time-driven reveal (contentLoaded `fadeInLeft`/`fadeInRight` @ 1.4s)
- **Source root:** `section#brxe-chdgmh` — page y 3352.6, 1425 × 550.56
- **Note:** the "promo cards" from the brief are NOT in this section — `#brxe-chdgmh` only holds the copy block + one photo. The three cards (`#bloquen1-3`) belong to the next section, `#brxe-cglzwm` (see `NewPatientSpecial.spec.md`).

## DOM Structure
```
section#brxe-chdgmh .brxe-section           1425×550.56, flex row, align-items:center, column-gap:50px
├─ div#brxe-ufhwcb .brxe-container          592.03×548.56 at x=30 (left column), z-index:2, position:relative
│  └─ div#brxe-gjywyx .brxe-block.br-animated   572.03×488.56, flex column, align-items:flex-start
│     ├─ h2#brxe-gugkkr   "Affordable Dental Care with"      (eyebrow)
│     ├─ h2#brxe-zhyaut   "Special Promotions"               (title, wraps to 2 lines)
│     ├─ div#brxe-xxhtef .brxe-text > p                      (paragraph, margin-top 40px)
│     └─ div#brxe-ajjhfm .brxe-block                         572.03×66.59, flex row, gap:40px, margin-top 40px
│        ├─ a#brxe-epafbj .btn-radial-4 "Hialeah (305) 846-7987"   href="tel:(305) 846-7987"
│        └─ a#brxe-wtiidn .btn-radial-4 "Coral Gables (786) 391-0588" href="tel:786 391 0588"
└─ div#brxe-anuaxv .brxe-container          722.97×500 at x=672, z-index:3, flex row, justify-content:space-between, column-gap:40px
   └─ div#brxe-npzwwt .brxe-block.br-animated   722.97×600, margin-top:-100px (top edge = page y 3278.9, i.e. 100px ABOVE the section top), EMPTY element, background is the photo
```

## Computed Styles (exact values from getComputedStyle)

### Container `section#brxe-chdgmh`
- `padding:0px 30px; margin:140px 0px 0px; width:1425px; height:550.562px; display:flex; align-items:center; gap:normal 50px` (no background → transparent/white page)
- Note the `margin-top:140px` creates the gap after the services section; content row is 30 → 1395 horizontally.

### Left column `#brxe-ufhwcb`
- `padding:60px 0px 0px 20px; width:592.031px; height:548.562px; display:flex; align-items:flex-start; gap:normal 40px; position:relative; z-index:2`
- `#brxe-gjywyx`: `width:572.031px; height:488.562px; display:flex; flex-direction:column; align-items:flex-start; animation:1s both` + `data-interactions=[{"id":"djkoin","trigger":"contentLoaded","action":"startAnimation","animationType":"fadeInLeft","delay":"1.4s"}]`, `data-interaction-hidden-on-load="1"`
- `h2#brxe-gugkkr` (eyebrow): `font-size:35px; font-weight:400; font-family:Poppins; line-height:49px; color:rgb(164,153,132)` — rect 483.14×49
- `h2#brxe-zhyaut` (title): `font-size:70px; font-weight:600; font-family:"Playfair Display"; line-height:70px; color:rgb(118,97,72)` — rect 572.03×140 (two lines)
- `#brxe-xxhtef .brxe-text` / `p`: `font-size:18px; font-family:Lato; line-height:30.6px; color:rgb(51,51,51); margin:40px 0px 0px; width:572.031px; height:152.97px`
- `#brxe-ajjhfm`: `margin:40px 0px 0px; width:572.031px; height:66.594px; display:flex; align-items:flex-start; gap:40px`
- `a#brxe-epafbj` (Hialeah): `font-size:18px; font-weight:600; font-family:Lato; line-height:30.6px; letter-spacing:0.5px; color:rgb(255,255,255); background-color:rgb(164,153,132); padding:18px; width:235.922px; height:66.594px; display:flex; justify-content:center; align-items:center; gap:10px; border-radius:40px; overflow:hidden; position:relative; z-index:99; transition:0.3s; text-align:center`
- `a#brxe-wtiidn` (Coral Gables): identical metrics, `background-color:rgb(133,141,130); width:278.609px; height:66.594px`

### Right column `#brxe-anuaxv` + photo
- `#brxe-anuaxv`: `width:722.969px; height:500px; display:flex; justify-content:space-between; align-items:flex-start; gap:normal 40px; z-index:3`
- `#brxe-npzwwt` (photo): `background-image:url("https://advancedsmileclinic.com/wp-content/uploads/2026/06/DSC8482-2.webp"); background-size:cover; background-position:50% 50%; margin:-100px 0px 0px; width:722.969px; height:600px; display:flex; flex-direction:column; align-items:flex-start; border-radius:40px; animation:1s both` — element is EMPTY (pure CSS background, no overlay/gradient, no children)
- Document rect: x 672.03 → 1395, y 3278.9 → 3878.9 (overhangs the section's top edge by 100px and its bottom by ~178px, since the container is only 500px tall; `overflow:visible`)
- `data-interactions=[{"id":"ghiaeg","trigger":"contentLoaded","action":"startAnimation","animationType":"fadeInRight","delay":"1.4s"}]`, `data-interaction-hidden-on-load="1"`

## States & Behaviors

### Reveal animations
- **Trigger:** `contentLoaded` (page load, NOT scroll) with `delay:1.4s`; elements start hidden (`data-interaction-hidden-on-load="1"` → `opacity:0` via `.bricks-is-frontend ... [data-interaction-hidden-on-load]`).
- **State A:** `opacity:0` at t<1.4s. **State B:** animate.css `fadeInLeft` (left column) / `fadeInRight` (photo), `animation-duration:1s`, `animation-fill-mode:both`; end state fully visible, no transform.
- **Implementation approach:** Bricks interaction JSON in `data-interactions`; replicate with a CSS animation started 1.4s after mount.

### Radial hover fill on the phone pills (`.btn-radial-4`)
- **Trigger:** `:hover`
- **State A (`::before`):** `width:0; height:0; bottom:0; left:50%; background:linear-gradient(45deg, rgb(118,97,72), rgb(118,97,72)); border-radius:50%; transform:translateX(-50%); opacity:0; z-index:-1; transition:0.4s cubic-bezier(0.25,0.46,0.45,0.94)`
- **State B (measured on `#brxe-epafbj:hover`):** `width:283.094px (120% of 235.92); height:250px; bottom:-125px; opacity:1`
- The pill's own `background-color` (taupe `rgb(164,153,132)` / sage `rgb(133,141,130)`) and white text stay unchanged; the expanding brown circle (`overflow:hidden` + `border-radius:40px` clip) is the visible hover state. `transition:0.3s` on the button itself (no other props change).

## Carousel / multi-state content
N/A — no carousel, tabs, or multi-state content in this section.

## Assets
| Element | URL | Intrinsic size | Rendering |
|---|---|---|---|
| `#brxe-npzwwt` photo | `https://advancedsmileclinic.com/wp-content/uploads/2026/06/DSC8482-2.webp` | 1300 × 730 | CSS background, `cover`, `background-position:50% 50%`, box 722.97 × 600, `border-radius:40px`, no overlay/gradient, no alt |

No `<img>` tags in this section.

## Text Content (verbatim)
- h2 (eyebrow): `Affordable Dental Care with`
- h2 (title): `Special Promotions`
- p: `At Advanced Smile Dental Clinic, we’re making it easier (and more affordable) to love your smile. Take advantage of our exclusive Patient Specials and get the care you deserve—without breaking the bank. Now is the perfect time to schedule your visit and see how we can transform your smile!`
- link 1: `Hialeah (305) 846-7987` → `tel:(305) 846-7987`
- link 2: `Coral Gables (786) 391-0588` → `tel:786 391 0588`

## Responsive Behavior
Not measured (1440px only). Inferred from CSS read at 1440: no media-query rules were found targeting `#brxe-chdgmh`, `#brxe-ufhwcb`, `#brxe-anuaxv` or the phone buttons, so the flex row layout, 592/723 column widths, the `-100px` photo offset and the 70px title are assumed to hold across breakpoints (Bricks normally collapses two-column containers to a single column below ~767px, but no such rule was present in the stylesheets for these selectors — treat as unverified).
