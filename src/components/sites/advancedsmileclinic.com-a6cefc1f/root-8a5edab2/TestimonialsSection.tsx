"use client";

import { useEffect, useRef } from "react";
import Splide, { type Options } from "@splidejs/splide";
import "@splidejs/splide/css";
import styles from "./TestimonialsSection.module.css";

type Testimonial = {
  dataId: string;
  quote: string;
  author: string;
};

const SLIDES: Testimonial[] = [
  {
    dataId: "brxe-bdibso",
    author: "Michael L.",
    quote:
      "My experience here was excellent! Dr. Perez really takes the time to listen and provide the best care possible. She was very detailed, professional, and made the whole appointment stress-free. The staff was also very attentive and helpful. I can finally say I enjoy going to the dentist now. Highly recommended!",
  },
  {
    dataId: "brxe-uzteqw",
    author: "Isabella C.",
    quote:
      "I had the best experience with Dr. Laura Perez! Her main priority was making sure it was fast and comfortable and she was very knowledgeable and gave me great tips on how to continue to take care of my teeth. I left there with my teeth feeling great! I highly recommend Advanced Smile Dental Clinic for amazing dental care.",
  },
  {
    dataId: "brxe-iioicl",
    author: "Sophia R.",
    quote:
      "I had such a positive visit at Advanced Smile Dental Clinic! Dr. Perez is gentle, kind, and makes you feel completely at ease during the appointment. She walked me through the entire process and answered all of my questions. The office is clean, modern, and very comfortable. I will definitely be coming back!",
  },
  {
    dataId: "brxe-mbwzuk",
    author: "Daniel M.",
    quote:
      "Dr. Laura Perez and her team are truly wonderful! From the moment I walked in, I felt welcomed and cared for. The staff was very professional and friendly, and Dr. Perez explained everything clearly so I understood my treatment. My smile has never looked better, and I couldn’t be happier with the results.",
  },
];

const SPLIDE_OPTIONS: Options = {
  type: "loop",
  direction: "ltr",
  keyboard: "global",
  height: "40vh",
  gap: 0,
  start: 0,
  perPage: 1,
  perMove: 1,
  speed: 500,
  interval: 3000,
  autoHeight: true,
  autoplay: true,
  pauseOnHover: true,
  pauseOnFocus: true,
  arrows: true,
  pagination: false,
  mediaQuery: "max",
  breakpoints: {
    1279: {
      height: "40vh",
      speed: 500,
      autoHeight: true,
      autoplay: true,
      pauseOnHover: true,
      pauseOnFocus: true,
      arrows: true,
    },
    767: { height: "60vh" },
    478: { height: "90vh" },
  },
};

const QUOTE_PATH =
  "M19.8834 0.47643C8.10892 8.05564 1.56811 16.8761 0.25932 26.9426C-1.77814 42.6103 12.201 50.2789 19.2844 43.3892C26.3678 36.498 22.1225 27.7528 16.9937 25.3612C11.8648 22.9712 8.72813 23.8034 9.27542 20.6078C9.8227 17.4137 17.1187 8.5556 23.5297 4.43059C23.757 4.23696 23.9019 3.96376 23.935 3.66671C23.9681 3.36966 23.8869 3.07113 23.708 2.832L22.1225 0.764803C21.4344 -0.131663 20.7746 -0.0971835 19.8834 0.474861M50.8845 0.47643C39.1101 8.05564 32.5678 16.8777 31.2605 26.9426C29.2231 42.6103 43.2023 50.2789 50.2857 43.3892C57.3691 36.498 53.1237 27.7528 47.9933 25.3612C42.8645 22.9712 39.7278 23.8034 40.2751 20.6078C40.8224 17.4137 48.12 8.5556 54.531 4.43059C54.7579 4.23675 54.9026 3.96344 54.9355 3.6664C54.9683 3.36935 54.8869 3.07094 54.7077 2.832L53.1222 0.764803C52.4341 -0.131663 51.7743 -0.0971835 50.8845 0.474861";

const GOOGLE_PATHS = [
  "M33.6175 15.4808H32.3757V15.4168H18.5007V21.5835H27.2134C25.9423 25.1733 22.5267 27.7502 18.5007 27.7502C13.3923 27.7502 9.25065 23.6085 9.25065 18.5002C9.25065 13.3919 13.3923 9.25016 18.5007 9.25016C20.8586 9.25016 23.0039 10.1397 24.6373 11.5927L28.9979 7.23212C26.2444 4.66602 22.5614 3.0835 18.5007 3.0835C9.9868 3.0835 3.08398 9.98631 3.08398 18.5002C3.08398 27.014 9.9868 33.9168 18.5007 33.9168C27.0145 33.9168 33.9173 27.014 33.9173 18.5002C33.9173 17.4665 33.8109 16.4575 33.6175 15.4808Z",
  "M4.86133 11.3245L9.92647 15.0391C11.297 11.6459 14.6162 9.25016 18.5005 9.25016C20.8584 9.25016 23.0037 10.1397 24.6371 11.5927L28.9977 7.23212C26.2442 4.66602 22.5612 3.0835 18.5005 3.0835C12.5789 3.0835 7.44362 6.4266 4.86133 11.3245Z",
  "M18.5001 33.9167C22.4822 33.9167 26.1005 32.3928 28.8362 29.9145L24.0647 25.8769C22.4652 27.0941 20.5101 27.7522 18.5001 27.75C14.4902 27.75 11.0854 25.1932 9.80277 21.625L4.77539 25.4984C7.32685 30.4911 12.5084 33.9167 18.5001 33.9167Z",
  "M33.6168 15.4805H32.375V15.4165H18.5V21.5832H27.2127C26.6047 23.2917 25.5095 24.7846 24.0623 25.8775L24.0646 25.8759L28.8361 29.9136C28.4985 30.2204 33.9167 26.2082 33.9167 18.4998C33.9167 17.4661 33.8103 16.4571 33.6168 15.4805Z",
];

const STAR_PATH =
  "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z";

const STAR_KEYS = ["star-1", "star-2", "star-3", "star-4", "star-5"];

function QuoteIcon() {
  return (
    <svg
      className={`brxe-icon ${styles.tstQuoteIcon}`}
      xmlns="http://www.w3.org/2000/svg"
      width="55"
      height="46"
      viewBox="0 0 55 46"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path fillRule="evenodd" clipRule="evenodd" d={QUOTE_PATH} fill="#A49984" />
    </svg>
  );
}

function GoogleMark() {
  return (
    <svg
      className={`brxe-icon ${styles.tstGoogle}`}
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={GOOGLE_PATHS[0]} fill="#FFC107" />
      <path d={GOOGLE_PATHS[1]} fill="#FF3D00" />
      <path d={GOOGLE_PATHS[2]} fill="#4CAF50" />
      <path d={GOOGLE_PATHS[3]} fill="#1976D2" />
    </svg>
  );
}

function Star() {
  return (
    <svg
      className={`brxe-icon ${styles.tstStar}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      aria-hidden="true"
      focusable="false"
    >
      <path d={STAR_PATH} />
    </svg>
  );
}

export function TestimonialsSection() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const splide = new Splide(root, SPLIDE_OPTIONS);
    splide.mount();

    return () => {
      splide.destroy(true);
    };
  }, []);

  return (
    <section
      id="brxe-oxjdlg"
      className={`brxe-section bricks-lazy-hidden ${styles.tstSection}`}
    >
      <div
        id="brxe-ovtvxy"
        className={`brxe-container bricks-lazy-hidden ${styles.tstContainer}`}
      >
        <div
          id="brxe-xnafut"
          className={`brxe-block bricks-lazy-hidden ${styles.tstHead}`}
        >
          <h2
            id="brxe-spcean"
            className={`brxe-heading ${styles.tstEyebrow}`}
          >
            Why Coral Gables &amp; Hialeah Patients Love Us
          </h2>
          <h2 id="brxe-teealg" className={`brxe-heading ${styles.tstTitle}`}>
            Real Stories. Real Smiles.
          </h2>
        </div>

        <div
          id="brxe-rdzrnr"
          ref={rootRef}
          className={`brxe-slider-nested bricks-lazy-hidden splide brx-auto-height ${styles.tstRoot}`}
          role="region"
          aria-roledescription="carousel"
        >
          <div
            id="brxe-rdzrnr-track"
            className={`splide__track ${styles.tstTrack}`}
          >
            <div
              id="brxe-rdzrnr-list"
              className={`splide__list ${styles.tstList}`}
            >
              {SLIDES.map((slide) => (
                <div
                  key={slide.dataId}
                  data-id={slide.dataId}
                  className={`brxe-block bricks-lazy-hidden splide__slide ${styles.tstSlide}`}
                >
                  <QuoteIcon />

                  <div
                    className={`brxe-block bricks-lazy-hidden ${styles.tstQuoteBox}`}
                  >
                    <div className={`brxe-text ${styles.tstQuoteText}`}>
                      <p>{slide.quote}</p>
                    </div>
                  </div>

                  <div
                    className={`brxe-block bricks-lazy-hidden ${styles.tstAuthor}`}
                  >
                    <div
                      className={`brxe-block bricks-lazy-hidden ${styles.tstAuthorLeft}`}
                    >
                      <GoogleMark />
                      <div
                        className={`brxe-text-basic ${styles.tstAuthorName}`}
                      >
                        {slide.author}
                      </div>
                    </div>

                    <div
                      className={`brxe-block bricks-lazy-hidden ${styles.tstAuthorRight}`}
                    >
                      <div
                        className={`brxe-block bricks-lazy-hidden ${styles.tstStars}`}
                      >
                        {STAR_KEYS.map((key) => (
                          <Star key={key} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
