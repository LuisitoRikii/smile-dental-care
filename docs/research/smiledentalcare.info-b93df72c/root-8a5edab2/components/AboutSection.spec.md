# AboutSection Specification

## Overview
- **Target file:** `src/components/sites/smiledentalcare.info-b93df72c/root-8a5edab2/AboutSection.tsx`
- **Screenshot:** `docs/design-references/smiledentalcare.info-b93df72c/root-8a5edab2/desktop-1440-full.png` (y757–1786)
- **Interaction model:** static (no hover/animation)

## DOM Structure
```
<section> (bg #fff; padding 40px 0 [32px 0 ≤767])
  <div container>
    <h2><span>Acerca de Smile Dental Care</span></h2>
    <div rowsWrap>              // display flex; flex-direction row; margin: 0 -24px -48px
      <div row ×3>              // padding 0 24px 48px; width 100%
        <div innerRow>          // display flex; margin 0 -24px; justify-content center
                                // row1,row3: flex-direction row; row2: flex-direction row-reverse
          <div cellA>           // width 50% (flex 1 1 50%); padding 0 24px
            <div> <img> </div>  // image wrapper: width 100%; image block w100% hauto
          </div>
          <div cellB>           // width 50%; padding 0 24px; display flex; align-items center; justify-content flex-start
            <div textWrap>      // width 100%; display flex; flex-direction column; align-items center; text-align center
              <h4>…</h4>
              <p><span>…</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```
Row order & direction:
1. image left / text right
2. text left / image right (row-reverse)
3. image left / text right

## Computed Styles (exact — @1440)

### Section
- padding: 40px 0 (≤767: 32px 0); background #fff.
- container: standard (inner 1112).

### Eyebrow h2
- font 16px, lh 22.4px, ls 2px, uppercase, color #8f6e6e, weight 400, margin 0 0 32px (≤767: 0 0 24px), text-align left, display block, width 1112.

### Rows
- rowsWrap: display flex; flex-direction row; margin 0 -24px -48px; width 1160 (container inner + 48 → i.e., 100% + 48 via negative margins).
- row: padding 0 24px 48px; display block; width 100% (measured 1160 at x133 — negative margin offsets container padding).
- innerRow: display flex; margin 0 -24px; justify-content center; height 266 (content-driven).
- cells: width 50% (max-width 50%); padding 0 24px; box-sizing border-box → inner 532 @1440.
- cellA (image): display block; text-align center.
- cellB (text): display flex; flex-direction row; justify-content flex-start; align-items center; its inner textWrap: width 100%; display flex; flex-direction column; align-items center; text-align center; (height 123.5 @1440 content-driven).

### Image
- img: width 532 (100% of inner cell); height 266 (natural 2:1 of 600×300 sources); display block (inline in original with text-align center); object-fit fill (source already cropped 2:1); max-width 100%.
- No border-radius, no shadow.

### Text block
- h4: font 22px, lh 27.5px, ls 0.99px, weight 400, color #1b1b1b, margin 0 0 24px (≤767: 0 0 16px), text-align center, display block.
- paragraph: font 16px, lh 24px, color #5e5e5e, text-align center, margin 0, width 100% (532 @1440, wraps to 3 lines).

## Text Content (verbatim)

Heading: `Acerca de Smile Dental Care`

Row 1:
- H4: `Nuestro Equipo de Expertos`
- Text: `Contamos con un equipo de dentistas altamente capacitados y comprometidos con su salud dental. Cada miembro de nuestro equipo está dedicado a brindar una atención personalizada y de calidad.`

Row 2:
- H4: `Nuestro Enfoque Integral`
- Text: `En Smile Dental Care, creemos en un enfoque integral para el cuidado dental. Nos enfocamos en la relación entre sus dientes, encías y salud general para ofrecerle el mejor tratamiento posible.`

Row 3:
- H4: `Tecnología Avanzada`
- Text: `Utilizamos tecnología dental de vanguardia para asegurar tratamientos precisos y cómodos. En Smile Dental Care, su experiencia es nuestra prioridad y estamos aquí para hacerla lo más placentera posible.`

## Assets
- `images/about-1.jpg` (row 1) — source 600×300 already cropped
- `images/about-2.jfif` (row 2)
- `images/about-3.jpg` (row 3)

## Responsive Behavior (verified at 390 / 500 via full-page screenshots)
- >=768: 2-column rows as above (cell images 50%).
- <=767: rows stack - innerRow `flex-direction: column` for ALL rows (image always FIRST, text second, even for row 2 which is row-reverse on desktop).
- Image full width (342x171 @390, natural 2:1); text cell follows with `margin-top: 24px` (measured: row1 img ends y1050, h4 at y1074 @390).
- Text block: h4 (margin-bottom 16px <=767) + paragraph, both centered.
- Row vertical padding stays 0 24px 48px.
