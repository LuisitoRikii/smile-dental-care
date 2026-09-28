import styles from "./AboutSection.module.css";

interface AboutCard {
  blockId: string;
  headingId: string;
  textId: string;
  rowId: string;
  shortId: string;
  buttonId: string;
  longId: string;
  title: string;
  body: string;
  cta: string;
  href: string;
}

const CARDS: AboutCard[] = [
  {
    blockId: "brxe-kbczhi",
    headingId: "brxe-skqaeb",
    textId: "brxe-ntbqch",
    rowId: "brxe-dhtynj",
    shortId: "brxe-rtyjpe",
    buttonId: "brxe-phsptw",
    longId: "brxe-linktu",
    title: "Affordable Dentistry",
    body: "Affordable prices for you and your family! Get the smile you want today! We offer financing solutions for your dental treatment.",
    cta: "READ MORE",
    href: "https://advancedsmileclinic.com/insurances/",
  },
  {
    blockId: "brxe-juomfm",
    headingId: "brxe-ubnweb",
    textId: "brxe-rfwzmz",
    rowId: "brxe-jragmh",
    shortId: "brxe-yzlalj",
    buttonId: "brxe-dcbvkk",
    longId: "brxe-ybsbfy",
    title: "Quality Dental Care",
    body: "Our staff strives to provide the best quality dental and customer service in the Coral Gables and Hialeah areas.\u00a0 Learn more by requesting\u00a0 call for your appointment",
    cta: "REQUEST A CALL",
    href: "https://advancedsmileclinic.com/new-patients-welcome/",
  },
  {
    blockId: "brxe-xlunfg",
    headingId: "brxe-przwer",
    textId: "brxe-jufxaf",
    rowId: "brxe-kefgzc",
    shortId: "brxe-sandaa",
    buttonId: "brxe-ttekhc",
    longId: "brxe-etwcbc",
    title: "Online Registration",
    body: "Fill out the welcome registration forms from the comfort of your home. Save time at our practice with our secured online system.",
    cta: "READ MORE",
    href: "https://advancedsmileclinic.com/contact-us/",
  },
];

export function AboutSection() {
  return (
    <section id="brxe-fanfpx" className={styles.aboutSection}>
      <div
        id="brxe-roadow"
        className={`asc-anim-right ${styles.animDelay} ${styles.aboutIntro}`}
      >
        <div id="brxe-ibgyjj" className={styles.aboutHead}>
          <h2 id="brxe-ejvwnk" className={styles.aboutEyebrow}>
            Your Trusted Dentists in Coral Gables & Hialeah
          </h2>
          <h2 id="brxe-qrnaal" className={styles.aboutTitle}>
            Advanced Smile Dental Clinic
          </h2>
        </div>

        <div id="brxe-korcsl" className={styles.aboutColumns}>
          <div id="brxe-udmtfw" className={styles.aboutColLeft}>
            <div id="brxe-dahjjc" className={styles.aboutText}>
              <p>
                Advanced Smile Dental Clinic, located in Coral Gables and
                Hialeah, Florida provides our patients with a comprehensive
                array of dental services including: emergency dentistry,
                cosmetic dentistry, dental implants, root canals, teeth
                extractions, teeth whitening, pediatric dentistry and even
                invisalign treatment. Dr. Laura Perez, is an honors graduate
                from New York University and is one of the most compassionate
                dental practitioners one can find.
              </p>
            </div>
          </div>

          <div id="brxe-lsflml" className={styles.aboutDivider} />

          <div id="brxe-xxjkil" className={styles.aboutColRight}>
            <div id="brxe-gbwvao" className={styles.aboutText}>
              <p>
                {"\u00a0"}Her passion for dentistry and the care of her patients
                is like none other. Come be seen by Laura Perez, DDS at Advanced
                Smile Dental Clinic today! Schedule your dental consultation
                through our online system and please, feel free to fill out the
                new patient welcome package (registration form) found on our
                patient’s information menu. Your information will be securely
                pass to our system.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="brxe-kvvqkp"
        className={`asc-anim-left ${styles.animDelay} ${styles.aboutCards}`}
      >
        <div
          id="brxe-zecrdl"
          className={styles.aboutPortrait}
          role="img"
          aria-label="Dr. Laura Perez"
        />

        <div id="brxe-jtynom" className={styles.aboutPanel}>
          {CARDS.map((card) => (
            <div key={card.blockId} id={card.blockId} className={styles.aboutGroup}>
              <h3 id={card.headingId} className={styles.aboutCardTitle}>
                {card.title}
              </h3>
              <div id={card.textId} className={styles.aboutCardText}>
                <p>{card.body}</p>
              </div>
              <div id={card.rowId} className={styles.aboutBtnRow}>
                <div id={card.shortId} className={styles.aboutRuleShort} />
                <a
                  id={card.buttonId}
                  className={styles.aboutBtn}
                  href={card.href}
                >
                  {card.cta}
                </a>
                <div id={card.longId} className={styles.aboutRuleLong} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
