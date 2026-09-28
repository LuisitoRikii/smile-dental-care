# RESPONSIVE RECON — advancedsmileclinic.com homepage (`root-8a5edab2`)

All numbers below are **measured live** (`getBoundingClientRect()` / `getComputedStyle()`), not inferred.
Raw data: `raw-responsive/w-<width>.json` (same schema as before, now with `verifiedCw`,
`conts` (container layout per section) and `headerState`), stylesheet queries: `raw-responsive/media-rules.json`.

## How this was measured (audit trail)

1. One dedicated tab, `chrome-devtools_new_page` → `https://advancedsmileclinic.com/`.
2. Per width: `resize_page(w, 900)` → **immediately re-read `document.documentElement.clientWidth`**;
   if it did not match, retried before any measurement. The verified value is stored as `cw`/`verifiedCw`
   in every `w-*.json`.
3. Marketing popup `#popup-PivXHIKeFzKtfysSbzVG-*` closed on first appearance (overlay `display:none` after).
4. Scroll pass top→bottom in **700px steps with 400ms pauses**, then back to `0` (triggers Bricks lazy-load,
   `brx-animated` reveals and Splide init) — measurements taken only after that pass.
5. Full-page screenshot per width into `docs/design-references/…/responsive-<width>.png`
   (DOM nudged immediately before every capture; each PNG's pixel dimensions were verified to equal the
   measured `clientWidth × scrollHeight`, so no capture is stale).

| target width | verified `clientWidth` | scrollbar | page `scrollHeight` | screenshot (W×H) |
|---:|---:|---:|---:|---|
| 1440 | **1425** | 15 | 11902 | 1425 × 11902 |
| 1280 | **1265** | 15 | 11960 | 1265 × 11960 |
| 1024 | **1009** | 15 | 12524 | 1009 × 12524 |
| 991 (extra) | **976** | 15 | 14099 | — |
| 768 | **753** | 15 | 14734 | **782** × 14734 (see §8) |
| 480 | **465** | 15 | 17718 | 465 × 17718 |
| 390 | **375** | 15 | 17845 | 375 × 17845 |
| 375 | **360** | 15 | 17973 | 360 × 17973 |

> **Method note:** macOS Chrome cannot shrink its window below **500px**, so 480/390/375 were captured with
> CDP viewport emulation (`Emulation.setDeviceMetricsOverride`, `deviceScaleFactor 1`, `isMobile false`).
> Verified `clientWidth` is identical in kind to a real window (width − 15px classic scrollbar), and media
> queries/Splide both read the emulated viewport, so the numbers are directly comparable.
> Window was restored to **1440×900** at the end (verified `innerWidth 1440 / clientWidth 1425`).

Extra captures: `responsive-390-mobile-header.png`, `responsive-390-menu-drawer.png` (hamburger drawer open).
Older `responsive-375-mobile-header.png` / `responsive-375-menu-drawer.png` from the previous attempt were kept.

---

## 1. Per-width section table (document-space `y` / `height`)

| section | 1440 | 1280 | 1024 | (991) | 768 | 480 | 390 | 375 |
|---|---|---|---|---|---|---|---|---|
| header `#brx-header` | 0/126 | 0/126 | 0/126 | 0/110 | 0/110 | 0/134 | 0/151 | 0/165 |
| hero `#brxe-eqgodz` | 0/800 | 0/800 | 0/800 | 0/720 | 0/720 | 0/720 | 0/675 | 0/675 |
| about `#brxe-fanfpx` | 880/1184 | 880/1184 | 880/1296 | 800/1706 | 800/1924 | 800/2241 | 755/2237 | 755/2264 |
| insurance `#brxe-cbrvmp` | 2144/140 | 2144/140 | 2256/140 | 2586/140 | 2804/140 | 3101/140 | 3032/**280** | 3059/**280** |
| services `#brxe-elxohg` | 2364/849 | 2364/849 | 2476/849 | 2806/915 | 3024/915 | 3301/922 | 3352/890 | 3379/890 |
| promotions `#brxe-chdgmh` | 3353/551 | 3353/581 | 3465/661 | 3861/959 | 4078/990 | 4303/1283 | 4322/1222 | 4349/1276 |
| new-patient `#brxe-cglzwm` | 4003/399 | 4034/399 | 4226/459 | 4920/460 | 5168/460 | 5686/675 | 5644/884 | 5725/884 |
| video-quote `#brxe-ohoolt` | 4482/687 | 4513/687 | 4764/687 | 5459/684 | 5708/684 | 6440/684 | 6607/680 | 6689/680 |
| why-choose-us `#brxe-bqoeeh` | 5169/1791 | 5199/1819 | 5451/1969 | 6143/2799 | 6391/2798 | 7124/3110 | 7287/3149 | 7369/3178 |
| one-call `#brxe-oxjdlg` | 6960/769 | 7018/769 | 7419/769 | 8942/748 | 9189/748 | 10234/958 | 10436/1160 | 10547/1160 |
| testimonials `#brxe-aafbdt` | 7829/657 | 7887/657 | 8288/755 | 9790/863 | 10037/978 | 11292/989 | 11696/982 | 11807/982 |
| dont-wait `#brxe-qxosdn` | 8486/48 | 8544/48 | 9044/48 | 10653/48 | 11014/48 | 12281/48 | 12678/48 | 12788/48 |
| appointment `#brxe-yurdka` (footer) | 8734/1240 | 8792/1240 | 9292/1271 | 10901/1243 | 11262/1273 | 12409/1659 | 12806/1591 | 12916/1591 |
| locations `#brxe-zficox` (footer) | 9974/636 | 10032/636 | 10562/670 | 12144/666 | 12536/819 | 14069/1707 | 14397/1571 | 14507/1571 |
| final-cta `#brxe-jisepk` (footer) | 10550/1352 | 10608/1352 | 11172/1352 | 12750/1349 | 13295/1439 | 15716/2002 | 15908/1937 | 16018/1955 |
| footer `#brx-footer` | 8534/3368 | 8592/3368 | 9092/3433 | 10701/3398 | 11062/3671 | 12329/5389 | 12726/5119 | 12836/5137 |
| **document height** | **11902** | **11960** | **12524** | *14099* | **14734** | **17718** | **17845** | **17973** |

Header breakdown (computed):

| | 1440/1280/1024 | 991/768 | 480 | 390 | 375 |
|---|---|---|---|---|---|
| `#infoh` (top bar) | 52 | 45 | 62 | 62 | 79 |
| `#menuh` (desktop nav) | 74 | 65 | **none** | **none** | **none** |
| `#hedermovil` (mobile bar) | **none** | **none** | 72 | 89 | 86 |
| total | 126 | 110 | 134 | 151 | 165 |
| logo box (`#logocontenedor` / `#brxe-pndswy`) | 214×167 | 146×106 (991) / 113×82 (768) | 140×72 | — | — |

---

## 2. Per-section narrative (what changes, at which exact breakpoint)

### header
- **≥992:** fixed `#brx-header` = `#infoh` (grey `rgb(164,153,132)`, `padding 14px 20px`, `justify-content: space-between`)
  over `#menuh` (left nav `#brxe-iaaklr` + centred `#logocontenedor` overhanging the bar + right nav `#brxe-gwhauj`, `gap 30px`).
  Total 126px; `#hedermovil` `display:none`.
- **991/768:** `#infoh` 52→45, `#menuh` 74→65 (total **110**); left nav block `#brxe-iaaklr` `flex-direction: column → row`;
  logo shrinks 214×167 → 146×106 (991) → 113×82 (768). Nav link font `#menupart1/#menupart2` **15px → 12px**
  (CSS `@media (min-width:991px) and (max-width:1200px)`), header phone `#brxe-nfmpvj`/`#brxe-kklsnf` **18px → 16px**
  (`@media (min-width:992px) and (max-width:1080px)`).
- **≤767 (verified: 768 = desktop, 767 = mobile):** `#menuh` → `display:none`, `#hedermovil` → `display:flex`
  (`flex-direction: row; align-items:center; justify-content:center`). Mobile bar = logo `#brxe-pndswy` (140×72) +
  location switch `#brxe-slromy` (HIALEAH / CORAL GABLES, `flex-direction: column → row`) + hamburger `#brxe-gkgnsd`
  (`#hamburgermovil`, 40×16 white bars — `--bricks-color-b92a3f` = `#ffffff`; `.scrolled` turns them `rgb(118,97,72)`).
  `#infoh` stays visible but grows as its two
  contact columns wrap (45 → 62 → 79px). Total header 134 / 151 / 165px.
- **Mobile drawer (screenshot `responsive-390-menu-drawer.png`):** `.bricks-mobile-menu-wrapper.left` slides in
  (`transform: none`, `x = 0`, `display:flex`), **width 95% of viewport at ≤478** (75% at 479–767),
  overlay `.bricks-mobile-menu-overlay` `display:block; opacity:1` (`rgba(164,153,132,0.7)` per CSS),
  `body` gains **`no-scroll`** (scrollbar removed → `clientWidth` jumps 375 → 390 while open),
  menu items 60px tall, Lato 700 16px uppercase **white** (`--bricks-color-b92a3f: #ffffff`), sub-menus accordion.
- Desktop sticky `.scrolling` behaviour is unchanged at all widths (media rules: `#infoh.scrolled {max-height:0; opacity:0}`,
  `#menuh.scrolled {background:#fff; box-shadow 0 2px 8px rgba(0,0,0,.1); animation slideDown .4s}`).

### hero (`#brxe-eqgodz`)
- Height is viewport-based below desktop: base `height: 800px` → **`80vh` (720px @900) at ≤991** →
  **`75vh` (675px @900) at ≤478**.
- Section padding `0 20px` (base) → **`0 30px 80px` + `justify-content: flex-end` at ≤991** → **`0 20px` at ≤478**.
- Inner content column `#brxe-dczpgr` is a Bricks container (`width: 1100px; max-width: 100%`) →
  measured 1100 → 969 → 916 → 693 → 405 → 335 → 320px.
- `#brxe-sxoacm` (two phone links) `flex-direction: row → column` at **≤767**.
- H1 steps: 70 → 60 (≤991) → 45 (≤767) → 35 (≤478).

### about (`#brxe-fanfpx`)
- Two stacked containers: `#brxe-roadow` (heading block) + `#brxe-kvvqkp` (`gap: 40px normal`, `column`).
- `#brxe-kvvqkp` **`row → column` at ≤991** → the 3 feature cards stack: section height
  1184 (1440) → 1296 (1024, pure text reflow) → **1706 (991)** → 1924 (768) → 2241 (480) → 2237/2264 (390/375).
- Vertical divider `#brxe-lsflml` (`brxe-divider vertical`) `flex → none` at **≤767**.
- Section side padding 20px → **30px at ≤991** → **20px at ≤478**.

### insurance (`#brxe-cbrvmp`)
- Section has a **fixed height**: inner `#brxe-peirgl` `height: 140px` (base) → **`height: 280px` at ≤478**,
  with `justify-content: center` (the 140px slider is vertically centred in the 280px box at ≤478).
- Section margins `80px 0` (base) → **60px at ≤767** → **40px at ≤478** (affects the y positions above).
- Container `#brxe-peirgl` = `width: 1100px; max-width: 100%` → measured 1100 / 1100 / 1009 / 976 / 753 / 465 / 375 / 360.
- Carousel `#brxe-ccgjmd`: `gap 40px` (slide `margin-right:40px`), autoplay 3000ms, speed 800, loop, **no arrows/pagination**.
  Visible slides / slide width: 3×267 (1440) · 3×267 (1280) · 3×242 (1024) · 3×234 (991) · **3×174 (768)** · **2×166 (480)** · **1×263 (390)** · 1×252 (375).

### services (`#brxe-elxohg`)
- Heading block `#brxe-rkfuwq` keeps `padding: 80px 0 360px` at every width (the big bottom padding is what
  lets the slider overlap it — unchanged).
- Section height 849 → 915 at **≤991** (type steps), 922 at 480, 890 at ≤478.
- Carousel `#brxe-ekklrt` (in container `#brxe-eexxcm`, `width:1100px; max-width:100%`): arrows visible (`display:flex`),
  `gap 0`, `autoHeight`, autoplay **off**, loop, speed 400.
  Visible slides / slide width: 3×367 (1440/1280) · 3×336 (1024) · **2×488 (991)** · **2×377 (768)** · **1×465 (480)** · 1×375 · 1×360.

### promotions (`#brxe-chdgmh`)
- Section `flex-direction: row → column` at **≤991** (`column-gap: 50px` → `row-gap: 50px`), height 551 → 959 (991);
  `margin-top: 140px` → **0 at ≤767** while `#brxe-elxohg` (services) gains `margin-bottom: 80px` at ≤767
  (measured gap above promotions: 140px at 1440/991/768, 80px at 480/390/375).
- Inside, `#brxe-ufhwcb` (image/price column) and `#brxe-anuaxv` (text/CTA column) stay `row` until
  **≤767, where they become `column`** (height 990 at 768 → 1283 at 480).
- `#brxe-ajjhfm`, `#brxe-vxjdil`, `#brxe-ggtgey`, `#brxe-emfrnx` (inner rows) also flip `row → column` at ≤767.
- `max-width: 1450px` on the section (never reached: viewport ≤1440).

### new-patient-special (`#brxe-cglzwm`)
- `#bloquen1` (visible offer) + `#bloquen2` + `#bloquen3` (`class="bloque"`, **`max-height:0; overflow:hidden`** —
  collapsed at *every* measured width: INVISALIGN 500 / IN-OFFICE WHITENING 350 are in the DOM but never shown).
- `#bloquen1 > #brxe-qxphmt` (the NEW PATIENT SPECIAL card) `flex-direction: row → column` at **≤478**
  → section height 675 (480) → **884 (390/375)**.
- `#brxe-sahkqr` (3 stacked bar/CTA) keeps 116px height at all widths.
- `#brxe-jtbqsn` ("BOOK ONLINE" container) is `height: 0` at all widths.

### video-quote (`#brxe-ohoolt`) — desktop/mobile duplicate pair
- `#brxe-oidkvq` (desktop tag marquee, Splide `#brxe-krkjuo`) is `display:flex` **≥992** and `none` **≤991**;
  `#conteslider` (mobile marquee, Splide `#brxe-yqroih`) is the exact inverse. **Verified boundary: 992 = oidkvq
  flex / conteslider none; 991 = oidkvq none / conteslider flex.**
- Marquee: speed 40000ms, autoplay 4000ms, loop, no arrows; slide width 475 (1440) / 422 (1280) / 336 (1024) on
  desktop; 488 (991) / 377 (768) / 465 (480) / 375 / 360 on mobile. Container height 54px (desktop) vs 51px (mobile).
- `#brxe-sbvdse` (video/quote block) `padding: 0 60px 80px` → **`0 40px 80px` at ≤767** → **`0 10px 80px` at ≤478**
  (measured 60px at 768, 40px at 480, 10px at 390); height fixed at 600px everywhere.

### why-choose-us (`#brxe-bqoeeh`)
- `padding: 200px 0 100px` → **`140px 0 100px` at ≤767** (measured 200 at 768, 140 at 480); background `rgb(246,244,242)` always.
- `#brxe-qtkukd` (text+image row) `row → column` at **≤991**; within it **`#brxe-xqvvfb` ↔ `#brxe-ijnpve` swap at ≤991**
  (`xqvvfb` `flex → none`, `ijnpve` `none → flex`, and its image `#brxe-grdcna` `display: inline → block`).
- `#brxe-sanddn` (phone pair) `row → column` at ≤991; `#brxe-kltkpi`... see testimonials.
- Section height 1791 → 1969 (1024) → **2799 (991)** → 2798 (768) → 3110 (480) → 3178 (375).

### one-call (`#brxe-oxjdlg`)
- Single inner container `#brxe-ovtvxy` (`width:1100px; max-width:100%`, base `padding: 140px 0 80px`).
- **≤991:** `padding: 140px 30px 80px`, height 769 → 748. **≤767:** `padding-bottom: 40px`. **≤478:** `padding-right/left: 20px`
  (measured `140px 30px 40px` at 480, `140px 20px 40px` at 390), height 958 (480) → 1160 (390/375).
- Contains the testimonial Splide `#brxe-rdzrnr` (`#brxe-ovtvxy`), see §6.

### testimonials (`#brxe-aafbdt`)
- `#brxe-eivicm` (heading block) `row → column` at **≤767**; `#brxe-kltkpi` (quote text) `row → column` at **≤991**.
- Height 657 (≥1024) → 755 (1024) → 863 (991) → 978 (768) → 989/982 (≤478).
- Heading H2 70 → 60 (≤991) → 45 (≤767) → 35 (≤478); quote H3 33 → **25 at ≤478**.

### appointment / locations / final-cta (footer)
- Appointment `#brxe-yurdka`: base `padding: 100px 0 800px 20px; margin-top: 200px` → **≤991** `padding-left: 30px` →
  **≤767** `padding: 100px 20px 740px` **and `margin-top: 200px → 80px`** (measured: 768 keeps 800px/200px, 480 has 740px/80px).
  `#brxe-wivbui` (form) and `#brxe-ybxgne` (hours/contact) `row → column` at **≤767**;
  their inner `#brxe-iszmrg` / `#brxe-ipmdeh` become `none` at ≤767 (hidden spacers/dividers).
  Height 1240 → 1659 (480) → 1591 (390).
- Locations `#brxe-zficox` / `#bookonline`: inner padding `100px 40px 240px` → `…30px…` (≤991) → `100px 10px 240px` (≤478);
  `#brxe-rhosnb` and `#brxe-dnadfp` (location cards row) `row → column` at **≤767** → section height 636 → 819 (768) → 1707 (480).
  CSS also sets `.cardMaps { flex: 0 0 54% }` for 991–1200 (56% above 1200).
- Final-cta `#brxe-jisepk`: `#brxe-vjcoge` (DENTAL SERVICES list) `row → column` at **≤767**;
  blog H3 20px → **16px at ≤478**; section height 1352 → 1439 (768) → 2002 (480) → 1955 (375).

---

## 3. Breakpoint summary

Site stylesheets only contain three Bricks breakpoints — **`max-width: 991px` (155 rules), `767px` (178 rules),
`478px` (179 rules)** — plus two narrow range queries (see 1100). `1279` exists **only inside Splide's
`data-splide` `breakpoints`**. Measured diffs (`raw-responsive` trees): `1440 vs 1280 → 0` layout changes,
`1280 vs 1024 → 0`, `1024 vs 991 → 12`, `768 vs 480 → 20`, `480 vs 390 → 3`.

### 1279 (≤1279)
- **No CSS media query.** Nothing in the DOM changes direction/visibility between 1440 and 1280 (0 diffs);
  differences there are pure fluid reflow of the 1100px content column.
- Splide re-declares (identical) options: insurance `height 140 / gap 40 / perPage 3 / speed 800`,
  services `perPage 3`, marquees `perPage 3`, testimonials `height 40vh / speed 500`.
  Practical effect: none at these widths (same values as the desktop defaults).

### 1100 (content max-width + the 1200/1080 range queries)
- **`width: 1100px; max-width: 100%`** on every content container (`#brxe-peirgl`, `#brxe-eexxcm`, `#brxe-ovtvxy`,
  `#bookonline`, `#brxe-roadow`, `#brxe-sahkqr`, `#brxe-reinkj`, `#brxe-hvnpwj`, …). Above ~1140 viewport they sit
  centred at 1100px (x = 163 at 1440, x = 83 at 1280); below that `max-width:100%` wins and they become
  viewport-wide minus gutters (1009 at 1024 … 320 at 375).
- `@media (min-width:991px) and (max-width:1200px)`: `#menupart1/#menupart2 { font-size: 12px }` (15px above),
  `.cardMaps { flex: 0 0 54% }` (56% above). **Verified:** 1024 → 12px/54%, 1280 → 15px/56%.
- `@media (min-width:992px) and (max-width:1080px)`: header phone `#brxe-nfmpvj` / `#brxe-kklsnf` `18px → 16px`.
  **Verified:** 1024 → 16px, 1280 → 18px.

### 991 (the layout breakpoint — 12 verified changes)
`#brxe-iaaklr` column→row · `#brxe-kvvqkp` row→column · `#brxe-wgyxxm` row→column · `#brxe-chdgmh` row→column ·
`#brxe-oidkvq` flex→**none** · `#conteslider` none→**flex** · `#brxe-qtkukd` row→column · `#brxe-xqvvfb` flex→**none** ·
`#brxe-ijnpve` none→**flex** · `#brxe-grdcna` inline→block · `#brxe-sanddn` row→column · `#brxe-kltkpi` row→column.
Plus: header 126→110 (`#infoh` 45 / `#menuh` 65), hero 800→720 with `padding 0 30px 80px`, section side gutters
20→30px, services slider **3 → 2** slides, all display type steps (70→60, 35→30, 60→50 appointment, 24→22 video-quote h3),
insurance/services/about/promotions section heights all grow.
**Exact boundary verified:** at 992 `#brxe-oidkvq` is `flex` + services slider shows 3 slides; at 991 it is `none` + 2 slides.

### 767 (mobile breakpoint — 20 verified changes)
`#menuh` flex→**none** · `#hedermovil` none→**flex** (the header swap) · `#brxe-slromy` column→row ·
`#brxe-sxoacm` row→column · `#brxe-lsflml` flex→**none** · `#brxe-ufhwcb`/`#brxe-anuaxv`/`#brxe-ajjhfm`/`#brxe-vxjdil`/
`#brxe-ggtgey`/`#brxe-emfrnx` row→column (promotions stack) · `#brxe-eivicm` row→column · `#brxe-wivbui`/`#brxe-ybxgne`
row→column (+ `#brxe-iszmrg`, `#brxe-ipmdeh` flex→none) · `#brxe-ruoleo` flex→**none** + `#brxe-wjodkx` none→**flex** ·
`#brxe-rhosnb`/`#brxe-dnadfp` row→column · `#brxe-vjcoge` row→column.
Plus: insurance slider **3 → 2** slides, services slider **2 → 1**, mobile marquee **2 → 1** (speed 2000),
hamburger bars forced to 40px (white; `#hamburgermovil .bricks-mobile-menu-toggle`), drawer wrapper 75% wide,
type steps 60→45 / 30→25 / 50→45,
`#brxe-bqoeeh` padding-top **200 → 140**, `#brxe-yurdka` `padding-bottom 800 → 740` + `margin-top 200 → 80`,
`#brxe-ovtvxy` padding-bottom **80 → 40**, `#brxe-sbvdse` side padding **60 → 40**, `#brxe-elxohg` `margin-bottom: 80px`,
`#brxe-chdgmh` `margin-top 140 → 0`, `#brxe-cbrvmp` margins **80 → 60**.
**Exact boundary verified:** 768 = desktop header (`#menuh` flex, `#hedermovil` none), 767 = mobile header.

### 478 (small-phone breakpoint — 3 tree changes + many style changes)
Tree: `#brxe-qxphmt` row→column, `#brxe-asvdso` row→column, `#brxe-daszcp` row→column (new-patient offer card stacks).
Styles/geometry: insurance slider **2 → 1** slide and `#brxe-peirgl` height **140 → 280**; hero **80vh → 75vh (675px)**;
gutters 30 → 20px (`about`, `hero`, `#brxe-ovtvxy`, `#brxe-ufhwcb`) and 40/30 → 10px (`#bookonline`);
`#brxe-sbvdse` side padding **40 → 10**; `#brxe-cbrvmp` margins **60 → 40**; hamburger drawer 75% → **95%**;
`#brxe-wjodkx` width 80% → 90% / `padding 12px 10px`; `#brxe-ruoleo`/`#brxe-oiluby` width/padding tweaks;
type steps 45→35 (h1, display h2, appointment h2), 25→20 (eyebrow h2 + about h3), 33→25 (testimonial quote h3),
20→16 (blog h3).

---

## 4. Fonts / type scale (computed `font-size` / `line-height`)

| element (sample text) | family / weight | 1440 | 1280 | 1024 | 991 | 768 | 480 | 390 | 375 |
|---|---|---|---|---|---|---|---|---|---|
| H1 hero “CREATING BEAUTIFULSMILES” | Playfair Display 600 | 70/98 | 70/98 | 70/98 | **60/84** | 60/84 | **45/63** | **35/49** | 35/49 |
| H2 eyebrow “Your Trusted Dentists…” | Poppins 400 | 35/49 | 35/49 | 35/49 | **30/42** | 30/42 | **25/35** | **20/28** | 20/28 |
| H2 display “Advanced Smile Dental Clinic” | Playfair Display 500 | 70/98 | 70/98 | 70/98 | **60/84** | 60/84 | **45/63** | **35/49** | 35/49 |
| H2 display “Our Services / Why Choose Us!” | Playfair Display 500-600 | 70/98 | 70/98 | 70/98 | 60/84 | 60/84 | 45/63 | 35/49 | 35/49 |
| H2 “Special Promotions” (lh pinned) | Playfair Display 600 | 70/**70** | 70/70 | 70/70 | 60/70 | 60/70 | 45/70 | 35/70 | 35/70 |
| H2 “Request An Appointment” | Playfair Display 600 | 60/84 | 60/84 | 60/84 | **50/70** | 50/70 | **45/63** | **35/49** | 35/49 |
| H2 “Don’t Wait in Pain!” | Playfair Display 600 | 70/98 | 70/98 | 70/98 | 60/84 | 60/84 | 45/63 | 35/49 | 35/49 |
| H2 “BLOGS” | Poppins 500 | 35/49 | 35/49 | 35/49 | 35/49 | 35/49 | 35/49 | 35/49 | 35/49 |
| H3 about cards “Affordable Dentistry” | Poppins 700 | 25/35 | 25/35 | 25/35 | 25/35 | 25/35 | 25/35 | **20/28** | 20/28 |
| H3 services cards “SMILEDESIGN” | Poppins 600 | 20/28 | 20/28 | 20/28 | 20/28 | 20/28 | 20/28 | 20/28 | 20/28 |
| H3 why-choose-us “We Treat You Like Family” | Playfair Display 700 | 25/35 | 25/35 | 25/35 | 25/35 | 25/35 | 25/35 | 25/35 | 25/35 |
| H3 video-quote tabs “Dental Veneers” | Lato 600 | 24/33.6 | 24/33.6 | 24/33.6 | **22/30.8** | 22/30.8 | 22/30.8 | 22/30.8 | 22/30.8 |
| H3 testimonial quote “Compassionate Dental Care” | Playfair Display 700 | 33/46.2 | 33/46.2 | 33/46.2 | 33/46.2 | 33/46.2 | 33/46.2 | **25/35** | 25/35 |
| H3 blog cards “Root Canal vs…” | Poppins 400 | 20/28 | 20/28 | 20/28 | 20/28 | 20/28 | 20/28 | **16/22.4** | 16/22.4 |

Steps appear exactly at **991**, **767** and **478** (verified by the width brackets above; there is no 1100/1279 type step).

---

## 5. Duplicated blocks that swap at a breakpoint

| desktop block | mobile block | swap at | verified |
|---|---|---|---|
| `#brxe-oidkvq` + Splide `#brxe-krkjuo` (tag marquee, h54) | `#conteslider` + Splide `#brxe-yqroih` (h51) | **≤991** | 992 → oidkvq `flex`/conteslider `none`; 991 → inverse |
| `#menuh` (desktop nav + centred overhanging logo) | `#hedermovil` (logo + location switch + hamburger) — `#infoh` stays visible in both | **≤767** | 768 → `#menuh` flex; 767 → `#hedermovil` flex, `#menuh` none |
| `#brxe-ruoleo` “Book Online Coral Gables” (parent `#brxe-uytkvu`) | `#brxe-wjodkx` same label (parent `#brxe-rlzlnm`) | **≤767** | 768 → ruoleo flex / wjodkx none; 480 → inverse |
| `#brxe-xqvvfb` (`contenedor-medio`) | `#brxe-ijnpve` + image `#brxe-grdcna` | **≤991** | 1024/991 pair flips |
| `#brxe-gvzbsf` — **full duplicate of the promotions section** (`bricks-lazy-hidden`) | none (never activated) | — | `display:none` at all 8 widths → dead duplicate |
| `#brxe-oiluby` — empty container with ≤767 styles | none | — | `display:none` at all 8 widths → dead |
| `#bloquen2` (INVISALIGN 500) / `#bloquen3` (IN-OFFICE WHITENING 350) | none | — | `max-height:0; overflow:hidden` at all widths → permanently collapsed |
| `#brxe-lsflml` vertical divider (about) | hidden | **≤767** | flex at 768, `none` at 480 |
| `#brxe-jtbqsn` “BOOK ONLINE” bar inside `#bloquen1` | — | — | `height: 0` at all widths |

---

## 6. Carousels (Splide) — per-view / gap per width

All five are `type: loop`, `mediaQuery: "max"`, `perPage` base 3 with `breakpoints {1279, 991, 767, 478}`.
Measured visible slides × slide width (root width in parentheses):

| carousel (id / parent) | 1440 | 1280 | 1024 | 991 | 768 | 480 | 390 | 375 |
|---|---|---|---|---|---|---|---|---|
| insurance `#brxe-ccgjmd` / `#brxe-peirgl` — gap **40px**, autoplay 3s, speed 800, **no arrows** | 3×267 (880) | 3×267 (880) | 3×242 (807) | 3×234 (781) | 3×174 (602) | **2×166** (372) | **1×263** (263) | 1×252 (252) |
| services `#brxe-ekklrt` / `#brxe-eexxcm` — gap **0**, arrows **on**, autoplay **off**, autoHeight | 3×367 (1100) | 3×367 (1100) | 3×336 (1009) | **2×488** (976) | 2×377 (753) | **1×465** (465) | 1×375 (375) | 1×360 (360) |
| tag marquee desktop `#brxe-krkjuo` / `#brxe-oidkvq` — speed 40000, autoplay 4s | 2×475 (1425) | 2×422 (1265) | 2×336 (1009) | hidden | hidden | hidden | hidden | hidden |
| tag marquee mobile `#brxe-yqroih` / `#conteslider` | hidden | hidden | hidden | 1×488 (976) | 2×377 (753) | 1×465 (465) | 1×375 (375) | 1×360 (360) |
| testimonial `#brxe-rdzrnr` / `#brxe-ovtvxy` — perView 1, arrows on, **height 40vh → 60vh (≤767) → 90vh (≤478)** | 1×1100 h360 | 1×1100 h360 | 1×1009 h360 | 1×916 h360 | 1×693 h360 | 1×405 **h540** | 1×335 **h810** | 1×320 h810 |

(`is-visible` counts: the marquee mobile row shows 1 at 991 because a single slide fills 2 slots after cloning.)

---

## 7. Container layout matrix (`flex-direction` of main containers)

| container | 1440 | 1280 | 1024 | 991 | 768 | 480 | 390 | 375 |
|---|---|---|---|---|---|---|---|---|
| `#brxe-chdgmh` promotions section | row | row | row | **column** | column | column | column | column |
| `#brxe-ufhwcb` / `#brxe-anuaxv` promotions columns | row | row | row | row | row | **column** | column | column |
| `#brxe-kvvqkp` about cards | row | row | row | **column** | column | column | column | column |
| `#brxe-qtkukd` why-choose-us text+image | row | row | row | **column** | column | column | column | column |
| `#brxe-sanddn` why-choose-us phones | row | row | row | **column** | column | column | column | column |
| `#brxe-kltkpi` testimonial text | row | row | row | **column** | column | column | column | column |
| `#brxe-iaaklr` left nav block | column | column | column | **row** | row | row | row | row |
| `#brxe-sxoacm` hero phones | row | row | row | row | row | **column** | column | column |
| `#brxe-eivicm` testimonials heading | row | row | row | row | row | **column** | column | column |
| `#brxe-wivbui` / `#brxe-ybxgne` appointment | row | row | row | row | row | **column** | column | column |
| `#brxe-vjcoge` footer services | row | row | row | row | row | **column** | column | column |
| `#brxe-rhosnb` / `#brxe-dnadfp` location cards | row | row | row | row | row | **column** | column | column |
| `#brxe-qxphmt` new-patient offer card | row | row | row | row | row | row | **column** | column |

Section side gutters: **20px (≥992) → 30px (≤991) → 30px (480–767) → 20px (≤478)**;
`#bookonline` inner gutter 40 → 30 (≤991) → 10 (≤478).

---

## 8. Known quirk: horizontal overflow at 768

At width 768 the document `scrollWidth` is **782px** (`clientWidth` 753 → **29px of horizontal scroll**),
and `responsive-768.png` is therefore 782px wide. Cause: in the footer contact column
(`#brxe-gkxqgy` → `#brxe-ltwrih`, section `#brxe-yurdka`) the mailto link
**`admin@advancedsmileclinic.com`** renders 286px wide inside a 248px paragraph and does not wrap
(`rect.right = 782`). No overflow at 767, 991, 1024, 1280, 480, 390 or 375 (all verified `scrollWidth == clientWidth`).

---

## 9. Files written by this pass

- `docs/research/…/root-8a5edab2/RESPONSIVE.md` (this file)
- `raw-responsive/w-1440.json`, `w-1280.json`, `w-1024.json`, `w-991.json`, `w-768.json`, `w-480.json`,
  `w-390.json`, `w-375.json` — **all re-measured with verified `clientWidth`** (the previous `w-1024`/`w-1280`
  files were bogus: `docW` stuck at 1425; they are now 1009 / 1265). `w-1440` etc. were re-captured for consistency.
- `docs/design-references/…/root-8a5edab2/responsive-1440.png`, `responsive-1280.png`, `responsive-1024.png`,
  `responsive-768.png`, `responsive-480.png`, `responsive-390.png`, `responsive-375.png`,
  `responsive-390-mobile-header.png`, `responsive-390-menu-drawer.png`.
