# SocialSection + SubscribeSection + FooterSection + Overlays Specifications

These four are small, static sections — one spec file each group kept here for the builder prompts (each still gets its own target component file).

---

# 1. SocialSection

- **Target file:** `src/components/sites/smiledentalcare.info-b93df72c/root-8a5edab2/SocialSection.tsx`
- **Interaction model:** static (link hover has no visible change)

## Structure
```
<section> bg #fff; padding 40px 0 (<=767: 32px 0)
  <div container>
    <div headingRow style margin-bottom 32px> <h2><span>Conéctate con nosotros</span></h2> </div>
    <div iconsRow>                      // display flex; justify-content center; height 56 (desktop)
      <a href="https://www.instagram.com/smiledentalcare305/" target="_blank" rel="noopener" aria-label...>   // original: link with popup menu
        <InstagramIcon>                  // svg
      </a>
    </div>
  </div>
</section>
```

## Styles
- h2: 16/22.4 ls2 uppercase #8f6e6e mb32, text-align left.
- iconsRow: display flex; justify-content center; (height 56 desktop from icon margin).
- `<a>`: display block/inline-block; color #8f6e6e; text-align center.
- svg: desktop width/height 48px, margin 0 24px 8px; 768–1023: 40px, margin 0 16px 8px; ≤767: 40px, margin 0 8px 8px. Display inline-block.
- Instagram glyph: viewBox 0 0 24 24, inner `<g fill="#E1306C">` camera outline paths — EXTRACT EXACT SVG from live DOM (`data-ux="IconSocial"`). Use exact path data.
- Section measured heights: 190.39 @1440, 182.39 @768, 158.39 @390.

## Text
- `Conéctate con nosotros`

---

# 2. SubscribeSection

- **Target file:** `src/components/sites/smiledentalcare.info-b93df72c/root-8a5edab2/SubscribeSection.tsx`
- **Interaction model:** click/focus-driven floating label; static otherwise

## Structure
```
<section style position:relative; overflow:hidden>
  <div bgLayer>                      // absolute inset 0; background: linear-gradient(rgba(0,0,0,0.24), rgba(0,0,0,0.24)), url(images/subscribe-bg.jpg) 50% 50% / cover no-repeat
  <section inner position relative>  // padding 40px 0 (<=767: 32px 0)
    <div container>
      <div innerCol width 100%>
        <h2>Suscribirse</h2>
        <div formRow>                // at >=1024: flex row; content cell width 66.6667% centered-ish (margin-left 193.33, padding 0 24) → inner 725
                                     // <=1023: full width (padding 0 24)
          <div left>                 // margin-right 24 (desktop)
            <p>Suscríbete para recibir noticias sobre promociones, ofertas y eventos.</p>
            <form>                   // flex row; width 725 @1440
              <div inputGroup>       // flex 1; margin 4px 0; input wrapper width calc(100% - ...): measured input w513 = 725 - 188.33 - 24 (button 30% max-width)
                <input type="email">
                <label>Correo electrónico</label>
              </div>
              <button type=submit>Registrarse</button>   // width 188.33 (30% max-width), margin 4px 0
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</section>
```
NOTE: heading + p + form are all in the center 66.67% column at desktop: measured h2 full width (1112) centered; p width 725 centered at x350; form 725 at x350. So actually: h2 spans full width centered; BELOW it a row `display:flex; justify-content:center` containing a cell `width:66.6667%; padding:0 24px` (at 1440: 1160*0.6667=773.3 with padding → inner 725.3 ✓ x = 157 + (1112-773.3)/2 = 326.3 + 24 = 350.3 ✓). ≤1023: cell width 100%.

## Styles
- section: padding 40px 0 (≤767: 32px 0); position relative; isolation isolate; bg layer behind (z-index 0), content z-index 1.
- section heights: 256 @1440, 249.5 @768, 325 @390 (content-driven).
- h2: Playfair 400; sizes: 36 ≥1536; 32/40 ls0.992 @1280–1535; 30/37.5 ls0.93 @768–1279; 28/35 ls0.868 ≤767; color #fff; text-align center; margin 0 0 32px; width 100%.
- p: 16/24; color #fff; text-align center; margin 0 0 16px; width 100% (725 desktop; 579.5 @768 — wait @768 p w579.5 = 66.67% col too? At 768: p x87 w579.5; container inner 705; 705*0.822? Hmm 579.5 = (753*0.822)... Let's compute: at 768 the cell measured: p width 579.5 at x87. If cell = 66.6667% of 753 = 502? no. 705*0.822=579.5. Hmm cell padding 0 24: cell w = 579.5+48 = 627.5 = 705*0.89. Unclear. Measured at 768: formRow cell? p x87: container x24, so cell x = 63?? p at x87 → cell padding 24 → cell x63, w627.5. 627.5/753 = 83.6%. Hmm not standard.
  Alternative: at 768 the row is `display:flex; justify-content:center; padding:0 24` and cell `width:66.6667%` of container OUTER? 753*0.6667=502 no.
  Let me just measure again at 768 directly in build QA. For spec: at 768: p width 579.5 centered (cell ~627.5). Actually 579.5 = 705 * 0.8219... OR cell = calc(100% - 76)? 
  Try: cell maxWidth 66.6667% of (container outer 753) = 502 + ? no.
  Hmm: 768 probe: subInput x87 w381.66; subBtn x492 w173.84; form total = 381.66+24+173.84 = 579.5 ✓ form width 579.5 = p width. Cell (padding 0 24): x63 w627.5.
  627.5/753 = 0.836. Not a clean fraction... What if cell = 66.6667% of body (753) + 48 padding = 502+48=550? no.
  What if the row is `padding 0 24` (inner 705) and cell `width: 82.19%`? ugly.
  Alternative: cell = `width: calc(66.6667% + 100px)`? 502+125=627. no.
  What about cell maxWidth 66.6667% of 941? no.
  Let's compute differently: maybe at 768 the cell is `width: 66.6667%` of the ROW where row has margin 0 -24 (width 753): 753*0.6667=502 → +48? no.
  OR the p has `width: 82.19%`? Possibly the LEFT column is `flex: 1` inside a row with `max-width: 66.6667%` plus button 30%... 
  Desktop numbers: form 725.33; cell inner 725.33; cell w 773.33 = 66.6667% of 1160 (container OUTER incl padding) ✓✓. So cell = 66.6667% of container OUTER width, with padding 0 24 → inner = 0.6667*1160 - 48 = 773.33-48 = 725.33 ✓.
  At 768: container outer = 753 (100% width, padding included in border-box? container padding 0 24 → outer 753). cell = 66.6667% * 753 = 502, inner = 502-48 = 454 ≠ 579.5. ✗
  At 768 cell measured w627.5 (incl padding): 627.5/753 = 83.6%; inner 579.5/705 = 82.2%.
  Hmm. What differs? At 768 maybe cell = `width: calc(100% - 125.5px)`? 
  What about: row `justify-content:center; gap?` and cell `max-width: 66.6667%` but the row is NOT the container — maybe row has margin 0 -24 → width 753? still.
  Actually maybe at 768 the cell width is 83.333%? 705*0.8333 = 587.5, inner? if cell = 83.33% of 753 = 627.5 ✓✓✓! 753 * 0.83333 = 627.5 ✓. And inner = 627.5-48 = 579.5 ✓.
  So cell = 66.6667% (desktop) / 83.3333% (768) of container outer? Check desktop: 1160 * 0.6667 = 773.3 ✓. Or desktop cell could be 66.67% and tablet 83.33%.
  And at 390: p width 342 = container inner (437-... wait 390: container outer 390, inner 342; p x24 w342 → cell = 390 (100%)? cell 100% w390 padding 0 24 → inner 342 ✓. So ≤767: cell 100%.
  So: ≥1024: cell 66.6667%; 768–1023: cell 83.3333%; ≤767: cell 100% (all % of container outer width, box-sizing border-box, padding 0 24, centered via flex justify-content center).
  Desktop cell x: 326 (=157+169.3: (1112-773.3)/2 = 169.3 ✓ row inner 1112, cell 773.3 centered → x = 157+169.3 = 326.3, +24 padding = 350.3 ✓). So row inner = container inner; cell % of... 773.3/1112 = 69.5% not 66.67. Ugh.
  Let's define via row: row width = container inner (1112 desktop / 705 @768 / 342 @390); cell widths: 773.3 / 627.5 / 342 → 69.5% / 89% / 100%. Still ugly.
  
  Cleanest: express cell width in px-independent formula: cell = `width: calc(66.6667% + 48px)` of row inner? desktop: 741.3+48 = 789.3 ✗.
  cell = `calc(773.33/1112)`... 
  
  Try cell = 66.6667% of container OUTER (1160) = 773.3 ✓; at 768: 66.6667% of 753 = 502 ✗ (need 627.5).
  
  Alternatively: the ROW itself might be `width: calc(100% + something)`. Maybe row has margin 0 -24 like others: row width = 1112+48 = 1160; cell = 66.6667% of 1160 = 773.3 ✓✓; at 768: row = 705+48 = 753; cell = 66.6667% * 753 = 502 ✗ (627.5 needed).
  
  627.5/753 = 83.33333% — so at 768 the cell % = 83.33%. Different per breakpoint! At desktop 66.67%. So it IS breakpoint-dependent: ≥1024: 66.6667%; 768–1023: 83.3333%; ≤767: 100%. (of row-with-negative-margins width = container outer). Verify ≤767: cell 100% of 390 = 390, inner 342 ✓ (padding 0 24). And row width = 342+48 = 390 ✓ with margins 0 -24.
  Desktop: row = 1160 (margins 0 -24 over inner 1112), cell 66.6667% → 773.3, x offset: row starts at 133 (157-24) → cell x = 133+193.3 = 326.3 ✓ (measured margin-left 193.328!). ✓✓ So cell = flex item with margin-left auto-ish? measured cell margin "0 0 0 193.328px" — i.e., row `justify-content:center` or `margin-left: calc((100% - 66.6667%)/2)` = 16.6667% of 1160 = 193.33 ✓. So row: display flex; justify-content center; margins 0 -24; cell width 66.6667%; padding 0 24; box-border.
  @768: row 753, cell 83.3333% → 627.5, centered → margin-left (753-627.5)/2 = 62.75 → cell x = 0(row starts at body edge? container x0 outer, row margins -24 → row x -24?? hmm at 768 container padding 0 24, inner x24; row margin -24 → x0 w753; cell x = 0+62.75 = 62.75 ✓ (measured cell x63!). ✓✓✓

  So: formRow: display flex; justify-content center; margin 0 -24px; cell widths: ≥1024 66.6667%, 768–1023 83.3333%, ≤767 100%; cell padding 0 24px; box-sizing border-box.
  Wait but at ≤767: cell 100% of row(390) = 390, x0, inner x24 w342 ✓ matches p x24 w342.

- Form (inside cell inner): p then form margin-top 16? p y2743 h24 ends 2767; form y2783 → 16 gap ✓ (p mb16 covers it? p margin 0 0 16 → 2783 ✓).
- form: display flex; align-items center? input wrapper margin 4px 0; button margin 4px 0.
- input wrapper: position relative; flex 1 / width calc(100% - 212.33)? measured: wrapper width 513 with margin-right 24; button width 188.33 (30% of 725.33 = 217.6?? 188.33/725.33 = 25.97%. Hmm button maxWidth 30%... measured width 188.33. 30% of 627.8? Let's compute: button = content width? "Registrarse" at 14/700 ls3 + padding 64 → ~188 content-driven. maxWidth 30%. input wrapper = flex 1 with margin-right 24 → 725.33-188.33-24 = 513 ✓. So: input wrapper flex:1; margin-right 24; button flex none width auto (max-width 30%).
  @768: 579.5 total: input 381.66 + 24 + button 173.84 ✓ same rules (button content ~174? "REGISTRARSE" at 768 might render narrower due to... hmm button 173.84 vs 188.33 at desktop — font-size same 14; ls same... why narrower? Because at 768 letter-spacing... Actually maybe button has `flex: 0 1 auto` and shrank? Total form 579.5 fixed? input flex1, button auto → button width = content = constant 188.33?? measured 173.84. Different! Maybe button width = 30% of form: 0.3*579.5 = 173.85 ✓✓! And desktop: 0.3*725.33 = 217.6 ≠ 188.33. ✗. Hmm.
  Desktop button 188.33: could be content width. @768 173.84 = 30% of form. Conflict.
  Wait maybe button maxWidth 30% AND content 188.33; at 768: 30% of 579.5 = 173.85 < 188.33 → capped at 173.85 ✓! Desktop: 30% of 725.33 = 217.6 > 188.33 → content 188.33 ✓✓. So button: `max-width: 30%; width: auto (content)`. ✓ (measured maxWidth 30% on button ✓).
- input: width 100%; height 56 (54 at ≤767? measured 54 at 390 — border? at 390 h54: maybe border-bottom included... keep 56 desktop, 54 mobile? measured: 1440 h56, 768 h56, 390 h54. odd. Use min-height 54 and desktop 56? I'll spec 56 desktop/tablet, 54 ≤767.) padding 23px 8px 8px; border-bottom 1px solid #fff; bg transparent; color #fff; font 16; outline none.
- label: absolute left 8 top 16.8 (16.19-ish), fs16, color #fff, transition .15s, pointer-events none; focused/filled: top 8, fs 12.
- button: bg #fff; color #000; 14/700 ls2.996 uppercase; padding 8 32; height 56; display flex; align-items center; justify-content center; margin 4px 0; max-width 30%; cursor pointer; transition .3s; hover: shadow rgba(0,0,0,0.5) 0 10px 10px -10px + slightly darker bg (use #f1f1f1).

## Text
- `Suscribirse`
- `Suscríbete para recibir noticias sobre promociones, ofertas y eventos.`
- label `Correo electrónico`, button `Registrarse`

## Assets
- `images/subscribe-bg.jpg`

---

# 3. FooterSection

- **Target file:** `src/components/sites/smiledentalcare.info-b93df72c/root-8a5edab2/FooterSection.tsx`
- **Interaction model:** link hover (color darken)

## Structure
```
<footer> (or section) bg #fff; padding 32px 0
  <div container>
    <div topRow>                      // display flex; align-items center; height 44.72 (desktop)
      <div left 50%>                  // text-align: center wrapper, inner text-align left
        <span>Copyright © 2026  Smile Dental Care - Todos los derechos reservados.</span>
      </div>
      <div right 50%>                 // text-align right
        <span>Con tecnología de</span>
        <a href="https://www.godaddy.com/websites/website-builder?..."> <GoDaddyAiroLogo/> </a>
      </div>
    </div>
    <div navRow>                      // container again (margin: 24px auto 0; padding 0 24; text-align center)
      <a>Staff</a><a>Office</a><a>Service</a><a>New Patients</a><a>Contact Us</a><a>Galeria</a>
    </div>
  </div>
</footer>
```
Actually measured: topRow inside container (1112, flex align-center, h44.72): left cell 556 (text-align center wrapper with inner text-align left? left cell box x157 w556, text starts x157 left-aligned but cell textAlign center — the copyright div measured textAlign left within a center parent → effectively left at x157), right cell 556 text-align right: "CON TECNOLOGÍA DE" ends x1269 with logo below? measured: span at x1130 w139 (ends 1269 ✓ right aligned), and logo image below it? footLogo svg 131x20 — the right cell height 44.72 contains text (17) + logo (20)? stacked: text line then logo row. From screenshot: "CON TECNOLOGÍA DE" on top line, GoDaddy Airo logo below it, right-aligned. So right cell: display flex column align-items flex-end? height 44.72: 17(text) + 20(logo) + gap ~7? Let's stack: span (12/18) then logo svg (h20) with margin-top ~4.
Hmm measured footCopy y1141 (span) — right span same y? earlier right span box "1130,2919 139x17" y2919 top; logo y? not measured precisely. Screenshot shows text then logo below. Cell height 44.72 = 18 + 20 + 6.7? use: span 12/18, logo margin-top 4, logo height 20, total 42 ~44.7. There might be line-height. Fine-tune in QA.

Actually wait: footer top cell: left w556 (50%), right w556 (50%) → cells 50% each. The navRow: separate container div with margin 24px 132.5px 0 → i.e., margin-top 24, same container, padding 0 24, text-align center, height 38.

- nav links: display inline-block; padding 8px; font 16; color #8f6e6e; text-align center; hover → #474747; height 38.
- ≤767: nav link padding 4px 8px (h30); footer stacked: topRow column centered: copyright centered (text wraps 2 lines: 352 w at 390), then right cell centered (text + logo centered), nav below. Measured @390: footCopy w352 centered; logo svg 131x20 centered y3791; nav links y3835.
  Order @390: copyright (y3746) → "CON TECNOLOGÍA DE" + logo (y3791) → nav (y3835). 
- 768: topRow still 2-col? measured @768: footCopy x117 w519 (centered-ish?), right stuff... At 768 the screenshot shows copyright centered and logo centered (stacked!). From tablet screenshot: "COPYRIGHT..." centered line, then "CON TECNOLOGÍA DE + GoDaddy Airo" centered, then nav centered. So ≤1023 stacked? measured @768: footCopy box 117,1073 → x117 (centered: (753-519)/2=117 ✓ centered). So ≤1023: stacked centered. ≥1024: 2-col. (footer h: 170.7 @1440, 212.7 @768, 372.7 @390.)

## Text
- `Copyright © 2026  Smile Dental Care - Todos los derechos reservados.` (two spaces after 2026; rendered uppercase via CSS → "COPYRIGHT © 2026  SMILE DENTAL CARE - TODOS LOS DERECHOS RESERVADOS.")
- `Con tecnología de` (uppercase via CSS)
- Nav: `Staff`, `Office`, `Service`, `New Patients`, `Contact Us`, `Galeria`
- Links hrefs: /staff, /office, /service, /new-patients, /contact-us, /galeria

## Styles
- footer section: padding 32px 0; bg #fff.
- copyright/details: font 12px, lh 18px, ls 0.996px, uppercase, color #595959.
- GoDaddy Airo logo: EXTRACT exact SVG/asset from live DOM (footer link contains svg/img — download as `images/godaddy-airo.svg` or inline component). Measured rendered 131×20 @390; desktop ~? right cell logo likely similar (~150x23?). Extract at desktop.

## Assets
- `images/godaddy-airo.svg` (extract from live DOM)
- GoDaddy link href: `https://www.godaddy.com/websites/website-builder?isc=pwugc&utm_source=wsb&utm_medium=applications&utm_campaign=es-us_corp_applications_base`

---

# 4. Overlays (cookie banner + chat FAB + TrustedSite badge)

- **Target file:** `src/components/sites/smiledentalcare.info-b93df72c/root-8a5edab2/Overlays.tsx`
- **Interaction model:** cookie accept click; others static visuals

## Cookie banner ('use client')
- Fixed bottom 0, left 0, width 100%, bg #fff, padding 24px, z-index 10000, box-shadow? (none measured), box-sizing border-box.
- Content: h4 `Este sitio web utiliza cookies` (22/27.5 ls0.99 #1b1b1b, padding-bottom 8); p `Usamos cookies para analizar el tráfico del sitio web y optimizar tu experiencia en el sitio. Al aceptar nuestro uso de cookies, tus datos se agruparán con los datos de todos los demás usuarios.` (16/24 #5e5e5e, margin 0); button row (display flex): `<a/button>Aceptar</a>` full-width: display flex; justify-content center; align-items center; height 40; padding 4px 16px; margin 24px 0 4px; bg #161616; color #dbdbdb; font 12/700 ls2.568 uppercase; text-decoration none.
- Shows on load unless `localStorage` flag set (e.g., `sdc-cookies`); Aceptar sets flag and hides.
- Desktop width: full viewport width (measured fixed w at 500 = 500). Height ~248 (content-driven).

## Chat FAB (static visual)
- Fixed bottom 24px right 24px; width 65px height 65px; border-radius 50%; bg #e2e2e2; box-shadow rgba(0,0,0,0.25) 0 3px 18px 0; display flex; align-items center; justify-content center; cursor pointer; z-index 9999.
- svg 44×44, color #1b1b1b; path: `<g fill="currentColor"><rect x="4" y="6" width="16" height="10.222" rx="1.129"/><path d="M8.977 18.578l.2-2.722a.564.564 0 01.564-.523h3.61c.548 0 .774.705.327 1.024l-3.81 2.721a.564.564 0 01-.89-.5z"/></g>` (from live DOM).
- No behavior on click (original opens GoDaddy messaging — out of scope; render inert or alert-free).

## TrustedSite badge (static visual)
- Fixed bottom -13px; left 15px; width 92px; height 38px; z-index 1000003; background: url(images/trustedsite.svg) center / 92px 38px no-repeat #fff; border 0.
- Render as `<img src=... width=92 height=38>` inside fixed div, or div with bg.

## Assets
- `images/trustedsite.svg` — `https://cdn.ywxi.net/meter/smiledentalcare.info/205.svg?ts=1769609249382&l=es`
