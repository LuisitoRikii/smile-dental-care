"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./ServicesSection.module.css";

const BASE = "/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/images";

type ServiceSlide = {
  label: string;
  line1: string;
  line2: string;
  text: string;
  href: string;
  image: string;
};

const SPLIDE_OPTIONS = {
  type: "loop",
  direction: "ltr",
  keyboard: "global",
  height: "auto",
  gap: 0,
  start: 0,
  perPage: 3,
  perMove: 1,
  speed: 400,
  interval: 3000,
  autoHeight: true,
  autoplay: false,
  pauseOnHover: true,
  pauseOnFocus: true,
  arrows: true,
  pagination: false,
  mediaQuery: "max",
  breakpoints: {
    1279: { perPage: 3 },
    991: { perPage: 2 },
    767: { perPage: 1 },
  },
} as const;

const slides: ServiceSlide[] = [
  {
    label: "EMERGENCY DENTISTRY",
    line1: "EMERGENCY",
    line2: "DENTISTRY",
    text: "Dental emergency service can be termed as lifesaving for patients who require emergency care and immediate attention in order to minimise the risk of serious medical complications in the longer term",
    href: "https://advancedsmileclinic.com/emergency-dentistry/",
    image: `${BASE}/service-emergency.webp`,
  },
  {
    label: "GENERAL DENTISTRY",
    line1: "GENERAL",
    line2: "DENTISTRY",
    text: "Our general dentistry helps you maintain good oral health by stopping the disease before it takes hold in your mouth. It provides preventive and restorative services in regular terms",
    href: "https://advancedsmileclinic.com/general-dentistry/",
    image: `${BASE}/service-general.webp`,
  },
  {
    label: "SMILE DESIGN",
    line1: "SMILE",
    line2: "DESIGN",
    text: "Our smile design enhances your teeth and gums for a brighter, balanced look. It combines art and science to create a natural, beautiful smile.",
    href: "https://advancedsmileclinic.com/cosmetic-dentistry/",
    image: `${BASE}/service-smile-design.webp`,
  },
  {
    label: "SAME-DAY DENTURES",
    line1: "SAME-DAY",
    line2: "DENTURES",
    text: "Our same-day dentures restore your smile quickly with comfort and function. They provide a fast, effective solution for missing teeth in one visit.",
    href: "https://advancedsmileclinic.com/oral-surgery/implant-overdentures/",
    image: `${BASE}/service-dentures.webp`,
  },
];

const DRAG_THRESHOLD = 10;

const resolvePerPage = (): number => {
  if (window.matchMedia("(max-width: 767px)").matches) {
    return SPLIDE_OPTIONS.breakpoints[767].perPage;
  }
  if (window.matchMedia("(max-width: 991px)").matches) {
    return SPLIDE_OPTIONS.breakpoints[991].perPage;
  }
  return SPLIDE_OPTIONS.breakpoints[1279].perPage;
};

const Chevron = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    width="40"
    height="40"
    focusable="false"
    aria-hidden="true"
  >
    <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" />
  </svg>
);

const LongArrow = (
  <svg
    className={styles.svcLearnMoreIcon}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    focusable="false"
    aria-hidden="true"
  >
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </svg>
);

type Slot = {
  slide: ServiceSlide;
  slotKey: string;
  index: number;
  clone: boolean;
};

export function ServicesSection() {
  const count = slides.length;
  const [perPage, setPerPage] = useState<number>(SPLIDE_OPTIONS.perPage);
  const [pos, setPos] = useState<number>(SPLIDE_OPTIONS.perPage);
  const [animated, setAnimated] = useState(true);
  const [dx, setDx] = useState(0);

  const posRef = useRef(pos);
  const perPageRef = useRef(perPage);
  const draggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, pos: 0, moved: false });
  const suppressClickRef = useRef(false);

  const maxPos = perPage + count;

  const applyPos = useCallback((next: number, animate: boolean) => {
    posRef.current = next;
    setAnimated(animate);
    setPos(next);
  }, []);

  const step = useCallback(
    (direction: number) => {
      const current = posRef.current;
      if (direction > 0) {
        if (current >= maxPos) return;
        applyPos(current + 1, true);
      } else {
        if (current <= 0) return;
        applyPos(current - 1, true);
      }
    },
    [applyPos, maxPos],
  );

  useEffect(() => {
    const update = () => {
      const next = resolvePerPage();
      if (next === perPageRef.current) return;
      perPageRef.current = next;
      setPerPage(next);
      applyPos(next, false);
    };
    update();
    const queries = ["(max-width: 767px)", "(max-width: 991px)"].map((query) =>
      window.matchMedia(query),
    );
    queries.forEach((query) => query.addEventListener("change", update));
    return () => {
      queries.forEach((query) => query.removeEventListener("change", update));
    };
  }, [applyPos]);

  useEffect(() => {
    if (pos !== 0 && pos !== maxPos) return;
    const timer = setTimeout(() => {
      if (draggingRef.current) return;
      applyPos(pos === 0 ? count : perPage, false);
    }, SPLIDE_OPTIONS.speed + 20);
    return () => clearTimeout(timer);
  }, [pos, maxPos, count, perPage, applyPos]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        step(1);
      } else if (event.key === "ArrowLeft") {
        step(-1);
      } else if (event.key === "Home") {
        applyPos(perPage, true);
      } else if (event.key === "End") {
        applyPos(count, true);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [step, applyPos, perPage]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    suppressClickRef.current = false;
    let start = posRef.current;
    if (start === 0 || start === maxPos) {
      start = start === 0 ? count : perPage;
      applyPos(start, false);
    }
    draggingRef.current = true;
    dragStartRef.current = { x: event.clientX, pos: start, moved: false };
    setAnimated(false);
    setDx(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const delta = event.clientX - dragStartRef.current.x;
    if (Math.abs(delta) > 3) dragStartRef.current.moved = true;
    setDx(delta);
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    const { x, pos: start, moved } = dragStartRef.current;
    const delta = event.clientX - x;
    if (moved) suppressClickRef.current = true;
    setDx(0);
    if (!moved || Math.abs(delta) <= DRAG_THRESHOLD) {
      applyPos(start, true);
    } else if (delta < 0) {
      applyPos(Math.min(start + SPLIDE_OPTIONS.perMove, maxPos), true);
    } else {
      applyPos(Math.max(start - SPLIDE_OPTIONS.perMove, 0), true);
    }
  };

  const onClickCapture = (event: React.MouseEvent) => {
    if (!suppressClickRef.current) return;
    suppressClickRef.current = false;
    event.preventDefault();
    event.stopPropagation();
  };

  const before = slides.slice(count - perPage);
  const after = slides.slice(0, perPage);
  const slots: Slot[] = [
    ...before.map((slide, index) => ({
      slide,
      slotKey: `clone-before-${index}`,
      index,
      clone: true,
    })),
    ...slides.map((slide, index) => ({
      slide,
      slotKey: `slide-${index}`,
      index: index + perPage,
      clone: false,
    })),
    ...after.map((slide, index) => ({
      slide,
      slotKey: `clone-after-${index}`,
      index: index + perPage + count,
      clone: true,
    })),
  ];

  const offset = (pos * 100) / perPage;
  const transform =
    dx !== 0
      ? `translate3d(calc(${-offset}% + ${dx}px), 0, 0)`
      : `translate3d(${-offset}%, 0, 0)`;

  return (
    <section id="brxe-elxohg" className={`brxe-section ${styles.svcSection}`}>
      <div id="brxe-rkfuwq" className={`brxe-block ${styles.svcHead}`}>
        <div id="brxe-ltaxbj" className={`brxe-container ${styles.svcDivider}`} />
        <div
          id="brxe-wgyxxm"
          className={`brxe-container brx-animated ${styles.svcHeadRow} ${styles.svcReveal}`}
        >
          <div id="brxe-jitvev" className={`brxe-block ${styles.svcHeadText}`}>
            <h2 id="brxe-hankvb" className={`brxe-heading ${styles.svcEyebrow}`}>
              Modern Dentistry with a Gentle Touch
            </h2>
            <h2 id="brxe-azlxfk" className={`brxe-heading ${styles.svcTitle}`}>
              Our Services
            </h2>
          </div>
          <div id="brxe-etozxh" className={`brxe-block ${styles.svcHeadActions}`}>
            <a
              id="brxe-mcmerj"
              className={`btn-radial-4 bricks-button ${styles.svcRadial} ${styles.svcBtn}`}
              href="https://advancedsmileclinic.com/our-dental-services/"
            >
              VIEW ALL SERVICES
            </a>
          </div>
        </div>
      </div>

      <div
        id="brxe-eexxcm"
        className={`brxe-container brx-animated ${styles.svcSliderWrap} ${styles.svcReveal}`}
      >
        <div
          id="brxe-ekklrt"
          className={`brxe-slider-nested splide splide--loop splide--ltr splide--draggable is-active is-overflow is-initialized ${styles.svcSplide}`}
          role="region"
          aria-roledescription="carousel"
          aria-label="Our Services"
        >
          <div className={`splide__arrows splide__arrows--ltr ${styles.svcArrows}`}>
            <button
              type="button"
              className={`splide__arrow splide__arrow--prev ${styles.svcArrow} ${styles.svcArrowPrev}`}
              aria-label="Go to last slide"
              onClick={() => step(-1)}
            >
              {Chevron}
            </button>
            <button
              type="button"
              className={`splide__arrow splide__arrow--next ${styles.svcArrow} ${styles.svcArrowNext}`}
              aria-label="Next slide"
              onClick={() => step(1)}
            >
              {Chevron}
            </button>
          </div>

          <div
            className={`splide__track ${styles.svcTrack}`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onClickCapture={onClickCapture}
          >
            <div
              className={`splide__list ${styles.svcList} ${animated ? "" : styles.svcListNoAnim}`}
              style={{ transform }}
            >
              {slots.map(({ slide, slotKey, index, clone }) => {
                const visible = index >= pos && index < pos + perPage;
                const realIndex = (((index - perPage) % count) + count) % count;
                return (
                  <div
                    key={slotKey}
                    className={[
                      "brxe-block",
                      "flip-container2",
                      "splide__slide",
                      styles.svcSlide,
                      visible ? "is-visible" : "",
                      index === pos ? "is-active" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    style={{ width: `calc(100% / ${perPage})` }}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${realIndex + 1} of ${count}`}
                    aria-hidden={!visible || clone ? "true" : undefined}
                  >
                    <div
                      className={`brxe-block flipper2 ${styles.svcFlipper}`}
                      style={{ backgroundImage: `url(${slide.image})` }}
                    >
                      <div className={`brxe-block front2 ${styles.svcFace} ${styles.svcFront}`}>
                        <div className={`brxe-block ${styles.svcFrontInner}`}>
                          <span
                            className={`brxe-button btn-radial-4 bricks-button ${styles.svcRadial} ${styles.svcPill}`}
                          >
                            {slide.label}
                          </span>
                        </div>
                      </div>

                      <div className={`brxe-block back2 ${styles.svcFace} ${styles.svcBack}`}>
                        <div className={`brxe-block ${styles.svcBackInner}`}>
                          <div className={`brxe-block ${styles.svcBackCard}`}>
                            <h3 className={`brxe-heading ${styles.svcBackTitle}`}>
                              {slide.line1}
                              <br />
                              {slide.line2}
                            </h3>
                            <div className={`brxe-text ${styles.svcBackCopy}`}>
                              <p>{slide.text}</p>
                            </div>
                            <div className={`brxe-block ${styles.svcBackActions}`}>
                              <a
                                className={`brxe-button efectoderecha bricks-button ${styles.svcLearnMore}`}
                                href={slide.href}
                              >
                                Learn More
                                {LongArrow}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
