# TestimonialsSection Specification

## Overview
- **Target file:** `src/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/TestimonialsSection.tsx`
- **Screenshot:** `docs/design-references/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/testimonials-1440.png` (slide 3 "Sophia R." shown, autoplay had advanced)
- **Interaction model:** time-driven (autoplay) + click-driven (prev/next arrows) + hover-pause. No dots.
- **Live geometry:** `SECTION#brxe-oxjdlg` document y **6960.11 → 7729.11** (h **769**, w 1425).
- **Selector note:** the brief listed this section as `#brxe-aafbdt`, but `#brxe-aafbdt` (y 7829 → 8486) is the "Don't Wait in Pain!" image/dot switcher, already specced as `DontWaitSection.spec.md`. The testimonial content described in the brief ("Why Coral Gables & Hialeah Patients Love Us" / "Real Stories. Real Smiles." / Splide carousel) is `#brxe-oxjdlg` with heading block `#brxe-xnafut` and slider `#brxe-rdzrnr` (the brief's `#brxe-eivicm` / `#brxe-jsgspt` ids belong to the Don't-Wait section). Raw data: `raw/testimonials.json`.

## DOM Structure
```
SECTION#brxe-oxjdlg .brxe-section.bricks-lazy-hidden   (0, 6960.11, 1425×769, flex col center, no bg)
└─ DIV#brxe-ovtvxy .brxe-container.bricks-lazy-hidden  (162.5, 6960.11, 1100×769, padding 140 0 80, margin 0 162.5, flex col center)
   │   border-bottom: 2px solid rgb(98,84,78)
   ├─ DIV#brxe-xnafut .brxe-block                      (162.5, 7100.11, 1100×147, flex col center)
   │  ├─ H2#brxe-spcean "Why Coral Gables & Hialeah Patients Love Us"   (322.78, 7100.11, 779.42×49)
   │  └─ H2#brxe-teealg "Real Stories. Real Smiles."                    (310.88, 7149.11, 803.25×98)
   └─ DIV#brxe-rdzrnr .brxe-slider-nested .splide       (162.5, 7287.11, 1100×360, margin-top 40, position relative)
      ├─ DIV.splide__arrows.splide__arrows--ltr        (h 0; children absolute)
      │  ├─ BUTTON.splide__arrow--prev  (162.5, 7442.11, 50×50, aria-label "undefined")
      │  └─ BUTTON.splide__arrow--next  (1212.5, 7442.11, 50×50, aria-label "Next slide")
      ├─ DIV#brxe-rdzrnr-track .splide__track          (162.5, 7287.11, 1100×360, overflow hidden)
      │  └─ DIV#brxe-rdzrnr-list .splide__list         (transform: translateX(-3300px), h 360)
      │     ├─ DIV.splide__slide--clone ×2              (loop clones of slides 3,4)
      │     ├─ DIV#brxe-bdibso .splide__slide "1 of 4"  ← Michael L.
      │     ├─ DIV#brxe-uzteqw .splide__slide "2 of 4"  ← Isabella C.
      │     ├─ DIV#brxe-iioicl .splide__slide "3 of 4"  ← Sophia R.
      │     ├─ DIV#brxe-mbwzuk .splide__slide "4 of 4"  ← Daniel M.
      │     └─ DIV.splide__slide--clone ×2              (loop clones of slides 1,2)
      └─ (no .splide__pagination — pagination:false)
```
Per-slide anatomy (slide = 1100×360, `display:flex; justify-content:center; align-items:center; position:relative`):
```
SVG.brxe-icon  (x+518, y+23.11, 64×64, margin 0 0 -20px, z-index 99)   ← quote glyph, fill #A49984
DIV.brxe-block (x+165, y+67.11, 770×202.375, padding 40, bg beige, flex col align flex-start)
└─ DIV.brxe-text > P   (x+205, y+107.11, 690×122.375)                 ← quote
DIV.brxe-block (x+165, y+269.48, 770×67.39, padding-top 30, flex justify-center align-center, align-self center)
├─ DIV#brxe-ajwyos (x+165, w385, h37.39, flex align flex-start, column-gap 20)
│  ├─ SVG Google "G" 37×37
│  └─ DIV.brxe-text-basic  (x+222, y+299.48, 115.53×37.39)            ← author name
└─ DIV#brxe-onadzq (x+550, w385, h22, flex col justify-end align-end)
   └─ DIV#brxe-zrunft (w385, flex justify-end, column-gap 10)
      └─ 5 × I.fas.fa-star  (font-size 22px, color rgb(129,137,126))
```

## Computed Styles (exact values from getComputedStyle)

### Section + container
- `SECTION#brxe-oxjdlg`: `display:flex; flex-direction:column; align-items:center; height:769px; max-width:100%`; **no background-color** (transparent → page white).
- `DIV#brxe-ovtvxy`: `width:1100px; margin:0 162.5px; padding:140px 0 80px; display:flex; flex-direction:column; align-items:center; border-bottom:2px solid rgb(98, 84, 78); height:769px`

### Headings
- `H2#brxe-spcean` (eyebrow): `font-family:Poppins; font-weight:400; font-size:35px; line-height:49px; color:rgb(164, 153, 132); text-align:start` — shrink-wrapped and centred by the flex parent.
- `H2#brxe-teealg` (title): `font-family:"Playfair Display"; font-weight:600; font-size:70px; line-height:98px; color:rgb(118, 97, 72)`

### Slider root `#brxe-rdzrnr`
- `margin-top:40px` (`≤478px: margin-top:0`), `width:1100px; height:360px; position:relative; max-width:100%`
- classes: `brxe-slider-nested bricks-lazy-hidden splide brx-auto-height splide--loop splide--ltr splide--draggable is-active is-overflow is-initialized`, `role="region" aria-roledescription="carousel"`
- **`data-splide` (verbatim config):**
  `{"type":"loop","direction":"ltr","keyboard":"global","height":"40vh","gap":"0px","start":0,"perPage":1,"perMove":1,"speed":"500","interval":3000,"autoHeight":true,"autoplay":true,"pauseOnHover":true,"pauseOnFocus":true,"arrows":true,"pagination":false,"mediaQuery":"max","breakpoints":{"1279":{"height":"40vh","speed":"500","autoHeight":true,"autoplay":true,"pauseOnHover":true,"pauseOnFocus":true,"arrows":true},"767":{"height":"60vh"},"478":{"height":"90vh"}}}`

### Arrows
- `.splide__arrows--ltr` container: `width:1100px; height:0` (children absolutely positioned)
- both buttons: `width:50px; height:50px; min-width:30px; min-height:30px; display:flex; justify-content:center; align-items:center; padding:0; border:0; background:rgba(0,0,0,0); color:rgb(189, 170, 156); font-size:30px; line-height:34.5px; position:absolute; z-index:1; cursor:pointer; transition:all`
- prev: `top:180px; left:0; right:1050px; bottom:130px; transform:matrix(-1, 0, 0, 1, 0, -25)` (i.e. `translateY(-50%) scaleX(-1)` from `.brxe-slider-nested .splide__arrow--prev`)
- next: `top:180px; left:1050px; right:0; transform:matrix(1, 0, 0, 1, 0, -25)`
- inner `svg`: `width:30px; height:30px; fill:rgb(189, 170, 156)` (native `viewBox="0 0 40 40" width=40 height=40`, single chevron path)
- CSS: `#brxe-rdzrnr > .splide__arrows > .splide__arrow { color: rgb(189,170,156); font-size:30px; min-height:30px; min-width:30px }` and `… svg { fill: rgb(189,170,156); height:30px; width:30px }`
- no hover colour/background rule found for these arrows.

### Track / list / slides
- `.splide__track--loop`: `width:1100px; height:360px; padding:0`
- `.splide__list`: `height:360px; transform:translateX(-Npx)` (one slide = 1100px per move)
- `.splide__slide`: `width:calc(100% + 0px); margin-right:0; height:40vh (360px); display:flex; justify-content:center; align-items:center; position:relative`
- `#brxe-rdzrnr > .splide__track > .splide__list > .splide__slide { justify-content:center; align-items:center }`

### Slide internals
- Quote icon `SVG.brxe-icon` (`#brxe-mixegr` etc.): `width:64px; height:64px; margin:0 0 -20px; z-index:99; overflow:hidden; fill:none` (path fill `#A49984`, intrinsic `viewBox 0 0 55 46`)
- Quote block: `background-color:rgb(238, 231, 224); padding:40px; width:770px; height:202.375px; display:flex; flex-direction:column; align-items:flex-start; border-radius:0; box-shadow:none`
- Quote `P`: `font-family:Lato; font-weight:300; font-size:18px; line-height:30.6px; color:rgb(51, 51, 51); text-align:start` (`.brxe-text` wrapper: Lato 400/16px/27.2px `rgb(98,84,78)` but the `P` overrides)
- Author row `#brxe-qlsrpg`: `padding:30px 0 0; width:770px; height:67.39px; display:flex; justify-content:center; align-items:center; align-self:center`
- Name `DIV.brxe-text-basic`: `font-family:Poppins; font-weight:500; font-size:22px; line-height:37.4px; color:rgb(98, 84, 78)`
- Stars `I.fas.fa-star` (`#brxe-auaets`…): `color:rgb(129, 137, 126); fill:rgb(129,137,126); font-size:22px; font-family:"Font Awesome 6 Solid"; font-weight:900; display:block` (media `≤767px → font-size:18px`); container gap `10px`, right-aligned

## States & Behaviors

### Autoplay (time-driven)
- **Trigger:** Splide `autoplay:true`, `interval:3000`, `speed:500`, `pauseOnHover:true`, `pauseOnFocus:true`, `autoHeight:true`.
- **State:** active slide advances 1 per 3000ms; observed live (Isabella C. → Sophia R. while idle; `aria-label` of `.is-active` changes).
- **Transition:** 500ms translate of `.splide__list`; `type:"loop"` so it never hits an end (2 clones before, 2 after).
- **Implementation approach:** Splide v4 with the exact `data-splide` JSON above; re-init on breakpoint changes (`mediaQuery:"max"`).

### Arrow click (click-driven)
- **Trigger:** `.splide__arrow--next` / `--prev` button click.
- **Verified live:** click next → active `.is-active` went `"1 of 4"` → `"2 of 4"` in <700ms.
- `aria-label` quirk: the **prev** arrow ships `aria-label="undefined"` on the live site (reproduce or fix as you prefer).

### Keyboard / drag
- `keyboard:"global"` (←/→ anywhere on page move the slider), root class `splide--draggable` → pointer/touch drag enabled.

### Dots / progress
- **None.** `pagination:false` and no `.splide__pagination` node exists.

### Scroll reveals
- **N/A.** No `brx-animated`/animate.css classes and no `animation-name ≠ none` inside `#brxe-oxjdlg`.

## Carousel / multi-state content (all 4 slides, verbatim)

**Slide 1 — `aria-label="1 of 4"` — Michael L.**
> My experience here was excellent! Dr. Perez really takes the time to listen and provide the best care possible. She was very detailed, professional, and made the whole appointment stress-free. The staff was also very attentive and helpful. I can finally say I enjoy going to the dentist now. Highly recommended!

**Slide 2 — `aria-label="2 of 4"` — Isabella C.**
> I had the best experience with Dr. Laura Perez! Her main priority was making sure it was fast and comfortable and she was very knowledgeable and gave me great tips on how to continue to take care of my teeth. I left there with my teeth feeling great! I highly recommend Advanced Smile Dental Clinic for amazing dental care.

**Slide 3 — `aria-label="3 of 4"` — Sophia R.**
> I had such a positive visit at Advanced Smile Dental Clinic! Dr. Perez is gentle, kind, and makes you feel completely at ease during the appointment. She walked me through the entire process and answered all of my questions. The office is clean, modern, and very comfortable. I will definitely be coming back!

**Slide 4 — `aria-label="4 of 4"` — Daniel M.**
> Dr. Laura Perez and her team are truly wonderful! From the moment I walked in, I felt welcomed and cared for. The staff was very professional and friendly, and Dr. Perez explained everything clearly so I understood my treatment. My smile has never looked better, and I couldn’t be happier with the results.

Every slide carries: the beige quote box, the `#A49984` double-quote SVG, a **Google "G" logo (multicolour SVG 37×37, fills `#FFC107`/`#FF3D00`/`#4CAF50`/`#1976D2`)**, the author name, and **5 filled stars** (`rgb(129,137,126)`). No photos/avatars, no star rating value text (icons only), no review-source badge beyond the Google G.

## Assets
| Element | URL | Notes | Intrinsic | Rendering |
|---|---|---|---|---|
| quote glyph | inline `<svg class="brxe-icon">` | fill `#A49984`, `viewBox 0 0 55 46` | 55×46 | 64×64, `margin-bottom:-20px`, `z-index:99` |
| Google logo | inline `<svg class="brxe-icon">` | 4 paths, `#FFC107 #FF3D00 #4CAF50 #1976D2` | `viewBox 0 0 37 37` | 37×37, `display:block` |
| stars | Font Awesome 6 Solid `\f005` | `color: rgb(129,137,126)` | — | 22px icons, gap 10px |
| arrow chevrons | inline `<svg viewBox="0 0 40 40">` | `fill:rgb(189,170,156)` | 40×40 | 30×30 |

No raster images and no lazy-loaded assets in this section.

## Text Content (verbatim)
- Eyebrow (H2): Why Coral Gables & Hialeah Patients Love Us
- Title (H2): Real Stories. Real Smiles.
- Slides: see above (4 quotes + "Michael L.", "Isabella C.", "Sophia R.", "Daniel M.")

## Responsive Behavior
Not measured (brief restricts responsive work to one agent). From CSS media queries read in the page stylesheets:
- `≤767px`: star `font-size:18px`
- `≤478px`: slider `margin-top:0`
- `data-splide` breakpoints: `≤1279px` → same 40vh/500ms/autoplay/arrows; `≤767px` → `height:60vh`; `≤478px` → `height:90vh` (quote text gets much taller; `autoHeight:true` keeps the track in sync).
