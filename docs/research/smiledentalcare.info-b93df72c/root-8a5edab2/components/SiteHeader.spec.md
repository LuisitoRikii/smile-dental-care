# SiteHeader Specification (desktop nav + mobile header + nav drawer)

## Overview
- **Target file:** `src/components/sites/smiledentalcare.info-b93df72c/root-8a5edab2/SiteHeader.tsx`
- **Screenshot:** `docs/design-references/smiledentalcare.info-b93df72c/root-8a5edab2/desktop-1440-full.png` (top 203px), `mobile-drawer-open-768.png`
- **Interaction model:** click-driven (hamburger drawer) + hover states

## DOM Structure
```
<header> (white bg, part of HeaderSection wrapper)
  <div container>                      // container rule per DESIGN_TOKENS
    <div> top bar (height 235 desktop) </div>
      - <a href="/"><img logo></a>      // centered (desktop: absolute-ish center; use flex center with phone absolute right OR grid)
      - <a href="tel:+17868492174">+1786-849-2174</a>   // desktop: right side
    <nav> (desktop ≥1024)
      <ul> 7 items: Inicio(/), Staff(/staff), Office(/office), Service(/service), New Patients(/new-patients), Contact Us(/contact-us), Galeria(/galeria) </ul>
    </nav>
    <div> mobile header (<1024) </div>
      - phone row: centered
      - row: hamburger | logo | spacer   // 15% / 70% / 15%, padding 24 0, flex space-between
  </div>
  <div drawer (fixed, only when open)>  // rendered always, transform-toggled
    <button close X>
    <nav> 7 links (first bold) </nav>
  </div>
</header>
```

## Computed Styles (exact — @1440 desktop)

### Top bar
- Container inner width 1112 (container: width 97.5%, max-width 1160, padding 0 24, margin 0 auto; ≥1536 max-width 1280).
- Top bar block height 235px total (contains centered logo + phone).
- Logo img: 209.141×75, object-fit contain, `transition: max-height 0.5s`, centered (measured x608 → center of 1112 inner: 157+556=713; logo center 712.5).
- Logo vertical: y56 (top padding 56 in topbar? topbar 235 = nav? Actually topbar row y0–235; logo y56–131).
- Phone link: absolute/flex-end right at y77: font 22px/33px, weight 400, color #826c6c, text-align center, no hover change.
- Layout implementation: topbar div height 235 position relative; logo centered with margin: 56px auto 0; phone positioned right, top 77 (or flex space-between baseline). Prefer: relative container; logo `display:block; margin:56px auto 0`; phone `position:absolute; right:0; top:77px` (measured x1103 w165 → right edge 1268 = inner right 1269 ✓).

### Nav row (≥1024 only)
- wrapper: padding 24px 0; height 72; display flex; justify-content space-between; align-items center; inner ul width 1112? (measured navBox padding 24 0, w1112 h72, flex space-between center — but items are grouped: INICIO..GALERIA form one cluster centered: cluster x328..1096 (768 wide) — so ul is centered with `justify-content:center` and items inline-block, NOT space-between. The space-between container has [logo? no]. Actually navBox (w1112 flex space-between) contained a single ul child. Implement: ul display flex justify-content center; li inline-block; first li no left padding, rest padding-left 32px.)
- link: display block, font 14px, lh 24px, ls 2.996px, uppercase, color #151515, padding 6px, margin -6px, transition all.
- active "Inicio": padding 0 0 4px, margin 0 0 -5px, border-bottom 1px solid #898989.
- hover: color #826c6c.
- li: display inline-block; position relative; first padding 0, others padding-left 32px.
- Font weight 400.

### Mobile header (<1024)
- container width 100% padding 0 24.
- phone row: height 49 (P lh33 centered, 22px #826c6c), top of nav.
- row2: padding 24px 0; display flex; align-items center; justify-content space-between; height 128 (24+80+24).
  - hamburger `<a>` flex width 15%, svg 40×40 color #151515, aria-label "Hamburger Site Navigation Icon", contains 3-line hamburger path: `M19 8H5a1 1 0 1 1 0-2h14a1 1 0 0 1 0 2zm0 5.097H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2zm0 5.25H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2z`
  - logo `<a>` width 70%, img display block width 100%, height 80px, object-fit contain, margin 0 auto (image drawn 223×80 centered).
  - spacer div width 15%.
- phone visible at all mobile widths (also at 768/390), centered, 22px.

### Nav drawer
- fixed inset 0 (100vw×100vh), bg #f3f3f3, padding-top 56px, z-index 10002, transform translateX(-100%), transition transform 0.3s ease-in-out; open state translateX(0).
- close button: top 16px right 16px, svg 40×40, color #1b1b1b, path X: use `M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z`.
- links: container padding 0 32 (links x32 w704 @768); each link display block, padding 16px 24px, font 22px, lh 30px, ls 2.992px, uppercase, color #1b1b1b, weight 400 (INICIO weight 700); first link starts at y88 (drawer pad 56 + 32 → ul padding-top 32? use ul margin: 32px 0 0... measured first link y88 = 56+32 → ul paddingTop 32? or nav has margin-top 32. Implement: nav padding: 32px 32px 0).
- clicking a link: allow default nav (href).
- Hamburger aria-expanded toggles; drawer has close X; also toggling hamburger closes.

## Text Content (verbatim)
- Phone: `+1786-849-2174`
- Nav: `Inicio`, `Staff`, `Office`, `Service`, `New Patients`, `Contact Us`, `Galeria`
- Logo alt: ` Smile Dental Care` (leading space in original — keep `Smile Dental Care` trimmed is fine; use `alt=" Smile Dental Care"` for fidelity)

## Responsive Behavior
- ≥1024: desktop topbar + inline nav, hamburger hidden.
- <1024: phone row + hamburger/logo row, inline nav hidden; drawer on click.
- Breakpoint: 1024.

## Assets
- `public/sites/smiledentalcare.info-b93df72c/root-8a5edab2/images/logo.png` (209×75 displayed; 418×150 file)
- Icons: `HamburgerIcon`, `CloseIcon` from `src/components/sites/smiledentalcare.info-b93df72c/shared/icons.tsx`
