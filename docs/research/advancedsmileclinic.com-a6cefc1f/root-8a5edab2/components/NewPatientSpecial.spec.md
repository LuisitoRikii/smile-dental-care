# NewPatientSpecial Specification

## Overview
- **Target file:** `src/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/NewPatientSpecial.tsx`
- **Screenshot:** `docs/design-references/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/newpatient-1440.png`
- **Interaction model:** click-driven ("See more" accordion toggle) + time-driven (infinite `bounceSubtle` on the toggle button) + hover (radial-fill BOOK ONLINE pills)
- **Source root:** `section#brxe-cglzwm` — page y 4003.19, 1425 × 399 (only card 1 is expanded by default)

## DOM Structure
```
section#brxe-cglzwm .brxe-section            1425×399, flex column, align-items:center, padding:0 20px, margin:100px 0 80px
├─ div#bloquen1 .brxe-block                  1385×223  (VISIBLE — card 1)
│  ├─ div#brxe-qxphmt .brxe-container        1100×223 (margin 0 142.5px), flex row, justify-content:flex-start, align-items:center
│  │  ├─ div#brxe-biyyhu .brxe-block         275×223   left: title + price
│  │  │  ├─ div#brxe-wvhocz .brxe-text > p   "NEW PATIENT<br>SPECIAL"   border-bottom:2px solid rgb(189,170,156)
│  │  │  └─ div#brxe-hsbgqn .brxe-block      275×102, flex row, justify-content:flex-end, align-items:flex-end
│  │  │     ├─ div#brxe-hjotju (27.5×30, margin-bottom:-14px) > ul#brxe-mnkqnb.brxe-social-icons > li > [inline $ SVG]
│  │  │     └─ div#brxe-oaever (192.5×102) > div#brxe-kqsurd  "75"
│  │  └─ div#brxe-vxjdil .brxe-block         748×183.19 at x=437.5 — BROWN PANEL, flex row, align-items:flex-start, padding-right:120px
│  │     ├─ div#brxe-cwmjkv  209.78×135.59, padding:44px 0, center → "Exam"      border-right:2px solid #fff
│  │     ├─ div#brxe-rzrhab  209.78×135.59, padding:44px 0, center → "X-rays"    border-right:2px solid #fff
│  │     └─ div#brxe-xjesbq  208.44×183.19, padding:44px 0, center → "Cleaning<br>(D1110)"
│  └─ div#brxe-jtbqsn .brxe-container        1100×0 (margin 0 142.5px), flex column, align-items:flex-end
│     └─ a#brxe-xgbsqe .btn-radial-4          "BOOK ONLINE" (margin-top:-134px → visually inside the brown panel, overhanging its right edge)
├─ div#bloquen2 .brxe-block.bloque           1385×0, opacity:0, overflow:hidden, transition:all .8s ease   (HIDDEN — card 2)
│  ├─ div#brxe-asvdso .brxe-container 1100×183.19 → left: "INVISALIGN" + "500" (with $ SVG); brown panel: "Free<br>Consultation" | "Clear<br>Aligners" | "Custom"
│  └─ div#brxe-gggakg > a#brxe-raracj "BOOK ONLINE"
├─ div#bloquen3 .brxe-block.bloque           1385×0, opacity:0, overflow:hidden, transition:all .8s ease   (HIDDEN — card 3)
│  ├─ div#brxe-daszcp .brxe-container 1100×223 → left: "IN-OFFICE<br>WHITENING" + "350"; brown panel: "In-office<br>whitening" | "40<br>minutes" | "Proven<br>Results"
│  └─ div#brxe-kirxdd > a#brxe-gljtcb "BOOK ONLINE"
├─ div#brxe-sahkqr .brxe-container           1100×116 (margin:60px 142.5px 0), flex column, center → toggle
│  ├─ svg#botonseemore .brxe-icon.bounceanimation   43×62
│  └─ div#textob .brxe-text-basic             "See more"
└─ div#brxe-aszauq .brxe-code                1385×0 — contains <style> + <script> (custom code, see States)
```

## Computed Styles (exact values from getComputedStyle)

### Section
- `#brxe-cglzwm`: `padding:0px 20px; margin:100px 0px 80px; width:1425px; height:399px; display:flex; flex-direction:column; align-items:center` (no background → white body)

### Card 1 `#bloquen1` / `#brxe-qxphmt`
- `#bloquen1`: `width:1385px; height:223px; display:flex; flex-direction:column; align-items:flex-start`
- `#brxe-qxphmt`: `margin:0px 142.5px; width:1100px; height:223px; display:flex; justify-content:flex-start; align-items:center`
- `#brxe-biyyhu`: `width:275px; height:223px; display:flex; flex-direction:column`
- `#brxe-wvhocz .brxe-text` / `p`: `font-size:35px; font-weight:800; font-family:"Playfair Display"; line-height:59.5px; color:rgb(98,84,78); width:247.5px; height:119px; border-bottom:2px solid rgb(189,170,156)`
- `#brxe-hsbgqn`: `width:275px; height:102px; display:flex; justify-content:flex-end; align-items:flex-end` (cards 2/3 use `justify-content:center` instead)
- `#brxe-hjotju`: `margin:0px 0px -14px; width:27.5px; height:30px; display:flex; flex-direction:column; justify-content:center; align-items:flex-end`
- `ul#brxe-mnkqnb.brxe-social-icons`: `padding:0; margin:0; width:18.33px; height:30px; display:flex` ; `li.repeater-item.no-link`: `font-weight:700; font-family:Poppins; color:rgb(98,84,78); display:flex; justify-content:center; align-items:flex-end; gap:10px` — contains the `$` SVG only (no text)
- `#brxe-kqsurd` (price): `font-size:60px; font-weight:700; font-family:Poppins; line-height:102px; color:rgb(98,84,78); width:71.11px; height:102px`
- `#brxe-vxjdil` (brown panel): `background-color:rgb(118,97,72); padding:0px 120px 0px 0px; width:748px; height:183.188px; display:flex; align-items:flex-start` — sits vertically centered in the 223px row (top offset ≈19.9px)
- feature cells: `padding:44px 0; display:flex; flex-direction:column; justify-content:center; align-items:center` — cell 1/2 `width:209.781px; height:135.594px; border-right:2px solid rgb(255,255,255)` ; cell 3 `width:208.438px; height:183.188px` (no border)
- feature text: `font-size:28px; font-weight:700; font-family:Lato; line-height:47.6px; color:rgb(255,255,255)` (cell 3 `text-align:center`, two lines, 95.19px tall)
- `#brxe-jtbqsn`: `margin:0px 142.5px; width:1100px; display:flex; flex-direction:column; align-items:flex-end` (height 0 — the pill is pulled up by its own negative margin)
- `a#brxe-xgbsqe` BOOK ONLINE: `font-size:18px; font-weight:600; font-family:Lato; line-height:30.6px; letter-spacing:0.5px; color:rgb(255,255,255); background-color:rgb(164,153,132); padding:12px 40px; margin:-134px 0px 0px; width:208.438px; height:54.594px; display:flex; justify-content:center; align-items:center; gap:10px; border-radius:10px; box-shadow:rgba(0,0,0,0.25) 0px 4px 20px 0px; position:relative; z-index:99; transition:0.3s; overflow:hidden` → href `https://advancedsmileclinic.com/contact-us/`
  - Document rect: x 1054.1 → 1262.5, y 4092.2 → 4146.8 (brown panel ends at x 1185.5 ⇒ pill overhangs it by ~77px on the right)

### Cards 2 & 3 (collapsed at rest)
- `.bloque` (inline `<style>`): `max-height:0; opacity:0; overflow:hidden; transition:all 0.8s ease`
- `#bloquen2`: `width:1385px; display:flex; flex-direction:column; opacity:0; transition:0.8s; overflow:hidden` → measured `height:0px` at rest; children keep natural sizes (`#brxe-asvdso` 1100×183.19, `#brxe-ggtgey` brown panel 748×183.19)
- `#bloquen3`: same, children `#brxe-daszcp` 1100×223, `#brxe-emfrnx` 748×183.19
- Layout inside cards 2/3 matches card 1 (275px left column with title + `$price`, 748px brown panel with 3 cells, BOOK ONLINE pulled up by `-134px`), except the price row wrapper is `justify-content:center` and titles are `INVISALIGN` (1 line, 61.5px) / `IN-OFFICE<br>WHITENING` (2 lines, 121px)
- Children of collapsed cards carry `bricks-lazy-hidden` (Bricks lazy-load never fired while collapsed)

### Toggle `#brxe-sahkqr`
- `margin:60px 142.5px 0px; width:1100px; height:116px; display:flex; flex-direction:column; justify-content:center; align-items:center` + `align-self:center !important`
- `svg#botonseemore`: `width:43px; height:62px; animation:1.4s ease-in-out 0s infinite normal none running bounceSubtle; transition:transform 0.3s; cursor:pointer; overflow:hidden; fill:none`
  - Markup: `<svg class="brxe-icon bounceanimation" id="botonseemore" xmlns="http://www.w3.org/2000/svg" width="43" height="62" viewBox="0 0 43 62" fill="none"><rect x="0.5" y="0.5" width="42" height="61" rx="21" fill="white" stroke="#7D4D3E"></rect><path d="M28 35C27.258 35 26.15 35.733 25.22 36.475C24.02 37.429 22.973 38.569 22.174 39.876C21.575 40.856 21 42.044 21 43M21 43C21 42.044 20.425 40.855 19.826 39.876C19.026 38.569 17.979 37.429 16.781 36.475C15.85 35.733 14.74 35 14 35M21 43V19V43Z" fill="white"></path><path d="M28 35C27.258 35 26.15 35.733 25.22 36.475C24.02 37.429 22.973 38.569 22.174 39.876C21.575 40.856 21 42.044 21 43M21 43C21 42.044 20.425 40.855 19.826 39.876C19.026 38.569 17.979 37.429 16.781 36.475C15.85 35.733 14.74 35 14 35M21 43V19" stroke="#7D4D3E"></path></svg>` (white pill outline + white arrow body + `#7D4D3E` arrow stroke)
- `#textob`: `font-family:Poppins; font-size:20px; font-weight:400; line-height:34px; color:rgb(125,77,62); margin:20px 0px 0px; width:95.14px`

## States & Behaviors

### Infinite bounce on `#botonseemore`
- **Trigger:** always on (class `.bounceanimation`, CSS rule `.bounceanimation { animation: 1.4s ease-in-out 0s infinite normal none running bounceSubtle; }`)
- **Keyframes:** `@keyframes bounceSubtle { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-10px)} }`
- Live transform during playback: `matrix(1,0,0,1,0,-8.35)` / `matrix(1,0,0,1,0,-2.18)` (animation transform overrides the class transform while running).
- **Rotation:** `#botonseemore { transition: transform 0.3s ease; }` + `.rotado { transform: rotate(180deg); }` (persistent 180° flip while expanded).

### "See more" accordion toggle (click-driven, custom JS in `#brxe-aszauq`)
- **Trigger:** `click` on `svg#botonseemore` (`cursor:pointer`).
- **State A (rest):** `#bloquen2`,`#bloquen3` = `brxe-block bloque` → `max-height:0; opacity:0; overflow:hidden; height:0px`; button text `See more`; section height **399px**.
- **State B (expanded, measured 1s after click):** both blocks gain `.mostrar` → `.bloque.mostrar{margin-top:60px; max-height:800px; opacity:1}`; `#bloquen2` height **183.19px**, `#bloquen3` height **223px**, opacity 1; button gains `.rotado`; `#textob` = `See Less`; section height **925.19px** (399 + 60 + 183.19 + 60 + 223).
- **Transition:** `all 0.8s ease` on both blocks (via `max-height` + opacity), `transform 0.3s` on the svg.
- **State C (2nd click):** both lose `.mostrar` → back to 0/0; button loses `.rotado`; text becomes `See More` (capital M — differs from initial markup `See more`).
- **Verbatim custom code** (inside `div#brxe-aszauq .brxe-code`):

  `<style>` text: `#botonseemore { transition: transform 0.3s ease; } .rotado { transform: rotate(180deg); } /* Estado inicial: oculto */ .bloque { max-height: 0; opacity: 0; overflow: hidden; transition: all 0.8s ease; /* Duración y suavidad */ } /* Estado visible: se expande y aparece */ .bloque.mostrar { margin-top:60px; max-height: 800px; /* Ajusta según el contenido */ opacity: 1; }`

  `<script>` text:
  ```
  const boton = document.getElementById("botonseemore");
  const texto = document.getElementById("textob");
  const bloques = [document.getElementById("bloquen2"), document.getElementById("bloquen3")];
  boton.addEventListener("click", function() {
      const visible = bloques[0].classList.contains("mostrar");
      if (visible) {
          // Ocultar con animación
          bloques.forEach(b => b.classList.remove("mostrar"));
          boton.classList.remove("rotado");
          texto.textContent = "See More";
      } else {
          // Mostrar con animación
          bloques.forEach(b => b.classList.add("mostrar"));
          boton.classList.add("rotado");
          texto.textContent = "See Less";
      }
  });
  ```
  Note: BOTH hidden cards expand at the same time (not one-at-a-time); reveal is driven only by `max-height`/`opacity`.

### Reveal animations
- N/A — no `brx-animated` / `data-interactions` elements exist inside `#brxe-cglzwm`.

### Hover states
- **BOOK ONLINE pills (`a.btn-radial-4`):** same shared radial hover documented in `ServicesSection.spec.md` — `::before {width:0;height:0;bottom:0;opacity:0;background:linear-gradient(45deg,rgb(118,97,72),rgb(118,97,72));border-radius:50%;transform:translateX(-50%);z-index:-1;transition:0.4s cubic-bezier(0.25,0.46,0.45,0.94)}` → on `:hover {width:120%;height:250px;bottom:-125px;opacity:1}`; pill background `rgb(164,153,132)` and white text unchanged; button `transition:0.3s`.
- **`#botonseemore`:** `cursor:pointer`, no `:hover` style rule found (only the infinite bounce).

## Carousel / multi-state content
N/A (no carousel). Multi-state = the 3 promo cards, two collapsed at rest. Content verbatim:

| Card | Title | Price | Features (3 cells) | Button href |
|---|---|---|---|---|
| `#bloquen1` (visible) | `NEW PATIENT` ⏎ `SPECIAL` | `75` | `Exam` \| `X-rays` \| `Cleaning` ⏎ `(D1110)` | `https://advancedsmileclinic.com/contact-us/` |
| `#bloquen2` (hidden) | `INVISALIGN` | `500` | `Free` ⏎ `Consultation` \| `Clear` ⏎ `Aligners` \| `Custom` | `https://advancedsmileclinic.com/contact-us/` |
| `#bloquen3` (hidden) | `IN-OFFICE` ⏎ `WHITENING` | `350` | `In-office` ⏎ `whitening` \| `40` ⏎ `minutes` \| `Proven` ⏎ `Results` | `https://advancedsmileclinic.com/contact-us/` |

(⏎ = literal `<br>` in source; the `$` before every price is an SVG glyph, not a text character.)

## Assets
No raster images in this section. Two inline SVGs:

1. **Dollar sign** (one per card, inside `ul.brxe-social-icons > li > svg.icon`):
   `<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="22" height="36" viewBox="0 0 22 36" fill="none"><path d="M21.0941 23.96C21.0941 25.3467 20.7341 26.6533 20.0141 27.88C19.3207 29.08 18.2807 30.08 16.8941 30.88C15.5341 31.6533 13.9207 32.1067 12.0541 32.24V35.48H9.49406V32.2C6.8274 31.96 4.68073 31.16 3.05406 29.8C1.4274 28.4133 0.587396 26.5467 0.534063 24.2H6.53406C6.69406 26.12 7.68073 27.28 9.49406 27.68V20.04C7.57406 19.56 6.0274 19.08 4.85406 18.6C3.68073 18.12 2.6674 17.3467 1.81406 16.28C0.960729 15.2133 0.534063 13.76 0.534063 11.92C0.534063 9.6 1.36073 7.70666 3.01406 6.24C4.69406 4.77333 6.85406 3.93333 9.49406 3.72V0.479998H12.0541V3.72C14.6141 3.93333 16.6541 4.70666 18.1741 6.04C19.7207 7.37333 20.5874 9.21333 20.7741 11.56H14.7341C14.6541 10.7867 14.3741 10.12 13.8941 9.56C13.4407 8.97333 12.8274 8.56 12.0541 8.32V15.88C14.0541 16.3867 15.6274 16.88 16.7741 17.36C17.9474 17.8133 18.9607 18.5733 19.8141 19.64C20.6674 20.68 21.0941 22.12 21.0941 23.96ZM6.37406 11.64C6.37406 12.52 6.64073 13.24 7.17406 13.8C7.7074 14.3333 8.48073 14.7733 9.49406 15.12V8.2C8.53406 8.33333 7.77406 8.69333 7.21406 9.28C6.65406 9.86667 6.37406 10.6533 6.37406 11.64ZM12.0541 27.76C13.0674 27.5733 13.8541 27.16 14.4141 26.52C15.0007 25.88 15.2941 25.1067 15.2941 24.2C15.2941 23.32 15.0141 22.6133 14.4541 22.08C13.8941 21.5467 13.0941 21.1067 12.0541 20.76V27.76Z" fill="#62544E"></path></svg>`
   Rendered ~18.33 × 30 inside a 27.5 × 30 box; `fill="#62544E"` (= title color `rgb(98,84,78)`).
2. **See-more button SVG** — markup above (43 × 62, `stroke="#7D4D3E"`).

## Text Content (verbatim)
- Card 1: `NEW PATIENT` / `SPECIAL` / `75` / `Exam` / `X-rays` / `Cleaning` / `(D1110)` / `BOOK ONLINE`
- Card 2: `INVISALIGN` / `500` / `Free` / `Consultation` / `Clear` / `Aligners` / `Custom` / `BOOK ONLINE`
- Card 3: `IN-OFFICE` / `WHITENING` / `350` / `In-office` / `whitening` / `40` / `minutes` / `Proven` / `Results` / `BOOK ONLINE`
- Toggle: `See more` (initial), `See Less` (after 1st click), `See More` (after 2nd click)

## Responsive Behavior
Not measured (1440px only). No media-query rules target `#brxe-cglzwm`, `#bloquen*` or `#botonseemore` — the custom `.bloque`/`.mostrar` CSS in `#brxe-aszauq` is breakpoint-independent (only `max-height`/`opacity`). The 275px/748px split and 1100px inner container are fixed px Bricks values with no overrides found; same proportions expected at all widths (unverified).
