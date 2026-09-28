# Design Tokens — smiledentalcare.info (extracted via getComputedStyle)

## Colors

| Token | Value | Usage |
|---|---|---|
| white | #ffffff | page bg, section bg, subscribe button, cookie bg |
| panel-gray | #f3f3f3 | hero right panel, contact info panel, nav drawer bg |
| ink | #151515 | h1 color, nav links default |
| heading-dark | #1b1b1b | h4 headings, buttons text (contact), cookie h4, chat icon |
| body-gray | #5e5e5e | body paragraphs, form field text/labels, hours day cells |
| body-gray-2 | #575757 | hero paragraph |
| eyebrow-rose | #8f6e6e | eyebrows (about/contact/social), links (contact/footer/forms) |
| phone-rose | #826c6c | phone number, hero eyebrow (BIENVENIDOS), nav hover |
| nav-active-border | #898989 | active nav underline |
| button-hero | #dadada → hover #cccccc | hero CTA |
| button-muted | #e2e2e2 → hover #d4d4d4 | contact CTA, ENVIAR, directions button |
| footer-gray | #595959 | copyright, minor details, recaptcha note |
| cookie-btn | bg #161616 / text #dbdbdb | ACEPTAR |
| instagram | #e1306c | Instagram glyph fill |
| overlay | rgba(0,0,0,0.24) | subscribe bg gradient |
| fab | #e2e2e2 | chat FAB bg, shadow rgba(0,0,0,0.25) 0 3px 18px |

## Typography

| Role | Font | Size / LH / LS | Weight | Transform | Color |
|---|---|---|---|---|---|
| h1 hero | Playfair Display | 44/52.8/1.012px @1440 (48≥1536, 38 @768–1279, 32 ≤767) | 400 | none | #151515 |
| h2 eyebrow | Open Sans | 16/22.4/2px | 400 | uppercase | #8f6e6e (hero: #826c6c, lh20) |
| h4 | Open Sans | 22/27.5/0.99px | 400 | none | #1b1b1b |
| body | Open Sans | 16/24 | 400 | none | #5e5e5e / #575757 (hero) |
| nav link | Open Sans | 14/24/2.996px | 400 | uppercase | #151515 |
| button | Open Sans | 14/normal/2.996px | 700 | uppercase | #151515 / #1b1b1b |
| directions btn | Open Sans | 12/normal/2.568px | 700 | uppercase | #1b1b1b |
| footer text | Open Sans | 12/18/0.996px | 400 | uppercase | #595959 |
| subscribe h2 | Playfair Display | 32/40/0.992px @1440 (36/30/28 by bp) | 400 | none | #ffffff |
| phone | Open Sans | 22/33 | 400 | none | #826c6c |
| drawer item | Open Sans | 22/30/2.992px | 400 (active 700) | uppercase | #1b1b1b |
| cookie body | Open Sans | 16/24 | 400 | none | #5e5e5e |

Fonts loaded: `Open Sans` 400,700; `Playfair Display` 400 (Google Fonts).

## Spacing / layout

- Container: ≥1024 `width:97.5%; max-width:1160px (≥1536: 1280px); padding:0 24px; margin:0 auto`; <1024 `width:100%; padding:0 24px`.
- Section vertical padding: 40px 0 (≥768) / 32px 0 (≤767) for about, social, subscribe; footer 32px 0 always.
- Header topbar height 235 (desktop), nav row padding 24 0.
- Hero wrapper margin-bottom 40 (desktop) — about section directly follows.
- About rows: padding 0 24 48 per row; cells 50% with padding 0 24; inner 532 @1440; row gap comes from 48 bottom padding; rows wrapper margin 0 -24 -48.
- About h2 margin-bottom 32 (24 at ≤767); h4 margin-bottom 24 (16 at ≤767).
- Contact: container max 1160 pad24; cells 50/50; gray panel padding 56px 40px (56 24 @768; 40 24 ≤767); panel inner pad 0 24; blocks margin-bottom 40.
- Social: h2 mb32; icons row height 56; icon 48px desktop (40 <1024) margin 0 24 8 (16 @768, 8 ≤767).
- Subscribe: h2 mb32; p mb16; form row: input group flex 66.67% col with margin-right 24; button 30% max-width; input h56, button h56.
- Footer: top row 2 cols (50/50), left text-align left, right text-align right (2-col ≥768, stacked centered ≤767); nav row margin-top 24, links padding 8 (4px 8px ≤767).

## Radii / shadows / borders

- Buttons: no radius, no border.
- Inputs: no radius; border-bottom 1px #e2e2e2 (subscribe: #fff). Textarea radius 3px, border 1px #e2e2e2.
- No card shadows anywhere. Button hover shadow: `rgba(0,0,0,0.5) 0 10px 10px -10px`. FAB shadow: `rgba(0,0,0,0.25) 0 3px 18px 0`.
- Nav active underline: 1px solid #898989.

## Images (download to public/sites/<site-key>/<page-key>/images/)

- `logo.png` — `SMILE%20DENTALok.png/:/rs=w:418,h:150,cg:true,m/qt=q:95` (209×75 @1x)
- `hero.jpg` — `photo_2026-01-15_10-36-18%20(17).jpg/:/rs=h:1000,cg:true,m` (750×500)
- `about-1.jpg` — `photo_2026-01-15_10-36-18%20(10).jpg/:/cr=t:12.49%25,l:0%25,w:100%25,h:75.03%25/rs=w:600,h:300,cg:true`
- `about-2.jfif` — `443563a7-9e44-4a63-b495-14552c76f7c0.jfif/:/cr=t:25%25,l:0%25,w:100%25,h:50%25/rs=w:600,h:300,cg:true`
- `about-3.jpg` — `photo_2026-01-15_10-36-18%20(18).jpg/:/cr=t:12.49%25,l:0%25,w:100%25,h:75.03%25/rs=w:600,h:300,cg:true`
- `subscribe-bg.jpg` — `469734307_18476456215058891_142870297664653754.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1535,m`
- `favicon.png` — `SMILE%20DENTALok.png/:/rs=w:180,h:180,m`
- `og.jpg` — `photo_2026-01-15_10-36-18%20(17).jpg` (raw, OG/twitter image)
- `trustedsite.svg` — `https://cdn.ywxi.net/meter/smiledentalcare.info/205.svg?ts=1769609249382&l=es`
