# AppointmentSection Specification

## Overview
- **Target file:** `src/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/AppointmentSection.tsx`
- **Screenshot:** `docs/design-references/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/appointment-1440.png`
- **Interaction model:** static (no animations, no carousel; only a `mailto:` link and a CSS-only link hover that changes nothing)
- **Live geometry:** `footer > section#brxe-yurdka` — top **8734**, height **1240** (footer `#brx-footer` starts at 8534; the 200px offset is this section's `margin-top: 200px`). Section bottom 9974, but 800px of that is `padding-bottom` used to host the overlapping Locations block pulled up with `margin-top: -640px`.

## DOM Structure
```
SECTION#brxe-yurdka .brxe-section            (8734, h1240, bg #F6F4F2, margin-top 200, padding 100 0 800 20)
├─ DIV#brxe-wivbui .brxe-container           (8834, 1100×300, margin 0 152.5, row, align flex-start, gap 0)
│  ├─ DIV#brxe-mzkrui .brxe-block            (8834, 660×300, column, align flex-start, gap 0)
│  │  ├─ DIV#brxe-gncolh .brxe-heading       "Plan Your Visit Today"          (eyebrow)
│  │  ├─ H2#brxe-dznvvt  .brxe-heading       "Request An Appointment"         (wraps to 2 lines)
│  │  └─ DIV#brxe-sppeyy .brxe-text > P      paragraph (margin-top 20)
│  └─ DIV#brxe-iszmrg .brxe-block            (8834, 440×0) ← EMPTY placeholder
└─ DIV#brxe-ybxgne .brxe-container           (9174, 1405×0, row, align flex-start)
   ├─ DIV#brxe-ipmdeh .brxe-block            (9174, 843×0) ← EMPTY spacer
   └─ DIV#brxe-bvjgcf .brxe-block            (8654, 562×424, margin-top -520) ← BROWN CARD
      ├─ DIV#brxe-wglhus .brxe-block         (row label + value)
      │  ├─ UL#brxe-ublijg .brxe-social-icons > LI.repeater-item.no-link > svg.icon + SPAN "OPENING HOURS"
      │  └─ DIV#brxe-qrkrpt .brxe-text-basic  "9am-6pm"
      ├─ DIV#brxe-gkxqgy .brxe-block
      │  ├─ UL#brxe-tfnfbt .brxe-social-icons > LI > svg.icon + SPAN "CONTACT US"
      │  └─ DIV#brxe-ltwrih .brxe-text > P > A[href=mailto:admin@advancedsmileclinic.com]
      └─ DIV#brxe-ciikdb .brxe-block
         ├─ UL#brxe-puvdul .brxe-social-icons > LI > svg.icon + SPAN "ONLINE REGISTRATION FORM"
         └─ DIV#brxe-egrsub .brxe-text-basic  "Fill out our Welcome package online"
```

## Computed Styles (exact values from getComputedStyle)

### Container `SECTION#brxe-yurdka`
- background-color `rgb(246, 244, 242)`; background-image `none`
- margin `200px 0px 0px`; padding `100px 0px 800px 20px`
- width `1425px`; height `1240.19px`; display `flex`; flex-direction `column` (default); gap `40px normal`; align-items `center` (default from Bricks)
- color `rgb(54, 54, 54)`; overflow `visible`; box-shadow `none`; border `0px none`; transform `none`; opacity `1`; transition `all` (0s)

### `#brxe-wivbui` (text row)
- width `1100px`; margin `0px 152.5px`; height `300.188px`; flex-direction `row`; align-items `flex-start`; gap **`normal` (0)** — the 660px + 440px columns fill the 1100px container exactly; flex-wrap `nowrap`

### `#brxe-mzkrui` (left column)
- width `660px`; height `300.188px`; flex-direction `column`; align-items `flex-start`; gap **`normal` (0)**
- Vertical rhythm comes from the children, not a gap: 51 (eyebrow) + 168 (H2) + 20 (`P` margin-top) + 61 (`P`) = **300px**

### Eyebrow `#brxe-gncolh` — "Plan Your Visit Today"
- font-family `Poppins`; font-size `30px`; font-weight `400`; line-height `51px`; letter-spacing `normal`
- color `rgb(108, 93, 61)`; width `309.875px`; height `51px`

### H2 `#brxe-dznvvt` — "Request An Appointment"
- font-family `"Playfair Display"`; font-size `60px`; font-weight `600`; line-height `84px`
- color `rgb(118, 97, 72)`; width `660px`; height `168px` → **wraps to 2 lines** ("Request An" / "Appointment")
- text-align `left`

### `#brxe-sppeyy` / `P`
- font-family `Lato`; font-size `18px`; font-weight `400`; line-height `30.6px`; color `rgb(51, 51, 51)`
- margin `20px 0px 0px`; width `660px`; height `61.188px` (2 lines)

### `#brxe-ybxgne` (row hosting the card)
- width `1405px` (full width minus section's 20px left padding); height `0`; flex-direction `row`; align-items `flex-start`
- children: `#brxe-ipmdeh` w `843px` h `0` (spacer), `#brxe-bvjgcf` w `562px`

### Dark card `#brxe-bvjgcf`
- background-color `rgb(118, 97, 72)`; background-image `none`
- padding `60px 10px 60px 40px`; margin `-520px 0px 0px` → pulled up so its top is **8654** (80px above the section top 8734; it visually bleeds into the previous section's white area)
- width `562px`; height `424.391px`; border-radius **`10px 0px 0px 10px`** (rounded left corners only — right edge is flush with the viewport's right edge at x 1425)
- display `flex`; flex-direction `column`; align-items `flex-start`; gap `40px normal`
- box-shadow `none`; border `0px none`; overflow `visible`

### Card row `#brxe-wglhus` / `#brxe-gkxqgy` / `#brxe-ciikdb`
- width `512px` (= 562 − 40 − 10); height `74.797px`; column; align-items `flex-start`
- Rows at y 8714 / 8829 / 8944 → 115px pitch = 75px row + 40px gap

### Row label `UL.brxe-social-icons > LI.repeater-item.no-link`
- font-family `Poppins`; font-size `24px`; font-weight `600`; line-height `40.8px`; color `rgb(255, 255, 255)`
- display `flex`; flex-direction `row`; gap `24px`; height `40.797px`
- `svg.icon` (child): computed width/height `40px` (attributes are 43×43 / 43×42 / 37×53), overflow `hidden`
- `SPAN` label: same typography, width = label width (195 / 155 / 336 px), starts at x 967 (= 903 + 40 + 24)

### Row value `#brxe-qrkrpt` / `#brxe-ltwrih` / `#brxe-egrsub`
- font-family `Lato`; font-size `20px`; font-weight `400`; line-height `34px`; color `rgb(255, 255, 255)`
- padding `0px 0px 0px 64px` (64 = 40px icon + 24px gap, so the value aligns under the label)
- height `34px`; widths 148.172 / 350.344 / 378.922 px

### Email link `A[href^="mailto:admin"]`
- font-family `Lato`; font-size `20px`; font-weight `400`; line-height `34px`; color `rgb(255, 255, 255)`; text-decoration `none`; border `0px none`; cursor `pointer`; transition `all` (0s)

## States & Behaviors

### Scroll reveals / animations
- **None.** No element inside `#brxe-yurdka` has a non-`none` `animation-name`, no `.brx-animated`, no `data-interactions`. Section computed `transform: none`, `opacity: 1`, `transition: all` (0s), `box-shadow: none`.

### Hover states
- **`admin@advancedsmileclinic.com`:** color `rgb(255,255,255)` → `rgb(255,255,255)`, text-decoration `none` → `none`, background unchanged (measured with real hover). **No visual hover feedback anywhere in this section.**

### Overlap / stacking (important when cloning)
- The brown card is *not* inside the visible text row; it lives in a second full-width row and is pulled up with `margin-top: -520px`, so it starts 80px before the section's own top edge and overlaps the white band between the Zocdoc section and this one.
- The Locations block `#bookonline` (next section) is pulled up `margin-top: -640px` into this section's 800px bottom padding — see `LocationsSection.spec.md`.
- The sticky header (`#brx-header`, fixed, 126px tall) covers the card's top 60px at this scroll position; the card itself is `position: static`.

## Carousel / multi-state content
N/A — no carousel, no tabs, no counters.

## Assets
- **Icons are inline `<svg>` (NOT Font Awesome glyphs)** — `class="icon"`, `fill="none"`, single/white `<path fill="white">`:
  | Label | svg attrs | rendered | content |
  |---|---|---|---|
  | OPENING HOURS | `viewBox="0 0 43 43" width="43" height="43"` | 40×40 | clock face (circle + hands) |
  | CONTACT US | `viewBox="0 0 43 42" width="43" height="42"` | 40×40 | envelope |
  | ONLINE REGISTRATION FORM | `viewBox="0 0 37 53" width="37" height="53"` | 40×40 | ID/clipboard card with person |
  Full path `d` data is stored in `raw/appointment.json` → `inlineSvgIcons`.
- No raster images, no background images, no external font files beyond Google Fonts `Poppins`, `Playfair Display`, `Lato`.

## Text Content (verbatim)
```
Plan Your Visit Today
Request An Appointment
Stay informed with tips, news, and insights to keep your smile healthy and confident. Explore our blog and take your oral health knowledge to the next level.

OPENING HOURS
9am-6pm
CONTACT US
admin@advancedsmileclinic.com          (mailto:admin@advancedsmileclinic.com)
ONLINE REGISTRATION FORM
Fill out our Welcome package online
```

## Responsive Behavior
Not measured (single-viewport assignment). Inferable: the text row is a 660 + 440 flex row (gap 0) inside a 1100px container, and the card row is an 843 + 562 flex row inside a 1405px box — both would need to stack (`flex-direction: column`) below tablet width; the card's `-520px` top margin and right-bleed (`border-radius: 10px 0 0 10px`, flush right edge) are desktop-specific tricks that must be reset on small screens. No media query targeting these IDs was found in the theme stylesheets.
