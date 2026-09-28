# HeroSection Specification

## Overview
- **Target file:** `src/components/sites/smiledentalcare.info-b93df72c/root-8a5edab2/HeroSection.tsx`
- **Screenshot:** `docs/design-references/smiledentalcare.info-b93df72c/root-8a5edab2/desktop-1440-full.png` (y235–717)
- **Interaction model:** static + button hover

## DOM Structure
```
<section> (white bg; wrapper ends with margin-bottom 40px)
  <div container>                      // container rule (≥1024 97.5%/1160(1280); <1024 100%)
    <div heroRow>                      // display flex; position relative
      <div imageCell> <img hero> </div>   // desktop: flex 0 1 auto, fills height, overflow hidden, img object-fit cover 50% 50%; mobile: full width, img natural ratio
      <div panel>                          // bg #f3f3f3, flex column center, padding 40px (≥768) / 56px 24px (≤767)
        <h2>BIENVENIDOs</h2>               // rendered uppercase via CSS: "BIENVENIDOS"
        <h1>Atención dental de calidad</h1>
        <p>Sonrisas saludables para toda la familia en un ambiente acogedor.</p>
        <a href="/contact-us">Solicite su cita hoy</a>
      </div>
    </div>
  </div>
</section>
```

## Computed Styles (exact)

### Section / row
- section: background #fff; the hero block wrapper (immediately inside section before container) has `margin-bottom: 40px` (desktop). Bottom margin collapses to about section — replicate: hero container's parent `margin-bottom:40px` at ≥768; ≤767 check: hero stack then about padding handles gap (mobile: panel bottom at 777, about section starts 801 → 24px? about section y801 pad-top 32 → gap from hero: hero wrapper margin... at 390 hero stack: image y172..400, panel 400..777; about section starts y801 → 24px gap. So ≤767: hero wrapper margin-bottom 0? 801-777=24. Hmm about section padding-top32 would make heading at 833 (measured aboutH2? at390: about img y879; heading before it at ~847? earlier aboutH2 at390 not measured; at500 h2 y896 with sec y864+32 ✓). So gap 24 comes from hero wrapper margin-bottom 24? or about section margin-top? Simplest: hero wrapper margin-bottom: 24px ≤767, 40px ≥768. (Verify in QA.)

### Image (desktop ≥768)
- imageCell: width = flex auto; at ≥1280 natural image width drives cell (724 @1440, 750 @1536); at 768–1279 cell = 50%? At 1024 measured 548 (not 50% of 936=468!). Actual: image natural width at 1024 = 548 (image rendered 548×400). How? img `width:100%` of cell; cell width auto → image intrinsic? The source at 1024 is `rs=h:1000` → 750×500, but rendered 548×400 (ratio 1.37 ≠ 1.5). So NOT intrinsic.
  - Cell widths: 724@1440 (1112*0.651), 750@1536 (1232*0.609), 548@1024 (936*0.585), 352.5@768 (705*0.5).
  - Panel: 388 fixed basis @1440/1024 (flex 1 1 388px), 482 @1536 (basis 482), 352.5 @768.
  - So panel basis: 388px (1024–1535), 482px (≥1536), 50% (768–1023).
  - Image cell = remainder. Implement: heroRow display flex; panel `flex: 1 1 388px; max-width:100%` (≥1536: `flex:1 1 482px`); imageCell `flex: 1 1 auto; min-width:0` with img `width:100%; height:100%; object-fit:cover; display:block`. At 768–1023: both cells `flex:1 1 50%` (panel basis 50%).
  - Measured heights: 482.469 @1440 (row height = panel content height), 400 @1024/@768.
  - imageCell: overflow hidden; display flex; justify-content center; align-items center; img object-fit cover, object-position 50% 50%, width 100%, height 100%.
- Image src: `images/hero.jpg` (750×500).

### Image (mobile ≤767)
- Stacked: imageCell block full width (342 @390); img `width:100%; height:auto; display:block` (342×227.9).

### Panel
- ≥768: padding 40px; flex column; justify-content center; align-items center; text-align center; width remainder; bg #f3f3f3.
- ≤767: padding 56px 24px; width 100%.
- h2: font 16px, lh 20px, ls 2px, uppercase, color #826c6c, margin 0 0 16px, text-align center, width 100% (inner content width 308 @1440 = 388-80).
- h1: Playfair Display 44px (≥1536: 48; 768–1279: 38; ≤767: 32), lh 1.2 (52.8/45.6/38.4), ls 1.012px (48→1.104, 38→0.874, 32→0.736), weight 400, color #151515, margin 0 0 16px, text-align center, display inline-block, position relative.
  - Wraps to 3 lines @1440 (308 width): "Atención" / "dental de" / "calidad" — natural wrap, no manual breaks.
- p: 16px/24px, color #575757, text-align center, margin 0, width 100%.
- button `<a>`: display inline-flex; justify-content center; align-items center; margin-top 32px (gap from p: p bottom 561 → btn 593 = 32; p margin-bottom 0 → use btn margin-top 32); padding 8px 32px; height 56px; font 14px weight 700 ls 2.996px uppercase; color #151515; background #dadada; transition 0.3s; position relative; text-align center; width auto (measured 275.938 = content+padding); href="/contact-us".
- button hover: background #cccccc; box-shadow rgba(0,0,0,0.5) 0 10px 10px -10px.

## Text Content (verbatim)
- `BIENVENIDOs` (CSS uppercases; render "BIENVENIDOS")
- `Atención dental de calidad`
- `Sonrisas saludables para toda la familia en un ambiente acogedor.`
- `Solicite su cita hoy` (CSS uppercase → SOLICITE SU CITA HOY)

## Responsive Behavior
- ≥1536: cells 750/482, h1 48.
- 1280–1535: cells 724/388, h1 44.
- 1024–1279: cells 548/388 (panel basis 388), h1 38, row height 400.
- 768–1023: 50/50, h1 38, row height 400.
- ≤767: stacked, image natural ratio, panel padding 56 24, h1 32, gap before button 32.

## Assets
- `images/hero.jpg`
