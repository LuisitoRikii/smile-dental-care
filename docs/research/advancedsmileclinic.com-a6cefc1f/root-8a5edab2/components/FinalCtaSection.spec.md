# FinalCtaSection Specification

## Overview
- **Target file:** `src/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/FinalCtaSection.tsx`
- **Screenshots:**
  - `docs/design-references/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/finalcta-1440.png` (main: social row → 3 columns → BLOGS)
  - `…/finalcta-top-1440.png` (intro heading + white logo + social row)
  - `…/finalcta-bottom-1440.png` (BLOGS list + copyright, page end)
  - *(the block is 1661px tall including the intro heading, so 3 frames were needed; the required `finalcta-1440.png` is the main one)*
- **Interaction model:** hover (buttons, social icons) + click-driven links
- **Live geometry:** `footer > section#brxe-jisepk` — top **10550** (`margin-top: -60px`, so it starts 60px *inside* the beige `#bookonline` panel above), height **1352.25** → page bottom **11902**. Intro heading `#brxe-wclcic` (10241 → 10370) is structurally the last child of `#bookonline` (Locations section) but is visually the lead-in of this footer; it is spec'd here as instructed.
- Companion spec: **`FooterBottom.spec.md`** (BLOGS block + copyright) — this file covers intro, logo, social row, divider and the 3 link columns.

## DOM Structure
```
DIV#brxe-wclcic .brxe-block                (10241, 1020×129, inside #bookonline, margin-top 80)
├─ DIV#brxe-ecevvu .brxe-heading  "Two locations. one goal. your best smile."
└─ P#brxe-epziwo   .brxe-heading  "Call now to schedule in Coral Gables or Hialeah!"

SECTION#brxe-jisepk .brxe-section          (10550, 1425×1352, bg brown, margin-top -60)
└─ DIV#brxe-reinkj .brxe-container         (10550, 1100×358, margin 0 162.5)
   └─ DIV#brxe-ibjvef .brxe-block          (padding-bottom 80, row-gap 40, column)
      ├─ DIV#brxe-wvzufn .brxe-block       (10550, 1100×194, align/justify center)
      │  └─ IMG#brxe-khnern                (10430, 440×314, margin-top -120)  ← white logo
      ├─ DIV#brxe-exgvzd .brxe-block       (10784, 1100×43.5, row, justify center, gap 12)
      │  ├─ A > I#brxe-sfypbb.fab.fa-facebook-square.iconsocials
      │  ├─ A > I#brxe-kqnoqk.fab.fa-square-x-twitter.iconsocials
      │  ├─ A > I#brxe-irxing.fab.fa-instagram-square.iconsocials
      │  └─ A > SVG#brxe-jipqxy.iconsocials   (Yelp, inline SVG)
      ├─ DIV#brxe-mnzhzh .brxe-block       (10908, 1425×1, full-bleed white rule)
      └─ DIV#brxe-vjcoge .brxe-container   (10881, 1100×401, margin-top -28, padding 0 20, row, gap 40)
         ├─ DIV#brxe-pdjlww .brxe-block    (10881, 327×401, row-gap 40)
         │  ├─ A#brxe-artufx .btn-radial-1 "DENTAL SERVICES"
         │  └─ UL#brxe-vgsreh .brxe-list    (9 × LI 34px)
         │     └─ LI > DIV.content > SPAN.icon>i.fas.fa-circle + A>SPAN.title
         ├─ DIV#brxe-qrpeph .brxe-block    (10881, 327×227, row-gap 40)
         │  ├─ A#brxe-qvlgkm .btn-radial-1 "BOOK ONLINE HIALEAH"
         │  └─ DIV#brxe-huibzb .brxe-block (row-gap 20)
         │     ├─ UL#brxe-fyglkl > LI > A[tel:(305) 846-7987] > i.fas.fa-phone.icon + span
         │     └─ UL#brxe-wpfbik > LI > A[maps…DmCFC1TUNu56Ze7p6] > i.fas.fa-location-dot.icon + span
         └─ DIV#brxe-zirhax .brxe-block    (10881, 327×227, row-gap 40)
            ├─ A#brxe-isainz .btn-radial-1 "BOOK ONLINE CORAL GABLES"
            └─ DIV#brxe-nlgkes .brxe-block (row-gap 20)
               ├─ UL#brxe-lgionu > LI > A[tel:(786) 391-0588] > i.fas.fa-phone.icon + span
               └─ UL#brxe-onynyd > LI > A[maps…nKJNv3A59U8xCX2Q7] > i.fas.fa-location-dot.icon + span
```
*(BLOGS + copyright siblings — see `FooterBottom.spec.md`.)*

## Computed Styles (exact values from getComputedStyle)

### Container `SECTION#brxe-jisepk`
- background-color `rgb(118, 97, 72)` (rule: `background-color: var(--bricks-color-a037a8)`)
- margin `-60px 0px 0px`; padding `0px`; width `1425px`; height `1352.25px`
- display `flex`; flex-direction `column`; align-items `center`; overflow `visible`; transform `none`; opacity `1`

### Intro block `#brxe-wclcic` (in `#bookonline`)
- width `1020px`; height `129px`; margin `80px 0px 0px`; flex-direction `column`; align-items `center`; justify-content `center`; row-gap `10px`
- `#brxe-ecevvu`: `"Playfair Display"` `40px` / `68px` / weight `600`, color **`rgb(189, 170, 156)`**, `text-align: center`, width `732.562px` (centered in 1020)
- `#brxe-epziwo` (`<p>`): `Poppins` `30px` / `51px` / weight `500`, color **`rgb(98, 84, 78)`**, `text-align: center`, width `725.438px`

### `#brxe-reinkj` / `#brxe-ibjvef`
- `#brxe-reinkj`: width `1100px`; margin `0px 162.5px`; height `357.875px`
- `#brxe-ibjvef`: padding `0px 0px 80px`; row-gap `40px`; flex-direction `column`

### White logo `IMG#brxe-khnern`
- width `440px`; height `314.375px`; margin `-120px 0px 0px` → top **10430** (120px above the section's own top; overlaps the beige panel)
- centered (`#brxe-wvzufn` has `align-items/justify-content: center`); `object-fit: fill` (aspect ratio 655:468 preserved: 440×314.375); `loading="lazy"`
- rule: `#brxe-khnern { width: 440px; margin-top: -120px; }`

### Social row `#brxe-exgvzd`
- height `43.5px`; display `flex`; flex-direction `row`; justify-content `center`; align-items `center`; column-gap `12px`
- each `A.bricks-link-wrapper`: width `35px` (Yelp `36px`), height `42.5px`, `cursor: pointer`
- `I.brxe-icon.iconsocials`: font-family `"Font Awesome 6 Brands"`; font-size `40px`; line-height `40px`; color `rgb(255, 255, 255)`; display `inline-block`; transition **`0.4s`**
- Yelp `SVG#brxe-jipqxy.iconsocials`: `width="36" height="35" viewBox="0 0 36 35" fill="none"`, rendered `36×40`, `margin: 0 0 -4px`, `overflow: hidden`, transition `0.4s`

### Divider `#brxe-mnzhzh`
- width `100%` (1425px, full-bleed); height `1px`; box-sizing `border-box`
- **border-bottom `1px solid rgb(255, 255, 255)`** (rule: `border-bottom: 1px solid var(--bricks-color-b92a3f)`); background transparent
- Positioned at y **10908**; because `#brxe-vjcoge` has `margin-top: -28px`, the rule runs *behind* the three white buttons (visible only in the gutters / outside the columns) — see screenshot.

### Columns row `#brxe-vjcoge`
- width `1100px`; height `400.594px`; margin `-28px 0px 0px`; padding `0px 20px`; flex-direction `row`; column-gap `40px`
- columns at x 183 / 549 / 916, each `326.67px` wide (326.656 in col 2)

### Buttons `#brxe-artufx` / `#brxe-qvlgkm` / `#brxe-isainz` (`.btn-radial-1.bricks-button`)
- font-family `Poppins`; font-size `18px`; font-weight `500`; line-height `30.6px`; letter-spacing `0.5px`; text-transform `none`
- color **`rgb(149, 118, 97)`**; background-color **`rgb(255, 255, 255)`** (`var(--bricks-color-b92a3f)`); width `100%` → used `326.67px`; height `54.594px`
- padding `12px 18px`; border-radius `40px`; border `0px none`; overflow `hidden`; z-index `99`; transition `0.3s`; cursor `pointer`
- `::before`: `content:""`, `position:absolute`, `bottom:0`, `left:50%`, `width:0`, `height:0`, `background: linear-gradient(45deg, rgb(133,141,130), rgb(133,141,130))`, `border-radius:50%`, `transform:translateX(-50%)`, `transition: 0.4s cubic-bezier(0.25,0.46,0.45,0.94)`, `z-index:-1`, `opacity:0`

### Services list `#brxe-vgsreh .brxe-list`
- font-family `Lato`; font-size `20px`; font-weight `500`; line-height `34px`; color `rgb(255, 255, 255)`; width `326.672px`; height `306px` (9 × 34px)
- `LI`: `display: list-item`, `position: relative`, `list-style: none`
- `DIV.content`: `display:flex; align-items:center`; width `327px`; height `34px`
- `SPAN.icon > I.fas.fa-circle`: font-size `8px`, `"Font Awesome 6 Solid"`, color `rgb(255,255,255)`, `::before: "\uf111"` (**U+F111**), box `8×8`
- `A > SPAN.title`: `display:inline-block; margin: 0 10px 0 0` → title starts at x201 (icon 8px + 10px)

### Location mini-blocks (`#brxe-qrpeph`, `#brxe-zirhax`)
- width `326.66px`; height `226.766px`; row-gap `40px`
- `#brxe-huibzb`: row-gap `20px`; height `132.172px` (phone row 37.39 + 20 + address row 74.78)
- Phone `A`: `Lato` `22px` / `37.4px` / weight `500`, color `rgb(255,255,255)`, `display:flex; gap:24px`, `cursor:pointer`; `i.fas.fa-phone.icon` font-size `22px`, `::before` **U+F095**
- Address `A`: same type, `gap:26px`, `i.fas.fa-location-dot.icon` font-size **`28px`**, `::before` **U+F3C5**; wraps to 2 lines → height `74.78px`

## States & Behaviors

### Scroll reveals / animations
- **None.** No `animation-name ≠ none`, no `.brx-animated`, no `data-interactions` inside `#brxe-jisepk` or `#brxe-wclcic`. The `bricks-lazy-hidden` classes only affect `background-image`.

### Hover states (measured with real hover + confirmed from theme rules)
- **White pill buttons** (`DENTAL SERVICES`, `BOOK ONLINE HIALEAH`, `BOOK ONLINE CORAL GABLES`):
  - resting: bg `rgb(255,255,255)`, label `rgb(149,118,97)`, `::before` `width:0;height:0;opacity:0`
  - hovered: label → **`rgb(255, 255, 255)`**; `::before` → `width: 392px; height: 250px; bottom: -125px; opacity: 1; transform: matrix(1,0,0,1,-196,0)` (120% of 326.67) filled with `linear-gradient(45deg, rgb(133,141,130), rgb(133,141,130))` (sage) — a circle sweeping up from bottom-center, painted over the white background but under the label.
  - transition: `0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)` on the pseudo-element; button itself `0.3s`.
  - rules: `#brxe-artufx:hover { color: var(--bricks-color-b92a3f) }` (same for `#brxe-qvlgkm`, `#brxe-isainz`) + shared `.btn-radial-1:hover::before`.
- **Social icons:** `.iconsocials:hover { transform: translateY(-5px) }` — measured `transform: matrix(1, 0, 0, 1, 0, -5)`, `transition: 0.4s`, color unchanged `rgb(255,255,255)`.
- **Service list links / Read More / copyright links:** no `:hover` rule exists anywhere in the stylesheets (verified by scanning all sheets for `a:hover`) → **no color/underline change**.

### Dormant/odd markup
- `#brxe-mnzhzh` is a 1px white rule that visually crosses the button row (see above) — reproduce it as a full-bleed `border-bottom` on a 1px block placed before the columns, with the columns pulled up `-28px`.

## Carousel / multi-state content
N/A — no carousel, no tabs, no counters.

## Assets
| Purpose | URL / markup | intrinsic → rendered |
|---|---|---|
| White footer logo (alt `logo-white`) | `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2025/08/logo-blanco.webp?fit=655%2C468&ssl=1` | 655×468 → 440×314.375 |
| …srcset | `…/logo-blanco.webp?w=655&ssl=1 655w`, `…/logo-blanco.webp?resize=300%2C214&ssl=1 300w`; `sizes: (max-width: 655px) 100vw, 655px` | `loading="lazy"`, `decoding="async"` |
| Facebook icon | `<i id="brxe-sfypbb" class="fab fa-facebook-square brxe-icon iconsocials"></i>` — `"Font Awesome 6 Brands"`, **U+F082** | 40px → 35×40 |
| X icon | `<i id="brxe-kqnoqk" class="fab fa-square-x-twitter …">` — **U+E61A** | 40px → 35×40 |
| Instagram icon | `<i id="brxe-irxing" class="fab fa-instagram-square …">` — **U+E055** | 40px → 35×40 |
| Yelp icon (inline SVG) | `<svg id="brxe-jipqxy" class="brxe-icon iconsocials" xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.31871 0C5.63097 …"/></svg>` — full markup in `raw/finalcta.json → extras.socialIcons` | 36×35 attr → 36×40 rendered |
| Bullets | `i.fas.fa-circle` (services list) — `"Font Awesome 6 Solid"`, **U+F111** | 8px |
| Phone / pin (footer columns) | `i.fas.fa-phone` **U+F095** (22px), `i.fas.fa-location-dot` **U+F3C5** (28px) | white |

No raster images besides the logo; no background images; no blog thumbnails.

## Text Content (verbatim)
```
Two locations. one goal. your best smile.
Call now to schedule in Coral Gables or Hialeah!

DENTAL SERVICES
General Dentistry | Emergency Dentistry | Root Canals | Gum Disease | Oral Surgery |
Cosmetic Dentistry | Invisalign | Teeth Whitening  | Dental Implants
(note: "Teeth Whitening " has a trailing space in the source)

BOOK ONLINE HIALEAH   (href: https://advancedsmileclinic.com/hialeah/#bookonline)
(305) 846-7987        (href: tel:(305) 846-7987)
6600 W 12th Ave, Hialeah, FL 33012   (href: https://maps.app.goo.gl/DmCFC1TUNu56Ze7p6)

BOOK ONLINE CORAL GABLES  (href: https://advancedsmileclinic.com/coral-gables/#bookonline)
(786) 391-0588            (href: tel:(786) 391-0588)
3934 SW 8th St #306, Coral Gables, FL 33134  (href: https://maps.app.goo.gl/nKJNv3A59U8xCX2Q7)
```
Social hrefs: `https://www.facebook.com/advancedsmileclinic/`, `https://x.com/advancedsmile1`, `https://www.instagram.com/advancedsmileclinic/`, `https://www.yelp.com/biz/advanced-smile-dental-clinic-coral-gables` (all `target="_blank"`).
`DENTAL SERVICES` → `https://advancedsmileclinic.com/our-dental-services/`.

## Responsive Behavior
Not measured (single-viewport assignment); from the theme media queries:
- **≤991px:** all three pill buttons `font-size: 16px`.
- **≤767px:** `#brxe-vjcoge` → `flex-direction: column; align-items: center; justify-content: center; row-gap: 40px`; each column (`#brxe-pdjlww`, `#brxe-qrpeph`, `#brxe-zirhax`) → `align-items: center` (pill buttons become `width: 60%`); `#brxe-tjdwpw` → `row-gap: 40px`; blog Read More `padding-left: 6%`.
- **≤478px:** logo `width: 90%; margin-top: -80px`; buttons `width: 90%` (+ `padding-inline: 10px` on the two BOOK ONLINE pills); blog title `font-size: 16px`; copyright `font-size: 16px`.
- `#brxe-khnern` also has `≤767px { width: 70% }`.
