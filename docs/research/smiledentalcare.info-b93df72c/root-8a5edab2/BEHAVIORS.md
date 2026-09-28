# Behaviors — https://smiledentalcare.info/ (behavior bible)

## Global

- No Lenis/Locomotive, no `scroll-behavior: smooth`, no scroll-reveal animations, no sticky elements (except the 3 fixed overlays below). Native scrolling only.
- Only fixed elements: chat FAB (bottom 24 / right 24), TrustedSite badge (bottom -13 / left 15), cookie banner (bottom 0 full-width).
- Fonts: "Open Sans" (400/700) body & UI, "Playfair Display" (400) for `<h1>` hero and subscribe `<h2>`. Google Fonts.

## Header (desktop ≥1024)

- Top bar row 235px: logo centered (209×75, retina src w:418), phone right (`+1786-849-2174`, tel:+17868492174, 22px/33 #826c6c).
- Nav row: `padding: 24px 0`, flex space-between/center, items separated by `padding-left:32px` on all but first.
- Nav link: 14px/24, ls 2.996px, uppercase, #151515, padding 6px margin -6px (hit area).
- Active (INICIO): `border-bottom: 1px solid #898989; padding-bottom: 4px; margin-bottom: -5px`.
- Hover: color → rgb(130,108,108) (#826c6c). Transition: all (default, effectively instant/0.15s).
- Logo hover: none. Phone hover: no color change.
- "Más" overflow item exists in DOM but hidden at 1440 (0×0).

## Mobile header (<1024)

- Row 1: phone centered (49px tall).
- Row 2: `padding: 24px 0`, flex, space-between: hamburger link 15% width (svg 40×40, path hamburger), logo 70% width (img height 80px, object-fit contain), empty 15% spacer.
- Hamburger `aria-label="Hamburger Site Navigation Icon"`, toggles `aria-expanded`.

## Nav drawer (click-driven)

- Trigger: hamburger click. Fixed panel 100vw×100vh, bg #f3f3f3, padding-top 56px, z-index 10002.
- Transition: `transform 0.3s ease-in-out`; closed = translateX(-100%) off-canvas left; open = translateX(0) (measured ~translateX(-24) mid/end quirk — implement clean -100%→0).
- Close: X icon top-right (svg 40×40, NavigationDrawerCloseIcon path), positioned ~top 16 right 16.
- Items: block links, `padding: 16px 24px`, width ~704 (container inset ~32px each side at 768 → actually links x32 width704 at 768), 22px, ls 2.992px, uppercase, #1b1b1b, first item (INICIO) weight 700, rest 400. Line boxes 62px tall each, first starts y88 (56 padding + 32).
- Body scroll not locked on original (no evidence) — keep simple overlay.

## Hero button hover ("SOLICITE SU CITA HOY" and all primary buttons)

- State A: bg rgb(218,218,218) (#dadada) [hero] / rgb(226,226,226) (#e2e2e2) [contact, ENVIAR] / rgb(255,255,255) [REGISTRARSE].
- State B (hover): bg rgb(204,204,204) (#cccccc) [hero] / rgb(212,212,212) (#d4d4d4) [contact] / + `box-shadow: rgba(0,0,0,0.5) 0 10px 10px -10px` on ALL.
- Transition: `0.3s`.

## Contact — hours accordion (click-driven)

- Collapsed: table row: "Abre hoy" (#5e5e5e) | "09:00 a.m. – 05:00 p.m." (#8f6e6e, role=button) | chevron-down svg 16×16 (#5e5e5e... actually link-colored).
- Expanded: replaces summary with 7-row table (each row 26px, total 182px, margin-bottom 24px), chevron (up) sits in first row's right td:
  - lun Cerrado / mar–vie 09:00 a.m. – 05:00 p.m. / sáb 09:00 a.m. – 05:00 p.m. (BOLD — current day) / dom Cerrado.
  - Day cells: 16px/24 #5e5e5e, padding 1px, width ~36px + value cells. Rows have `cursor:pointer` on today's row only (others auto).
- Toggle: click summary hours text or chevron.

## Contact — form reveal (click-driven)

- Trigger: button "COMUNÍCATE CON NOSOTROS." (`CONTACT_FORM_REVEAL_BUTTON_REND`).
- Panel: `position:absolute; inset 0 (top0,bottom0.5); left0 right0; width 556px (cell width); background:#fff; padding: 56px 0; z-index: 2; transition: transform 0.8s, opacity 0.1s;`
  - Closed: `transform: translateX(-120%)` (measured tx -667.2px = -120% of 556), `opacity: 0`.
  - Open: `transform: none; opacity: 1`.
- Inner: `padding: 0 24px 24px; max-width:600px; width:100%; flex column; justify-content:center; position:relative`.
- Content: h4 "Comunícate con nosotros." (22px, mb24) → 3 floating-label inputs (Nombre, Correo electrónico*, Teléfono) → textarea "Otras notas" → attach row ("📎 Adjuntar archivos" #8f6e6e + "Datos adjuntos (0)" 12px #595959 right) → reCAPTCHA note (12px/18 #595959 centered, links #8f6e6e) → row [ENVIAR button + Cancelar link (underlined)].
- Cancelar (span role=button) closes panel (reverse animation).
- Inputs: h54, `padding: 23px 8px 8px`, `border-bottom: 1px solid #e2e2e2`, color #5e5e5e, bg transparent/white; floating label 16px #5e5e5e absolute left 8, top 16.19 (centered) → focused/filled: top 8, font-size 12px, transition 0.15s.
- Textarea: h146, padding 16px 8px, border 1px solid #e2e2e2, radius 3px, line-height 28.
- ENVIAR: #e2e2e2 → hover #d4d4d4 + shadow, 14px/700 ls2.996 uppercase #1b1b1b, padding 8 32, h56.

## Contact map

- Google Maps JS map (client=gme-godaddycom), center 25.780214,-80.264785, zoom 14, es locale, red marker.
- Overlay button "CONSIGUE LAS INSTRUCCIONES" absolute top-left inset (x+56, y+8 at desktop → actually button box x769 vs map x713 → left 56, top 8): bg #e2e2e2, 12px/700 ls2.568 uppercase #1b1b1b, padding 4 16, h40, width 307, paper-plane icon before text; hover same button pattern.
- Clone approach: Google Maps embed iframe (`q=25.780214,-80.264785&z=14&output=embed&hl=es`) + overlay directions button.

## Subscribe

- Background: `linear-gradient(rgba(0,0,0,0.24),rgba(0,0,0,0.24)), url(subscribe-bg.jpg)` center/cover no-repeat on section.
- Floating label input: rest top≈16.8 fs16 → focus top 8 fs12, transition 0.15s; input `border-bottom: 1px solid #fff`, color #fff, transparent bg, padding 23px 8px 8px.
- REGISTRARSE button: white bg, #000 text, 14/700 ls2.996 uppercase, padding 8 32, h56; hover → (assumed same pattern: shadow; bg slightly darker).

## Footer link hover

- Default color rgb(143,110,110) (#8f6e6e) → hover rgb(71,71,71) (#474747). No underline change.

## Social link hover

- `<a>` color → rgb(71,71,71) but Instagram glyph has hardcoded `fill="#E1306C"` — no visible change.

## Cookie banner

- Fixed bottom, full width, white bg, padding 24, z 10000. Appears after delay on first visit (session had it appear after navigation/timeout).
- h4 22px/27.5 ls0.99 #1b1b1b padding-bottom 8; body 16/24 #5e5e5e; ACEPTAR button: full-width flex, bg #161616, color #dbdbdb, 12px/700 ls2.568 uppercase, padding 4 16, h40, margin 24 0 4.
- Accept → hides (persist dismissal in localStorage).

## Chat FAB

- Fixed bottom 24 right 24, 65×65 circle, bg #e2e2e2, `box-shadow: rgba(0,0,0,0.25) 0 3px 18px 0`, cursor pointer, svg 44×44 #1b1b1b chat bubble (rect+tail path). Click: opens GoDaddy messaging panel (out of scope — visual button only, no-op or inert).

## TrustedSite badge

- Fixed bottom -13px left 15px, 92×38, white bg with meter SVG `https://cdn.ywxi.net/meter/smiledentalcare.info/205.svg?ts=1769609249382&l=es` (download to assets).

## Header/hero font scaling (DynamicFontScaler equivalent — discrete per breakpoint)

| Element | ≥1536 | 1280–1535 | 768–1279 | ≤767 |
|---|---|---|---|---|
| hero h1 | 48px / lh 1.2 / ls ~1.1 | 44px / 52.8 / 1.012 | 38px / 45.6 / 0.874 | 32px / 38.4 / 0.736 |
| subscribe h2 | 36px | 32px / 40 / 0.992 | 30px / 37.5 / 0.93 | 28px / 35 / 0.868 |

(ls ≈ fontSize × 0.023 for h1; ~0.031 for subscribe h2 — use measured values above.)

## Hero geometry

| bp | container | hero cells | hero row height |
|---|---|---|---|
| ≥1536 | 1280 max (pad 24) → inner 1232 | image 750 / panel 482 (panel padding 40) | content-driven (~482+) |
| 1280–1535 | 1160 max (pad 24) → inner 1112 | image 724 / panel 388 (panel padding 40) | content-driven: 482.5 @1440 |
| 1024–1279 | 97.5% (pad 24) → inner 936 @1024 | image 548 / panel 388 (pad 40) | 400 |
| 768–1023 | 100% (pad 24) → inner 705 @768 | 50/50: 352.5 / 352.5 (pad 40→ measured content; panel padding likely 40) | 400 |
| ≤767 | 100% (pad 24) → inner 342 @390 | stacked: image full-width natural 3:2; panel below `padding: 56px 24px` | image 228 + panel 377 |

Panel (gray #f3f3f3) internal (all bp): flex column, centered; h2 eyebrow mb16; h1 mb16; p mb0 (btn has margin-top 32); btn.
