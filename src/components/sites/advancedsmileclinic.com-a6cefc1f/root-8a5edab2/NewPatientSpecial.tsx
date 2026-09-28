"use client";

import { Fragment, useState, type KeyboardEvent } from "react";
import styles from "./NewPatientSpecial.module.css";

const BOOK_ONLINE_HREF = "https://advancedsmileclinic.com/contact-us/";

const DOLLAR_PATH =
  "M21.0941 23.96C21.0941 25.3467 20.7341 26.6533 20.0141 27.88C19.3207 29.08 18.2807 30.08 16.8941 30.88C15.5341 31.6533 13.9207 32.1067 12.0541 32.24V35.48H9.49406V32.2C6.8274 31.96 4.68073 31.16 3.05406 29.8C1.4274 28.4133 0.587396 26.5467 0.534063 24.2H6.53406C6.69406 26.12 7.68073 27.28 9.49406 27.68V20.04C7.57406 19.56 6.0274 19.08 4.85406 18.6C3.68073 18.12 2.6674 17.3467 1.81406 16.28C0.960729 15.2133 0.534063 13.76 0.534063 11.92C0.534063 9.6 1.36073 7.70666 3.01406 6.24C4.69406 4.77333 6.85406 3.93333 9.49406 3.72V0.479998H12.0541V3.72C14.6141 3.93333 16.6541 4.70666 18.1741 6.04C19.7207 7.37333 20.5874 9.21333 20.7741 11.56H14.7341C14.6541 10.7867 14.3741 10.12 13.8941 9.56C13.4407 8.97333 12.8274 8.56 12.0541 8.32V15.88C14.0541 16.3867 15.6274 16.88 16.7741 17.36C17.9474 17.8133 18.9607 18.5733 19.8141 19.64C20.6674 20.68 21.0941 22.12 21.0941 23.96ZM6.37406 11.64C6.37406 12.52 6.64073 13.24 7.17406 13.8C7.7074 14.3333 8.48073 14.7733 9.49406 15.12V8.2C8.53406 8.33333 7.77406 8.69333 7.21406 9.28C6.65406 9.86667 6.37406 10.6533 6.37406 11.64ZM12.0541 27.76C13.0674 27.5733 13.8541 27.16 14.4141 26.52C15.0007 25.88 15.2941 25.1067 15.2941 24.2C15.2941 23.32 15.0141 22.6133 14.4541 22.08C13.8941 21.5467 13.0941 21.1067 12.0541 20.76V27.76Z";

const ARROW_PATH =
  "M28 35C27.258 35 26.15 35.733 25.22 36.475C24.02 37.429 22.973 38.569 22.174 39.876C21.575 40.856 21 42.044 21 43M21 43C21 42.044 20.425 40.855 19.826 39.876C19.026 38.569 17.979 37.429 16.781 36.475C15.85 35.733 14.74 35 14 35M21 43V19V43Z";

const ARROW_PATH_STROKE =
  "M28 35C27.258 35 26.15 35.733 25.22 36.475C24.02 37.429 22.973 38.569 22.174 39.876C21.575 40.856 21 42.044 21 43M21 43C21 42.044 20.425 40.855 19.826 39.876C19.026 38.569 17.979 37.429 16.781 36.475C15.85 35.733 14.74 35 14 35M21 43V19";

type PromoCard = {
  id: string;
  title: string[];
  price: string;
  priceAlign: "end" | "center";
  cells: string[][];
};

const PROMO_CARDS: PromoCard[] = [
  {
    id: "bloquen1",
    title: ["NEW PATIENT", "SPECIAL"],
    price: "75",
    priceAlign: "end",
    cells: [["Exam"], ["X-rays"], ["Cleaning", "(D1110)"]],
  },
  {
    id: "bloquen2",
    title: ["INVISALIGN"],
    price: "500",
    priceAlign: "center",
    cells: [
      ["Free", "Consultation"],
      ["Clear", "Aligners"],
      ["Custom"],
    ],
  },
  {
    id: "bloquen3",
    title: ["IN-OFFICE", "WHITENING"],
    price: "350",
    priceAlign: "center",
    cells: [
      ["In-office", "whitening"],
      ["40", "minutes"],
      ["Proven", "Results"],
    ],
  },
];

function TextLines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <Fragment key={line}>
          {index > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </>
  );
}

function PromoCardBlock({ card }: { card: PromoCard }) {
  return (
    <>
      <div className={styles.npsCard}>
        <div className={styles.npsLeft}>
          <p className={styles.npsTitle}>
            <TextLines lines={card.title} />
          </p>
          <div
            className={`${styles.npsPriceRow} ${
              card.priceAlign === "end"
                ? styles.npsPriceRowEnd
                : styles.npsPriceRowCenter
            }`}
          >
            <div className={styles.npsDollar}>
              <svg
                className={styles.npsDollarIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="36"
                viewBox="0 0 22 36"
                fill="none"
                aria-hidden="true"
              >
                <path d={DOLLAR_PATH} fill="#62544E" />
              </svg>
            </div>
            <div className={styles.npsPriceWrap}>
              <div className={styles.npsPrice}>{card.price}</div>
            </div>
          </div>
        </div>
        <div className={styles.npsPanel}>
          {card.cells.map((lines, index) => (
            <div
              key={lines.join(" ")}
              className={`${styles.npsCell} ${
                index < 2 ? styles.npsCellDivider : styles.npsCellLast
              }`}
            >
              <div className={styles.npsCellText}>
                <TextLines lines={lines} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.npsBtnRow}>
        <a className={styles.npsBook} href={BOOK_ONLINE_HREF}>
          BOOK ONLINE
        </a>
      </div>
    </>
  );
}

export function NewPatientSpecial() {
  const [expanded, setExpanded] = useState(false);
  const [label, setLabel] = useState("See more");

  const handleToggle = () => {
    if (expanded) {
      setExpanded(false);
      setLabel("See More");
    } else {
      setExpanded(true);
      setLabel("See Less");
    }
  };

  const handleKeyDown = (event: KeyboardEvent<SVGSVGElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <section id="brxe-cglzwm" className={styles.npsSection}>
      <div id={PROMO_CARDS[0].id} className={styles.npsBlock}>
        <PromoCardBlock card={PROMO_CARDS[0]} />
      </div>
      {PROMO_CARDS.slice(1).map((card) => (
        <div
          key={card.id}
          id={card.id}
          className={`${styles.npsBlock} ${styles.npsBloque} ${
            expanded ? styles.npsMostrar : ""
          }`}
        >
          <PromoCardBlock card={card} />
        </div>
      ))}
      <div className={styles.npsToggleWrap}>
        <svg
          id="botonseemore"
          className={`${styles.npsToggleBtn} ${
            expanded ? styles.npsRotado : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="62"
          viewBox="0 0 43 62"
          fill="none"
          role="button"
          tabIndex={0}
          aria-expanded={expanded}
          aria-label={label}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
        >
          <rect
            x="0.5"
            y="0.5"
            width="42"
            height="61"
            rx="21"
            fill="white"
            stroke="#7D4D3E"
          />
          <path d={ARROW_PATH} fill="white" />
          <path d={ARROW_PATH_STROKE} stroke="#7D4D3E" />
        </svg>
        <div id="textob" className={styles.npsToggleLabel}>
          {label}
        </div>
      </div>
    </section>
  );
}
