# SiteHeader Specification

## Overview
- **Target file:** `src/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/SiteHeader.tsx`
- **Screenshot:** `docs/design-references/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/siteheader-1440.png`
- **Extra screenshots:** `siteheader-dropdown-open-1440.png`, `siteheader-hover-book-1440.png`, `siteheader-scrolled-1440.png`
- **Interaction model:** scroll-driven (scrolled state) + hover (dropdowns / buttons) + click-driven (mobile popups)

## DOM Structure
```
<header id="brx-header" class="brx-sticky">            position:fixed; z-index:998; 1425x125.5 @1440
  <section id="sectionheader" class="brxe-section">    z-index:9999; flex column; center
    <div id="infoh" class="brxe-container">            TOP INFO BAR — bg #A49984, 52px tall
      <div id="brxe-hvvkrc" class="brxe-block">        left slot (554px, flex column, align flex-start)
        <a id="brxe-iwsaws" class="brxe-button bricks-button" target="_blank">
          <i class="fas fa-location-dot"></i>3934 SW 8TH STREET SUITE 306, CORAL GABLES
      <div id="brxe-yzazrt" class="brxe-block">        right slot (554px, justify flex-end)
        <a id="brxe-jspjga" class="brxe-button bricks-button" target="_blank">
          <i class="fas fa-location-dot"></i>6600 W 12TH AVE, HIALEAH, FL 33012
    <div id="menuh" class="brxe-container">            MAIN MENU ROW — 1425x73.5, z-index 999
      <div id="brxe-iaaklr" class="brxe-block">        LEFT  (598.5px, flex column, center, padding 12px 0)
        <div id="menupart1" class="brxe-nav-menu">
          <nav class="bricks-nav-menu-wrapper mobile_landscape">
            <ul id="menu-menu-part1" class="bricks-nav-menu">
              li MEET US / li SERVICES (has children) / li PATIENT INFORMATION (has children)
          <button class="bricks-mobile-menu-toggle">   0x0 at 1440 (hidden by media query)
          <nav class="bricks-mobile-menu-wrapper left"> 300x900, translateX(-100%) off-canvas
      <div id="logocontenedor" class="brxe-block">     CENTER LOGO — white pill, 213.75x166.58
        <a id="logoadvanced" class="brxe-image tag" href="/">
          <img class="css-filter size-large" src=".../Logo-Advance-Smile-Dental-Clinic-01-2.webp">
      <div id="brxe-gwhauj" class="brxe-block">        RIGHT (598.5px, flex row center, gap 0 30px, padding 12px 0)
        <div id="menupart2" class="brxe-nav-menu">     ul#menu-menu-part2 : LOCATIONS (has children) / Contact US
        <a id="brxe-ltghof" class="brxe-button btn-radial-3 bricks-button" href="#bookonline">BOOK ONLINE
    <div id="hedermovil" class="brxe-container bricks-lazy-hidden">   MOBILE HEADER (display:none at 1440)
      <div id="brxe-pndswy"> <a id="brxe-sgvpth" href="/"><img id/mobile-logo></a>
      <div id="brxe-slromy">                            icon button row
        <span id="brxe-ndstfs" class="brxe-button phone-trigger bricks-background-primary"><i class="fas fa-phone"></i>
          <div id="brxe-gtkvhf"> <section id="brxe-oxnryu" class="phone-popup" style="display:none">
             <a id="brxe-bgnnkl" href="tel:(305) 846-7987"><i class="fas fa-phone"></i>HIALEAH</a>
             <a id="brxe-cuftkz" href="tel:(786) 391-0588"><i class="fas fa-phone"></i>CORAL GABLES</a>
        <span id="brxe-wawggk" class="brxe-button location-trigger bricks-background-primary"><i class="fas fa-location-dot"></i>
          <div id="brxe-hxkrxj"> <section id="brxe-de559e" class="location-popup" style="display:none">
             <a id="brxe-cc87b2" href="https://maps.app.goo.gl/JrsZU2HtMDdP63Jk7">…HIALEAH</a>
             <a id="brxe-94110f" href="https://maps.app.goo.gl/DGJU8r9v5v9hT86v9">…CORAL GABLES</a>
        <div id="brxe-abxtma"> <a id="brxe-mnaayu" href="#bookonline"><i class="fas fa-calendar-days"></i></a>
        <div id="brxe-xdtswe" class="brxe-code">       inline <script> wiring the phone/location popups
      <div id="brxe-gkgnsd">
        <div id="hamburgermovil" class="brxe-nav-menu">
          <nav class="bricks-nav-menu-wrapper mobile_landscape"><ul id="menu-menu-movil">…</ul></nav>
          <button class="bricks-mobile-menu-toggle scrolled">  bar-top / bar-center / bar-bottom
          <nav class="bricks-mobile-menu-wrapper left">        300px off-canvas drawer
  <div id="brxe-jgumen" class="brxe-code">              inline <style> + <script> for the scrolled state
```

**Top-level menu items**
| Menu | Item | href | Children |
|---|---|---|---|
| part1 | MEET US | `/meet-us/` | – |
| part1 | SERVICES | `/our-dental-services/` | 9 (see below) |
| part1 | PATIENT INFORMATION | `#` | 4 |
| part2 | LOCATIONS | `#` | 2 |
| part2 | Contact US | `/contact-us/` | – |
| right | BOOK ONLINE | `#bookonline` (btn) | – |

Items with children render as `<div class="brx-submenu-toggle icon-right"><a>…</a><button aria-label="SERVICES Sub menu"><svg class="menu-item-icon" viewBox="0 0 12 12"><path d="M1.50002 4L6.00002 8L10.5 4" stroke-width="1.5"/></svg></button></div>`.

## Computed Styles (exact values from getComputedStyle)

### Container — `#brx-header`
- `position: fixed; top/left/right: 0; z-index: 998; width: 1425px; height: 125.5px`
- `background-color: rgba(0,0,0,0)` (transparent — hero shows through)
- `transition: background-color 0.2s, transform 0.4s`
- `box-shadow: none`
- `#sectionheader`: `display:flex; flex-direction:column; justify-content:center; align-items:center; z-index:9999`

### `#infoh` (top info bar)
- `background-color: rgb(164,153,132)` (`#A49984`)
- `padding: 14px 20px; width:100%; height:52px`
- `display:flex; flex-direction:row; justify-content:space-between; align-items:flex-start`
- `overflow: hidden; transition: all 0.4s ease` (custom CSS in `#brxe-jgumen`)
- address links `#brxe-iwsaws` / `#brxe-jspjga`: `font-family: Lato; font-size:14px; line-height:23.8px; letter-spacing:0.5px; color:rgb(255,255,255); display:flex; gap:10px; padding:0; transition: all` (no color change on hover), `<i class="fas fa-location-dot">` 18.5x24

### `#menuh` (main menu row)
- `display:flex; flex-direction:row; align-items:flex-start; width:100%; height:73.5px; z-index:999`
- `background-color: rgba(0,0,0,0)` (transparent at top)
- `box-shadow: none`
- children `#brxe-iaaklr` / `#brxe-gwhauj`: `width:598.5px; padding:12px 0`
  - left: `flex-direction:column; justify-content:center; align-items:center`
  - right: `flex-direction:row; justify-content:center; align-items:center; gap: normal 30px`

### `#menupart1` / `#menupart2` (nav)
- `color: rgb(255,255,255)` at scroll 0 (`#menupart1 { color: var(--bricks-color-b92a3f); font-size:15px }`)
- `ul > li { margin-left: 20px }`
- top-level `<a>`: `font-family: Lato; font-weight:700; font-size:15px; line-height:25.5px; color:rgb(255,255,255); display:flex; padding:0`
- `#menupart2` links additionally `text-transform: uppercase`
- submenu toggle button: `width:15px; height:15px; margin-left:10px; display:flex; align-items:center; color:inherit; transition: transform 0.1s cubic-bezier(0,0,0.2,1)`

### `#logocontenedor` (logo pill)
- `width: 213.75px; height: 166.578px; margin: -90px 0px -57px` (negative margins make it hang below the bar)
- `background-color: rgb(255,255,255)`
- `border-radius: 0px 0px 200px 200px` (bottom pill)
- `box-shadow: rgba(0,0,0,0.25) 0px 4px 40px 0px`
- `display:flex; flex-direction:column; justify-content:center; align-items:center; align-self:center`
- `#logoadvanced`: `padding: 12px 20px 44px; width:200px; position:relative; cursor:pointer`
- `img`: `width:160px; height:110.578px` (natural 667x461)

### `#brxe-ltghof` (BOOK ONLINE)
- `background-color: rgb(118,97,72)` (`#766148`)
- `color: rgb(255,255,255); font-family:Lato; font-weight:700; font-size:15px; line-height:25.5px; letter-spacing:0.5px`
- `padding:12px 18px; width:144.359px; height:49.5px; border-radius:40px`
- `box-shadow: rgba(0,0,0,0.25) 0px 4px 20px 0px`
- `position:relative; overflow:hidden; z-index:99; transition:0.3s; cursor:pointer`
- classes: `btn-radial-3` (radial-circle hover effect)

### Sub-menu panel (`#menu-item-1922 > ul.sub-menu`)
- `position:absolute; top:25.5px; left:0; width:265.625px; height:540px; z-index:998`
- `background-color: rgb(164,153,132)` (`#A49984`)
- `border-radius:10px`
- `box-shadow: rgba(0,0,0,0.14) 0px 4px 20px 0px`
- `border:0; padding:0; transition: 0.1s` (visibility/opacity)
- closed: `visibility:hidden; opacity:0`; open: `visibility:visible; opacity:1`
- item `<a>`: `font-family:Lato; font-weight:700; font-size:15px; line-height:60px; text-transform:uppercase; color:rgb(255,255,255); padding:0 20px; display:block; white-space:nowrap`
- item `<li>`: `border-radius:10px`
- nested flyout (`Cosmetic Dentistry`, `Oral Surgery` sub-sub-menus): `position:absolute; top:0; left:265.625px; min-width:150px; width:194.328px / 227.688px; background-color:rgb(164,153,132); border-radius:10px; box-shadow: rgba(0,0,0,0.14) 0 4px 20px 0; z-index:998; transition:0.1s`

### Mobile header `#hedermovil` (hidden at 1440)
Base CSS: `#hedermovil { display:none; }`
Media `@media (max-width: 767px)`: `display:flex; flex-direction:row; align-items:center; justify-content:center; align-self:center !important;` and `#hedermovil.scrolled { background-color:#FFFFFF }`.
Computed (read while `display:none`): `width:1100px; margin:0 auto; background-color:rgb(255,255,255)` (`.scrolled` class is applied).

Children:
- `#brxe-pndswy` logo block: `display:flex; width:100%`. Image `data-src` → `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2025/08/Logo-Advance-Smile-Dental-Clinic.webp?fit=300%2C208&ssl=1` (alt `Logo Advance Smile Dental Clinic`, intrinsic 300x208).
- `#brxe-slromy` icon row + `#brxe-gkgnsd` hamburger block: both `display:flex; width:100%`.
- Trigger buttons `.phone-trigger`, `.location-trigger`, and `#brxe-mnaayu` calendar link: `class="bricks-button bricks-background-primary"` → `background-color: rgb(255,214,79)` (theme primary yellow `#FFD64F`), `color: rgb(54,54,54)`, `padding:7.5px 15px; display:flex; justify-content:center; align-items:center; gap:10px; letter-spacing:0.5px`.
- Popups `#brxe-oxnryu` / `#brxe-de559e`: `display:none` (inline `style="display:none"`), `position:absolute; margin:10px auto 0; width:100%; z-index:9999`.
  Popup buttons (`#brxe-bgnnkl` etc.): `font-family:Lato; font-weight:600; font-size:16px; line-height:27.2px; color:#fff; background-color:rgb(118,97,72); padding:8px 16px; gap:15px`.
- Hamburger `#hamburgermovil .bricks-mobile-menu-toggle`:
  - base: `display:none` (`:where(.brxe-nav-menu) .bricks-mobile-menu-toggle { width:20px; height:16px; position:relative; background:transparent; cursor:pointer }`)
  - `@media (max-width:767px)`: `display:block; color: var(--bricks-color-b92a3f)` = `#FFFFFF; width:40px !important;` and all three bars `width:40px !important`
  - bars: `background-color: currentcolor; height:2px; position:absolute; right:0; transition: var(--bricks-transition)`; `.bar-top{top:0} .bar-center{top:7px} .bar-bottom{top:14px}`
  - `.scrolled` (added by the scroll script): `color: rgb(118,97,72)`
  - open state `.show-mobile-menu`: bars become an X (`bar-top: top:50%; rotate(45deg)`, `bar-center: opacity:0`, `bar-bottom: top:50%; rotate(-45deg)`)
- Drawer `.bricks-mobile-menu-wrapper` (inside `#hamburgermovil`): `position:fixed; top:0; left:0; width:300px; height:100vh; display:flex; flex-direction:column; visibility:hidden; transform:translateX(-100%); transition: background-color .2s, opacity .2s, transform .2s, visibility .2s; z-index:999; color:#fff`
  - `::before` backdrop: base `background-color: rgb(35,40,45)`; `@media (max-width:767px)` → `rgba(164,153,132,0.7)`
  - open: `.show-mobile-menu .bricks-mobile-menu-wrapper { transform:translateX(0) !important; opacity:1 !important; visibility:visible; z-index:999 }`
  - items `@media (max-width:767px)`: `#hamburgermovil .bricks-mobile-menu > li > a { font-size:16px; font-family:Lato; font-weight:700; color:#FFFFFF; text-transform:uppercase }` (sub-menu links identical)
  - sub-menu rows: `background-color: rgba(118,97,72,0.7)`; current page row: `rgba(133,141,130,0.7)`; sub-menus `display:none` until `li.open > .sub-menu { display:block }`; `.sub-menu` line-height 40px, links `padding: 0 45px`
  - wrapper width: `@media (max-width:767px){width:75%}` → `@media (max-width:478px){width:95%}`
- Desktop menus hidden at mobile: `@media (max-width:767px){ #menupart1 > .bricks-nav-menu-wrapper{display:none} #menupart1 .bricks-mobile-menu-toggle{display:block} #menuh{display:none} }`. `@media (max-width:991px){ #menuh{display:flex} }`.

**Mobile menu items (`#menu-menu-movil`)** — MEET US / SERVICES (9 flat sub-items: Cosmetic Dentistry, Oral Surgery, Deep Cleanings, Emergency Dentistry, General Dentistry, Invisalign Treatment, Periodontal Gum Disease, Root Canals, Teeth Whitening) / PATIENT INFORMATION (Before & After, Blogs, New Patients Welcome, Insurances) / LOCATIONS (Coral Gables, Hialeah) / Contact US.

## States & Behaviors

### Scrolled header
- **Trigger:** `window.addEventListener('scroll')` inline script in `#brxe-jgumen`. Condition is **`window.scrollY > 0`** (any pixel of scroll — NOT 50px). On `scrollY > 0` it adds `.scrolled` to `#logocontenedor`, `#logoadvanced`, `#infoh`, `#menuh`, `#hedermovil`, `#menupart1`, `#menupart2`, `#hamburgermovil .bricks-mobile-menu-toggle`; when `scrollY === 0` it removes them.
- **State A (scrollY = 0):**
  - `#infoh`: height 52px, opacity 1, padding 14px 20px
  - `#menuh`: background transparent, no shadow, height 73.5px
  - nav link color `rgb(255,255,255)`
  - `#logocontenedor`: bg `#FFFFFF`, radius `0 0 200px 200px`, margin `-90px 0 -57px`, shadow `0 4px 40px rgba(0,0,0,0.25)`
  - `#logoadvanced`: `padding:12px 20px 44px; width:200px`
  - header total height **125.5px**
- **State B (scrollY > 0):**
  - `#infoh`: `max-height:0; opacity:0; padding:0; margin:0` → measured height **0px**, opacity **0**
  - `#menuh`: `background-color:#FFFFFF; box-shadow: rgba(0,0,0,0.1) 0 2px 8px 0; animation: slideDown 0.4s ease forwards;` height **126.75px**
  - nav link color `rgb(118,97,72)` (`.scrolled { color:#766148 }`)
  - `#logocontenedor.scrolled`: `background-color:transparent; border-radius:0 0 0 0; margin:0; box-shadow: 0 4px 40px rgba(0,0,0,0)`
  - `#logoadvanced.scrolled`: `padding:14px 0 16px; width:140px`
  - `#hedermovil.scrolled`: `background-color:#FFFFFF`
  - header total height **126.75px**
- **Transition:** `#infoh { transition: all 0.4s ease }`; `#menuh` uses `animation: slideDown 0.4s ease forwards` with
  `@keyframes slideDown { 0% { transform:translateY(-100%); opacity:0 } 100% { transform:translateY(0); opacity:1 } }`
- **Implementation approach:** CSS classes toggled by a scroll listener; animate the info bar's `max-height`/`opacity` and the menu bar's slide-down.

### Sub-menu dropdown (open/close)
- **Trigger:** hovering the parent `<li>` (Bricks adds `.open` + sets `button[aria-expanded="true"]`) **or** clicking the `.brx-submenu-toggle > button` ("… Sub menu"). A `li.menu-item-has-children:hover::before` bridge element (`content:""; position:absolute; top:100%; width:100%; height:100%; min-height:60px; z-index:1`) keeps hover alive over the panel.
- **State A (closed):** `ul.sub-menu { visibility:hidden; opacity:0 }`
- **State B (open):** `visibility:visible; opacity:1`
- **Transition:** `transition: 0.1s` on the sub-menu; toggle button `transition: transform 0.1s cubic-bezier(0,0,0.2,1)`.
- **Flyout 3rd level:** `.sub-menu .sub-menu` positioned `left:100%; top:0`, same tan background, shown by the same hover/click mechanism.

### Hover states
- **Top-level nav links (`#menu-menu-part1 > li > a`, `#menu-menu-part2 > li > a`):** **no `:hover` rule exists at all** — verified by enumerating all 161 `:hover` rules in the document and by measuring before/after while `:hover` was matched (color stayed `rgb(255,255,255)` / `rgb(118,97,72)` scrolled). Only visual feedback is the cursor (`pointer`).
- **Sub-menu items:** `#menupart1 .bricks-nav-menu .sub-menu .menu-item:hover { background-color: var(--bricks-color-a037a8) }` → `#766148`. No other property changes. Current-item (`.current-menu-item` / `.current-menu-ancestor`) uses `background-color: var(--bricks-color-902b2a)` = `#858d82`, `border-radius:10px`.
- **BOOK ONLINE (`#brxe-ltghof`):**
  - `color`: `rgb(255,255,255)` → `rgb(98,84,78)` (`#62544e`, from `#brxe-ltghof:hover { color: var(--bricks-color-9616c1) }`), `transition: 0.3s`
  - `::before` (from `.btn-radial-3`): `content:""; position:absolute; bottom:0; left:50%; width:0; height:0; background: linear-gradient(45deg, rgb(238,231,224), rgb(238,231,224)); border-radius:50%; transform:translateX(-50%); z-index:-1; opacity:0; transition: 0.4s cubic-bezier(0.25,0.46,0.45,0.94)`
    → hover: `width:120% (173.219px); height:250px; bottom:-125px; opacity:1` (circle rises to fill the pill, dark text on light circle). Button has `overflow:hidden`.
  - background stays `rgb(118,97,72)`; `box-shadow` unchanged.
- **Address links (`#brxe-iwsaws`, `#brxe-jspjga`):** no `:hover` rule → no change.
- **Logo link:** no `:hover` rule.

## Carousel / multi-state content
N/A (no carousel in the header).

## Assets
| Purpose | URL | intrinsic size | notes |
|---|---|---|---|
| Desktop logo (`#logoadvanced img`) | `https://advancedsmileclinic.com/wp-content/uploads/2025/08/Logo-Advance-Smile-Dental-Clinic-01-2.webp` | 667x461 (natural) | rendered 160x110.58, `class="css-filter size-large"`, `alt=""` |
| Mobile logo (`#brxe-sgvpth img`) | `https://i0.wp.com/advancedsmileclinic.com/wp-content/uploads/2025/08/Logo-Advance-Smile-Dental-Clinic.webp?fit=300%2C208&ssl=1` (`data-src`) | 300x208 | alt `Logo Advance Smile Dental Clinic`, lazy |
| Coral Gables map link | `https://maps.app.goo.gl/fKa4pHWyr5PZu5nZ6` | – | `_blank` |
| Hialeah map link | `https://maps.app.goo.gl/7PchnjcLDv9z9DP68` | – | `_blank` |
| Mobile popup Hialeah map | `https://maps.app.goo.gl/JrsZU2HtMDdP63Jk7` | – | `_blank` |
| Mobile popup Coral Gables map | `https://maps.app.goo.gl/DGJU8r9v5v9hT86v9` | – | `_blank` |
| Icon font | Font Awesome `fas fa-location-dot`, `fas fa-phone`, `fas fa-calendar-days` | – | – |

## Text Content (verbatim)
Info bar:
- `3934 SW 8TH STREET SUITE 306, CORAL GABLES`
- `6600 W 12TH AVE, HIALEAH, FL 33012`

Main nav (part1): `MEET US`, `SERVICES`, `PATIENT INFORMATION`
Main nav (part2): `LOCATIONS`, `Contact US`
Button: `BOOK ONLINE`

SERVICES sub-menu (9): `Cosmetic Dentistry`, `Oral Surgery`, `General Dentistry`, `Emergency Dentistry`, `Root Canals`, `Invisalign Treatment`, `Deep Cleanings`, `Periodontal Gum Disease`, `Teeth Whitening`
- Cosmetic Dentistry flyout (6): `Dental Bridges`, `Dental Crowns`, `Dental Veneers`, `Gingival Recession`, `Inlays & Onlays`, `Tooth Fillings`
- Oral Surgery flyout (5): `Bone Grafting`, `Dental Implants`, `Implant Overdentures`, `Tooth Extractions`, `Wisdom Extractions`

PATIENT INFORMATION sub-menu (4): `Before & After`, `Blogs`, `New Patients Welcome`, `Insurances`
LOCATIONS sub-menu (2): `Coral Gables`, `Hialeah`

Mobile popup buttons: `HIALEAH`, `CORAL GABLES` (phone popup `tel:(305) 846-7987`, `tel:(786) 391-0588`; location popup the two maps links).

## Responsive Behavior
Not measured (responsive work not assigned to this agent). Inferred from CSS media queries read in the page stylesheets:
- **≥ 992px:** desktop two-menu header as specced.
- **768–991px:** `#menuh { display:flex }` still applies; desktop nav menus remain; the Bricks hamburger buttons inside `#menupart1/#menupart2` are still `display:none`.
- **≤ 767px:** `#menuh { display:none }`, `#menupart1 > .bricks-nav-menu-wrapper { display:none }`, `#hamburgermovil .bricks-mobile-menu-toggle { display:block; width:40px !important; color:#fff }`, `#hedermovil { display:flex }` — the mobile header (logo + phone/location/calendar icon buttons + hamburger) replaces the desktop row. Drawer width 75% (95% at ≤478px).
- **991–1200px:** `#menupart1/#menupart2 { font-size:12px }`.
- **≤991px:** `#menupart1/#menupart2 { font-size:10px; scroll-snap-align:center }`, `ul > li { margin-left:10px }`, sub-menu links `font-size:10px`.
- Header itself is always `position: fixed`.

## Design tokens used by this component
`:root { --bricks-color-f5ff1c:#a49984; --bricks-color-a037a8:#766148; --bricks-color-902b2a:#858d82; --bricks-color-75cddd:#f6f4f2; --bricks-color-9616c1:#62544e; --bricks-color-b92a3f:#ffffff; --bricks-color-d486ef:#333333 }`
Primary (`.bricks-background-primary`) = `rgb(255,214,79)` `#FFD64F`.
