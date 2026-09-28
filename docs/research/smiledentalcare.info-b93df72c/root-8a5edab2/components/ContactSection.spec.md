# ContactSection Specification (info panel + hours + form + map)

## Overview
- **Target file:** `src/components/sites/smiledentalcare.info-b93df72c/root-8a5edab2/ContactSection.tsx`
- **Screenshot:** `docs/design-references/smiledentalcare.info-b93df72c/root-8a5edab2/desktop-1440-full.png` (y1786–2441), `mobile-390-full-v2.png` (stacked)
- **Interaction model:** click-driven (hours accordion, form reveal) + third-party map iframe

## DOM Structure
```
<section> (bg #fff, no extra padding — panel defines height)
  <div container>                      // standard container, max-width 1160 (position relative, overflow hidden)
    <div flexRow>                      // display flex (row ≥1024; column ≤1023 with map FIRST)
      <div infoCell 50%>               // flex justify-center; position relative (form panel anchors here)
        <section panel>                // bg #f3f3f3; padding 56px 40px (768: 56 24; <=767: 40 24); width 100%; height 100%
          <div pad>                    // padding 0 24px; width 100% (inner 428 @1440)
            <div inner>                // width 100%
              <h2>Comunícate con nosotros</h2>
              <div blocks>             // block1 mb40; block2 mb40; block3 mb0? (measured: b1 h99.5 mb40, b2 h123.5 mb40, b3 h81.5, b4 h80) — b3 (Horario) has NO margin-bottom, b4 (button) follows
                [block1] h4 + p
                [block2] h4 + p + p(links)
                [block3] h4 + hours widget
                [block4] button reveal
              </div>
            </div>
          </div>
        </section>
        <div formPanel>                // absolute inset 0 (top0 bottom0.5 left0 right0), bg #fff, padding 56px 0, z 2, transition transform .8s opacity .1s
          CLOSED: transform translateX(-120%); opacity 0
          OPEN: transform none; opacity 1
          <div formInner>              // padding 0 24 24; max-width 600; width 100%; flex column; justify-content center; position relative
            <form>                     // width 100% (508 @1440)
              <h4>Comunícate con nosotros.</h4>
              3x floating input fields (Nombre, Correo electrónico*, Teléfono)
              <textarea placeholder Otras notas>
              <div attachRow> 📎 Adjuntar archivos | Datos adjuntos (0) </div>
              <p recaptcha note + links>
              <div btnRow> <button>ENVIAR</button> <span role=button>Cancelar</span> </div>
            </form>
          </div>
        </div>
      </div>
      <div mapCell 50%>                // position relative; width 556 @1440
        <iframe google maps embed>
        <button directions>            // absolute top 8 left 56 (desktop); bg #e2e2e2 ...
      </div>
    </div>
  </div>
</section>
```

## Computed Styles (exact — @1440 desktop)

### Section & cells
- container: max-width 1160, padding 0 24, position relative, overflow hidden; width 97.5% rule.
- flexRow: display flex; width 100% (1112 inner); children 50% each (556): `flex: 1 1 50%; max-width: 50%`.
- infoCell: display flex; justify-content center; position relative.
- mapCell: display flex; justify-content center; position relative; its inner map wrapper width 100%; height 100%.

### Gray panel
- bg #f3f3f3; padding 56px 40px; width 100%; maxWidth 100%; display block; box-sizing border-box; height stretches to row height (655 @1440).
- inner pad div: padding 0 24px → inner width 428; inner div width 100%.
- h2 eyebrow: 16/22.4 ls2 uppercase #8f6e6e mb32, text-align left (desktop) / center (≤1023).
- h4: 22/27.5 ls0.99 #1b1b1b mb24, text-align left.
- p: 16/24 #5e5e5e.
- block1: margin-bottom 40 (h4 "O, aún mejor, ¡ven a visitarnos!" + p "Nos encanta..." h48).
- block2: margin-bottom 40 (h4 "Smile Dental Care", p address mb24, p phone/email mb24 — actually p has margin 0 0 24px; last p's bottom margin creates spacing to block3? measured block2 h123.5: h4 27.5+24 + p 24 + p 24 = 99.5? +24 margin... implement: h4 mb24; p mb24; p mb0 (last) then block margin gives 40 total? measured blocks separated by exactly 40 (y1896+99.5=1995.5 → next block at 2036 → 40.5 gap ✓ via margin-bottom 40). So block2 internal: h4 mb24, p mb24, p mb0? but p measured margin "0 0 24px" for both. If both p have mb24: block2 height = 27.5+24+24+24+24 = 123.5 ✓ (block height includes last margin). Then gap to next block: block margin-bottom 40... wait blocks are siblings each with margin-bottom 40 except block3 (h81.5: h4 27.5+24 + hours collapsed 30 = 81.5 ✓ no mb) and block4 button h80 (btn margin-top 24 + h56). Gaps: b1 ends 1995.5, b2 starts 2036 (40.5 ✓). b2 ends 2159.5, b3 starts 2199 (39.5 ✓). b3 ends 2280.5, b4 starts 2305 (24.5 = button margin-top 24 ✓ with b3 mb0).
  - So: block1 mb40, block2 mb40, block3 mb0, button margin-top 24.
- links (phone, email): color #8f6e6e, 16/24, cursor pointer; hover → #474747 (LinkAlpha pattern, same as footer).
- address p: 16/24 #5e5e5e.

### Hours widget (collapsed)
- Table-like inline-table, text-align left, width ~264.
- Row: td "Abre hoy" p: 16/24 #5e5e5e, padding 1px.
- td hours: p padding-left 4px; span role=button: 16/24 #8f6e6e, cursor pointer; hover → #474747.
- td chevron: span role=button, svg 16×16 fill currentColor (#8f6e6e? measured chevron color: link class → #8f6e6e). Path (down): `M19.774 7.86c.294-.335.04-.839-.423-.84L4.538 7c-.447-.001-.698.48-.425.81l7.204 8.693a.56.56 0 0 0 .836.011l7.621-8.654z` (rotate 180deg when expanded).
- Height collapsed: 30px total.

### Hours widget (expanded)
- 7 rows × 26px = 182px, margin-bottom 24 (block3 height 81.5 becomes h4 27.5+24+182+24=257.5? measured expanded CONTACT_HOURS_REND h182 at y437 with margin-bottom 24 on wrapper... collapsed block3 h81.5; expanded adds 182-30=152 → contact section grows accordingly (section height becomes content-driven: 655+152=807 measured when open).
- Row: td day (padding 1px, width ~36): p 16/24 #5e5e5e; td value: p 16/24 #5e5e5e.
- Today (sáb): font-weight 700.
- Chevron: sits in first row's right area (aligned with "lun" row), rotated up.
- Data: lun Cerrado / mar 09:00 a.m. – 05:00 p.m. / mié same / jue same / vie same / sáb same (bold) / dom Cerrado.
- NOTE: today = client local day; original bolds current day. Recompute client-side (JS in client component).

### Reveal button ("Comunícate con nosotros.")
- button: margin-top 24; padding 8px 32px; height 56; inline-flex center; font 14/700 ls2.996 uppercase; color #1b1b1b; bg #e2e2e2; transition .3s; cursor pointer; width auto (350.594 content-driven; at ≤767 width fits content 246 @390 — actually measured 341 at 500? At 390: 246. It's content-sized: text length. width auto with padding).
  - Hmm measured at 500: 341px = full inner width? inner at 500 = 437-48=389... 341 ≠ 389. At 390: inner=342-48=294, btn=246. So content-sized both. At 1440: 350.6 content-sized ✓. So width: auto/fit-content always.
- hover: bg #d4d4d4 + box-shadow rgba(0,0,0,0.5) 0 10px 10px -10px.

### Map cell
- iframe: width 100%, height 100% (655 @1440; 300 at ≤1023), border 0, display block. URL: `https://www.google.com/maps?q=25.780214,-80.264785&z=14&hl=es&output=embed`.
- Directions button: position absolute; top 8px; left 56px; height 40; padding 4px 16px; bg #e2e2e2; font 12/700 ls2.568 uppercase; color #1b1b1b; display flex center; gap before icon: icon (paper plane / near-me Material Symbol) + text margin-left 4 (text starts x807 vs icon ~x781). Width: content (306.875). Icon: use the Material Symbols "near_me"-like glyph: original uses Material Symbols Outlined font icon. Simplest: inline SVG paper-plane/near-me 20×20 before text with margin-right ~4.
  - Measured spans: first span (icon container?) margin-left -4 w278; second margin-left 26... Actually two spans both text "Consigue las instrucciones": first w278.875 margin-left -4, second w252.875 margin-left 26. Likely icon+text duplicate for spacing. Implement simple: `<svg near_me 16px>` + `<span>Consigue las instrucciones</span>` with gap ~8. Visual target: button 307×40, text centered with icon left of text.
- hover on directions button: same primary hover pattern.

### Form panel (open)
- panel: absolute; top0 left0 right0 bottom 0.5px; width 100% of cell (556); bg #fff; padding 56px 0; display flex; justify-content center; align-items flex-start; z-index 2; transition transform 0.8s, opacity 0.1s; box-sizing border-box; height auto (min 799 content).
  - Wait: inset 0 with content taller → height = max(stretch, content). With `bottom:0.5px` AND content 799 > cell 655: absolute element with top+bottom set → height fixed 655.5, content overflows? Measured height 799 → so it must NOT have both top and bottom... measured bottom: "0.5px" and height 799 → in practice: set `top: 0; left:0; right:0; min-height: calc(100% + 144px)`? Simpler: `position:absolute; top:0; left:0; width:100%; height:100%` won't fit content. Use: top:0; width:100%; padding 56 0; (height auto = content 799) — bottom edge extends below cell (measured bottom -143.6 when closed, i.e., content extends 144 below cell bottom: 799-655=144 ✓). So: top 0, width 100%, height auto. The "bottom:0.5px" computed was from CSS `bottom:0.5px`?? conflicting... computed bottom 0.5px + height 799 means CSS has bottom AND min-height? If both top and bottom set, height would be 655.5 unless min-height/content forces 799 (then bottom is ignored/over-constrained → for LTR, bottom ignored when top+height). Actually over-constrained: top+bottom+height → bottom ignored. So effectively top:0, bottom:0.5 (ignored), height:content. Just implement top:0; width:100%; height:auto (content), padding 56 0.
  - When closed: translateX(-120%), opacity 0. When open: none/1.
- formInner: padding 0 24px 24px; max-width 600px; width 100%; box-sizing border-box; display flex; flex-direction column; justify-content center; position relative; background #fff.
- form: display block; width 100% (508 @1440); margin 0 auto? (form x181 = panel157+24 ✓).
- h4: 22/27.5 #1b1b1b mb24 text-align left.
- field wrapper: position relative; width 100%; margin-bottom 24 (input y79→157: 78 = 54+24 ✓; three fields then textarea y313 = 289+24 ✓).
- input: width 100%; height 54; padding 23px 8px 8px; border: none; border-bottom: 1px solid #e2e2e2; background transparent; font 16px; color #5e5e5e; box-sizing border-box; outline none.
- label: position absolute; left 8px; top 16.19px (≈ centered); font 16px; color #5e5e5e; transition .15s; pointer-events none; when input focused or has value → top 8px; font-size 12px.
- textarea: width 100%; height 146; padding 16px 8px; border 1px solid #e2e2e2; border-radius 3px; font 16px; line-height 28px; color #5e5e5e; resize vertical; box-sizing border-box.
- attachRow: display flex; justify-content space-between; align-items center; margin-top 24 (textarea ends 459, attach at 488 → 29? 24+? y459+24=483 vs 488 — attach row height22 with some margin; use margin-top 24 and accept). Left: span role=button "Adjuntar archivos" with paperclip svg 16 #8f6e6e, 16px; Right: "Datos adjuntos (0)" 12/18 #595959.
- recaptcha note: margin-top 24? (attach y488 h22 → ends 510; note y558 → 48 gap... hmm 558-510=48. Maybe attach block mb24 + note... use margin-top 40? measured: note top 558. attach row ends 510 → 48. Wait attach row could be y488..510 but there's the file input hidden... I'll use margin-top 48? Hmm. Actually maybe attachRow is h44 (icon line) → ends 532 → gap 26≈24. Set note margin-top 24 with attachRow margin-bottom 24? Let's do: attachRow margin 24px 0 (top+bottom 24): 459+24=483 (vs 488 close), +22+24=529... note at 558. Off. Alternative: note margin-top 48: 510+48=558 ✓. So: attachRow (h22) margin-top 24; note margin-top 48. Hmm 48 is odd but match measurement: attach 488..510, note 558 → 48. I'll spec margin-top 48.
  Wait: textarea ends 459 → attach starts 488 (29 ≈ 24+5?). close enough with 24 (483) or 30. Use: attachRow margin-top 24; note margin-top 48. Fine — QA will tune.
- note p: font 12/18; color #595959; text-align center; width 100%; links #8f6e6e (Política de privacidad, Términos de servicio) hover #474747.
- btnRow: display flex; justify-content center; align-items center; margin-top 24 (note ends 594, buttons y634 → 40; note h36 ends 594 → 40 gap. So margin-top 40? note y558 h36 → 594; ENVIAR y634 → 40. Use margin-top 40... or note margin... I'll spec btnRow margin-top 40? Hmm 558+36=594, +40=634 ✓. Use margin-top 40.)

Hmm actually maybe note has margin-bottom... fine: btnRow margin-top 40? but that seems large — could be note's line-height extra. Keep 40? Actually if note height were 48 (3 lines?) no — measured h36. Use 40.

- ENVIAR button: same primary button styles (bg #e2e2e2 → #d4d4d4 + shadow), width content (133.844).
- Cancelar: span role=button, margin-left 16? (ENVIAR ends 461, Cancelar x477 → 16 gap); text 16px, color? measured: from screenshot dark with underline: font 16, color #1b1b1b?, text-decoration underline. Let me note: `Cancelar` link: 16px, color rgb(27,27,27)?, underline. Position: inline after button, vertically centered. (Color: original screenshot shows dark gray/black underlined.)

## Text Content (verbatim)
- h2: `Comunícate con nosotros`
- h4: `O, aún mejor, ¡ven a visitarnos!`
- p: `Nos encanta recibir a nuestros clientes, así que ven en cualquier momento durante las horas de oficina.`
- h4: `Smile Dental Care`
- p: `860 Nw 42 ave suite 407. Miami Fl 32126`
- p: `786-849-2174` (link tel:7868492174) ` / ` `Smiledentalcare860@gmail.com` (link mailto:) — rendered: "786-849-2174 / Smiledentalcare860@gmail.com" with links in #8f6e6e, separator " / " in #5e5e5e
- h4: `Horario`
- collapsed: `Abre hoy` + `09:00 a.m. – 05:00 p.m.`
- button: `Comunícate con nosotros.`
- form h4: `Comunícate con nosotros.`
- labels: `Nombre`, `Correo electrónico*`, `Teléfono`, textarea label `Otras notas`
- attach: `Adjuntar archivos`, `Datos adjuntos (0)`
- note: `Este sitio está protegido por reCAPTCHA y aplican las ` + link `Política de privacidad` + ` y los ` + link `Términos de servicio` + ` de Google.`
- buttons: `Enviar` (uppercase via CSS), `Cancelar`
- directions: `Consigue las instrucciones` (uppercase via CSS)

## Responsive Behavior
- ≥1024: 2-col (info left / map right), panel padding 56 40, eyebrow left-aligned.
- 768–1023: STACKED, map FIRST (705×300) then gray panel (padding 56 24, full width), eyebrow CENTERED, h4 left? (measured contactH4 textAlign left @768; h2 center). Container 100%.
- ≤767: stacked, map 342×300, panel padding 40 24, eyebrow centered, h4 left-aligned?? measured at 390: contactH2 center; h4s: left (from screenshot "O, aún mejor..." appears left-aligned at 390? In mobile screenshot the contact text IS centered? Screenshot shows "O, aún mejor, ¡ven a visitarnos!" centered? It appears LEFT aligned starting x48+24... Actually mobile screenshot: headings and paragraphs appear left-aligned within panel? Looking at mobile-v2: "COMUNÍCATE CON NOSOTROS" centered; "O, aún mejor, ¡ven a visitarnos!" left; paragraphs left; "Smile Dental Care" left; address left; Horario left; button left (x72). Yes — only the eyebrow h2 is centered ≤1023, rest left. But paragraph text-align... measured contactH4 textAlign left at 768/390 ✓. And p? left ✓ (from screenshot).

Wait — at 768 probe: contactH4 textAlign left ✓ but the tablet screenshot showed contact content CENTERED? Looking at tablet-768: "O, aún mejor, ¡ven a visitarnos!" appears left-aligned... screenshot shows it left. ✓. Eyebrow centered ✓.

- Form panel same behavior at all widths (covers info cell = full width when stacked).

## Assets
- `images/` — none (map is iframe)
- Icons: `ChevronIcon`, `PaperclipIcon`, `DirectionsIcon` from shared icons.

## Notes
- Client component ('use client') — hours toggle, form open/close, floating labels, current-day bold.
- Form submit: preventDefault (no backend).
