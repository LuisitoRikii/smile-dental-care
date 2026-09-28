# WhyChooseUsSection Specification

## Overview
- **Target file:** `src/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/WhyChooseUsSection.tsx`
- **Screenshot:** `docs/design-references/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/whychooseus-1440.png` (top), `whychooseus-1440-b.png` (cards 3–5 + button), `whychooseus-1440-hover.png` (card hover state)
- **Interaction model:** hover (card wipe + text color; button radial fill). No click, no scroll-reveal, no carousel.
- **Live geometry:** `SECTION#brxe-bqoeeh` document y **5168.78 → 6960.11** (h **1791.33**, w 1425 = 1440 − 15px scrollbar).
- **Selector note:** the brief lists 4 children. The 3rd and 4th (`#brxe-hvnpwj`, `#brxe-isldso`) are the **one-call block** and are specced in `OneCallSection.spec.md` — they really are DOM children of this section (`padding-bottom:100px` sits after them). All coordinates below are document coordinates at 1440×900; section-relative y = doc-y − 5168.78.

## DOM Structure
```
SECTION#brxe-bqoeeh .brxe-section                     (0, 5168.78, 1425×1791.33)
├─ DIV#brxe-nhxjnp .brxe-container                    (+200 → 5368.78, 1425×147, mb 100)
│  ├─ H2#brxe-jdugnq .brxe-heading  "Patient-First Dentistry You Can Trust"   (40, 5368.78, 626.78×49)
│  └─ H2#brxe-fxsmnr .brxe-heading  "Why Choose Us!"                          (40, 5417.78, 508.77×98)
├─ DIV#brxe-qtkukd .brxe-container                    (0, 5615.78, 1425×639.69)  ← 3-col row 45% / 10% / 45%
│  ├─ DIV#brxe-ijnpve .brxe-block.bricks-lazy-hidden (display:none ≥992)       ← mobile-only photo
│  │  └─ IMG#brxe-grdcna  alt "two sisters smiling showing braces"
│  ├─ DIV#brxe-pxyucc .brxe-block                     (0, 5615.78, 641.25×639.69, col, row-gap 4)
│  │  ├─ DIV#brxe-mobzzz .efectocargarfondo           (0, 5615.78, 641.25×210.56)  CARD 1 LEFT
│  │  │  ├─ H3#brxe-bisivc  "We Treat You Like Family"
│  │  │  └─ DIV#brxe-vbyxjr .brxe-text > P
│  │  ├─ DIV#brxe-ybvbgs .efectocargarfondo           (0, 5830.34, 641.25×210.56)  CARD 2 LEFT
│  │  │  ├─ H3#brxe-jedxne  "Family-Owned, Family-Focused"   + DIV#brxe-wlimef > P
│  │  └─ DIV#brxe-cnsgjx .efectocargarfondo           (0, 6044.91, 641.25×210.56)  CARD 3 LEFT
│  │     ├─ H3#brxe-mqzieg  "Your Smile, Your Needs"         + DIV#brxe-wijvmt > P
│  ├─ DIV#brxe-xqvvfb .contenedor-medio               (641.25, 5615.78, 142.5×550)  ← CENTRE column (empty; photo is ::after)
│  └─ DIV#brxe-jnjweu .brxe-block                     (783.75, 5535.78, 641.25×583.53, margin-top -80)
│     ├─ DIV#brxe-wsjbxu .efectocargarfondo           (783.75, 5535.78, 641.25×183.38)  CARD 4 RIGHT
│     │  ├─ H3#brxe-mwlmig  "Everything You Need, All in One Place" + DIV#brxe-myvebe > P
│     ├─ DIV#brxe-xgzeey .efectocargarfondo           (783.75, 5723.16, 641.25×245.56)  CARD 5 RIGHT
│     │  ├─ H3#brxe-finhyi  "Comfortable, Quality Care — On Your Time" + DIV#brxe-vmpdux > P
│     └─ DIV#brxe-dapmua .brxe-block                  (783.75, 5972.72, 641.25×146.59, padding-top 80)
│        └─ A#brxe-hdkyrh .btn-radial-4 "BOOK ONLINE" (1012.16, 6052.72, 184.44×66.59)
├─ DIV#brxe-hvnpwj  ← one-call block, see OneCallSection.spec.md   (162.5, 6395.47, 1100×370.05)
└─ DIV#brxe-isldso  ← one-call tel row, see OneCallSection.spec.md (162.5, 6805.52, 1100×54.59)
```
Card order: **left column = cards 1,2,3** (x 0–641.25); **right column = cards 4,5** (x 783.75–1425, pulled up 80px); the photo sits in the 142.5px centre gutter but overflows it.

## Computed Styles (exact values from getComputedStyle)

### Container `#brxe-bqoeeh`
- `background-color: rgb(246, 244, 242)` · `padding: 200px 0px 100px` · `display:flex; flex-direction:column; align-items:center`
- `height: 1791.33px` · `min-width:0; max-width:100%; min-height:0`
- No border, no radius, no shadow. Media: `≤767px` and `≤478px` → `padding-top:140px`.

### Heading block `#brxe-nhxjnp`
- `padding: 0 0 0 40px` · `margin: 0 0 100px` · `display:flex; flex-direction:column; align-items:flex-start` · `height:147px`
- `H2#brxe-jdugnq`: `font-family: Poppins; font-weight:400; font-size:35px; line-height:49px; color:rgb(108, 93, 61); text-align:start`
- `H2#brxe-fxsmnr`: `font-family:"Playfair Display"; font-weight:600; font-size:70px; line-height:98px; color:rgb(118, 97, 72)`

### Cards row `#brxe-qtkukd`
- `display:flex; align-items:flex-start; width:100% (1425); height:639.688px`
- `#brxe-pxyucc` (left): `width:45% (641.25px); flex-direction:column; align-items:flex-start; row-gap:4px`
- `#brxe-xqvvfb` (centre): `width:10% (142.5px); height:550px; flex-direction:column; align-items:flex-start` → `display:none` at `≤991px`
- `#brxe-jnjweu` (right): `width:45% (641.25px); margin-top:-80px; flex-direction:column; row-gap:4px` → `≤991px: width:100%; margin-top:0`
- `≤991px`: row becomes `flex-direction:column; row-gap:4px`

### Card (all five `.efectocargarfondo`)
- `background-color: rgb(238, 231, 224)` · `border-radius:0` · `box-shadow:none` · `border:none`
- `display:flex; flex-direction:column; align-items:flex-start; row-gap:14px`
- `position:relative; overflow:hidden; z-index:0` (from `.efectocargarfondo`)
- padding left column cards (`#brxe-mobzzz/ybvbgs/cnsgjx`): `40px 140px 40px 40px`
- padding right column cards (`#brxe-wsjbxu/xgzeey`): `40px 40px 40px 140px`
- media: `≤991px → padding-inline 80px` · `≤767px → 40px` · `≤478px → 20px`
- card `H3`: `font-family:"Playfair Display"; font-weight:700; font-size:25px; line-height:35px; color:rgb(98, 84, 78); text-align:left; transition: color 0.8s ease-in`
  (card 5 H3 wraps to 2 lines → 70px tall)
- card `.brxe-text > P`: `font-family:Lato; font-weight:400; font-size:16px; line-height:27.2px; color:rgb(98, 84, 78); text-align:left; transition: color 0.8s ease-in`
- text widths: left cards 461.25px (641.25 − 40 − 140); right cards 461.25px

### Centre photo — `#brxe-xqvvfb::after` (no `<img>`, it is a CSS background)
- `content:""; position:static; width:450px; height:550px; z-index:99; pointer-events:none`
- `top:50%; left:50%; transform: translate(-162px, -82.5px)` = `translate(-36%, -15%)`, `transform-origin: 225px 275px`
  → painted box = document **x 479.25, y 5533.28, 450×550** (overflows the 142.5px gutter by design)
- `background: url(Group-13.webp) center center / 90% auto no-repeat` (90% → 405px wide)
- `≥2000px` variant: `transform: translate(-30%, -15%)`
- Source image intrinsic **479 × 601**; it already contains the white rounded card + soft shadow (no CSS radius/shadow is applied to the photo).

### Button wrapper `#brxe-dapmua`
- `padding:80px 0 0` · `display:flex; flex-direction:column; justify-content:center; align-items:center; align-self:center` · `width:641.25; height:146.594`
- `≤991px: padding-inline 30px` · `≤767px: padding-top 40px` · `≤478px: padding-inline 20px`

### Button `A#brxe-hdkyrh .btn-radial-4` → `https://advancedsmileclinic.com/contact-us/`
- base: `background-color: rgb(133, 141, 130)` (`var(--bricks-color-902b2a)` = `#858d82`, **sage green — not the site brown**)
- `color: rgb(255,255,255)` · `font-family:Lato; font-weight:600; font-size:18px; line-height:30.6px; letter-spacing:0.5px`
- `padding:18px 28px` · `border-radius:40px` · `border:0` · `box-shadow:none`
- `display:flex; justify-content:center; align-items:center; gap:10px` · `text-align:center` · `cursor:pointer`
- `position:relative; overflow:hidden; z-index:99; transition:0.3s`
- `184.44 × 66.59` at document (1012.16, 6052.72)
- media: `≤767px → width:90%` · `≤478px → width:90%; font-size:16px; padding-inline:10px`

## States & Behaviors

### Card hover (`.efectocargarfondo`) — the signature interaction
- **Trigger:** pointer enters the card block (`:hover`, no JS).
- **State A:** `::before { content:""; position:absolute; inset:0; background:linear-gradient(90deg, rgb(118,97,72), rgb(118,97,72)); z-index:-1; clip-path:circle(0% at 0% 50%) }`; H3 + P color `rgb(98, 84, 78)`.
- **State B:** `::before { clip-path:circle(150% at 50% 50%) }`; H3 and P color `rgb(255, 255, 255)`.
- **Transition:** `clip-path 0.8s ease-in-out` (layer) and `color 0.4s ease-out` (text, via `#brxe-mobzzz:hover h3` / `:hover p`); resting text has `transition: color 0.8s ease-in`.
- **Verified live:** hovering H3 "We Treat You Like Family" → clip `circle(150% at 50% 50%)`, H3 `rgb(255,255,255)`, inner P `rgb(255,255,255)`; leaving → back to `circle(0% at 0% 50%)` / `rgb(98,84,78)`.
- **Implementation approach:** absolutely-positioned `::before` with `z-index:-1` inside `overflow:hidden` parent + clip-path circle animation; duplicate rules exist for all five card IDs.
- The card itself is **not** a link (`cursor:default`).

### Button hover (`.btn-radial-4`)
- **State A:** `::before { left:50%; bottom:0; width:0; height:0; background:linear-gradient(45deg, rgb(118,97,72), rgb(118,97,72)); border-radius:50%; transform:translateX(-50%); z-index:-1; opacity:0 }`.
- **State B:** `width:120%` (observed 221.312px), `height:250px`, `bottom:-125px`, `opacity:1` (brown circle rises from the bottom).
- **Transition:** `0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)`; button shell `transition: 0.3s`.
- Base bg/color/shadow/transform do **not** change on hover.

### Scroll reveals
- **N/A.** Zero elements inside `#brxe-bqoeeh` have `animation-name ≠ none` and none carry `brx-animated` / animate.css classes. `bricks-lazy-hidden` on `#brxe-ijnpve` is Bricks' lazy-image marker only (no visual effect at ≥992px where the block is `display:none`).

## Carousel / multi-state content
N/A (no slider in this section).

## Assets
| Where | URL | alt / notes | Intrinsic | Rendering |
|---|---|---|---|---|
| centre photo `::after` | `https://advancedsmileclinic.com/wp-content/uploads/2025/08/Group-13.webp` | (CSS bg, no alt) — mother + daughter in a white rounded card with shadow | 479×601 | 450×550 box, `background-size:90% auto`, `center center` |
| hidden mobile photo `#brxe-grdcna` | `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2025/08/shutterstock_346764275-11-1.webp?fit=399%2C521&ssl=1` | `two sisters smiling showing braces` (lazy: real value in `data-src`) | 399×521 | `≤991px` only: `border:12px solid rgba(98,84,78,0.01); border-radius:40px; box-shadow:rgba(98,84,78,0.25) 0 4px 40px 0`; centred, `margin:40px 0`, `width:100%` |
| (one-call logo, nested here) | see `OneCallSection.spec.md` | — | — | — |

## Text Content (verbatim)
**Eyebrow (H2):** Patient-First Dentistry You Can Trust
**Title (H2):** Why Choose Us!

**Card 1 — LEFT (y 5615.78)**
- We Treat You Like Family
- At Advanced Smile, you’re more than just a patient — you’re family. We take pride in building real relationships with the people we care for.

**Card 2 — LEFT (y 5830.34)**
- Family-Owned, Family-Focused
- As a family-owned practice in Coral Gables and Hialeah, we’re here to care for your whole family with general, cosmetic, and emergency dentistry — no appointment needed for urgent visits.

**Card 3 — LEFT (y 6044.91)**
- Your Smile, Your Needs
- We’re here to help you achieve your healthiest smile. That starts with listening — really listening — to your goals, concerns, and feedback.

**Card 4 — RIGHT (y 5535.78, offset up 80px)**
- Everything You Need, All in One Place
- From cleanings and fillings to crowns, whitening, and Invisalign, we offer a full range of services to keep your smile in top shape.

**Card 5 — RIGHT (y 5723.16)**
- Comfortable, Quality Care — On Your Time
- We’re committed to providing high-quality, efficient care in a welcoming environment, with flexible hours that work around your schedule.

**Button:** BOOK ONLINE

## Responsive Behavior
Not measured (brief restricts responsive work to one agent). From CSS media queries read in the page stylesheets:
- `≤991px`: 3-col row → column (`#brxe-qtkukd` `flex-direction:column; row-gap:4px`), centre photo column hidden (`#brxe-xqvvfb{display:none}`), left/right columns `width:100%`, right column `margin-top:0`, mobile photo `#brxe-ijnpve` revealed (`display:flex; width:100%; margin:40px 0`), card padding-inline 80px, button wrapper padding-inline 30px.
- `≤767px`: card padding-inline 40px; `#brxe-dapmua{padding-top:40px}`; button `width:90%`; section `padding-top:140px`.
- `≤478px`: card padding-inline 20px; button `width:90%; font-size:16px; padding-inline:10px`; section `padding-top:140px`.
- `≥2000px`: centre photo transform changes to `translate(-30%, -15%)`.
