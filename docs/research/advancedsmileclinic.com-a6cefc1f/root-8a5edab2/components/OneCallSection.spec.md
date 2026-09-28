# OneCallSection Specification

## Overview
- **Target file:** `src/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/OneCallSection.tsx`
- **Screenshot:** `docs/design-references/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/onecall-1440.png`
- **Interaction model:** hover (two radial-fill tel buttons). Static otherwise.
- **Live geometry:** logo+headline row `DIV#brxe-hvnpwj` document y **6395.47 → 6765.52** (h 370.05); tel row `DIV#brxe-isldso` y **6805.52 → 6860.11** (h 54.59).
- **Selector note (important):** the brief listed this section as `#brxe-oxjdlg`, but `#brxe-oxjdlg` (y 6960 → 7729) actually holds the **testimonials carousel** — see `TestimonialsSection.spec.md`. The one-call content described in the brief (logo `Logo-Advance-Smile-Dental-Clinic-01-2.webp`, "Your perfect smile starts with one call", "Let's make it happen!", two tel links) lives at `#brxe-hvnpwj` + `#brxe-isldso`, which are DOM children of `SECTION#brxe-bqoeeh` (the Why-Choose-Us section, which ends at 6960.11). It is visually a distinct block: it sits after the cards, separated by a 2px top rule, inside the beige `rgb(246,244,242)` band.
- Raw data: `raw/onecall.json` (also embedded in `raw/whychooseus.json` and `raw/testimonials.json`).

## DOM Structure
```
DIV#brxe-hvnpwj .brxe-container.bricks-lazy-hidden   (162.5, 6395.47, 1100×370.05)
├─ DIV#brxe-pnrgkd .brxe-block                       (182.5, 6457.47, 409.95×308.05, padding 40, col/center/center)
│  └─ IMG#brxe-wyjiai .brxe-image.css-filter.size-full   (222.5, 6497.47, 329.95×228.05)
│        alt "Logo Advance Smile Dental Clinic"
└─ DIV#brxe-jjdurc .brxe-block                       (632.45, 6492.98, 610.05×237, col, justify center, align flex-start, row-gap 20, align-self center)
   ├─ H2#brxe-xodbss  "Your perfect smile starts with one call"   (632.45, 6492.98, 610.05×168 → 2 lines)
   └─ H2#brxe-vtdqzm  "Let’s make it happen!"                     (632.45, 6680.98, 372.23×49)

DIV#brxe-isldso .brxe-container.bricks-lazy-hidden   (162.5, 6805.52, 1100×54.59)
├─ DIV#brxe-qpkmop .brxe-divider.horizontal          (162.5, 6831.81, 440×2)
│  └─ DIV.line  (border-top: 2px solid rgb(98,84,78), width 440px)
├─ DIV#brxe-sanddn .brxe-block                       (602.5, 6805.52, 605×54.59, padding 0 20, justify center, gap 20)
│  ├─ A#brxe-nfmpvj .btn-radial-4 "Hialeah (305) 846-7987"   (637.73, 6805.52, 235.92×54.59)
│  └─ A#brxe-kklsnf .btn-radial-5 "Coral Gables (786) 391-0588" (893.66, 6805.52, 278.61×54.59)
└─ DIV#brxe-mnsjan .brxe-divider.horizontal          (1207.5, 6831.81, 55×2)
   └─ DIV.line  (border-top: 2px solid rgb(98,84,78), width 55px)
```
Row math: 440 + 605 + 55 = 1100 (the divider line widths exactly frame the buttons).

## Computed Styles (exact values from getComputedStyle)

### Container `#brxe-hvnpwj`
- `width:1100px; margin:140px 162.5px 0; padding:60px 20px 0`
- `display:flex; flex-direction:row; align-items:flex-start; gap:40px`
- `border-top: 2px solid rgb(98, 84, 78)` (Bricks var `--bricks-color-9616c1` = `#62544e`… resolved value is `rgb(98,84,78)`)
- `height:370.047px`, `max-width:100%`. Background comes from the section: `rgb(246, 244, 242)`.

### Logo column `#brxe-pnrgkd` + `IMG#brxe-wyjiai`
- Column: `width:409.95px; height:308.05px; padding:40px; flex-direction:column; justify-content:center; align-items:center`
- Image box: `329.95 × 228.05`, `display:block; overflow:clip; object-fit:fill; object-position:50% 50%`
- Intrinsic 667×461 (ratio 1.4469 ≈ box ratio 1.4468 → no distortion). `filter:none`, `transition:none`.
- `src` after lazy-load: `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2025/08/Logo-Advance-Smile-Dental-Clinic-01-2.webp?fit=667%2C461&ssl=1`
- `srcset`: `…?w=667&ssl=1 667w, …?resize=300%2C207&ssl=1 300w` (rendered src = `fit=667,461` variant)

### Headline column `#brxe-jjdurc`
- `width:610.05px; height:237px; flex-direction:column; justify-content:center; align-items:flex-start; row-gap:20px; align-self:center`
- `H2#brxe-xodbss`: `font-family:"Playfair Display"; font-weight:600; font-size:60px; line-height:84px; color:rgb(118, 97, 72)` → wraps to 2 lines (168px)
- `H2#brxe-vtdqzm`: `font-family:Poppins; font-weight:400; font-size:35px; line-height:49px; color:rgb(164, 153, 132)`

### Tel row `#brxe-isldso`
- `width:1100px; margin:40px 162.5px 0; display:flex; align-items:center; height:54.594px`
- Dividers `#brxe-qpkmop` / `#brxe-mnsjan`: `display:flex; align-items:center; gap:30px`; inner `.line` = `height:2px; border-top:2px solid rgb(98,84,78); background:transparent`, widths **440px** and **55px**
- `#brxe-sanddn`: `width:605px; padding:0 20px; display:flex; justify-content:center; align-items:flex-start; gap:20px`
- Both buttons: `font-family:Lato; font-weight:600; font-size:18px; line-height:30.6px; letter-spacing:0.5px; color:rgb(255,255,255); border-radius:40px; padding:12px 18px; display:flex; justify-content:center; align-items:center; gap:10px; border:0; overflow:hidden; position:relative; z-index:99; transition:0.3s; cursor:pointer; text-align:center`
- `A#brxe-nfmpvj` **Hialeah**: `background-color: rgb(164, 153, 132)` (#A49984) · href `tel:(305) 846-7987` · 235.92×54.59
- `A#brxe-kklsnf` **Coral Gables**: `background-color: rgb(118, 97, 72)` (#766148) · href `tel:786 391 0588` · 278.61×54.59

## States & Behaviors

### Hover — `#brxe-nfmpvj` (`.btn-radial-4`)
- **State A:** base bg `rgb(164,153,132)`; `::before { left:50%; bottom:0; width:0; height:0; background:linear-gradient(45deg, rgb(118,97,72), rgb(118,97,72)); border-radius:50%; transform:translateX(-50%); z-index:-1; opacity:0 }`
- **State B:** `width:120%; height:250px; bottom:-125px; opacity:1` → brown circle rises over the tan pill
- **Transition:** `0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)`; shell `transition:0.3s`
- `#brxe-nfmpvj:hover { color: var(--bricks-color-b92a3f) }` = `#ffffff` (no visual change)

### Hover — `#brxe-kklsnf` (`.btn-radial-5`)
- Same geometry; `::before` background is `linear-gradient(45deg, rgb(164,153,132), rgb(164,153,132))` → **tan circle rises over the brown pill** (the two buttons swap accents on hover)

### Scroll reveals / click
- **N/A.** No `brx-animated`/animate.css classes and no `animation-name ≠ none` anywhere in `#brxe-hvnpwj` / `#brxe-isldso`. Links are plain `tel:` anchors (default cursor pointer, no JS handler).

## Carousel / multi-state content
N/A.

## Assets
| Element | URL | alt / notes | Intrinsic | Rendering |
|---|---|---|---|---|
| `IMG#brxe-wyjiai` | `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2025/08/Logo-Advance-Smile-Dental-Clinic-01-2.webp?fit=667%2C461&ssl=1` | `Logo Advance Smile Dental Clinic` | 667×461 | 329.95×228.05, `object-fit:fill`, centred in a 409.95×308.05 padded (40px) column |
| srcset alternates | `…?w=667&ssl=1` (667w), `…?resize=300%2C207&ssl=1` (300w) | — | — | — |

## Text Content (verbatim)
- H2: Your perfect smile starts with one call
- H2: Let’s make it happen!
- Link 1: Hialeah (305) 846-7987 → `tel:(305) 846-7987`
- Link 2: Coral Gables (786) 391-0588 → `tel:786 391 0588`

## Responsive Behavior
Not measured (brief restricts responsive work to one agent). From CSS media queries read in the page stylesheets:
- `992–1080px`: both tel buttons `font-size:16px`
- `≤991px`: both tel buttons `width:100%`
- `≤767px`: both tel buttons `width:90%`; `#brxe-isldso{margin-top:40px}`
- `≤478px`: both tel buttons `width:100%`
- Layout implies the `#brxe-hvnpwj` row (logo | headline) stacks and the divider/button row reflows below 992px; not verified visually.
