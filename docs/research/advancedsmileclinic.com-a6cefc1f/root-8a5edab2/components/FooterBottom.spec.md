# FooterBottom Specification (BLOGS + copyright)

## Overview
- **Target file:** `src/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/FooterBottom.tsx`
- **Screenshot:** `docs/design-references/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/finalcta-bottom-1440.png` (also visible in `finalcta-1440.png`)
- **Interaction model:** static + click-driven links (no hover styling exists on these links)
- **Live geometry:** two containers inside `section#brxe-jisepk` (brown band):
  - `#brxe-tjdwpw` (BLOGS) 11342 → 11794, h 451.78
  - `#brxe-xvedjt` (copyright) 11793 → 11902, h 109 — ends exactly at the page bottom (11902)

## DOM Structure
```
DIV#brxe-tjdwpw .brxe-container             (11342, 1100×451.78, margin 60 162.5 0, padding 0 20 40, gap 40, column, align/justify center)
├─ DIV#brxe-hrojhr .brxe-block              (11342, 1060×49, align-items center)
│  └─ H2#brxe-bvjvtn .brxe-heading          "BLOGS"
└─ DIV#brxe-zxowcz .brxe-block              (11431, 1060×322.78)
   └─ DIV#brxe-lrhzye .brxe-posts           (1060×322.78, overflow hidden)
      └─ UL.bricks-layout-wrapper           (display grid, 1 col, gap 30)
         ├─ LI.bricks-layout-item.repeater-item   (11431, 1060×87.59)
         │  └─ DIV.bricks-layout-inner > DIV.content-wrapper
         │     ├─ H3.dynamic[data-field-id="088a58"]
         │     │  └─ DIV.post-item (grid 8px + 1fr, gap 8)
         │     │     ├─ DIV.icon-wrap > I.fas.fa-circle.icontblog
         │     │     └─ DIV.title-wrap > A[href=<post url>]  (aria-label "Read more about …")
         │     └─ DIV.dynamic[data-field-id="ylzlgb"]
         │        └─ A.read-more-link > I.fas.fa-arrow-right-long.icon + " Read More"
         ├─ LI … (11548)  ← post 2
         ├─ LI … (11666)  ← post 3
         └─ LI.bricks-isotope-sizer.brx-query-trail  (position absolute, top -99999px — ignore)

DIV#brxe-xvedjt .brxe-container             (11793, 1100×109, margin 0 162.5, padding 20 0, border-top 1px white, align/justify center)
└─ DIV#brxe-ngtswn .brxe-text               (11814, 819×68, centered, padding 0 20)
   └─ P                                     (779×68, text-align center)
      ├─ "Copyright © 2025 Advanced Smile Clinic , All rights reserved."
      ├─ <BR>
      ├─ <span style="text-decoration: underline;"><a href="/privacy-policy/">Privacy Policy</a></span>
      ├─ &nbsp;|&nbsp;
      ├─ <span underline><a href="/accessibility-statement/">Accessibility&nbsp;</a></span>  |&nbsp;
      ├─ <span underline><a href="/disclaimer/">Disclaimer</a></span>  | Website designed by
      └─ <a href="https://www.geekdentalmarketing.com/" target="_blank" rel="noopener"><strong>Geek Dental Marketing®.</strong></a>
```

## Computed Styles (exact values from getComputedStyle)

### BLOGS container `#brxe-tjdwpw`
- width `1100px`; height `451.781px`; margin `60px 162.5px 0px`; padding `0px 20px 40px`
- display `flex`; flex-direction `column`; align-items `center`; justify-content `center`; gap `40px`
- Breakpoints: `≤991px → padding-inline 30px`; `≤767px → row-gap 40px`

### `#brxe-hrojhr` + `H2#brxe-bvjvtn`
- block: width `1060px`; height `49px`; `align-items: center` (centers the heading horizontally)
- H2: font-family `Poppins`; font-size `35px`; font-weight `500`; line-height `49px`; color **`rgb(255, 255, 255)`** (`var(--bricks-color-b92a3f)`); width `113.234px`

### Posts grid `#brxe-lrhzye`
- width `1060px` (`width: 100%` in CSS); height `322.781px`; `overflow: hidden`
- `UL.bricks-layout-wrapper`: `display: grid`; `grid-template-columns: 1060px` (1 column, `--columns: 1`, `--gutter: 30px`); `gap: 30px`; `list-style: none`
- `LI.bricks-layout-item`: width `1060px`; height `87.594px`; display `grid`; line-height `24px`; pitch between rows **117.6px** (87.59 + 30 gap)
- `DIV.bricks-layout-inner`: `overflow: hidden`; `background-size: cover`; `background-position: 50% 50%` but `background-image: none` → **no thumbnails**
- 4th child `LI.bricks-isotope-sizer.brx-query-trail`: `position: absolute; top: -99999px` (Isotope sizer — do not render)

### Blog title `H3.dynamic[data-field-id="088a58"]`
- font-family `Poppins`; font-size `20px`; font-weight **`400`**; line-height `28px`; color `rgb(255, 255, 255)`
- margin `20px 0px 14px`; text-align `left`; widths 631.5 / 845.97 / 856.98 px
- `.post-item`: `display: grid`; `gap: 8px`; `grid-template-columns: 8px <rest>` → 8px dot column + title
- `I.fas.fa-circle.icontblog`: font-size `8px`, `"Font Awesome 6 Solid"`, `::before` `"\uf111"` (**U+F111**), color white
- `DIV.title-wrap > A`: color `rgb(255,255,255)` (inherited), `cursor: pointer`, `aria-label="Read more about <title>"`

### Read More `A.read-more-link`
- font-family `Poppins`; font-size `16px`; font-weight `500`; line-height `25.6px`; color `rgb(255, 255, 255)`
- wrapper `DIV.dynamic[data-field-id="ylzlgb"]`: `padding-left: 14px`; `margin-right: 0`
- `I.fas.fa-arrow-right-long.icon`: font-size `16px`, `"Font Awesome 6 Solid"`, `::before` `"\uf178"` (**U+F178**) → renders as `→`
- Text node in source: `"   <i …></i> Read More "` (leading spaces → renders as `→ Read More`)
- Hover: **no rule** (verified: no `a:hover` / `.read-more-link:hover` anywhere in the stylesheets) → no change

### Copyright `#brxe-xvedjt`
- width `1100px`; height `109px`; margin `0px 162.5px`; padding `20px 0px`
- **border-top `1px solid rgb(255, 255, 255)`** (rule: `border-top: 1px solid var(--bricks-color-b92a3f)`)
- display `flex`; align-items `center`; justify-content `center`
- `#brxe-ngtswn`: font-family `Lato`; font-size `20px`; font-weight `500`; line-height `34px`; color `rgb(255, 255, 255)`; `text-align: center`; padding `0 20px`; width `819.266px`; height `68px` (2 lines)
- `P`: same typography; width `779.266px`; height `68px`
- Links `#brxe-ngtswn a`: color `rgb(255,255,255)`, `font-size: inherit`, `cursor: pointer`; wrapped in `<span style="text-decoration: underline">` (inline, so they are underlined)
- `STRONG`: font-weight `700`
- Breakpoint: `≤478px → #brxe-ngtswn { font-size: 16px }`

## States & Behaviors
- **Scroll reveals:** none (no animations, no `.brx-animated`, no `data-interactions` in this subtree).
- **Hover:** none defined for blog titles, Read More, or copyright links.
- **Isotope:** the posts element is a Bricks Posts/Isotope query (`--columns: 1`, sizer item present) but it renders as a plain 1-column stacked grid — no filtering/pagination controls are present; only 3 posts are queried.

## Carousel / multi-state content
N/A — 3 static posts (all captured).

## Assets
- No images (blog thumbnails are not rendered — `.bricks-layout-inner` has `background-image: none`).
- Icons: `i.fas.fa-circle.icontblog` (U+F111, 8px), `i.fas.fa-arrow-right-long.icon` (U+F178, 16px), both `"Font Awesome 6 Solid"` and white.

## Text Content (verbatim)
```
BLOGS
Root Canal vs Tooth Extraction in Coral Gables and Hialeah, FL
   href: https://advancedsmileclinic.com/root-canal-vs-tooth-extraction-in-coral-gables-and-hialeah-fl/
   aria-label: "Read more about Root Canal vs Tooth Extraction in Coral Gables and Hialeah, FL"
What Is Root Canal Therapy and When Is It Needed? in Coral Gables and Hialeah, FL
   href: https://advancedsmileclinic.com/what-is-root-canal-therapy-and-when-is-it-needed-in-coral-gables-and-hialeah-fl/
   aria-label: "Read more about What Is Root Canal Therapy and When Is It Needed? in Coral Gables and Hialeah, FL"
Some Signs That Indicate You Should Visit the Dentist in Coral Gables and Hialeah, FL
   href: https://advancedsmileclinic.com/some-signs-that-indicate-you-should-visit-the-dentist-in-coral-gables-and-hialeah-fl/
   aria-label: "Read more about Some Signs That Indicate You Should Visit the Dentist in Coral Gables and Hialeah, FL"
(each row is followed by "→ Read More" pointing at the same URL)

Copyright © 2025 Advanced Smile Clinic , All rights reserved.
Privacy Policy | Accessibility | Disclaimer | Website designed by Geek Dental Marketing®.
```
Exact inner HTML of the copyright paragraph:
```
Copyright © 2025 Advanced Smile Clinic , All rights reserved.<br><span style="text-decoration: underline;"><a href="/privacy-policy/">Privacy Policy</a></span>&nbsp;|&nbsp;<span style="text-decoration: underline;"><a href="/accessibility-statement/">Accessibility&nbsp;</a></span>|&nbsp;<span style="text-decoration: underline;"><a href="/disclaimer/">Disclaimer</a></span> | Website designed by <a href="https://www.geekdentalmarketing.com/" target="_blank" rel="noopener"><strong>Geek Dental Marketing®.</strong></a>
```
Note the irregular spacing on the live site: `Accessibility ` has a trailing `&nbsp;`, the separators are `&nbsp;|&nbsp;`, `|&nbsp;` and ` | ` (plain spaces) — copy verbatim.

## Responsive Behavior
Not measured (single-viewport assignment); from media queries: `--columns` stays `1` at 991/767/478 (never becomes multi-column); at ≤767px Read More gets `padding-left: 6%`; at ≤478px both the title and Read More become `font-size: 16px` and the copyright becomes `16px`.
