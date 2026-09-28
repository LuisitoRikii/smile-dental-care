"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";

import styles from "./InsuranceLogos.module.css";

type Logo = {
  alt: string;
  src: string;
  width: number;
  height: number;
};

const ASSET_BASE =
  "/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/images/";

const LOGOS: Logo[] = [
  {
    alt: "Humana_logo",
    src: `${ASSET_BASE}ins-humana.webp`,
    width: 249,
    height: 54,
  },
  {
    alt: "guardian-logo",
    src: `${ASSET_BASE}ins-guardian.webp`,
    width: 269,
    height: 70,
  },
  {
    alt: "logo metlife",
    src: `${ASSET_BASE}ins-metlife.webp`,
    width: 200,
    height: 44,
  },
  {
    alt: "aetna-logo",
    src: `${ASSET_BASE}ins-aetna.webp`,
    width: 300,
    height: 150,
  },
  {
    alt: "ameritas-logo",
    src: `${ASSET_BASE}ins-ameritas.webp`,
    width: 900,
    height: 314,
  },
  {
    alt: "logo Blue-Cross-Blue",
    src: `${ASSET_BASE}ins-blue-cross.webp`,
    width: 1024,
    height: 576,
  },
  {
    alt: "careington logo",
    src: `${ASSET_BASE}ins-careington.webp`,
    width: 509,
    height: 150,
  },
  {
    alt: "Cigna-logo",
    src: `${ASSET_BASE}ins-cigna.webp`,
    width: 1024,
    height: 444,
  },
  {
    alt: "logo delta dental",
    src: `${ASSET_BASE}ins-delta-dental.webp`,
    width: 1024,
    height: 205,
  },
  {
    alt: "logo florida combined life",
    src: `${ASSET_BASE}ins-florida-combined.webp`,
    width: 300,
    height: 100,
  },
  {
    alt: "Sun_Life_Logo",
    src: `${ASSET_BASE}ins-sunlife.webp`,
    width: 620,
    height: 264,
  },
];

const COUNT = LOGOS.length;
const BASE_INDEX = COUNT;
const INTERVAL = 3000;
const SPEED = 800;
const DRAG_THRESHOLD = 50;
const VISIBLE = 3;
const COPIES_RANGE = [0, 1, 2] as const;

export function InsuranceLogos() {
  const [index, setIndex] = useState(BASE_INDEX);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [animate, setAnimate] = useState(true);
  const dragStart = useRef<number | null>(null);

  useEffect(() => {
    if (dragging) return;
    const timer = window.setInterval(() => {
      setAnimate(true);
      setIndex((current) => current + 1);
    }, INTERVAL);
    return () => window.clearInterval(timer);
  }, [dragging]);

  useEffect(() => {
    if (index < BASE_INDEX + COUNT && index >= BASE_INDEX - 1) return;
    const timer = window.setTimeout(() => {
      setAnimate(false);
      setIndex((current) =>
        current >= BASE_INDEX + COUNT ? current - COUNT : current + COUNT,
      );
    }, SPEED);
    return () => window.clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    if (animate || dragging) return;
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setAnimate(true));
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [animate, dragging]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragStart.current = event.clientX;
    setDragging(true);
    setAnimate(false);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    setDragX(event.clientX - dragStart.current);
  };

  const handlePointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    const distance = event.clientX - dragStart.current;
    dragStart.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setDragging(false);
    setAnimate(true);
    setDragX(0);
    if (distance <= -DRAG_THRESHOLD) {
      setIndex((current) => current + 1);
    } else if (distance >= DRAG_THRESHOLD) {
      setIndex((current) => current - 1);
    }
  };

  const listStyle = {
    "--ins-index": String(index),
    "--ins-drag": `${dragX}px`,
  } as CSSProperties;

  const slides = COPIES_RANGE.flatMap((copy) =>
    LOGOS.map((logo, position) => {
      const slideIndex = copy * COUNT + position;
      const visible =
        slideIndex >= index && slideIndex < index + VISIBLE;
      return (
        <li
          key={`${copy}-${position}`}
          className={styles.insSlide}
          aria-hidden={visible ? undefined : true}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            draggable={false}
          />
        </li>
      );
    }),
  );

  return (
    <section className={styles.insSection}>
      <div className={`asc-anim-right ${styles.insInner}`}>
        <div className={styles.insRoot}>
          <div
            className={styles.insTrack}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
          >
            <ul
              className={
                animate
                  ? styles.insList
                  : `${styles.insList} ${styles.insListNoTransition}`
              }
              style={listStyle}
            >
              {slides}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
