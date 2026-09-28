import styles from "./PromotionsSection.module.css";

const BASE = "/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/images";

export function PromotionsSection() {
  return (
    <section id="brxe-chdgmh" className={styles.promoSection}>
      <div className={styles.promoCopy}>
        <div
          className={`asc-anim-left ${styles.promoDelay} ${styles.promoCopyInner}`}
        >
          <h2 className={styles.promoEyebrow}>Affordable Dental Care with</h2>
          <h2 className={styles.promoTitle}>Special Promotions</h2>
          <div className={styles.promoParagraph}>
            <p>
              At Advanced Smile Dental Clinic, we’re making it easier (and more
              affordable) to love your smile. Take advantage of our exclusive
              Patient Specials and get the care you deserve—without breaking the
              bank. Now is the perfect time to schedule your visit and see how
              we can transform your smile!
            </p>
          </div>
          <div className={styles.promoPhones}>
            <a className={styles.promoPhone} href="tel:(305) 846-7987">
              Hialeah (305) 846-7987
            </a>
            <a
              className={`${styles.promoPhone} ${styles.promoPhoneSage}`}
              href="tel:786 391 0588"
            >
              Coral Gables (786) 391-0588
            </a>
          </div>
        </div>
      </div>
      <div className={styles.promoMedia}>
        <img
          className={`asc-anim-right ${styles.promoDelay} ${styles.promoPhoto}`}
          src={`${BASE}/promotions-photo.webp`}
          alt=""
        />
      </div>
    </section>
  );
}
