# ServicesSection Specification

## Overview
- **Target file:** `src/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/ServicesSection.tsx`
- **Screenshot:** `docs/design-references/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/services-1440.png`
- **Interaction model:** click-driven (Splide carousel arrows/drag) + hover (flip cards, radial button) + time-driven reveal (contentLoaded `fadeInLeft` @ 1.4s)
- **Source root:** `section#brxe-elxohg` — page y 2363.63, 1425 × 849

## DOM Structure
```
section#brxe-elxohg .brxe-section            flex column, align-items:center, 1425×849
├─ div#brxe-rkfuwq .brxe-block               heading block, bg #F6F4F2, padding 80px 0 360px, 1425×649
│  ├─ div#brxe-ltaxbj .brxe-container        divider: 1100×2, margin 0 162.5px 60px, border-top 2px solid rgb(118,97,72)
│  └─ div#brxe-wgyxxm .brxe-container.br-animated   1100×147, margin 0 162.5px, padding 0 20px,
│  │                                                display:flex, justify-content:center, align-items:center
│  │  ├─ div#brxe-jitvev .brxe-block         742×147, flex column (left column)
│  │  │  ├─ h2#brxe-hankvb  "Modern Dentistry with a Gentle Touch"
│  │  │  └─ h2#brxe-azlxfk  "Our Services"
│  │  └─ div#brxe-etozxh .brxe-block          318×66.59, flex column, center/center
│  │     └─ a#brxe-mcmerj .btn-radial-4.bricks-button  "VIEW ALL SERVICES"
└─ div#brxe-eexxcm .brxe-container.br-animated  1100×540, margin -340px 162.5px 0  (pulled up over heading block)
   └─ div#brxe-ekklrt .brxe-slider-nested.splide  1100×540, position:relative  (role=region, aria-roledescription=carousel)
      ├─ div.splide__arrows.splide__arrows--ltr   1100×0 (static wrapper)
      │  ├─ button.splide__arrow.splide__arrow--prev   50×50, aria-label "Go to last slide"
      │  └─ button.splide__arrow.splide__arrow--next   50×50, aria-label "Next slide"
      └─ div#brxe-ekklrt-track .splide__track     1100×540, padding 80px 0, overflow:hidden, position:relative, z-index:0
         └─ div#brxe-ekklrt-list .splide__list    flex, display:flex, transform translateX(-2199.94px)
            └─ 4 original slides + 12 clones (.splide__slide--clone)
               slide (366.656×380) .flip-container2  perspective:1000px, position:relative, justify/align center
               └─ div.flipper2  328×380 (centered → 19.33px visual gutter each side), background-image: <service photo>, cover
                  ├─ div.front2   position:absolute, inset 0, z-index:2, flex column, align-items:center, justify-content:flex-end
                  │  └─ div (328×380, flex column, justify-content:flex-end, align-items:center)
                  │     └─ span.brxe-button.btn-radial-4.bricks-button   the overlay label pill
                  └─ div.back2    position:absolute, inset 0, z-index:1, opacity:0, pointer-events:none
                     └─ div (flex column, justify-content:center)
                        └─ div (brown card, see styles) → h3 + p + div(align-items:flex-end) > a.efectoderecha "Learn More" + <i class="fas fa-arrow-right-long">
```

## Computed Styles (exact values from getComputedStyle)

### Section & heading block
- `section#brxe-elxohg`: `display:flex; flex-direction:column; align-items:center; width:1425px; height:849px`
- `#brxe-rkfuwq`: `background-color: rgb(246,244,242); padding: 80px 0px 360px; display:flex; flex-direction:column; align-items:flex-start`
- `#brxe-ltaxbj` (divider): `width:1100px; height:2px; margin:0px 162.5px 60px; border-top:2px solid rgb(118,97,72)` (empty innerHTML — pure rule)
- `#brxe-wgyxxm`: `padding:0px 20px; margin:0px 162.5px; width:1100px; height:147px; display:flex; justify-content:center; align-items:center; animation:1s both` (reveal, see States)
- `#brxe-jitvev`: `width:742px; height:147px; display:flex; flex-direction:column`
- `h2#brxe-hankvb`: `font-size:35px; font-weight:400; font-family:Poppins; line-height:49px; color:rgb(164,153,132)` — rect 651.92×49
- `h2#brxe-azlxfk`: `font-size:70px; font-weight:500; font-family:"Playfair Display"; line-height:98px; color:rgb(118,97,72)` — rect 404.13×98
- `#brxe-etozxh`: `width:318px; height:66.59px; display:flex; flex-direction:column; justify-content:center; align-items:center`
- `a#brxe-mcmerj` (VIEW ALL SERVICES): `font-size:18px; font-weight:600; font-family:Lato; line-height:30.6px; letter-spacing:0.5px; color:rgb(255,255,255); background-color:rgb(133,141,130); padding:18px; width:210.45px; height:66.59px; display:flex; justify-content:center; align-items:center; gap:10px; border-radius:40px; overflow:hidden; position:relative; z-index:99; transition:0.3s; text-align:center` → href `https://advancedsmileclinic.com/our-dental-services/`

### Slider wrapper
- `#brxe-eexxcm`: `width:1100px; height:540px; margin:-340px 162.5px 0px; display:flex; justify-content:center; align-items:center`
- `#brxe-ekklrt`: `width:1100px; height:540px; position:relative`
- `.splide__track`: `padding:80px 0px; width:1100px; height:540px; overflow:hidden; position:relative; z-index:0`
- `.splide__list`: `width:1100px; height:380px; display:flex; align-items:flex-start; transform:matrix(1,0,0,1,-2199.94,0)`
- slide: `width:366.656px; height:380px; display:flex; flex-direction:column; justify-content:center; align-items:center; position:relative; background-size:cover`
- `.flipper2`: `position:relative; width:328px; height:380px; display:flex; flex-direction:column; align-items:flex-start; background-size:cover; background-position:0% 0%`
- `.front2, .back2` (inline `<style>`): `position:absolute; top:0; left:0; width:100%; height:100%; transition: transform 0.6s, opacity 0.6s; backface-visibility:hidden`
- `.front2`: `z-index:2; opacity:1; transform:rotateY(0deg) scale(1); display:flex; flex-direction:column; align-items:center`
- inner front wrapper `#brxe-gjvpef`: `display:flex; flex-direction:column; justify-content:flex-end; align-items:center` (328×380)
- `.back2`: `z-index:1; opacity:0; transform:rotateY(10deg) scale(0.95); pointer-events:none; display:flex; flex-direction:column`
- back inner `#brxe-adyeux`: `display:flex; flex-direction:column; justify-content:center` (328×380)
- brown back card `#brxe-quyjfy`: `background-color:rgba(118,97,72,0.8); padding:0px 20px; width:295.188px; height:433.188px; display:flex; flex-direction:column; justify-content:center; align-items:center; gap:20px; border-radius:10px; box-shadow:rgba(0,0,0,0.25) 0px 4px 20px 0px; z-index:99` (height > 380 card → overflows ~13px top/bottom, unclipped)
- `h3` back title: `font-size:20px; font-weight:600; font-family:Poppins; line-height:28px; color:rgb(255,255,255); text-align:center`
- `p` back copy: `font-size:16px; font-family:Lato; line-height:27.2px; color:rgb(255,255,255); width:255.188px`
- `a.efectoderecha` (Learn More): `font-size:20px; font-weight:600; font-family:Poppins; line-height:34px; letter-spacing:0.5px; color:rgb(255,255,255); display:flex; gap:10px; justify-content:center; align-items:center; cursor:pointer` (no background, no border) — icon `<i class="fas fa-arrow-right-long">` Font Awesome 6 Solid 20px/900, `width:20.5px;height:20px`, color white

### Overlay label pill (`span.btn-radial-4.bricks-button`)
- `font-size:18px; font-weight:600; font-family:Lato; line-height:30.6px; letter-spacing:0.5px; color:rgb(255,255,255); background-color:rgb(133,141,130); padding:12px 20px; margin:0px 0px -28px; width:295.19px; height:54.59px; display:flex; align-items:center; justify-content:center; gap:10px; border-radius:10px; box-shadow:rgba(0,0,0,0.25) 0px 4px 20px 0px; overflow:hidden; position:relative; z-index:99; transition:0.3s`
- (`margin-bottom:-28px` makes the pill hang below the photo's bottom edge, overlapping the beige background)

### Arrows
- `.splide__arrow` (splide-layer.min.css): `position:absolute; top:50%; transform:translateY(-50%); width:50px; height:50px; display:flex; align-items:center; justify-content:center; background-color:transparent; border:0; padding:0; cursor:pointer; font-size:60px; z-index:1`
- Bricks override `#brxe-ekklrt > .splide__arrows > .splide__arrow`: `color:rgb(189,170,156); font-size:30px; min-height:30px; min-width:30px`
- `#brxe-ekklrt > .splide__arrows > .splide__arrow svg`: `fill:rgb(189,170,156); height:30px; width:30px`
- prev: `left:0px; right:1050px; top:270px; bottom:220px; transform:matrix(-1,0,0,1,0,-25)` (= `translateY(-50%) scaleX(-1)`, `.brxe-slider-nested .splide__arrows:not(.custom) .splide__arrow--prev{transform:translateY(-50%) scaleX(-1)}`)
- next: `left:1050px; right:0px; top:270px; bottom:220px; transform:matrix(1,0,0,1,0,-25)` (= `translateY(-50%)`)
- arrow glyph (both): `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>` (next at natural orientation; prev flipped by scaleX(-1))
- arrows are positioned against the `.splide` root (540px tall): `top:50%` → 270px, i.e. vertically centered on the 380px slide band (80px track padding on both sides)
- Arrow hover: measured `:hover` → color/opacity/transform unchanged (no `:hover` rule exists; only `.splide__arrow:disabled{opacity:0.5}`)

## States & Behaviors

### Card flip (front → back)
- **Trigger:** `.flip-container2:hover` (also `.flip-container2.hover` class variant for touch)
- **State A (front):** `.front2{opacity:1; z-index:2; transform:rotateY(0) scale(1)}`, `.back2{opacity:0; z-index:1; transform:rotateY(10deg) scale(0.95); pointer-events:none}`
- **State B (hover, measured):** `.front2{opacity:0; z-index:1; transform:matrix3d(0.935567,0,0.164966,0, 0,0.95,0,0, -0.173648,0,0.984808,0, 0,0,0,1)}` (= `rotateY(-10deg) scale(.95)`), `.back2{opacity:1; z-index:2; transform:none (rotateY(0) scale(1)); pointer-events:all}`
- **Transition:** `transform 0.6s, opacity 0.6s` (default easing), container `perspective:1000px`
- **Implementation approach:** CSS-only cross-fade/3D swap of two absolutely-stacked layers; back layer content becomes interactive only in state B.

### Learn More arrow bounce (inside hovered back)
- **Trigger:** `.back2:hover .efectoderecha` (only reachable after flip exposes the back layer)
- **State A:** `animation:none` → **State B:** `animation:1.2s ease 0.8s infinite moverDerechaParpadeo`
- **Keyframes `moverDerechaParpadeo`:** `0%,100%{transform:translateX(0px);opacity:1}` / `50%{transform:translateX(10px);opacity:0.6}`
- **Implementation approach:** CSS animation on the link; icon `<i>` has `position:relative`.

### Radial hover fill (`.btn-radial-4`) — applies to VIEW ALL SERVICES and every label pill
- **Trigger:** `:hover`
- **State A (`::before`):** `content:""; position:absolute; bottom:0; left:50%; width:0; height:0; background:linear-gradient(45deg, rgb(118,97,72), rgb(118,97,72)); border-radius:50%; transform:translateX(-50%); transition:0.4s cubic-bezier(0.25,0.46,0.45,0.94); z-index:-1; opacity:0`
- **State B (measured on `#brxe-mcmerj:hover`):** `width:252.531px (120%); height:250px; bottom:-125px; opacity:1; transform:matrix(1,0,0,1,-126.266,0)`
- **Button itself:** background stays `rgb(133,141,130)`, color stays white, `transition:0.3s` — the growing brown circle (`z-index:-1` inside the button's stacking context, `overflow:hidden`) visually replaces the sage green.
- **Implementation approach:** pseudo-element circle expanding upward from bottom-center; `::before` is clipped by the pill's `border-radius` + `overflow:hidden`.

### Reveal animations (Bricks interactions, `contentLoaded` — not scroll-triggered)
- `#brxe-wgyxxm` (heading row + button): `data-interactions=[{"trigger":"contentLoaded","action":"startAnimation","animationType":"fadeInLeft","delay":"1.4s"}]`, `data-interaction-hidden-on-load="1"` → element hidden until 1.4s after page load, then animate.css `fadeInLeft`, `animation-duration:1s`, `animation-fill-mode:both` (`.brx-animated`). End state: fully visible (`opacity:1`, no transform).
- `#brxe-eexxcm` (slider): identical — `fadeInLeft`, `delay 1.4s`, 1s duration.
- `#brxe-ltaxbj`, `#brxe-rkfuwq`, `#brxe-elxohg`: no animation (`animation:none`).

### Carousel behavior (Splide, from `data-splide` on `#brxe-ekklrt`)
- `{"type":"loop","direction":"ltr","keyboard":"global","height":"auto","gap":"0px","start":0,"perPage":3,"perMove":1,"speed":400,"interval":3000,"autoHeight":true,"autoplay":false,"pauseOnHover":true,"pauseOnFocus":true,"arrows":true,"pagination":false,"mediaQuery":"max","breakpoints":{"1279":{"perPage":3,"autoHeight":true,"pauseOnHover":true,"pauseOnFocus":true,"arrows":true},"991":{"perPage":2},"767":{"perPage":1}}}`
- **autoplay: false** (interval 3000 is defined but unused), **loop: true** (clones present, `splide--loop`), **draggable: true** (`splide--draggable`), **speed: 400ms**, **perPage: 3**, **perMove: 1**, **gap: 0** (visual gutter = `(366.656-328)/2 = 19.33px` per side → 38.66px between cards), **no pagination/bullets**.
- Container classes: `is-active is-overflow is-initialized`.
- Slides also implement Bricks lazy-load: off-screen `.flipper2` carries `bricks-lazy-hidden` and gets its `background-image` injected when it becomes visible (slide 4 loaded `Group-14.webp` only after it scrolled into the viewport).

## Carousel / multi-state content (all 4 slides, verbatim)

**Slide 1** (`#brxe-kxdxve`, 1 of 4) — bg `Group-16.webp`
- Label (front pill): `EMERGENCY DENTISTRY`
- Back h3: `EMERGENCY<br>DENTISTRY`
- Back p: `Dental emergency service can be termed as lifesaving for patients who require emergency care and immediate attention in order to minimise the risk of serious medical complications in the longer term`
- Learn More → `https://advancedsmileclinic.com/emergency-dentistry/`

**Slide 2** (`#brxe-rayovz`, 2 of 4) — bg `Group-17.webp`
- Label: `GENERAL DENTISTRY`
- Back h3: `GENERAL<br>DENTISTRY`
- Back p: `Our general dentistry helps you maintain good oral health by stopping the disease before it takes hold in your mouth. It provides preventive and restorative services in regular terms`
- Learn More → `https://advancedsmileclinic.com/general-dentistry/`

**Slide 3** (`#brxe-vjorvo`, 3 of 4) — bg `Group-13-1.webp`
- Label: `SMILE DESIGN`
- Back h3: `SMILE<br>DESIGN`
- Back p: `Our smile design enhances your teeth and gums for a brighter, balanced look. It combines art and science to create a natural, beautiful smile.`
- Learn More → `https://advancedsmileclinic.com/cosmetic-dentistry/`

**Slide 4** (`#brxe-scduyc`, 4 of 4) — bg `Group-14.webp` (revealed by advancing the slider)
- Label: `SAME-DAY DENTURES`
- Back h3: `SAME-DAY<br>DENTURES`
- Back p: `Our same-day dentures restore your smile quickly with comfort and function. They provide a fast, effective solution for missing teeth in one visit.`
- Learn More → `https://advancedsmileclinic.com/oral-surgery/implant-overdentures/` (gets `tabindex="-1"` until visible)

## Assets
All four card photos are CSS `background-image` on `.flipper2` (never `<img>`), `background-size:cover; background-position:0% 0%`, intrinsic size **306×354** (webp), rendered at 328×380:

| Slide | URL | used by |
|---|---|---|
| 1 | `https://advancedsmileclinic.com/wp-content/uploads/2025/08/Group-16.webp` | Emergency Dentistry card |
| 2 | `https://advancedsmileclinic.com/wp-content/uploads/2025/08/Group-17.webp` | General Dentistry card |
| 3 | `https://advancedsmileclinic.com/wp-content/uploads/2025/08/Group-13-1.webp` | Smile Design card |
| 4 | `https://advancedsmileclinic.com/wp-content/uploads/2025/08/Group-14.webp` | Same-Day Dentures card (lazy) |

Icons: Font Awesome 6 Solid `fa-arrow-right-long` (Learn More), custom 40×40 chevron SVG (arrows). No alt text (backgrounds).

## Text Content (verbatim)
- Eyebrow h2: `Modern Dentistry with a Gentle Touch`
- Title h2: `Our Services`
- Button: `VIEW ALL SERVICES`
- (Slide texts listed in the carousel section above — including the `<br>` line breaks in each back-title.)

## Responsive Behavior
Not measured (1440px only). Inferred from CSS read at 1440:
- Slider breakpoints (`data-splide`, `mediaQuery:"max"`): `≤1279 → perPage 3`, `≤991 → perPage 2`, `≤767 → perPage 1`.
- Arrow offsets (Bricks rules): base / `@media (max-width:991px)` → `left:0` / `right:0`; `@media (max-width:767px)` → `left:40px` / `right:40px`; `@media (max-width:478px)` → `left:20px` / `right:20px`.
- Heading scale, section padding and the `-340px` slider overlap are set in px and not overridden by any media query found for these selectors — expect the same values below 1440.
