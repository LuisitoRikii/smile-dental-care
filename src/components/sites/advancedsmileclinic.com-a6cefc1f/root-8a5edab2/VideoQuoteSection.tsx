"use client";

import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import type { Options } from "@splidejs/splide";
import "@splidejs/splide/css/core";
import styles from "./VideoQuoteSection.module.css";

type Tag = {
  label: string;
  href: string;
};

const tags: Tag[] = [
  {
    label: "Teeth Whitening",
    href: "https://advancedsmileclinic.com/teeth-whitening/",
  },
  {
    label: "Cosmetic Dentistry",
    href: "https://advancedsmileclinic.com/cosmetic-dentistry/",
  },
  {
    label: "Dental Veneers",
    href: "https://advancedsmileclinic.com/cosmetic-dentistry/dental-veneers/",
  },
  {
    label: "Invisalign Treatment",
    href: "https://advancedsmileclinic.com/invisalign-treatment/",
  },
];

const marqueeOptions: Options = {
  type: "loop",
  direction: "ltr",
  keyboard: "global",
  height: "auto",
  gap: "0px",
  start: 0,
  perPage: 3,
  perMove: 1,
  speed: 40000,
  interval: 4000,
  autoHeight: true,
  autoplay: true,
  pauseOnHover: true,
  pauseOnFocus: true,
  arrows: false,
  pagination: false,
  mediaQuery: "max",
  breakpoints: {
    1279: {
      perPage: 3,
      speed: 40000,
      interval: 4000,
      autoHeight: true,
      autoplay: true,
      pauseOnHover: true,
      pauseOnFocus: true,
    },
    991: { perPage: 2 },
    767: { perPage: 1, speed: 2000 },
    478: { perPage: 1 },
  },
};

function TagMarquee({ rootId }: { rootId: string }) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const splide = new Splide(root, marqueeOptions);
    splide.mount();
    return () => {
      splide.destroy(true);
    };
  }, []);

  return (
    <div
      id={rootId}
      ref={rootRef}
      className={`brxe-slider-nested splide brx-auto-height splide--loop splide--ltr splide--draggable is-active is-overflow is-initialized ${styles.vqSlider}`}
      role="region"
      aria-roledescription="carousel"
    >
      <div className={`splide__track ${styles.vqTrack}`}>
        <div className={`splide__list ${styles.vqList}`}>
          {tags.map((tag) => (
            <div
              key={tag.href}
              className={`brxe-block splide__slide ${styles.vqSlide}`}
            >
              <h3 className={`brxe-heading ${styles.vqTagTitle}`}>
                <a href={tag.href}>{tag.label}</a>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function VideoQuoteSection() {
  return (
    <section id="brxe-ohoolt" className={styles.vqSection}>
      <div id="brxe-oidkvq" className={styles.vqTagsDesktop}>
        <TagMarquee rootId="brxe-krkjuo" />
      </div>

      <div id="conteslider" className={styles.vqTagsMobile}>
        <TagMarquee rootId="brxe-yqroih" />
      </div>

      <div id="brxe-sbvdse" className={styles.vqPhoto}>
        <div id="brxe-bwuxje" className={styles.vqQuote}>
          <p>Smile Designs that transform, empower, and inspire.</p>
        </div>
      </div>

      <div id="brxe-meefsx" className={styles.vqActionRow}>
        <div id="brxe-yijcia" className={styles.vqDivider}>
          <div className={styles.vqLine} />
        </div>
        <a
          id="brxe-ucqmyh"
          className={`brxe-button btn-radial-4 bricks-button ${styles.vqButton}`}
          href="https://advancedsmileclinic.com/contact-us/"
        >
          WELCOME FORM
        </a>
        <div id="brxe-oxjjji" className={styles.vqDivider}>
          <div className={styles.vqLine} />
        </div>
      </div>
    </section>
  );
}
