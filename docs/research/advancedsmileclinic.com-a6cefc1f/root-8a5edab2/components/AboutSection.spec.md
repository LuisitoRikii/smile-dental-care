# AboutSection Specification

## Overview
- **Target file:** `src/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/AboutSection.tsx`
- **Screenshot:** `docs/design-references/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/about-1440.png` (top) and `about-lower-1440.png` (tan panel)
- **Interaction model:** load-driven (fadeInRight / fadeInLeft on `contentLoaded`) + hover on the three outline buttons

## DOM Structure
```
<section id="brxe-fanfpx" class="brxe-section">            y=880, 1425 x 1183.63, margin:80px 0 0
  <div id="brxe-roadow" class="brxe-container brx-animated">        1100 x 432.75, margin:0 142.5px
    <div id="brxe-ibgyjj" class="brxe-block">                       1100 x 148
      <h2 id="brxe-ejvwnk">Your Trusted Dentists in Coral Gables & Hialeah</h2>
      <h2 id="brxe-qrnaal">Advanced Smile Dental Clinic</h2>
    <div id="brxe-korcsl" class="brxe-block">                       1100 x 244.75 (2 columns + divider)
      <div id="brxe-udmtfw" class="brxe-block">                     509.5 x 244.75
        <div id="brxe-dahjjc" class="brxe-text"><p>…paragraph 1…</p></div>
      <div id="brxe-lsflml" class="brxe-divider vertical">          1 x 200, centered
        <div class="line"></div>                                    border-right:1px solid #766148
      <div id="brxe-xxjkil" class="brxe-block">                     509.5 x 214.16
        <div id="brxe-gbwvao" class="brxe-text"><p>…paragraph 2…</p></div>
  <div id="brxe-kvvqkp" class="brxe-container brx-animated">        1100 x 650.88, margin:60px 142.5px 0
    <div id="brxe-zecrdl" class="brxe-block">                       LEFT — portrait, CSS background image
    <div id="brxe-jtynom" class="brxe-block">                       RIGHT — ONE tan panel, 551.52 x 650.88
      <div id="brxe-kbczhi" class="brxe-block">                     group 1
        <h3 id="brxe-skqaeb">Affordable Dentistry</h3>
        <div id="brxe-ntbqch" class="brxe-text"><p>…</p></div>
        <div id="brxe-dhtynj" class="brxe-block">                   button row (divider | button | divider)
          <div id="brxe-rtyjpe" class="brxe-divider horizontal"> 44.98 x 1
          <a id="brxe-phsptw" class="brxe-button bricks-button" href="…/insurances/">READ MORE</a>
          <div id="brxe-linktu" class="brxe-divider horizontal"> 224.98 x 1
      <div id="brxe-juomfm" class="brxe-block">                     group 2
        <h3 id="brxe-ubnweb">Quality Dental Care</h3>
        <div id="brxe-rfwzmz" class="brxe-text"><p>…</p></div>
        <div id="brxe-jragmh"> div#brxe-yzlalj (44.98) + a#brxe-dcbvkk "REQUEST A CALL" + div#brxe-ybsbfy (224.98)
      <div id="brxe-xlunfg" class="brxe-block">                     group 3
        <h3 id="brxe-przwer">Online Registration</h3>
        <div id="brxe-jufxaf" class="brxe-text"><p>…</p></div>
        <div id="brxe-kefgzc"> div#brxe-sandaa (44.98) + a#brxe-ttekhc "READ MORE" + div#brxe-etwcbc (224.98)
```
Note: there is **one** tan panel (`#brxe-jtynom`) containing all three groups — not three separate colored blocks. The three groups are separated by whitespace (`gap:40px normal` on the panel).

## Computed Styles (exact values from getComputedStyle)

### Container — `#brxe-fanfpx`
- `background-color: rgba(0,0,0,0)` — **transparent, no background** (verified up the ancestor chain; only `body.home` has `rgb(255,255,255)`).
- `background-image: none`
- `width:1425px; height:1183.625px; margin: 80px 0px 0px; padding: 0 20px`
- `display:flex; flex-direction:column; align-items:center; gap: 40px normal`
- `border:0; border-radius:0; box-shadow:none; position:static`

### `#brxe-roadow` (text block container)
- `width:1100px; height:432.75px; margin: 0 142.5px`
- `display:flex; flex-direction:column; align-items:flex-start; gap: 40px normal`
- `background-color: rgba(0,0,0,0)`
- `animation: 1s both` (`.brx-animated`), `animation-name:none` after completion

### `#brxe-ejvwnk` (eyebrow heading — VISIBLE, not hidden)
- `font-family: Poppins; font-size:35px; font-weight:400; line-height:49px`
- `color: rgb(164,153,132)` (`#A49984`)
- `width:821.562px; height:49px; display:block; margin:0`

### `#brxe-qrnaal` (main heading)
- `font-family: "Playfair Display"; font-size:70px; font-weight:500; line-height:98px`
- `color: rgb(118,97,72)` (`#766148`)
- `width:934.781px; height:98px; display:block; margin:0`

### `#brxe-dahjjc` / `#brxe-gbwvao` (body paragraphs)
- `font-family: Lato; font-size:18px; font-weight:400; line-height:30.6px`
- `color: rgb(51,51,51)` (`#333333`)
- `width:509.5px; display:block`
- Column layout: left column 509.5px, 1px vertical divider, right column 509.5px (row gap implied by widths; divider centered, 200px tall)

### Vertical divider `#brxe-lsflml .line`
- `width:1px; height:200px; border-right: 1px solid rgb(118,97,72)` (border-top:none)
- container: `display:flex; align-items:center; align-self:center; margin:0`

### `#brxe-kvvqkp` (image + panel container)
- `width:1100px; height:650.875px; margin: 60px 142.5px 0px`
- `display:flex; flex-direction:row; justify-content:center; align-items:center; gap:40px`
- `animation: 1s both`

### `#brxe-zecrdl` (portrait)
- Empty element — the portrait is a **CSS background image**:
  - `background-image: url("https://advancedsmileclinic.com/wp-content/uploads/2025/09/83609327018-1-1.webp")`
  - `background-size: cover; background-position: 50% 0%; background-repeat: repeat`
- `width:508.484px; height:650.875px; border-radius:20px`
- `display:flex; flex-direction:column; justify-content:center; align-items:center`
- `background-color: rgba(0,0,0,0)`; `box-shadow:none`

### `#brxe-jtynom` (tan panel)
- `background-color: rgb(164,153,132)` (`#A49984`)
- `width:551.516px; height:650.875px; padding:40px; border-radius:20px`
- `display:flex; flex-direction:column; justify-content:center; align-items:flex-start; gap: 40px normal`
- `border:0; box-shadow:none; overflow:visible`

### Group blocks `#brxe-kbczhi` / `#brxe-juomfm` / `#brxe-xlunfg`
- `width:471.516px; display:flex; flex-direction:column; align-items:flex-start; gap: 10px normal`
- `background-color: rgba(0,0,0,0)`

### `h3` headings (`#brxe-skqaeb`, `#brxe-ubnweb`, `#brxe-przwer`)
- `font-family: Poppins; font-size:25px; font-weight:700; line-height:35px`
- `color: rgb(255,255,255)`
- `display:block; height:35px`

### Group body text (`#brxe-ntbqch`, `#brxe-rfwzmz`, `#brxe-jufxaf`)
- `font-family: Lato; font-size:16px; font-weight:400; line-height:27.2px`
- `color: rgb(255,255,255); text-align:left; width:471.516px`

### Button rows (`#brxe-dhtynj`, `#brxe-jragmh`, `#brxe-kefgzc`)
- `display:flex; flex-direction:row; justify-content:center; align-items:center; gap: normal 10px; width:471.516px; height:45.1875px`
- Left rule `#brxe-rtyjpe` / `#brxe-yzlalj` / `#brxe-sandaa`: `width:44.984px; height:1px`, `.line { border-top: 1px solid rgb(255,255,255) }`
- Right rule `#brxe-linktu` / `#brxe-ybsbfy` / `#brxe-etwcbc`: `width:224.984px; height:1px`, same white 1px border-top
- Rules are `display:flex; align-items:center` so the 1px line is vertically centered against the 45.19px button.

### Outline buttons `#brxe-phsptw` / `#brxe-dcbvkk` / `#brxe-ttekhc`
- `background-color: rgba(0,0,0,0)` (transparent)
- `color: rgb(255,255,255)`
- `border: 1px solid rgb(255,255,255); border-radius:20px`
- `font-family:Poppins; font-weight:600; font-size:16px; line-height:27.2px; letter-spacing:0.5px; text-align:left`
- `padding:8px 16px; width:40% (181.547px); height:45.1875px; gap:10px`
- `display:flex; justify-content:center; align-items:center; cursor:pointer`
- `transition: 0.4s ease-in-out`
- `@media (max-width:767px){ width:60%; text-align:center }`; `@media (max-width:478px){ font-size:14px }`

## States & Behaviors

### Container entrance animations (load-driven, NOT scroll-driven)
- **Trigger:** Bricks interaction, `trigger: "contentLoaded"`, `action: "startAnimation"`.
  - `#brxe-roadow` → `animationType: "fadeInRight"`, **`delay: "1.4s"`**
  - `#brxe-kvvqkp` → `animationType: "fadeInLeft"`, **`delay: "1.4s"`**
- **State A:** `opacity:0` (`data-interaction-hidden-on-load="1"`).
- **State B:** `opacity:1; transform:none` (measured end state; class list reduced to `brxe-container brx-animated`, `animation-name:none`).
- **Transition:** `.brx-animated { animation-duration:1s; animation-fill-mode:both }` + `.brx-animate-fadeInRight` / `.brx-animate-fadeInLeft` (`animation-name: fadeInRight` / `fadeInLeft`) with `animation-delay:1.4s`.
  ```
  @keyframes fadeInLeft  { 0%{opacity:0;transform:translate3d(-100%,0,0)} 100%{opacity:1;transform:translateZ(0)} }
  @keyframes fadeInRight { 0%{opacity:0;transform:translate3d(100%,0,0)}  100%{opacity:1;transform:translateZ(0)} }
  ```
- **Implementation approach:** mount with `opacity:0`, apply the animate.css class after `contentLoaded` with a 1.4 s delay.

### Hover states (all three buttons identical)
- **`#brxe-phsptw` / `#brxe-dcbvkk` / `#brxe-ttekhc`:**
  - `background-color`: `rgba(0,0,0,0)` → `rgb(255,255,255)` (`:hover { background-color: var(--bricks-color-b92a3f) }`)
  - `color`: `rgb(255,255,255)` → `rgb(118,97,72)` (`#766148`, from `var(--bricks-color-a037a8)`)
  - `border`, `box-shadow`, `transform`: unchanged
  - `transition: 0.4s ease-in-out` (measured live: `hovered:true, color:rgb(118,97,72), background-color:rgb(255,255,255)`)
- Headings/paragraphs/portrait: no hover rules.

## Carousel / multi-state content
N/A (no carousel; all three groups are always visible).

## Assets
| Purpose | URL | intrinsic size | how used |
|---|---|---|---|
| Portrait photo | `https://advancedsmileclinic.com/wp-content/uploads/2025/09/83609327018-1-1.webp` | – | CSS `background-image` on `#brxe-zecrdl`, `background-size:cover`, `background-position:50% 0%`, clipped by `border-radius:20px`, box 508.484x650.875 |

## Text Content (verbatim)
- `h2 #brxe-ejvwnk`: `Your Trusted Dentists in Coral Gables & Hialeah`
- `h2 #brxe-qrnaal`: `Advanced Smile Dental Clinic`
- `#brxe-dahjjc p`: `Advanced Smile Dental Clinic, located in Coral Gables and Hialeah, Florida provides our patients with a comprehensive array of dental services including: emergency dentistry, cosmetic dentistry, dental implants, root canals, teeth extractions, teeth whitening, pediatric dentistry and even invisalign treatment. Dr. Laura Perez, is an honors graduate from New York University and is one of the most compassionate dental practitioners one can find.`
- `#brxe-gbwvao p`: `&nbsp;Her passion for dentistry and the care of her patients is like none other. Come be seen by Laura Perez, DDS at Advanced Smile Dental Clinic today! Schedule your dental consultation through our online system and please, feel free to fill out the new patient welcome package (registration form) found on our patient’s information menu. Your information will be securely pass to our system.`
  (leading non-breaking space; typographic apostrophe in `patient’s`; `pass` is a typo on the original — keep it)
- Group 1: `h3` `Affordable Dentistry` / `p` `Affordable prices for you and your family! Get the smile you want today! We offer financing solutions for your dental treatment.` / button `READ MORE` → `https://advancedsmileclinic.com/insurances/`
- Group 2: `h3` `Quality Dental Care` / `p` `Our staff strives to provide the best quality dental and customer service in the Coral Gables and Hialeah areas.&nbsp; Learn more by requesting&nbsp; call for your appointment` (double spaces from `&nbsp;`) / button `REQUEST A CALL` → `https://advancedsmileclinic.com/new-patients-welcome/`
- Group 3: `h3` `Online Registration` / `p` `Fill out the welcome registration forms from the comfort of your home. Save time at our practice with our secured online system.` / button `READ MORE` → `https://advancedsmileclinic.com/contact-us/`

## Responsive Behavior
Not measured (no responsive work assigned). From CSS media queries read:
- Buttons: `@media (max-width:767px){ width:60%; text-align:center }`, `@media (max-width:478px){ font-size:14px }`.
- The section is a Bricks section (`display:flex; column`) with a 1100px container; Bricks containers/blocks collapse to a single column at the mobile breakpoint by default (the `flex-direction:row` on `#brxe-kvvqkp` will stack). Exact mobile values not measured.

## Design tokens
`--bricks-color-f5ff1c:#a49984` (tan panel + eyebrow heading), `--bricks-color-a037a8:#766148` (main heading, divider, hover text), `--bricks-color-b92a3f:#ffffff` (white text/buttons), `--bricks-color-902b2a:#858d82` (sage), `--bricks-color-d486ef:#333333` (body copy).
