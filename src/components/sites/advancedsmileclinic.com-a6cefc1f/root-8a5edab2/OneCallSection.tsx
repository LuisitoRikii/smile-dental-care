import styles from "./OneCallSection.module.css";

const BASE = "/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/images";

export function OneCallSection() {
  return (
    <section className={styles.ocSection}>
      <div id="brxe-hvnpwj" className={styles.ocHeadRow}>
        <div id="brxe-pnrgkd" className={styles.ocLogoCol}>
          <img
            id="brxe-wyjiai"
            className={styles.ocLogo}
            src={`${BASE}/logo.webp`}
            alt="Logo Advance Smile Dental Clinic"
          />
        </div>

        <div id="brxe-jjdurc" className={styles.ocHeadline}>
          <h2 id="brxe-xodbss" className={styles.ocTitle}>
            Your perfect smile starts with one call
          </h2>
          <h2 id="brxe-vtdqzm" className={styles.ocSubtitle}>
            Let’s make it happen!
          </h2>
        </div>
      </div>

      <div id="brxe-isldso" className={styles.ocTelRow}>
        <div id="brxe-qpkmop" className={`${styles.ocDivider} ${styles.ocDividerLeft}`}>
          <div className={styles.ocLine} />
        </div>

        <div id="brxe-sanddn" className={styles.ocTels}>
          <a
            id="brxe-nfmpvj"
            className={`${styles.ocTel} ${styles.ocTelHialeah}`}
            href="tel:(305) 846-7987"
          >
            Hialeah (305) 846-7987
          </a>
          <a
            id="brxe-kklsnf"
            className={`${styles.ocTel} ${styles.ocTelCoral}`}
            href="tel:786 391 0588"
          >
            Coral Gables (786) 391-0588
          </a>
        </div>

        <div id="brxe-mnsjan" className={`${styles.ocDivider} ${styles.ocDividerRight}`}>
          <div className={styles.ocLine} />
        </div>
      </div>
    </section>
  );
}
