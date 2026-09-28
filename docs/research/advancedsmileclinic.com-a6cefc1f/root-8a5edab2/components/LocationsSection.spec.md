# LocationsSection Specification

## Overview
- **Target file:** `src/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/LocationsSection.tsx`
- **Screenshot:** `docs/design-references/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/locations-1440.png`
- **Interaction model:** hover (links + buttons), click-driven links; maps are third-party iframes (layout only)
- **Live geometry:** `footer > section#brxe-zficox` — section box top **9974** / h **636**, `padding: 0 20px`, transparent bg, but its child `#bookonline` is pulled up with `margin-top: -640px` → visible beige panel top **9334**, height **1276** (bottom 10610). Anchor `#bookonline` is the `id` the header's "BOOK ONLINE" button targets.

## DOM Structure
```
SECTION#brxe-zficox .brxe-section.bricks-lazy-hidden   (9974, h636, padding 0 20)
└─ DIV#bookonline .brxe-container                      (9334, 1100×1276, margin -640 142.5 0)  ← beige panel
   ├─ DIV#brxe-uytkvu .brxe-block                      (9306, 1020×55, margin -128 0 40)      ← 2 buttons
   │  ├─ A#brxe-uhaxru .brxe-button.btn-radial-4  "Book Online Hialeah"      → /hialeah/#bookonline
   │  └─ A#brxe-ruoleo .brxe-button.btn-radial-4  "Book Online Coral Gables" → /coral-gables/#bookonline
   ├─ DIV#brxe-rhosnb .brxe-block                      (9401, 1020×230, padding-bottom 20)     ← 2 location columns
   │  ├─ DIV#brxe-gsrebr .brxe-block                   (9401, 510.5×210, padding-right 40, border-right 2px)
   │  │  ├─ DIV#brxe-qyjldy (469×85)
   │  │  │  ├─ UL#brxe-usjsap .brxe-social-icons > LI.has-link > A[href=tel:tel:(305) 846-7987] > i.fas.fa-phone.icon + span "CALL US - HIALEAH"
   │  │  │  └─ A#brxe-arvevd .brxe-text-basic "(305) 846-7987"   [tel:(305) 846-7987]
   │  │  └─ DIV#brxe-gwiwzw (469×85)
   │  │     ├─ UL#brxe-vwmynr > LI > A[href=maps.app.goo.gl/DmCFC1TUNu56Ze7p6] > i.fas.fa-location-dot.icon + span "VISIT US - HIALEAH"
   │  │     └─ A#brxe-tgfqsu "6600 W 12th Ave, Hialeah, FL 33012"  [maps.app.goo.gl/DmCFC1TUNu56Ze7p6]
   │  └─ DIV#brxe-rlzlnm .brxe-block                   (9401, 509.5×210, padding-left 40)
   │     ├─ A#brxe-wjodkx .brxe-button.btn-radial-4  "Book Online Coral Gables"  ← display:none on desktop
   │     ├─ DIV#brxe-vufxtc (469×85)
   │     │  ├─ UL#brxe-fbotut > LI > A[href=tel:(786) 391-0588] > i.fas.fa-phone.icon + span "CALL US - CORAL GABLES"
   │     │  └─ A#brxe-nyakcg "(786) 391-0588"
   │     └─ DIV#brxe-yomczk (469×85)
   │        ├─ UL#brxe-jlqlgh > LI > A[href=maps.app.goo.gl/nKJNv3A59U8xCX2Q7] > i.fas.fa-location-dot.icon + span "VISIT US - CORAL GABLES"
   │        └─ A#brxe-bgvlvs "3934 SW 8th St #306, Coral Gables, FL 33134"
   ├─ DIV#brxe-dnadfp .brxe-block                      (9711, 1020×450, margin-top 80, gap 40, justify center)
   │  ├─ DIV#brxe-athzyu .brxe-block.cardMaps          (9711, 571×450, x121)  ← Hialeah map
   │  │  └─ DIV#brxe-ynsekr .brxe-code (bg #F6F4F2) > DIV#googlemapsH (571×458) > IFRAME (571×450) + injected <script>
   │  └─ DIV#brxe-uijcza .brxe-block.cardMaps          (9711, 571×450, x733)  ← Coral Gables map
   │     └─ DIV#brxe-mepyxn .brxe-code (bg #F6F4F2) > DIV#googlemapsC > IFRAME (571×450) + <script>
   └─ DIV#brxe-wclcic .brxe-block                      (10241, 1020×129, margin-top 80)  ← "Two locations…" intro
      ├─ DIV#brxe-ecevvu .brxe-heading  (see FinalCtaSection.spec.md)
      └─ P#brxe-epziwo   .brxe-heading
```
> `#brxe-wclcic` is structurally the last child of `#bookonline`, but it is spec'd in **FinalCtaSection.spec.md** (per assignment split). Its raw data is present in both `raw/locations.json` and `raw/finalcta.json`.

## Computed Styles (exact values from getComputedStyle)

### Beige panel `#bookonline`
- background-color `rgb(238, 231, 224)`; border-radius `10px`; flex-direction `column`
- padding `100px 40px 240px`; margin `-640px 142.5px 0px`; width `1100px`; height `1275.59px`
- Theme rule: `#bookonline { background-color: rgb(238,231,224); border-radius: 10px; flex-direction: column; padding: 100px 40px 240px; margin-top: -640px; }`
- Breakpoints: `≤991px → padding-inline 30px`, `≤478px → padding-inline 10px`

### Button row `#brxe-uytkvu`
- width `1020px`; height `54.594px`; margin `-128px 0px 40px`
- flex-direction `row`; align-items `center`; justify-content `space-around`; column-gap `40px`; align-self `center !important`

### Buttons `#brxe-uhaxru` / `#brxe-ruoleo` (`.btn-radial-4.bricks-button`)
- font-family `Lato`; font-size `18px`; font-weight `600`; line-height `30.6px`; letter-spacing `0.5px`; text-transform **`uppercase`**
- color `rgb(255, 255, 255)`; background-color `rgb(133, 141, 130)` (var `--bricks-color-902b2a`)
- padding `12px 18px`; border-radius `40px`; border `0px none`; width **`357px`** (CSS `width: 35%` of 1020); height `54.594px`; gap `10px`; overflow `hidden`; z-index `99`; transition `0.3s`; cursor `pointer`
- `::before` (radial fill): `content:""`, `position:absolute`, `bottom:0`, `left:50%`, `width:0`, `height:0`, `background: linear-gradient(45deg, rgb(118,97,72), rgb(118,97,72))`, `border-radius:50%`, `transform:translateX(-50%)`, `transition: 0.4s cubic-bezier(0.25,0.46,0.45,0.94)`, `z-index:-1`, `opacity:0`

### Location columns
- `#brxe-rhosnb`: width `1020px`; height `230px`; padding `0 0 20px`; flex-direction `row`; align-items `center`
- `#brxe-gsrebr` (Hialeah): width `510.516px`; height `210px`; padding `0 40px 0 0`; row-gap `40px`; align-items `center`; justify-content `center`; width `100%` + `align-self: stretch`; **border-right `2px solid rgb(98, 84, 78)`** (var `--bricks-color-9616c1`) ← the vertical divider
- `#brxe-rlzlnm` (Coral Gables): width `509.484px`; height `210px`; padding `0 0 0 40px`; row-gap `40px`; align-items `center`; `align-self: stretch`
- Each info group (`#brxe-qyjldy`, `#brxe-gwiwzw`, `#brxe-vufxtc`, `#brxe-yomczk`): width `469px` / `469.484px`; height `85px` (51px label + 34px value)

### Label links (`UL.brxe-social-icons > LI > A`)
- font-family `Poppins`; font-size `24px`; font-weight `600`; line-height `40.8px`; color `rgb(98, 84, 78)` (var `--bricks-color-9616c1`); display `flex`; gap `24px` (`#brxe-vwmynr`/`#brxe-jlqlgh`: `28px`); cursor `pointer`; transition `all` **duration `0s`**
- `LI.repeater-item.has-link`: display `flex`; align-items `center`; gap `5px`; transition `0.4s`
- Icon `i.fas.fa-phone.icon` / `i.fas.fa-location-dot.icon`: font-family `"Font Awesome 6 Solid"`; font-size `30px`; font-weight `900`; color `rgb(98, 84, 78)`; rendered 30×51 / 23×51 (inline box)

### Value links (`#brxe-arvevd`, `#brxe-tgfqsu`, `#brxe-nyakcg`, `#brxe-bgvlvs`)
- font-family `Lato`; font-size `20px`; font-weight `500`; line-height `34px`; color `rgb(98, 84, 78)`; padding `0 0 0 54px` (40px icon column + 24px? measured 54px); transition **`0.4s`**; cursor `pointer`

### Maps row `#brxe-dnadfp`
- width `1020px`; height `450px`; margin `80px 0 0`; flex-direction `row`; align-items `center`; justify-content `center`; gap `40px`
- `.cardMaps` (`#brxe-athzyu`, `#brxe-uijcza`): `flex: 0 0 56%` → used width `571.188px`; height `450px`; **box-shadow `rgba(0, 0, 0, 0.25) 0px 4px 30px 0px`**; border `0`; radius `0`
- Because 571+40+571 = 1183 > 1020 and `justify-content: center`, the pair **overflows the beige panel symmetrically**: left map x **121** (42px left of the panel edge 163), right map ends x **1304** (41px past the panel edge 1263).
- `#brxe-ynsekr` / `#brxe-mepyxn` (`.brxe-code`): background-color `rgb(246, 244, 242)` (placeholder behind the map), width `571.188px`, height `450px`
- `#googlemapsH` / `#googlemapsC`: width `571.188px`, height `457.5px` (iframe is `display:inline` → 8px descender gap)
- `IFRAME`: width `571.188px`; height `450px`; border `0`; overflow `clip`; `loading="lazy"`; `referrerpolicy="no-referrer-when-downgrade"`; no `title`, no `allow`

## States & Behaviors

### Scroll reveals / animations
- **None.** No `animation-name ≠ none`, no `.brx-animated`, no `data-interactions` anywhere in `#brxe-zficox`.

### Hover states (measured with real hover)
- **Label links** (`CALL US - …`, `VISIT US - …`): color `rgb(98, 84, 78)` → **`rgb(133, 141, 130)`**; the FA icon inherits the same color (its `::before` uses `currentColor`). Rule: `#brxe-usjsap li.has-link a:hover { color: var(--bricks-color-902b2a) }` (identical rules exist for `#brxe-vwmynr`, `#brxe-fbotut`, `#brxe-jlqlgh`). Transition: `all` `0s` on the `<a>` (instant); the `LI` carries `transition: 0.4s`.
- **Value links** (phone number / address): color `rgb(98, 84, 78)` → **`rgb(133, 141, 130)`**, transition **`0.4s`** (smooth), text-decoration stays `none`, no transform/shadow. Rules: `#brxe-arvevd:hover`, `#brxe-tgfqsu:hover`, `#brxe-nyakcg:hover`, `#brxe-bgvlvs:hover`.
- **BOOK ONLINE buttons**: base bg `rgb(133,141,130)`; on hover `::before` expands to `width: 428.391px; height: 250px; bottom: -125px; opacity: 1` (measured) — a brown `rgb(118,97,72)` circle sweeping up from bottom-center; transition `0.4s cubic-bezier(0.25,0.46,0.45,0.94)`. Label color stays white (`#brxe-uhaxru:hover { color: var(--bricks-color-b92a3f) }` = white).

### Iframe injection (maps)
- Each `.brxe-code` block contains `<div id="googlemapsH|C">` + a script: `window.addEventListener('load', … setTimeout(400ms) …)` creates an `<iframe width="100%" height="450" style="border:0;margin:0;padding:0">` with `allowfullscreen`, `loading="lazy"`, `referrerpolicy="no-referrer-when-downgrade"` and appends it to the div. **Record layout only — do not clone Google Maps in depth** (per recon brief).

## Carousel / multi-state content
N/A — no carousel. Note the dormant `#brxe-wjodkx` "Book Online Coral Gables" button inside the Coral Gables column: `display: none` ≥768px, becomes `display: flex; width: 80%` at ≤767px (mobile replaces the hidden top button `#brxe-ruoleo` which is `display: none` at ≤767px).

## Assets
| Asset | URL / markup | size |
|---|---|---|
| Phone icon | `<i class="fas fa-phone icon"></i>` — Font Awesome 6 Solid, `::before` content `"\uf095"` (**U+F095**) | 30px, color `rgb(98,84,78)` |
| Location icon | `<i class="fas fa-location-dot icon"></i>` — Font Awesome 6 Solid, `::before` content `"\uf3c5"` (**U+F3C5**) | 30px, color `rgb(98,84,78)` |
| Hialeah map iframe | `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d459466.5172330915!2d-80.307774!3d25.883226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bb9a9598b3b9%3A0xa4d892962c3eec7a!2sAdvanced%20Smile%20Dental%20Clinic%20-%20Hialeah!5e0!3m2!1sen!2sus!4v1755812480544!5m2!1sen!2sus` | 571×450 |
| Coral Gables map iframe | `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28745.504041498785!2d-80.260162!3d25.764353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b7767fa96e0b%3A0xb7e4f9aaee8118a0!2sAdvanced%20Smile%20Dental%20Clinic!5e0!3m2!1sen!2sus!4v1755813393845!5m2!1sen!2sus` | 571×450 |

No raster images, no background images in this section.

## Text Content (verbatim)
```
Book Online Hialeah        (href: https://advancedsmileclinic.com/hialeah/#bookonline)
Book Online Coral Gables   (href: https://advancedsmileclinic.com/coral-gables/#bookonline)   [rendered uppercase]

CALL US - HIALEAH          (href: tel:tel:(305) 846-7987   ← note the duplicated "tel:" on the live site)
(305) 846-7987             (href: tel:(305) 846-7987)
VISIT US - HIALEAH         (href: https://maps.app.goo.gl/DmCFC1TUNu56Ze7p6)
6600 W 12th Ave, Hialeah, FL 33012

CALL US - CORAL GABLES     (href: tel:(786) 391-0588)
(786) 391-0588
VISIT US - CORAL GABLES    (href: https://maps.app.goo.gl/nKJNv3A59U8xCX2Q7)
3934 SW 8th St #306, Coral Gables, FL 33134
```

## Responsive Behavior
Not measured directly (single-viewport assignment); read from the theme's media queries:
- **≤1200 / 991–1200:** `.cardMaps { flex: 0 0 54% }`; **≤991:** `50%`, buttons `width: 45%; font-size: 16px`, label links `font-size: 20px`, value links `font-size: 20px`, `#bookonline` padding-inline `30px`, maps row `column-gap: 20px`, hidden `#brxe-wjodkx` → `width: 40%`.
- **≤767:** `#brxe-rhosnb` → `flex-direction: column`; `#brxe-gsrebr` → `border-right: 0; padding-right: 0`; `#brxe-rlzlnm` → `margin-top: 80px; padding-left: 0`; Hialeah button `width: 80%`; Coral Gables top button `display: none` while `#brxe-wjodkx` becomes `display: flex; width: 80%`; address links `padding-left: 34px` (Hialeah) / `0 + text-align: center` (Coral Gables); `#brxe-dnadfp` → `flex-direction: column`; `#brxe-epziwo` `font-size: 25px`.
- **≤478:** buttons `width: 90%`, `padding-inline: 10px`; labels `font-size: 18px; gap: 10px`; values `font-size: 18px`; `#bookonline` padding-inline `10px`; `#brxe-ecevvu` `font-size: 30px`; `#brxe-epziwo` `font-size: 20px`.
