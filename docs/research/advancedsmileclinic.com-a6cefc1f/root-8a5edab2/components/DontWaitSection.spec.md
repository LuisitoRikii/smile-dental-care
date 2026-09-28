# DontWaitSection Specification

## Overview
- **Target file:** `src/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/DontWaitSection.tsx`
- **Screenshot:** `docs/design-references/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/dontwait-1440.png`
- **Interaction model:** hover + click-driven (image/dot switcher), static otherwise
- **Live geometry:** section `#brxe-aafbdt` y 7829 → 8486 (h 657), then Zocdoc section `#brxe-qxosdn` y 8486 → 8534 (h 48). Footer `#brx-footer` starts at 8534 (its first section `#brxe-yurdka` starts at 8734; the 200px gap is footer top padding/margin, see `AppointmentSection.spec.md`).
- Note: the brief listed this section starting at y 8486, but the "Don't Wait in Pain!" heading actually starts at y 7829 (the block `#brxe-aafbdt` also contains the 3-image switcher + dots). The Zocdoc embed is the separate 48px section at 8486.

## DOM Structure
```
SECTION#brxe-aafbdt .brxe-section                      (7829, h657, margin-top 100, padding 0 20)
├─ DIV#brxe-eivicm  .brxe-container.bricks-lazy-hidden (7829, 1100×179, margin 0 142.5, row, align center)
│  ├─ DIV#brxe-jygwbx .brxe-block (660×179, column, align-items flex-start, gap 20)
│  │  ├─ H2#brxe-gbxbwp .brxe-heading  "Don’t Wait in Pain!"
│  │  └─ DIV#brxe-aalvse .brxe-text (660×61)
│  │     └─ P  "At Advanced Smile Dental Clinic, we’re here when you need us most …"
│  └─ DIV#brxe-nhvpqi .brxe-block (440×67, column, align center)
│     └─ A#brxe-nkgrkd .brxe-button.btn-radial-4.bricks-button  "SCHEDULE NOW"
├─ DIV#brxe-jsgspt .brxe-container (8088, 1100×398, margin 80 142.5 0, column)
│  ├─ DIV#brxe-kltkpi .brxe-block (8088, 1100×300, row, align flex-start, gap 40 column-gap)
│  │  ├─ DIV#brxe-nyxssl .brxe-block (8128, 636×220, row, justify center, align center)  ← 3 images
│  │  │  ├─ FIGURE#imagesli1 .brxe-image.tag.image-active > IMG (iamge11.webp)
│  │  │  ├─ IMG#imagesli2 .brxe-image (ChatGPT-Image…webp)
│  │  │  └─ IMG#imagesli3 .brxe-image (iamgedr33.webp)
│  │  └─ DIV#brxe-ybkydb .brxe-block (8088, 424×300, column, justify center, align flex-start, gap 20)
│  │     ├─ H3#titulosli .brxe-heading   ← text swapped by JS
│  │     └─ DIV#textsli  .brxe-text      ← text swapped by JS
│  ├─ DIV#brxe-qacisa .brxe-block (8468, 1100×18, margin-top 80, row, justify center, align center, gap 14)
│  │  ├─ I#ciculosli1 .fas.fa-circle.brxe-icon.dot.active
│  │  ├─ I#ciculosli2 .fas.fa-circle.brxe-icon.dot
│  │  └─ I#ciculosli3 .fas.fa-circle.brxe-icon.dot
│  └─ DIV#brxe-mhiapy .brxe-code (8486, 1100×0)  ← inline <style> + <script> (the switcher)
SECTION#brxe-qxosdn .brxe-section                     (8486, h48, no padding)
└─ DIV#brxe-qjglrg .brxe-container (1100×48, margin 0 162.5, column, align flex-start)
   └─ DIV#brxe-prlskd .brxe-code (1100×48)
      └─ DIV (anonymous, 1100×48, row)
         ├─ A.zd-plugin-initialized (1100×48) > IMG zd_bookonline_162x48.png (162×48)
         ├─ DIV.zd-sticky-button   (FIXED bottom-right, third-party)
         ├─ DIV.zd-alert-box       (FIXED bottom-right, third-party)
         └─ DIV.zd-provider-availability-alert-box (display:none)
```

## Computed Styles (exact values from getComputedStyle)

### Container — `SECTION#brxe-aafbdt`
- margin: `100px 0px 0px`; padding: `0px 20px`; width `1425px`; height `657.188px`
- display `flex`; flex-direction `column`; align-items `center`
- color `rgb(54, 54, 54)`; background-color `rgba(0, 0, 0, 0)`; background-image `none` (page bg is `#fff` from `body`)

### `#brxe-eivicm` (heading row)
- width `1100px`; margin `0px 142.5px`; display `flex`; flex-direction `row`; align-items `center`; height `179.188px`; gap `0`

### H2 `#brxe-gbxbwp`
- font-family `"Playfair Display"`; font-size `70px`; font-weight `600`; line-height `98px`; letter-spacing `normal`; text-transform `none`
- color `rgb(118, 97, 72)`; width `591.859px`; height `98px` (single line)
- text-align `left`

### `#brxe-aalvse` / `P`
- font-family `Lato`; font-size `18px`; font-weight `400`; line-height `30.6px`; color `rgb(51, 51, 51)`; width `660px`; height `61.188px`

### `#brxe-nhvpqi`
- width `440px`; height `66.594px`; display `flex`; flex-direction `column`; align-items `center`

### Button `#brxe-nkgrkd` (`.btn-radial-4.bricks-button`) — RESTING
- font-family `Lato`; font-size `18px`; font-weight `600`; line-height `30.6px`; letter-spacing `0.5px`; text-transform `none`
- color `rgb(255, 255, 255)`; background-color **`rgb(133, 141, 130)`** (sage — NOT yellow); background-image `none`
- padding `18px 28px`; border-radius `40px`; border `0px none`; width `204.141px`; height `66.594px`
- display `flex`; justify-content `center`; align-items `center`; gap `10px`; overflow `hidden`; position `relative`; z-index `99`; transition `0.3s`; cursor `pointer`
- `::before`: content `""`; position `absolute`; bottom `0px`; left `50%`; width `0px`; height `0px`; background `linear-gradient(45deg, rgb(118, 97, 72), rgb(118, 97, 72))`; border-radius `50%`; transform `translateX(-50%)`; transition `0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)`; z-index `-1`; opacity `0`

### `#brxe-jsgspt`
- width `1100px`; margin `80px 142.5px 0px`; display `flex`; flex-direction `column`; align-items `flex-start`

### `#brxe-kltkpi` (images + copy row)
- width `1100px`; height `300px`; flex-direction `row`; align-items `flex-start`; gap `normal 40px` (40px column-gap)

### `#brxe-nyxssl` (image strip)
- width `636px`; height `220px`; flex-direction `row`; justify-content `center`; align-items `center`
- Children are three `209.875 × 220` boxes laid flush (no gap): `x = 166, 376, 585` (document coords), i.e. 629.6px total centered in 636px. The active figure overflows its slot because it is scaled.

### FIGURE `#imagesli1` (ACTIVE state, `.image-active`)
- width `209.875px`; height `220px`; border-radius `10px`; box-shadow `rgba(0, 0, 0, 0.25) 0px 4px 40px 0px`
- transform `matrix(1.08, 0, 0, 1.08, 0, 0)` (→ rendered rect 227×238 at x≈157); z-index `99`; filter `saturate(100%)`; transition `0.8s`
- inner `IMG` also radius `10px`, overflow `clip`, object-fit `fill`

### `IMG#imagesli2` / `IMG#imagesli3` (INACTIVE)
- width `209.875px`; height `220px`; filter `saturate(0)`; transform `none`; z-index `auto`; box-shadow `none`
- `#imagesli2`: object-fit `cover`, object-position `50% 50%`, transition `0.4s`
- `#imagesli3`: object-fit `fill`, transition `0.4s`

### `#brxe-ybkydb`
- width `424px`; height `300px`; flex-direction `column`; justify-content `center`; align-items `flex-start`; gap `20px normal`

### H3 `#titulosli`
- font-family `"Playfair Display"`; font-size `33px`; font-weight `700`; line-height `46.2px`; color `rgb(108, 93, 61)`; width `422.281px`; height `46.188px`

### `#textsli`
- font-family `Lato`; font-size `18px`; font-weight `400`; line-height `30.6px`; color `rgb(51, 51, 51)`; width `424px`; height `122.375px`

### Dots `#brxe-qacisa`
- width `1100px`; height `18px`; margin `80px 0px 0px`; flex-direction `row`; justify-content `center`; align-items `center`; gap `normal 14px`
- Each `I.dot`: font-family `"Font Awesome 6 Solid"`; font-size `18px`; font-weight `900`; line-height `18px`; width/height `18px` (20px when active because of the scale transform)
  - inactive color `rgb(235, 229, 224)`; transform `none`
  - active color `rgb(189, 170, 156)`; transform `matrix(1.1, 0, 0, 1.1, 0, 0)`
  - transition `background-color 0.3s, transform 0.2s` (from inline CSS: `transition: background-color 0.3s ease, transform 0.2s ease`)

### Zocdoc section `#brxe-qxosdn`
- width `1425px`; height `48px`; padding `0`; flex-direction `column`; align-items `center`; background transparent
- `#brxe-qjglrg`: width `1100px`; margin `0px 162.5px`; align-items `flex-start`
- `A.zd-plugin-initialized`: display `block` (inline style), width `1100px`, height `48px`, cursor `pointer`; `href = https://www.zocdoc.com/practice/advanced-smile-dental-clinic-143553?lock=true&isNewPatient=false&referrerType=widget`, target `_blank`, title `Advanced Smile Dental Clinic`
- `IMG` (badge): width `162px`; height `48px`; display `inline` — **keep as third-party image**

## States & Behaviors

### 3-image content switcher (inline `<script>` in `#brxe-mhiapy`)
- **Trigger:** `mouseenter` **or** `click` on `#imagesli1|2|3`, or `click` on `#ciculosli1|2|3`. No autoplay, no timers.
- **State A (initial / slide 1):** `#titulosli` = "Compassionate Dental Care", `#textsli` = slide-1 paragraph, `#imagesli1` has `.image-active`, `#ciculosli1` has `.active`.
- **State B (slide 2):** title "Modern Dentistry with a Personal Touch", text as in *Carousel / multi-state content* below, `#imagesli2` + `#ciculosli2` active.
- **State C (slide 3):** title "Accepting Dental Emergencies and Walk-Ins", `#imagesli3` + `#ciculosli3` active.
- **Transition:** all `.dot`/`[id^='imagesli']` reset first, then active class applied — CSS transitions do the rest:
  - images: `filter: saturate(0%)` → `saturate(100%)`, `transition: all 0.4s ease`; active also gets `transform: scaleX(1.08) scaleY(1.08)`, `border-radius: 10px`, `box-shadow: 0 4px 40px 0 rgba(0,0,0,.25)`, `z-index: 99` (figure's own computed transition is `0.8s`).
  - dots: `background-color 0.3s ease`, `transform 0.2s ease`; active `transform: scale(1.1)`, `color: #BDAA9C !important`.
- **Implementation approach:** plain DOM (no library). Keep a `contenidos` map `{1,2,3} -> {titulo, texto}`, an `activar(n)` that toggles `.image-active` / `.active` and sets `textContent`. Text is swapped instantly (no fade).

### Hover — `.btn-radial-4` radial fill (SCHEDULE NOW, BOOK ONLINE …)
- **Trigger:** `:hover` on the anchor.
- **State A:** background-color `rgb(133, 141, 130)`, `::before` `width:0; height:0; bottom:0; opacity:0`.
- **State B:** `::before` `width: 120%; height: 250px; bottom: -125px; opacity: 1` → measured while hovered: `width: 244.969px; height: 250px; bottom: -125px; opacity: 1; transform: matrix(1, 0, 0, 1, -122.484, 0)`, background `linear-gradient(45deg, rgb(118, 97, 72), rgb(118, 97, 72))` (brown circle sweeping up from the bottom center, painting over the sage background but under the label because `z-index:-1` inside the button's stacking context).
- **Transition:** `0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)` on the pseudo-element; the button itself keeps `transition: 0.3s`.
- **Unchanged on hover:** `color: rgb(255,255,255)`, `background-color`, `transform: none`, `box-shadow: none`.
- **Rule source:** `.btn-radial-4` / `.btn-radial-4::before` / `.btn-radial-4:hover::before` in the theme stylesheet (sibling variants `.btn-radial-1` fill `rgb(133,141,130)`, `-2` white, `-3` `rgb(238,231,224)`, `-5` `rgb(164,153,132)`).

### Scroll reveals / animations
- **None in this section.** Every node reports `animation: none`, no `.brx-animated`, no `data-interactions`. The `bricks-lazy-hidden` class present on `#brxe-eivicm`, `#brxe-jygwbx`, `#brxe-nhvpqi` only forces `background-image: none !important` (Bricks lazy bg loader) — it does not hide/fade content.

### Sticky / fixed overlays inside this section (third-party — do NOT clone)
- `.zd-sticky-button`: `position: fixed; right: 20px; bottom: 20px; background: rgb(255, 240, 75); color: rgb(0, 35, 75); font: sharp-sans-bold 24px/30px; padding: 9px 24px; box-shadow: rgba(0,0,0,.2) 0 2px 4px -1px, rgba(0,0,0,.12) 0 1px 10px 0, rgba(0,0,0,.14) 0 4px 5px 0; z-index: 2147483647; cursor: pointer`. Text: "Book Online".
- `.zd-alert-box`: `position: fixed; right: 20px; bottom: 70px; width: 320px; height: 200px; z-index: 2147483647` — white card (`background-color: #fff` on `.zd-alert-box-text`, `padding: 60px 44px 0 16px`, `box-shadow: rgba(0,0,0,.2) 0 2px 4px -1px, rgba(0,0,0,.12) 0 1px 10px 0, rgba(0,0,0,.14) 0 4px 5px 0`), rounded calendar icon (`.zd-alert-box-icon`: 80×80, `border-radius: 40px`, `background: rgb(188,208,231) url(https://offsiteschedule.zocdoc.com/images/widgets/calendar.png)`), 14×14 close button (`close-icon.svg`), copy in `sharp-sans-SemiBold 16px/21.28px`, color `rgb(0, 35, 75)`.
- `.zd-provider-availability-alert-box`: `display: none` (hidden; time-slot chips use `background-color: rgb(254, 237, 90)`, `border-radius: 4px` — this is where the yellow `rgb(254,237,90)` comes from, not from the SCHEDULE NOW button).
- Loader script injected: `https://offsiteschedule.zocdoc.com/plugin/embed`.

## Carousel / multi-state content
Switcher content, verbatim from the inline script (`contenidos`):

| # | `#titulosli` | `#textsli` |
|---|---|---|
| 1 | Compassionate Dental Care | At Advanced Smile Dental Clinic, we believe every patient deserves personalized attention and gentle care. From the moment you walk in, our team is here to make your visit stress-free and comfortable. |
| 2 | Modern Dentistry with a Personal Touch | Using the latest technology and techniques, we provide advanced dental treatments tailored to your needs — all in a welcoming environment that feels like home. |
| 3 | Accepting Dental Emergencies and Walk-Ins | At Advanced Smile Dental Clinic, we're here when you need us most — whether it’s a sudden dental emergency or a routine visit. |

Note: slide 3 uses an ASCII apostrophe in `we're`; `it’s` is a curly apostrophe. Slide 1/2 use curly apostrophes throughout.

## Assets
| Purpose | URL | intrinsic | rendered |
|---|---|---|---|
| Slide 1 image (active by default), alt "Happy woman smiling with bright teeth" | `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2025/08/iamge11.webp?fit=238%2C246&ssl=1` | 238×246 | 209.875×220 (226.7×237.6 scaled) |
| Slide 2 image (no alt) | `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2026/06/ChatGPT-Image-Jun-9-2026-10_05_42-AM.webp?w=1024&ssl=1` (srcset: `…?w=1024&ssl=1 1024w`, `…?resize=200%2C300&ssl=1 200w`, `…?resize=683%2C1024&ssl=1 683w`, `…?resize=768%2C1152&ssl=1 768w`; `sizes: (max-width: 1024px) 100vw, 1024px`) | 1024×1536 | 209.875×220, `object-fit: cover` |
| Slide 3 image, alt "Group of happy patients at Advanced Smile Dental" | `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2025/08/iamgedr33.webp?fit=238%2C246&ssl=1` | 238×246 | 209.875×220, `object-fit: fill` |
| Zocdoc badge (keep as image) | `https://offsiteSchedule.zocdoc.com/images/remote/zd_bookonline_162x48.png?type=bobjs&monolith_provider_id=143553&practice_id=pt_Qui-Lcd5IESC12aFLuArSw` | 162×48 | 162×48 |
| Zocdoc calendar icon | `https://offsiteschedule.zocdoc.com/images/widgets/calendar.png` | — | 80×80 circle bg |
| Zocdoc calendar icon (img) | `https://offsiteschedule.zocdoc.com/images/widgets/calendar-icon.svg` | — | inside the alert box |
| Zocdoc close icon | `https://offsiteschedule.zocdoc.com/images/widgets/close-icon.svg` | — | 14×14 / 20×20 |
| Zocdoc ratings icon | `https://offsiteschedule.zocdoc.com/images/widgets/ratings-icon.svg` | — | hidden widget part |
| Font Awesome circle glyph | `fas fa-circle` (unicode `f111`) via `"Font Awesome 6 Solid"` | — | 18px |

No background images in this section.

## Text Content (verbatim)
```
Don’t Wait in Pain!
At Advanced Smile Dental Clinic, we’re here when you need us most — whether it’s a sudden dental emergency or a routine visit.
SCHEDULE NOW            (href: https://advancedsmileclinic.com/contact-us/)
Compassionate Dental Care
At Advanced Smile Dental Clinic, we believe every patient deserves personalized attention and gentle care. From the moment you walk in, our team is here to make your visit stress-free and comfortable.
```
Zocdoc overlay copy (third-party): `Book Online` / `See available times and book` <br> `an appointment right here.` / `It's free, fast and secure.`

## Responsive Behavior
Not measured (single-viewport assignment). Inferable from CSS: the layout uses Bricks' fixed 1100px container (`width: 1100px` + auto margins) inside a full-width section, so below ~1140px the container switches to `width: 100%`; the heading row (`#brxe-eivicm`) and the image/copy row (`#brxe-kltkpi`) are `flex-direction: row` and would need to wrap to `column` on mobile — no media query specifically targeting these IDs was found in the theme sheets, so the mobile stacking is expected to come from Bricks' generic `.brxe-block`/`.brxe-container` rules at the 767px/478px breakpoints.
