import styles from "./WhyChooseUsSection.module.css";

const BASE = "/sites/advancedsmileclinic.com-a6cefc1f/root-8a5edab2/images";

interface WhyCardData {
  title: string;
  body: string;
}

const LEFT_CARDS: WhyCardData[] = [
  {
    title: "We Treat You Like Family",
    body: "At Advanced Smile, you’re more than just a patient — you’re family. We take pride in building real relationships with the people we care for.",
  },
  {
    title: "Family-Owned, Family-Focused",
    body: "As a family-owned practice in Coral Gables and Hialeah, we’re here to care for your whole family with general, cosmetic, and emergency dentistry — no appointment needed for urgent visits.",
  },
  {
    title: "Your Smile, Your Needs",
    body: "We’re here to help you achieve your healthiest smile. That starts with listening — really listening — to your goals, concerns, and feedback.",
  },
];

const RIGHT_CARDS: WhyCardData[] = [
  {
    title: "Everything You Need, All in One Place",
    body: "From cleanings and fillings to crowns, whitening, and Invisalign, we offer a full range of services to keep your smile in top shape.",
  },
  {
    title: "Comfortable, Quality Care — On Your Time",
    body: "We’re committed to providing high-quality, efficient care in a welcoming environment, with flexible hours that work around your schedule.",
  },
];

function WhyCard({ card, right }: { card: WhyCardData; right?: boolean }) {
  return (
    <div
      className={right ? `${styles.whyCard} ${styles.whyCardRight}` : styles.whyCard}
    >
      <h3 className={styles.whyCardTitle}>{card.title}</h3>
      <div className={styles.whyCardBody}>
        <p>{card.body}</p>
      </div>
    </div>
  );
}

export function WhyChooseUsSection() {
  return (
    <section id="brxe-bqoeeh" className={styles.why}>
      <div className={styles.whyHead}>
        <h2 className={styles.whyEyebrow}>
          Patient-First Dentistry You Can Trust
        </h2>
        <h2 className={styles.whyTitle}>Why Choose Us!</h2>
      </div>

      <div className={styles.whyRow}>
        <div className={styles.whyMobilePhoto}>
          <img
            className={styles.whyMobileImg}
            src={`${BASE}/why-mobile.webp`}
            alt="two sisters smiling showing braces"
          />
        </div>

        <div className={styles.whyColLeft}>
          {LEFT_CARDS.map((card) => (
            <WhyCard key={card.title} card={card} />
          ))}
        </div>

        <div className={styles.whyCenter} aria-hidden="true" />

        <div className={styles.whyColRight}>
          {RIGHT_CARDS.map((card) => (
            <WhyCard key={card.title} card={card} right />
          ))}
          <div className={styles.whyBtnWrap}>
            <a
              className={`${styles.whyRadial} ${styles.whyBtn}`}
              href="https://advancedsmileclinic.com/contact-us/"
            >
              BOOK ONLINE
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
