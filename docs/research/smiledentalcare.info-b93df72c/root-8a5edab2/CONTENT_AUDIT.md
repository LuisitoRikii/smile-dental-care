# Auditoría de contenido — Rediseño de la homepage de Smile Dental Care

**Fecha:** 2026-09-27
**Alcance:** solo `/` (Etapa 1)
**Verificación:** 111 comprobaciones automáticas sobre el DOM real de `http://localhost:3000/`
(incluyendo los estados ocultos: tabla de horario expandida y formulario abierto).

**Resultado: 111 / 111 presentes.** Única diferencia: el original tiene un doble espacio en
`excelencia médica  se une` que se normalizó a espacio simple. Cero textos, datos o secciones perdidos.

---

## 1. Homepage original → nueva ubicación

Contenido tomado de `src/components/sites/smiledentalcare.info-b93df72c/` (clon fiel, intacto)
y verificado contra el sitio vivo.

### Header
| Contenido original | Nueva ubicación |
|---|---|
| Logo | `SmileHeader` (centrado, chip redondo) + `SmileFooter` |
| `+1786-849-2174` / `tel:+17868492174` | Barra de info superior (≥560px), botón icono (móvil), botón en el drawer |
| Nav: Inicio, Staff, Office, Service, New Patients, Contact Us, Galeria | Nav dividida en `SmileHeader` (≥1200px), drawer móvil, `SmileFooter` |

### Hero
| Contenido original | Nueva ubicación |
|---|---|
| `photo_2026-01-15_10-36-18 (17).jpg` | `SmileHero` (full-bleed, `hero-lg.jpg` 1920×1280 del mismo asset) |
| `BIENVENIDOS` | eyebrow del hero |
| `Atención dental de calidad` | `h1` Playfair |
| `Sonrisas saludables para toda la familia en un ambiente acogedor.` | bajada del hero |
| `Solicite su cita hoy` → `/contact-us` | CTA primario (píldora blanca) + repetido en header y drawer |

### About
| Contenido original | Nueva ubicación |
|---|---|
| `Acerca de Smile Dental Care` | `h2` de `SmileAbout` |
| `about-1.jpg` + `Nuestro Equipo de Expertos` + párrafo completo | columna de lista, ítem 01 + imagen grande del collage |
| `about-2.jfif` + `Nuestro Enfoque Integral` + párrafo completo | ítem 02 + imagen del collage |
| `about-3.jpg` + `Tecnología Avanzada` + párrafo completo | ítem 03 + imagen del collage |

Los 3 párrafos están **verbatim**.

### Contact
| Contenido original | Nueva ubicación |
|---|---|
| `Comunícate con nosotros` | eyebrow de `SmileContact` |
| `O, aún mejor, ¡ven a visitarnos!` | `h2` de `SmileContact` |
| `Nos encanta recibir a nuestros clientes…` | lead |
| `Smile Dental Care` | título del panel |
| `860 Nw 42 ave suite 407. Miami Fl 32126` | fila de dirección |
| `786-849-2174` | fila de teléfono |
| `Smiledentalcare860@gmail.com` | fila de correo |
| `Horario` + 7 filas (`lun`…`dom`, `Cerrado`, `09:00 a.m. – 05:00 p.m.`) | acordeón expandible, día actual en negrita, colapso con `Hoy · <valor>` |
| Botón `Comunícate con nosotros.` | botón que desplaza el formulario |
| Formulario: título, `Nombre`, `Correo electrónico*`, `Teléfono`, `Otras notas` | `SmileContact` (floating labels) |
| `Adjuntar archivos`, `Datos adjuntos (0)` | fila del formulario |
| Nota reCAPTCHA + `Política de privacidad` + `Términos de servicio` + `de Google.` | nota con enlaces |
| `Enviar`, `Cancelar` | acciones del formulario |
| iframe de Google Maps (mismas coordenadas) | panel derecho de `SmileContact` |
| `Consigue las instrucciones` + link de direcciones | botón flotante sobre el mapa |

### Social / Subscribe
| Contenido original | Nueva ubicación |
|---|---|
| `Conéctate con nosotros` | eyebrow de `SmileSocial` |
| `https://www.instagram.com/smiledentalcare305/` | botón circular + handle visible |
| `Suscribirse` | eyebrow de `SmileSubscribe` |
| `Suscríbete para recibir noticias sobre promociones, ofertas y eventos.` | `h2` |
| `Correo electrónico` + `Registrarse` | input flotante + botón |
| `subscribe-bg.jpg` | fondo con overlay |

### Footer / Overlays
| Contenido original | Nueva ubicación |
|---|---|
| `Copyright © 2026  Smile Dental Care - Todos los derechos reservados.` | fila inferior de `SmileFooter` |
| `Con tecnología de` + link GoDaddy | fila inferior de `SmileFooter` |
| Links del footer | nav del footer (7 ítems, superconjunto de los 6 originales) |
| `Este sitio web utiliza cookies` + texto + `Aceptar` | `SmileOverlays` (banner inferior, dismissible) |
| Chat FAB (65px, bottom-right) | `SmileOverlays` → enlaza a `/contact-us` |
| Badge TrustedSite (bottom-left) | `SmileOverlays` (mismo SVG original) |

---

## 2. Contenido de páginas internas sumado a la homepage

Es contenido **real de Smile** (no inventado), traído de `/service`, `/staff`, `/office` y
`/new-patients` para dar cuerpo a la landing. Todo verbatim salvo donde se indica.

| Bloque | Fuente | Estado |
|---|---|---|
| Intro de servicios + `Los servicios que ofrecemos incluyen:` + **14 servicios** | `/service` | 14/14 verbatim |
| `Tratamiento dental de emergencia` + párrafo | `/service` | verbatim |
| `Seguros y facturación` (párrafo principal) | `/office` | verbatim (párrafo 1 de 2) |
| `Opciones de pago` (2 primeras oraciones) | `/office` | **abreviado**¹ |
| `Opciones de financiación` (2 primeras oraciones de CareCredit) | `/office` | **abreviado**¹ |
| `Instalaciones y Equipos` → `Digital X-rays`, `Invisalign` | `/office` | verbatim |
| `Doctora Helen Pavon Pozo` + `Bienvenidos a Smile Dental Care` + **3 párrafos** | `/staff` | 3/3 verbatim |
| `Declaración de misión` + lead + **5 compromisos** | `/new-patients` | verbatim |

¹ **Abreviado a propósito:** las cards de la home muestran el párrafo representativo.
Los textos completos de `/office` (incluida la variante larga de "Seguros y facturación"
y el texto íntegro de CareCredit) se cargan íntegros en la Etapa 2, cuando esa página exista.
**Ninguno de estos textos estaba en la homepage original** — no se perdió nada preexistente.

---

## 3. Secciones de Advanced Smile Clinic que NO se replicaron

Smile Dental Care no tiene este contenido, así que no se agregaron:

| Sección ASC | Motivo |
|---|---|
| Testimonios | no existen en Smile |
| Promociones / ofertas | no existen en Smile (solo se mencionan en el copy de la newsletter) |
| Logos de aseguradoras | Smile no publica logos de aseguradoras |
| Video quote | no existe material de video |
| Segunda ubicación / mapa múltiple | Smile tiene una sola dirección |
| Blog / artículos | no existe |

---

## 4. Verificación de que las otras dos webs quedaron intactas

| Web | Verificación |
|---|---|
| `/advanced-smile-clinic` | ruta presente en `next build`, carga con su propio `title`
(`Dentist Coral Gables FL…`) y renderiza idéntico. Cero reglas `.sm-*` aplican allí. |
| `prueba-soler/` | ningún archivo de esa carpeta fue editado (solo se agregó al `exclude`
del `tsconfig.json` raíz y a los `globalIgnores` de ESLint, porque era una app anidada que
el compilador raíz no debía leer — sus 29 errores preexistentes rompían `npm run build`). |
| Clon original de Smile en `src/components/sites/smiledentalcare.info-b93df72c/` | **intacto**, sin editar. Se conserva como referencia de esta auditoría. |
| `src/app/globals.css` | sin tocar por esta etapa. |

---

## 5. Validación técnica

- `npx tsc --noEmit` → **0 errores** en `src/`
- `npx eslint "src/app/(smile)" src/components/smile` → **0 errores**, 10 warnings
  (`@next/next/no-img-element` — el hero ya usa `next/image` con `priority`+`sizes`; el resto
  son imágenes `loading="lazy"` secundarias)
- `npm run build` → **verde** (rutas `/`, `/_not-found`, `/advanced-smile-clinic`)
- Sin scroll horizontal en 1440 / 1024 / 768 / 390 (`scrollWidth === clientWidth`)
- 51/51 elementos con `sm-reveal` se revelan en el recorrido de scroll

## 6. Screenshots

En `docs/design-references/smiledentalcare.info-b93df72c/root-8a5edab2/redesign/`:

**Homepage (4 anchos):**
- `home-1440.png`
- `home-1024.png`
- `home-768.png`
- `home-390.png`

**Páginas internas (1440):**
- `staff-1440.png`
- `office-1440.png`
- `service-1440.png`
- `new-patients-1440.png`
- `contact-us-1440.png`
- `galeria-1440.png`

---

# Etapa 2 — Páginas internas

**Fecha:** 2026-09-27 · **Rutas:** `/staff` `/office` `/service` `/new-patients` `/contact-us` `/galeria`

## 7. Auditoría de contenido por página

Verificación programática contra el HTML SSR de cada ruta (normalización de
espacios con `re.sub(r"\s+"," ")`):

| Ruta | Items verificados | Fallos |
|---|---|---|
| `/staff` | 6 | 0 |
| `/office` | 23 | 0 |
| `/service` | 21 | 0 |
| `/new-patients` | 15 | 0 |
| `/contact-us` | 23 | 0 |
| `/galeria` | 7 | 0 |
| **Total** | **95** | **0** |

Además la homepage volvió a pasar su auditoría (**77/77**) después de refactorizar
el formulario para compartirlo con `/contact-us`.

### Detalle por página

| Ruta | Contenido conservado |
|---|---|
| `/staff` | `Bienvenido a Smile Dental Care` · `Doctora Helen Pavon Pozo` · `Bienvenidos a Smile Dental Care` · **3 párrafos de la bio verbatim** · retrato original |
| `/office` | `Our Locations` · dirección · teléfono · `Abierto de Martes a Sábado.` · correo · `Smile Dental Care` · `Equipo` + texto · `Seguros y Facturación` + **las 2 variantes completas** · `Opciones de pago` completo · `Opciones de financiación` **(4 párrafos de CareCredit completos)** · `Instalaciones y Equipos` → Digital X-rays, Invisalign |
| `/service` | intro completa · `Los servicios que ofrecemos incluyen:` · **14/14 servicios verbatim** · `Tratamiento dental de emergencia` + texto |
| `/new-patients` | intro de formularios completa · `Declaración de misión` + lead · **5/5 compromisos** · `La cita` + texto completo |
| `/contact-us` | formulario (`Nombre`, `Correo electrónico*`, `Enviar`, nota reCAPTCHA) · `O, aún mejor, ¡ven a visitarnos!` + lead · dirección/teléfono/correo · tabla de horario completa (7 filas) |
| `/galeria` | título completo · **6/6 imágenes** extraídas del widget lazy-load del sitio original |

## 8. Assets nuevos (Etapa 2)

`scripts/download-assets-smile-gallery.mjs` → `gallery-1..6.jpg`,
`service-hero.jpg`, `contact-hero.jpg`, todos desde `img1.wsimg.com` del sitio
original de Smile. Ningún asset de ASC ni de prueba-soler.

## 9. Validación técnica (Etapa 2)

- `npm run build` → **verde**, 9 rutas estáticas:
  `/`, `/staff`, `/office`, `/service`, `/new-patients`, `/contact-us`, `/galeria`,
  `/advanced-smile-clinic`, `/_not-found`
- `tsc --noEmit` → 0 errores en `src/` · `eslint` → 0 errores, 10 warnings
- `scrollWidth === clientWidth` en todas las rutas (1440 y 390)
- Lightbox de galería verificado: abre, navega `01/06 → 02/06`, `Esc` cierra y
  restaura `body.overflow`
- `/advanced-smile-clinic` sin cambios

### Correcciones aplicadas durante la Etapa 2
1. **Overflow horizontal (+36px)**: los `.sm-reveal[data-reveal="right"]` en su
   estado pre-animación (`translate3d(56px,0,0)`) empujaban el documento. Solucionado
   con `overflow-x: clip` en `.sm-root` (no crea contenedor de scroll ni afecta a
   los `position: fixed` — verificado: header, cookie, badge y FAB siguen OK).
2. `/service`: la misma imagen se repetía en intro y bloque de emergencia → el
   bloque de urgencias pasó a composición con icono.
3. `/office`: grid de seguros a 3 columnas para eliminar la celda vacía.
4. `/contact-us`: tarjeta del formulario con `self-start` (dejaba ~400px vacíos).
5. `/staff`: `object-position` del hero para no cortar el rostro.
6. `/service`: añadido `sm-reveal` a las 14 cards (no tenían animación).

## 10. Contenido de las páginas internas NO presente en la homepage

El texto de las cards de la home ("Seguros y facturación", "Opciones de pago",
"Opciones de financiación") sigue siendo un **resumen**; ahora el texto íntegro
sí existe en `/office`. **Cero contenido de Smile pendiente.**

