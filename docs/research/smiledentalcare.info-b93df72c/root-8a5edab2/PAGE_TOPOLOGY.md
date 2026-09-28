# Page Topology — https://smiledentalcare.info/

Page total height: 3058px @1440 (1425 layout width due to scrollbar), 3024px @768, ~4047px @390.

| # | Section | Widget id / class | Desktop y-range (1440) | Height | Notes |
|---|---|---|---|---|---|
| 1 | Header + Hero | `widget widget-header widget-header-header-9` | 0–757 | 757 | White bg. Top bar (logo center, phone right, 235px) + nav row (72px, y131–203) + hero (y235–717, then 40px margin). |
| 2 | About | `widget widget-about widget-about-about-2` | 757–1786 | 1028 | `section` padding 40px 0, white bg. Eyebrow + 3 alternating image/text rows. |
| 3 | Contact | `widget widget-contact widget-contact-contact-4` | 1786–2441 | 655 | Container 1160 max, overflow hidden, relative. Left cell 50% gray panel (#f3f3f3, pad 56/40), right cell 50% Google map. Contact form slides in over left cell. |
| 4 | Social | `widget widget-social widget-social-social-1` | 2441–2631 | 190 | padding 40px 0. Eyebrow left + centered Instagram icon. |
| 5 | Subscribe | `widget widget-subscribe widget-subscribe-subscribe-3` | 2631–2887 | 256 | Photo bg + 0.24 black gradient overlay, all-white text, floating-label input + white REGISTRARSE button. |
| 6 | Footer | `widget widget-footer widget-footer-footer-3` | 2887–3058 | 171 | padding 32px 0. Two-column top row (copyright left / GoDaddy Airo right), centered link row below (margin-top 24). |
| — | Fixed: chat FAB | `widget-messaging` → `[data-aid=MESSAGING_FAB]` | fixed bottom-right | 65×65 | Circle #e2e2e2, shadow, chat svg 44px. z 9999. |
| — | Fixed: TrustedSite badge | `#trustedsite-tm-image` | fixed bottom-left | 92×38 | `bottom:-13px; left:15px`, bg meter SVG, z 1000003. |
| — | Fixed: cookie banner | `widget-cookie-banner` | fixed bottom, full width | ~248–272 | White, appears on load (session delayed), z 10000. |
| — | Nav drawer (mobile) | nav drawer inside header widget | fixed overlay | 100vw×100vh | bg #f3f3f3, slides from left, z 10002. |

## Layout architecture

- Body: white (#fff), default font Open Sans 16px, color #000.
- Container rule:
  - ≥1024: `width: 97.5%; max-width: 1160px; margin: 0 auto; padding: 0 24px` (≥1536: max-width 1280px)
  - <1024: `width: 100%; padding: 0 24px`
  - Inner content width: 1112px @1440.
- Breakpoints (from site stylesheets): ≤450, 451–767, 768–1023, 1024–1279, 1280–1535, 1536–1920, ≥1921.
- Header nav switches to hamburger + drawer below 1024.
- Contact section stacks (map on top, gray panel below) below 1024.
- Hero is 2-column ≥768 (image cell left / gray panel right), stacked ≤767 (image full-width natural ratio, panel below).
- About rows: 2-column ≥768, stacked ≤767.
- Footer: 2-column top row ≥768 (actually ≥1024? measured 2-col at 768 too with centered items... measured at 768: copyright left-ish center, tech right → 2-col; at 390 stacked centered).
- No sticky header, no scroll-driven animation, no smooth-scroll library, no scroll-reveal. Page is static except listed interactions.

## Interaction model per section

1. Header — click-driven (hamburger drawer), hover states on nav/phone.
2. Hero — static + button hover.
3. About — static (images/text).
4. Contact — click-driven: hours expand/collapse, form reveal/cancel; map is third-party iframe.
5. Social — hover on link (no visual change to pink icon).
6. Subscribe — floating-label input focus animation, submit button hover.
7. Footer — link hover (color darken).
8. Overlays — cookie accept (dismiss), chat FAB (visual only — no chat backend), TrustedSite badge (visual only).
