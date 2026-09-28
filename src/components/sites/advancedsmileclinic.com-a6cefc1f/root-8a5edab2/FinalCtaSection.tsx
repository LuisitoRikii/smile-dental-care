import styles from "./FinalCtaSection.module.css";

const BASE = "/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/images";

const FACEBOOK_PATH =
  "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z";

const X_PATH =
  "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z";

const INSTAGRAM_PATH =
  "M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z";

const PHONE_PATH =
  "M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z";

const PIN_PATH =
  "M172.268 501.67C26 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z";

const CIRCLE_PATH =
  "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";

const YELP_PATH = "M7.31871 0C5.63097 0 4.01236 0.670453 2.81894 1.86387C1.62553 3.05728 0.955078 4.6759 0.955078 6.36364V28.6364C0.955078 30.3241 1.62553 31.9427 2.81894 33.1361C4.01236 34.3295 5.63097 35 7.31871 35H29.5914C31.2792 35 32.8978 34.3295 34.0912 33.1361C35.2846 31.9427 35.9551 30.3241 35.9551 28.6364V6.36364C35.9551 4.6759 35.2846 3.05728 34.0912 1.86387C32.8978 0.670453 31.2792 0 29.5914 0H7.31871ZM17.1187 4.77591C17.8346 4.79659 18.5505 4.91909 19.0914 5.22295C19.2824 5.33114 19.4112 5.49341 19.4987 5.63818C19.5894 5.78773 19.6578 5.95795 19.7103 6.12977C19.8185 6.47341 19.8901 6.89818 19.941 7.35477C20.0428 8.2775 20.0635 9.43568 20.0444 10.578C20.0062 12.8577 19.8074 15.1868 19.731 15.6482C19.6355 16.2257 19.2474 16.843 18.6619 17.1405C18.335 17.309 17.9587 17.3553 17.6008 17.2709C17.2189 17.1818 16.8674 16.9527 16.5539 16.6091C15.9971 15.9934 14.8326 14.1909 13.8224 12.3375C13.3245 11.4347 12.8731 10.5071 12.4701 9.55818C12.1233 8.715 11.8592 7.88614 11.8592 7.27045C11.8592 6.57046 12.3842 6.07409 12.8933 5.7575C13.4342 5.42182 14.1389 5.16886 14.866 5.005C15.6057 4.8394 16.3624 4.7625 17.1203 4.77591H17.1187ZM28.6671 17.2614C28.8787 16.7952 28.8342 16.2273 28.7164 15.7389C28.579 15.1998 28.3658 14.6829 28.0833 14.2036C27.8135 13.7272 27.4686 13.2975 27.0619 12.9309C26.696 12.6175 26.1837 12.3264 25.6205 12.425C25.1305 12.5125 24.6119 12.8227 24.1426 13.1695C23.6261 13.5638 23.1371 13.9927 22.6789 14.4534C21.9098 15.2142 21.1933 16.0263 20.5344 16.8843C20.1558 17.403 19.898 18.0775 20.0539 18.6773C20.0954 18.8454 20.1729 19.0025 20.2811 19.1377C20.3894 19.2728 20.5257 19.3828 20.6808 19.46C20.9958 19.6191 21.368 19.6461 21.7546 19.5905L21.8883 19.5714C22.846 19.4314 24.2842 19.223 25.5633 18.9111C26.1974 18.7652 26.8176 18.564 27.4167 18.3098C27.9099 18.0855 28.4412 17.7593 28.6671 17.2614ZM21.8533 20.6277C21.376 20.5434 20.8446 20.5705 20.4739 20.9427C20.1033 21.315 20.0858 21.84 20.1701 22.2759C20.1987 22.427 20.2687 22.6275 20.3467 22.8295C20.431 23.0459 20.5424 23.3068 20.6728 23.5932C20.9337 24.1691 21.2789 24.8643 21.656 25.542C22.0314 26.2182 22.4467 26.8943 22.8492 27.4225C23.0496 27.685 23.2564 27.9252 23.4649 28.113C23.6589 28.288 23.9167 28.4757 24.2174 28.533C24.7185 28.6268 25.2355 28.4057 25.638 28.167C26.0676 27.9077 26.5019 27.5418 26.8821 27.152C27.2624 26.7607 27.6076 26.3232 27.8526 25.9064C27.9751 25.6995 28.0801 25.4832 28.1485 25.2716C28.2297 25.0499 28.2548 24.8117 28.2217 24.578C28.1708 24.2709 27.9624 24.0211 27.8001 23.8541C27.5886 23.6447 27.3598 23.4536 27.116 23.283C26.591 22.9043 25.9101 22.5002 25.2244 22.1295C24.5728 21.7765 23.9084 21.4474 23.2326 21.1432C22.971 21.0247 22.7063 20.9133 22.4387 20.8091C22.249 20.7324 22.0531 20.6717 21.8533 20.6277ZM17.8712 21.2991C18.506 21.4423 18.8608 22.0007 18.9546 22.6959C19.0469 23.3705 19.0708 24.9598 18.9912 26.4234C18.9514 27.1616 18.8846 27.8918 18.7812 28.4773C18.7389 28.7475 18.6734 29.0137 18.5855 29.2727C18.5155 29.4716 18.3946 29.7516 18.1608 29.9266C17.9525 30.0699 17.7131 30.1615 17.4624 30.1939C17.2109 30.2281 16.9566 30.2361 16.7035 30.2177C16.1314 30.1721 15.5662 30.0622 15.0187 29.89C14.4744 29.7304 13.9526 29.5021 13.466 29.2107C13.2481 29.079 13.05 28.9173 12.8774 28.7302C12.6887 28.5324 12.5688 28.2792 12.5353 28.008C12.5249 27.7416 12.5705 27.4761 12.6689 27.2284C12.758 26.9802 12.8885 26.7034 13.0396 26.4202C13.3435 25.8523 13.7587 25.2032 14.1899 24.5811C14.6194 23.9575 15.0744 23.3498 15.4594 22.8582C15.8349 22.3809 16.1721 21.9832 16.363 21.805C16.748 21.4423 17.3017 21.1702 17.8712 21.2991ZM13.2878 16.7045C14.6814 17.1866 16.0337 17.788 16.3869 17.9964C16.8324 18.2573 17.1537 18.7107 17.1871 19.2277C17.2205 19.7845 16.9167 20.2857 16.3583 20.572C15.8237 20.8441 14.3649 21.3357 12.9362 21.6825C12.2124 21.8575 11.4694 22.0055 10.8299 22.0707C10.5101 22.1025 10.2014 22.1184 9.9278 22.1009C9.65251 22.0953 9.3817 22.0301 9.13394 21.91C8.64712 21.6507 8.39576 21.1145 8.26531 20.6405C8.12459 20.0971 8.06931 19.5351 8.10144 18.9748C8.1269 18.402 8.22871 17.815 8.41962 17.3202C8.60258 16.8461 8.91281 16.337 9.43303 16.1175C9.69394 16.0061 9.99462 15.9839 10.2699 15.9918C10.5562 16.0014 10.8728 16.0443 11.1974 16.1095C11.8464 16.2368 12.5846 16.4595 13.2878 16.7045Z";

const SOCIALS = [
  {
    href: "https://www.facebook.com/advancedsmileclinic/",
    label: "Facebook",
    path: FACEBOOK_PATH,
  },
  { href: "https://x.com/advancedsmile1", label: "X", path: X_PATH },
  {
    href: "https://www.instagram.com/advancedsmileclinic/",
    label: "Instagram",
    path: INSTAGRAM_PATH,
  },
];

const SERVICES = [
  {
    title: "General Dentistry",
    href: "https://advancedsmileclinic.com/general-dentistry/",
  },
  {
    title: "Emergency Dentistry",
    href: "https://advancedsmileclinic.com/emergency-dentistry/",
  },
  { title: "Root Canals", href: "https://advancedsmileclinic.com/root-canals/" },
  {
    title: "Gum Disease",
    href: "https://advancedsmileclinic.com/periodontal-gum-disease/",
  },
  { title: "Oral Surgery", href: "https://advancedsmileclinic.com/oral-surgery/" },
  {
    title: "Cosmetic Dentistry",
    href: "https://advancedsmileclinic.com/cosmetic-dentistry/",
  },
  {
    title: "Invisalign",
    href: "https://advancedsmileclinic.com/invisalign-treatment/",
  },
  { title: "Teeth Whitening ", href: "https://advancedsmileclinic.com/teeth-whitening/" },
  {
    title: "Dental Implants",
    href: "https://advancedsmileclinic.com/oral-surgery/dental-implants/",
  },
];

export function FinalCtaSection() {
  return (
    <>
      <div id="brxe-wclcic" className={styles.finalCtaIntro}>
        <div id="brxe-ecevvu" className={styles.finalCtaIntroTitle}>
          Two locations. one goal. your best smile.
        </div>
        <p id="brxe-epziwo" className={styles.finalCtaIntroSub}>
          Call now to schedule in Coral Gables or Hialeah!
        </p>
      </div>

      <section id="brxe-jisepk" className={styles.finalCtaSection}>
        <div id="brxe-reinkj" className={styles.finalCtaContainer}>
          <div id="brxe-ibjvef" className={styles.finalCtaTop}>
            <div id="brxe-wvzufn" className={styles.finalCtaLogoRow}>
              <img
                id="brxe-khnern"
                className={styles.finalCtaLogo}
                src={`${BASE}/logo-white.webp`}
                alt="logo-white"
                width={440}
                height={314}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div id="brxe-exgvzd" className={styles.finalCtaSocials}>
              {SOCIALS.map((social) => (
                <a
                  key={social.href}
                  className={styles.finalCtaSocialLink}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className={styles.finalCtaSocialIcon}
                    viewBox="0 0 448 512"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d={social.path} fill="currentColor" />
                  </svg>
                </a>
              ))}
              <a
                className={`${styles.finalCtaSocialLink} ${styles.finalCtaSocialLinkYelp}`}
                href="https://www.yelp.com/biz/advanced-smile-dental-clinic-coral-gables"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className={styles.finalCtaYelpIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 36 35"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d={YELP_PATH}
                    fill="#ffffff"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div id="brxe-mnzhzh" className={styles.finalCtaRule} />

        <div id="brxe-vjcoge" className={styles.finalCtaColumns}>
          <div id="brxe-pdjlww" className={styles.finalCtaColumn}>
            <a
              id="brxe-artufx"
              className={styles.finalCtaPill}
              href="https://advancedsmileclinic.com/our-dental-services/"
            >
              DENTAL SERVICES
            </a>
            <ul id="brxe-vgsreh" className={styles.finalCtaServices}>
              {SERVICES.map((service) => (
                <li key={service.href} className={styles.finalCtaServiceItem}>
                  <div className={styles.finalCtaServiceRow}>
                    <span className={styles.finalCtaServiceDot}>
                      <svg
                        viewBox="0 0 512 512"
                        width={8}
                        height={8}
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d={CIRCLE_PATH} fill="currentColor" />
                      </svg>
                    </span>
                    <a href={service.href}>
                      <span className={styles.finalCtaServiceTitle}>
                        {service.title}
                      </span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div id="brxe-qrpeph" className={styles.finalCtaColumn}>
            <a
              id="brxe-qvlgkm"
              className={`${styles.finalCtaPill} ${styles.finalCtaPillBook}`}
              href="https://advancedsmileclinic.com/hialeah/#bookonline"
            >
              BOOK ONLINE HIALEAH
            </a>
            <div id="brxe-huibzb" className={styles.finalCtaInfo}>
              <ul id="brxe-fyglkl" className={styles.finalCtaInfoList}>
                <li className={styles.finalCtaInfoItem}>
                  <a
                    className={styles.finalCtaPhoneLink}
                    href="tel:(305) 846-7987"
                  >
                    <span className={styles.finalCtaPhoneIcon}>
                      <svg
                        viewBox="0 0 512 512"
                        width={22}
                        height={22}
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d={PHONE_PATH} fill="currentColor" />
                      </svg>
                    </span>
                    <span className={styles.finalCtaInfoText}>
                      (305) 846-7987
                    </span>
                  </a>
                </li>
              </ul>
              <ul id="brxe-wpfbik" className={styles.finalCtaInfoList}>
                <li className={styles.finalCtaInfoItem}>
                  <a
                    className={styles.finalCtaAddressLink}
                    href="https://maps.app.goo.gl/DmCFC1TUNu56Ze7p6"
                  >
                    <span className={styles.finalCtaAddressIcon}>
                      <svg
                        viewBox="0 0 384 512"
                        width={21}
                        height={28}
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d={PIN_PATH} fill="currentColor" />
                      </svg>
                    </span>
                    <span className={styles.finalCtaInfoText}>
                      6600 W 12th Ave, Hialeah, FL 33012
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div id="brxe-zirhax" className={styles.finalCtaColumn}>
            <a
              id="brxe-isainz"
              className={`${styles.finalCtaPill} ${styles.finalCtaPillBook}`}
              href="https://advancedsmileclinic.com/coral-gables/#bookonline"
            >
              BOOK ONLINE CORAL GABLES
            </a>
            <div id="brxe-nlgkes" className={styles.finalCtaInfo}>
              <ul id="brxe-lgionu" className={styles.finalCtaInfoList}>
                <li className={styles.finalCtaInfoItem}>
                  <a
                    className={styles.finalCtaPhoneLink}
                    href="tel:(786) 391-0588"
                  >
                    <span className={styles.finalCtaPhoneIcon}>
                      <svg
                        viewBox="0 0 512 512"
                        width={22}
                        height={22}
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d={PHONE_PATH} fill="currentColor" />
                      </svg>
                    </span>
                    <span className={styles.finalCtaInfoText}>
                      (786) 391-0588
                    </span>
                  </a>
                </li>
              </ul>
              <ul id="brxe-onynyd" className={styles.finalCtaInfoList}>
                <li className={styles.finalCtaInfoItem}>
                  <a
                    className={styles.finalCtaAddressLink}
                    href="https://maps.app.goo.gl/nKJNv3A59U8xCX2Q7"
                  >
                    <span className={styles.finalCtaAddressIcon}>
                      <svg
                        viewBox="0 0 384 512"
                        width={21}
                        height={28}
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d={PIN_PATH} fill="currentColor" />
                      </svg>
                    </span>
                    <span className={styles.finalCtaInfoText}>
                      3934 SW 8th St #306, Coral Gables, FL 33134
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
