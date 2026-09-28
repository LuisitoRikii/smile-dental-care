# Recon Brief — advancedsmileclinic.com homepage

You are an EXTRACTION agent. You do NOT write React code. You extract exact visual/behavioral
data from the live site and write auditable spec files.

## Target
- URL: https://advancedsmileclinic.com/
- site-key: `advancedsmileclinic.com-a6cefc1f`
- page-key: `root-8a5edab2`
- artifact root: `docs/research/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/`
- spec dir: `docs/research/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/components/`
- screenshot dir: `docs/design-references/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/`

## Hard rules
1. **Do NOT resize the browser window.** It is already 1440x900. Other agents work in parallel in
   other tabs; resizing breaks everyone. Only ONE agent may do responsive checks (not you, unless
   you were explicitly assigned responsive work).
2. Open your own tab with `chrome-devtools_new_page`. Work only in your tab.
3. Do not modify ANY file outside your assigned spec files and screenshots.
4. Never delete or touch `src/`, `public/`, `scripts/`, or anything under
   `docs/research/smiledentalcare.info-b93df72c/` (that is a different, finished clone).
5. On page load a third-party marketing popup appears after ~3s
   (`#popup-PivXHIKeFzKtfysSbzVG-close-icon`). Close it: click that element.
6. IGNORE third-party widgets: UserWay accessibility button, Zocdoc booking badge/popup,
   Google Maps iframes (record them but do not spec them in depth). We are cloning the page content.

## Page map (top → bottom) at 1440px
| # | Working name | Selector | approx y / height |
|---|---|---|---|
| 1 | header | `#brx-header` (sticky, fixed) | 0 / 126 |
| 2 | hero | `#brxe-eqgodz` (bg video) | 0 / 800 |
| 3 | about | `#brxe-fanfpx` (children `#brxe-roadow`, `#brxe-kvvqkp`) | 880 / 1184 |
| 4 | insurance-logos | `#brxe-cbrvmp` (child `#brxe-peirgl`) | 2144 / 140 |
| 5 | services | `#brxe-elxohg` (`#brxe-rkfuwq` heading, `#brxe-eexxcm` slider) | 2364 / 849 |
| 6 | promotions | `#brxe-chdgmh` (`#brxe-ufhwcb`, `#brxe-anuaxv`) | 3353 / 551 |
| 7 | new-patient-special | `#brxe-cglzwm` (`#bloquen1`, `#bloquen2`, `#bloquen3`, `#brxe-sahkqr`) | 4003 / 399 |
| 8 | video-quote | `#brxe-ohoolt` (`#brxe-oidkvq`, `#conteslider`, `#brxe-sbvdse`, `#brxe-meefsx`) | 4482 / 687 |
| 9 | why-choose-us | `#brxe-bqoeeh` | 5169 / 1791 |
| 10 | one-call | `#brxe-oxjdlg` | 6960 / 769 |
| 11 | testimonials | `#brxe-aafbdt` | 7829 / 657 |
| 12 | dont-wait + zocdoc | `#brxe-qxosdn` + start of `#brx-footer` | 8486 / … |
| 13 | appointment | footer `#brxe-yurdka` | 8734 / 1240 |
| 14 | locations + maps | footer `#brxe-zficox` (`#bookonline`) | 9334 / … |
| 15 | final-cta + footer | footer `#brxe-jisepk` | 10550 / 1352 |

Notes:
- Hidden (h=0) elements `#brxe-gvzbsf`, `#brxe-oiluby`, `#bloquen2`, `#bloquen3`, `#conteslider`
  are `bricks-lazy-hidden` / display:none — inspect them before assuming they're dead (some are
  alternate layouts for other breakpoints).
- Page total height ≈ 11902px at 1440.

## Recipe per section
1. Scroll the section into view (`window.scrollTo(0, y)` inside `chrome-devtools_evaluate_script`,
   wait ~600ms so scroll-reveal animations finish).
2. Take a viewport screenshot → `.../screenshot-dir/<section-name>-1440.png`.
3. Run an extraction script on the section root that walks the DOM (max depth 6) and records for
   every element: tag, id, class, bounding rect (document coords), text content, href/src/alt,
   and computed styles (only non-default values) for: fontSize, fontWeight, fontFamily, lineHeight,
   letterSpacing, color, textTransform, backgroundColor, backgroundImage, backgroundSize,
   backgroundPosition, backgroundAttachment, padding, margin, width, height, display, flexDirection,
   justifyContent, alignItems, gap, gridTemplateColumns, borderRadius, border, boxShadow, overflow,
   position, top/left/right/bottom, zIndex, opacity, transform, transition, textAlign, objectFit,
   objectPosition, cursor, whiteSpace.
   Save the raw JSON with `filePath` to
   `.../artifact-root/raw/<section-name>.json` so nothing is lost.
4. Condense the important values into the spec file yourself (do not paste the entire JSON).
5. Extract ALL text verbatim (`textContent`), including items inside carousels — click carousel
   arrows / advance slides to capture every slide's content.
6. Record states & behaviors (see below).

## Behaviors you MUST document
- **Scroll reveals:** elements have Bricks `brx-animated` + animate.css classes. For each animated
  element record: the exact `animation-name`/duration/delay (read `getComputedStyle(el).animation`
  *while it is still off-screen*, before it triggers), and the trigger (IntersectionObserver /
  Bricks "in view" animation). Note the visible end state.
- **Hover:** use `chrome-devtools_hover` on buttons/links/cards, then re-read computed styles and
  record before → after for color, background, transform, box-shadow, and the transition CSS.
- **Carousel/slider:** Splide-based. Record: perView, gap, arrows (position/style), autoplay,
  speed, breakpoints, whether it loops, drag behavior, and every slide's content.
- **Sticky/fixed:** header is `position: fixed` + `.brx-sticky`; it gains `.scrolling` past ~50px:
  `#infoh` collapses (height 52→0, opacity 1→0) and `#menuh` grows to 126.75px with white bg and
  `box-shadow: rgba(0,0,0,0.1) 0 2px 8px`, nav links change color white → rgb(118,97,72).
  Confirm the threshold and transition CSS (`0.4s`).
- **Video backgrounds / lazy-load:** hero uses `<video autoplay loop muted>` with poster; check
  `object-fit`, overlay gradients, and whether other sections use bg video.
- **Animated numbers/counters:** check for counters (e.g. prices) — record start/end.

## Spec file template
Write `.../components/<ComponentName>.spec.md` with these sections (fill every one; write "N/A"
only after checking):

```markdown
# <ComponentName> Specification

## Overview
- **Target file:** `src/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/<ComponentName>.tsx`
- **Screenshot:** `docs/design-references/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/<name>-1440.png`
- **Interaction model:** static | hover | click-driven | scroll-driven | time-driven

## DOM Structure
(hierarchy, what contains what, ids/classes worth keeping)

## Computed Styles (exact values from getComputedStyle)
### Container
- ... every relevant property with exact values
### <child 1>
...

## States & Behaviors
### <name>
- **Trigger:** ...
- **State A:** ...
- **State B:** ...
- **Transition:** ...
- **Implementation approach:** ...

### Hover states
- **<element>:** <prop>: <before> → <after>, transition: <value>

## Carousel / multi-state content
(all slides, all tabs, verbatim)

## Assets
(local-agnostic: original absolute URLs + alt + intrinsic size + how it is cropped/fitted)

## Text Content (verbatim)

## Responsive Behavior
(if you were not assigned responsive work: state "not measured" and describe what you can infer
from CSS media queries you read in the page's stylesheets)
```

## Style rules for specs
- Every CSS value must come from `getComputedStyle()`, never guessed.
- Text must be copy-pasted verbatim from the site (English, keep typos).
- Under ~200 lines per spec. If a section is huge, split it into 2-3 spec files
  (e.g. `WhyChooseUs-Cards.spec.md` + `WhyChooseUs-Wrapper.spec.md`).

## Report back
Finish with a short summary: spec files written, screenshots written, raw JSON files written,
behaviors discovered, and anything surprising.
