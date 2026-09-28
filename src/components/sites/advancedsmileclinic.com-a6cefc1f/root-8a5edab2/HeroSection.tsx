import styles from "./HeroSection.module.css";

const HERO_VIDEO =
  "/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/videos/hero.mp4";
const HERO_POSTER =
  "/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/images/hero-poster.webp";

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroVideoWrap}>
        <video
          className={styles.heroVideo}
          src={HERO_VIDEO}
          poster={HERO_POSTER}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className={`asc-anim-left ${styles.heroContent}`}>
        <div className={styles.heroHeadingBlock}>
          <h1 className="text-[70px] leading-[98px] font-semibold text-white">
            CREATING BEAUTIFUL
            <br />
            SMILES
          </h1>
        </div>
        <div className={styles.heroButtons}>
          <a className={styles.heroBtnHialeah} href="tel:305 846 7987">
            Hialeah 305 846 7987
          </a>
          <a className={styles.heroBtnCoral} href="tel:786 391 0588">
            Coral Gables 786 391 0588
          </a>
        </div>
      </div>
    </section>
  );
}
