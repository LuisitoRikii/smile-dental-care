import styles from "./LocationsSection.module.css";

const phonePath =
  "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z";
const pinPath =
  "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z";

function PhoneIcon() {
  return (
    <svg
      className={styles.locIconPhone}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={phonePath} />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      className={styles.locIconPin}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={pinPath} />
    </svg>
  );
}

const HIALEAH_TEL_LABEL = "tel:tel:(305) 846-7987";
const HIALEAH_TEL = "tel:(305) 846-7987";
const HIALEAH_MAPS = "https://maps.app.goo.gl/DmCFC1TUNu56Ze7p6";
const GABLES_TEL = "tel:(786) 391-0588";
const GABLES_MAPS = "https://maps.app.goo.gl/nKJNv3A59U8xCX2Q7";

const MAP_HIALEAH =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d459466.5172330915!2d-80.307774!3d25.883226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bb9a9598b3b9%3A0xa4d892962c3eec7a!2sAdvanced%20Smile%20Dental%20Clinic%20-%20Hialeah!5e0!3m2!1sen!2sus!4v1755812480544!5m2!1sen!2sus";
const MAP_GABLES =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28745.504041498785!2d-80.260162!3d25.764353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b7767fa96e0b%3A0xb7e4f9aaee8118a0!2sAdvanced%20Smile%20Dental%20Clinic!5e0!3m2!1sen!2sus!4v1755813393845!5m2!1sen!2sus";

export function LocationsSection() {
  return (
    <section id="brxe-zficox" className={styles.locSection}>
      <div
        id="bookonline"
        className={`${styles.bookOnlinePanel} ${styles.bookOnlinePullUp}`}
      >
        <div className={`${styles.bookButtons} ${styles.bookButtonsPullUp}`}>
          <a
            className={`${styles.bookButton} ${styles.bookButtonHialeah}`}
            href="https://advancedsmileclinic.com/hialeah/#bookonline"
          >
            Book Online Hialeah
          </a>
          <a
            className={`${styles.bookButton} ${styles.bookButtonTopGables}`}
            href="https://advancedsmileclinic.com/coral-gables/#bookonline"
          >
            Book Online Coral Gables
          </a>
        </div>

        <div className={styles.locColumns}>
          <div className={`${styles.locColumn} ${styles.locColumnLeft}`}>
            <div className={styles.locGroup}>
              <ul className={styles.locLabelList}>
                <li className={styles.locLabelItem}>
                  <a
                    className={`${styles.locLabel} ${styles.locLabelPhone}`}
                    href={HIALEAH_TEL_LABEL}
                  >
                    <PhoneIcon />
                    <span>CALL US - HIALEAH</span>
                  </a>
                </li>
              </ul>
              <a className={styles.locValue} href={HIALEAH_TEL}>
                (305) 846-7987
              </a>
            </div>

            <div className={styles.locGroup}>
              <ul className={styles.locLabelList}>
                <li className={styles.locLabelItem}>
                  <a
                    className={`${styles.locLabel} ${styles.locLabelPin}`}
                    href={HIALEAH_MAPS}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <PinIcon />
                    <span>VISIT US - HIALEAH</span>
                  </a>
                </li>
              </ul>
              <a
                className={`${styles.locValue} ${styles.locValueHialeah} ${styles.locValueAddress}`}
                href={HIALEAH_MAPS}
                target="_blank"
                rel="noreferrer"
              >
                6600 W 12th Ave, Hialeah, FL 33012
              </a>
            </div>
          </div>

          <div className={`${styles.locColumn} ${styles.locColumnRight}`}>
            <a
              className={`${styles.bookButton} ${styles.bookButtonMobile}`}
              href="https://advancedsmileclinic.com/coral-gables/#bookonline"
            >
              Book Online Coral Gables
            </a>

            <div className={styles.locGroup}>
              <ul className={styles.locLabelList}>
                <li className={styles.locLabelItem}>
                  <a
                    className={`${styles.locLabel} ${styles.locLabelPhone}`}
                    href={GABLES_TEL}
                  >
                    <PhoneIcon />
                    <span>CALL US - CORAL GABLES</span>
                  </a>
                </li>
              </ul>
              <a className={styles.locValue} href={GABLES_TEL}>
                (786) 391-0588
              </a>
            </div>

            <div className={styles.locGroup}>
              <ul className={styles.locLabelList}>
                <li className={styles.locLabelItem}>
                  <a
                    className={`${styles.locLabel} ${styles.locLabelPin}`}
                    href={GABLES_MAPS}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <PinIcon />
                    <span>VISIT US - CORAL GABLES</span>
                  </a>
                </li>
              </ul>
              <a
                className={`${styles.locValue} ${styles.locValueGables} ${styles.locValueAddress}`}
                href={GABLES_MAPS}
                target="_blank"
                rel="noreferrer"
              >
                3934 SW 8th St #306, Coral Gables, FL 33134
              </a>
            </div>
          </div>
        </div>

        <div className={styles.locMaps}>
          <div className={styles.locMapCard}>
            <div className={styles.locMapFrame}>
              <iframe
                src={MAP_HIALEAH}
                title="Advanced Smile Dental Clinic - Hialeah"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
          <div className={styles.locMapCard}>
            <div className={styles.locMapFrame}>
              <iframe
                src={MAP_GABLES}
                title="Advanced Smile Dental Clinic"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
