# HeroSection Specification

## Overview
- **Target file:** `src/components/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/HeroSection.tsx`
- **Screenshot:** `docs/design-references/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/hero-1440.png`
- **Extra screenshot:** `hero-hover-1440.png` (Hialeah button hovered)
- **Interaction model:** time-driven (background video) + load-driven animation; hover on the two tel buttons

## DOM Structure
```
<section id="brxe-eqgodz" class="brxe-section has-bg-video">   1425 x 800, y = 0
  <div class="bricks-background-video-wrapper loaded"
       data-background-video-url="…/video-baner-1.mp4"
       data-background-video-loop="1"
       data-background-video-poster="…/video-baner-1-frame-at-0m0s.webp">
    <video autoplay loop playsinline muted
           poster="…/video-baner-1-frame-at-0m0s.webp"
           src="…/video-baner-1.mp4"
           style="width:1425px; height:801.562px"></video>
  </div>
  <div id="brxe-dczpgr" class="brxe-container brx-animated"
       data-interactions='[{"id":"axesuu","trigger":"contentLoaded","action":"startAnimation","animationType":"fadeInLeft"}]'
       data-interaction-hidden-on-load="1" data-animation-id="axesuu">
    <div id="brxe-cygwlc" class="brxe-block">
      <h1 id="brxe-ysmojq" class="brxe-heading">CREATING BEAUTIFUL<br>SMILES</h1>
    </div>
    <div id="brxe-sxoacm" class="brxe-block">
      <a id="brxe-gsdenb" class="brxe-button btn-radial-1 bricks-button" href="tel:305 846 7987">Hialeah 305 846 7987</a>
      <a id="brxe-ahnpbe" class="brxe-button btn-radial-2 bricks-button" href="tel:786 391 0588">Coral Gables 786 391 0588</a>
    </div>
  </div>
</section>
```
Layer order inside the section: video wrapper (`position:absolute; z-index:-1`) → gradient `::before` (`position:absolute`) → content `#brxe-dczpgr` (`position:relative`).

## Computed Styles (exact values from getComputedStyle)

### Container — `#brxe-eqgodz`
- `position: relative; z-index: 1; width:1425px; height:800px`
- `display:flex; flex-direction:column; justify-content:center; align-items:center`
- `padding: 0 20px`
- `background-color: rgba(0,0,0,0)`, `background-size:cover; background-position:50% 0%`
- `overflow: visible`

### Overlay — `#brxe-eqgodz::before`
- `content: ""; position:absolute; width:1425px; height:800px`
- `background-image: repeating-linear-gradient(rgba(27, 27, 27, 0.3) 0%, rgba(189, 170, 156, 0.4) 100%)`
- `background-position:0% 0%; background-attachment:scroll; background-repeat:repeat`
- No border-radius; paints over the video, under the content.

### Background video
- Wrapper `.bricks-background-video-wrapper`: `position:absolute; inset auto; width:1425px; height:800px; overflow:hidden; z-index:-1; background-size:cover`
- `<video>`: `position:absolute; top:400px; left:712.5px; transform:matrix(1,0,0,1,-712.5,-400.781)` (centered); inline `width:1425px; height:801.562px` (16:9)
- `object-fit: cover; object-position: 50% 50%`
- Attributes: `autoplay`, `loop`, `playsinline`, `muted`
- Live state measured: `readyState:4, paused:false, duration:11.5s, videoWidth:1920, videoHeight:1080, currentTime advancing`

### `#brxe-dczpgr` (animated content container)
- `display:flex; flex-direction:column; align-items:flex-start; gap: 40px normal`
- `width:1100px; height:302.594px; margin:0 142.5px; position:relative`
- `animation-duration:1s; animation-fill-mode:both` (from `.brx-animated`)
- hidden until animation: `.bricks-is-frontend .brx-animated[data-animation*="In"], … [data-interaction-hidden-on-load] { opacity:0 }`
- After the animation completes the class list is just `brxe-container brx-animated` → `animation-name: none`, `opacity:1`, `transform:none` (end state).

### `#brxe-cygwlc` (heading block)
- `width:1100px; height:196px; display:flex; flex-direction:column; align-items:flex-start`

### `h1#brxe-ysmojq`
- `font-family: "Playfair Display"; font-size:70px; font-weight:600; line-height:98px`
- `color: rgb(255,255,255)`
- `width:755.312px; height:196px; display:block`
- HTML: `CREATING BEAUTIFUL<br>SMILES`

### `#brxe-sxoacm` (tel buttons row)
- `display:flex; flex-direction:row; align-items:flex-start; gap:20px; width:1100px; height:66.594px`

### `#brxe-gsdenb` — Hialeah button
- `background-color: rgb(255,255,255)` (`--bricks-color-b92a3f`)
- `color: rgb(118,97,72)` (`--bricks-color-a037a8`)
- `font-family:Lato; font-weight:600; font-size:18px; line-height:30.6px; letter-spacing:0.5px`
- `padding:18px; width:221.344px; height:66.594px; border-radius:40px; gap:10px`
- `position:relative; overflow:hidden; z-index:99; transition:0.3s; display:flex; justify-content:center; align-items:center; cursor:pointer`
- href `tel:305 846 7987`
- `@media (max-width:767px){ width:90% }`, `@media (max-width:478px){ width:90%; padding:0 10px; font-size:16px }`

### `#brxe-ahnpbe` — Coral Gables button
- `background-color: rgb(133,141,130)` (`#858D82`)
- `color: rgb(255,255,255)`
- otherwise identical metrics: `padding:18px; width:264.047px; height:66.594px; border-radius:40px`
- href `tel:786 391 0588`

## States & Behaviors

### Load animation on `#brxe-dczpgr`
- **Trigger:** Bricks interaction, `trigger: "contentLoaded"`, `action: "startAnimation"`, `animationType: "fadeInLeft"` (no delay).
- **State A (pre-animation):** `opacity: 0` (via `data-interaction-hidden-on-load="1"`).
- **State B (after):** `opacity: 1; transform: none`.
- **Transition/animation:** `.brx-animated { animation-duration:1s; animation-fill-mode:both }` + `.brx-animate-fadeInLeft { animation-name: fadeInLeft }` →
  ```
  @keyframes fadeInLeft {
    0%   { opacity:0; transform: translate3d(-100%, 0px, 0px); }
    100% { opacity:1; transform: translateZ(0px); }
  }
  ```
- **Implementation approach:** CSS keyframe animation triggered on mount; hide with `opacity:0` until the class is applied.

### Background video
- `<video autoplay loop muted playsinline poster="…">` — plays a 11.5 s 1920x1080 clip, `object-fit:cover` on a 1425x800 box (inline size 1425x801.562, centered with `translate(-50%,-50%)` equivalent transform).
- Poster: `https://advancedsmileclinic.com/wp-content/uploads/2025/08/video-baner-1-frame-at-0m0s.webp`

### Hover states
- **`#brxe-gsdenb` (Hialeah):**
  - `color`: `rgb(118,97,72)` → `rgb(255,255,255)` (`#brxe-gsdenb:hover { color: var(--bricks-color-b92a3f) }`), `transition:0.3s`
  - `background-color` stays `rgb(255,255,255)`
  - `::before` (`.btn-radial-1`): base `content:""; position:absolute; bottom:0; left:50%; width:0; height:0; background:linear-gradient(45deg, rgb(133,141,130), rgb(133,141,130)); border-radius:50%; transform:translateX(-50%); z-index:-1; opacity:0; transition:0.4s cubic-bezier(0.25,0.46,0.45,0.94)`
    → hover: `width:265.609px (120%); height:250px; bottom:-125px; opacity:1` (measured while actually hovered). Sage circle fills the white pill behind the now-white text.
- **`#brxe-ahnpbe` (Coral Gables):**
  - `color`: `rgb(255,255,255)` → `rgb(118,97,72)` (`#brxe-ahnpbe:hover { color: rgb(118,97,72) }`), `transition:0.3s`
  - `::before` (`.btn-radial-2`): `background: linear-gradient(45deg, rgb(255,255,255), rgb(255,255,255))` expanding the same way (white circle over the sage pill).
  - `box-shadow: none` on both buttons.

### No scroll reveal
The hero content animation fires on `contentLoaded`, not on scroll — it runs once as soon as the page loads.

## Carousel / multi-state content
N/A.

## Assets
| Purpose | URL | intrinsic size |
|---|---|---|
| Background video | `https://advancedsmileclinic.com/wp-content/uploads/2025/08/video-baner-1.mp4` | 1920x1080, 11.5 s |
| Video poster | `https://advancedsmileclinic.com/wp-content/uploads/2025/08/video-baner-1-frame-at-0m0s.webp` | 1425x801.562 rendered |

## Text Content (verbatim)
- `h1`: `CREATING BEAUTIFUL` + `<br>` + `SMILES`
- Button 1: `Hialeah 305 846 7987` → `tel:305 846 7987`
- Button 2: `Coral Gables 786 391 0588` → `tel:786 391 0588`

## Responsive Behavior
Not measured (no responsive work assigned). From CSS read on the page:
- `#brxe-gsdenb` / `#brxe-ahnpbe`: `@media (max-width:767px){ width:90% }`; `@media (max-width:478px){ width:90%; padding-right/left:10px; font-size:16px }` — buttons become full-width stacked (the container is already `flex-direction:column` at those sizes because `#brxe-dczpgr` is a Bricks container that flips).
- Video wrapper is sized by Bricks JS to the section box (inline `width/height` set to `100%` of the section) — re-run on resize.

## Design tokens
`--bricks-color-a037a8:#766148` (brown), `--bricks-color-b92a3f:#ffffff` (white), `--bricks-color-902b2a:#858d82` (sage).
