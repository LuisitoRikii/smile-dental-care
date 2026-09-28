"use client";

import { useState } from "react";
import { CalendarDays, X } from "lucide-react";
import styles from "./DontWaitSection.module.css";

const BASE = "/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/images";

const ZOCDOC_URL =
  "https://www.zocdoc.com/practice/advanced-smile-dental-clinic-143553?lock=true&isNewPatient=false&referrerType=widget";

type SwitchSlide = {
  n: number;
  image: string;
  alt: string;
  cover: boolean;
  title: string;
  text: string;
};

const SWITCH_SLIDES: SwitchSlide[] = [
  {
    n: 1,
    image: `${BASE}/dontwait-1.webp`,
    alt: "Happy woman smiling with bright teeth",
    cover: false,
    title: "Compassionate Dental Care",
    text: "At Advanced Smile Dental Clinic, we believe every patient deserves personalized attention and gentle care. From the moment you walk in, our team is here to make your visit stress-free and comfortable.",
  },
  {
    n: 2,
    image: `${BASE}/dontwait-2.webp`,
    alt: "",
    cover: true,
    title: "Modern Dentistry with a Personal Touch",
    text: "Using the latest technology and techniques, we provide advanced dental treatments tailored to your needs — all in a welcoming environment that feels like home.",
  },
  {
    n: 3,
    image: `${BASE}/dontwait-3.webp`,
    alt: "Group of happy patients at Advanced Smile Dental",
    cover: false,
    title: "Accepting Dental Emergencies and Walk-Ins",
    text: "At Advanced Smile Dental Clinic, we're here when you need us most — whether it’s a sudden dental emergency or a routine visit.",
  },
];

export function DontWaitSection() {
  const [active, setActive] = useState(1);
  const [zdOpen, setZdOpen] = useState(true);

  const current = SWITCH_SLIDES[active - 1];

  return (
    <>
      <section
        id="brxe-aafbdt"
        className={`brxe-section ${styles.dntSection}`}
      >
        <div
          id="brxe-eivicm"
          className={`brxe-container bricks-lazy-hidden ${styles.dntHeadRow}`}
        >
          <div
            id="brxe-jygwbx"
            className={`brxe-block bricks-lazy-hidden ${styles.dntHeadText}`}
          >
            <h2 id="brxe-gbxbwp" className={`brxe-heading ${styles.dntTitle}`}>
              Don’t Wait in Pain!
            </h2>
            <div
              id="brxe-aalvse"
              className={`brxe-text bricks-lazy-hidden ${styles.dntLead}`}
            >
              <p>
                At Advanced Smile Dental Clinic, we’re here when you need us
                most — whether it’s a sudden dental emergency or a routine
                visit.
              </p>
            </div>
          </div>

          <div
            id="brxe-nhvpqi"
            className={`brxe-block bricks-lazy-hidden ${styles.dntCta}`}
          >
            <a
              id="brxe-nkgrkd"
              className={`btn-radial-4 bricks-button ${styles.dntRadial} ${styles.dntBtn}`}
              href="https://advancedsmileclinic.com/contact-us/"
            >
              SCHEDULE NOW
            </a>
          </div>
        </div>

        <div
          id="brxe-jsgspt"
          className={`brxe-container bricks-lazy-hidden ${styles.dntSwitch}`}
        >
          <div
            id="brxe-kltkpi"
            className={`brxe-block bricks-lazy-hidden ${styles.dntSwitchRow}`}
          >
            <div
              id="brxe-nyxssl"
              className={`brxe-block bricks-lazy-hidden ${styles.dntImages}`}
            >
              <figure
                id="imagesli1"
                className={`brxe-image tag ${styles.dntFigure} ${
                  active === 1 ? styles.imageActive : ""
                }`}
                onMouseEnter={() => setActive(1)}
                onClick={() => setActive(1)}
              >
                <img
                  className={`css-filter size-full bricks-lazy-hidden ${styles.dntShotInner}`}
                  src={SWITCH_SLIDES[0].image}
                  alt={SWITCH_SLIDES[0].alt}
                  width={238}
                  height={246}
                />
              </figure>

              <img
                id="imagesli2"
                className={`brxe-image css-filter size-full bricks-lazy-hidden ${styles.dntShot} ${
                  SWITCH_SLIDES[1].cover ? styles.dntShotCover : ""
                } ${active === 2 ? styles.imageActive : ""}`}
                src={SWITCH_SLIDES[1].image}
                alt={SWITCH_SLIDES[1].alt}
                width={1024}
                height={1536}
                onMouseEnter={() => setActive(2)}
                onClick={() => setActive(2)}
              />

              <img
                id="imagesli3"
                className={`brxe-image css-filter size-full bricks-lazy-hidden ${styles.dntShot} ${
                  active === 3 ? styles.imageActive : ""
                }`}
                src={SWITCH_SLIDES[2].image}
                alt={SWITCH_SLIDES[2].alt}
                width={238}
                height={246}
                onMouseEnter={() => setActive(3)}
                onClick={() => setActive(3)}
              />
            </div>

            <div
              id="brxe-ybkydb"
              className={`brxe-block bricks-lazy-hidden ${styles.dntCopy}`}
            >
              <h3
                id="titulosli"
                className={`brxe-heading ${styles.dntCopyTitle}`}
              >
                {current.title}
              </h3>
              <div
                id="textsli"
                className={`brxe-text ${styles.dntCopyText}`}
              >
                {current.text}
              </div>
            </div>
          </div>

          <div
            id="brxe-qacisa"
            className={`brxe-block bricks-lazy-hidden ${styles.dntDots}`}
          >
            {SWITCH_SLIDES.map((slide) => (
              <button
                key={slide.n}
                type="button"
                id={`ciculosli${slide.n}`}
                className={`brxe-icon ${styles.dntDot} ${
                  active === slide.n ? styles.dntDotActive : ""
                }`}
                aria-label={`Show slide ${slide.n}`}
                aria-pressed={active === slide.n}
                onClick={() => setActive(slide.n)}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="brxe-qxosdn"
        className={`brxe-section bricks-lazy-hidden ${styles.zcdSection}`}
      >
        <div
          id="brxe-qjglrg"
          className={`brxe-container bricks-lazy-hidden ${styles.zcdContainer}`}
        >
          <div id="brxe-prlskd" className={`brxe-code ${styles.zcdCode}`}>
            <div className={styles.zcdRow}>
              <a
                className={styles.zcdPlugin}
                href={ZOCDOC_URL}
                target="_blank"
                rel="noreferrer"
                title="Advanced Smile Dental Clinic"
              >
                <img
                  src={`${BASE}/zocdoc-badge.png`}
                  alt="Advanced Smile Dental Clinic"
                  title="Advanced Smile Dental Clinic"
                  width={162}
                  height={48}
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.zdWidgets}>
          <a
            className={styles.zdSticky}
            href={ZOCDOC_URL}
            target="_blank"
            rel="noreferrer"
          >
            Book Online
          </a>

          {zdOpen && (
            <div className={styles.zdAlert}>
              <div className={styles.zdAlertCard}>
                <div className={styles.zdAlertIcon}>
                  <CalendarDays size={40} strokeWidth={2} aria-hidden="true" />
                </div>
                <button
                  type="button"
                  className={styles.zdClose}
                  aria-label="Close"
                  onClick={() => setZdOpen(false)}
                >
                  <X size={20} strokeWidth={2} aria-hidden="true" />
                </button>
                <div className={styles.zdAlertLine}>
                  See available times and book
                  <br />
                  an appointment right here.
                </div>
                <div className={styles.zdAlertPara}>
                  {"It's free, fast and secure."}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default DontWaitSection;
