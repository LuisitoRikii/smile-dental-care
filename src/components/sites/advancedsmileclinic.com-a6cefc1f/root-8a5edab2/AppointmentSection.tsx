import styles from "./AppointmentSection.module.css";

const clockPath =
  "M21.5 43C27.2022 43 32.6708 40.7348 36.7028 36.7028C40.7348 32.6708 43 27.2022 43 21.5C43 15.7978 40.7348 10.3292 36.7028 6.2972C32.6708 2.26517 27.2022 0 21.5 0C15.7978 0 10.3292 2.26517 6.2972 6.2972C2.26517 10.3292 0 15.7978 0 21.5C0 27.2022 2.26517 32.6708 6.2972 36.7028C10.3292 40.7348 15.7978 43 21.5 43ZM19.9643 6.14286V9.21429H23.0357V6.14286H19.9643ZM21.5 16.8929C22.3201 16.8929 23.091 17.1079 23.7575 17.4826L32.7752 9.59514L34.7962 11.9049L25.7816 19.7954C26.0569 20.4863 26.1609 21.2337 26.0846 21.9735C26.0083 22.7134 25.754 23.4238 25.3434 24.044C24.9328 24.6642 24.3782 25.1758 23.7269 25.5351C23.0756 25.8943 22.347 26.0905 21.6034 26.1069C20.8598 26.1233 20.1232 25.9594 19.4567 25.6293C18.7902 25.2991 18.2135 24.8125 17.776 24.211C17.3385 23.6095 17.0531 22.911 16.9442 22.1752C16.8354 21.4394 16.9063 20.6882 17.1509 19.9858L12.8601 16.555L14.7766 14.1593L19.0644 17.587C19.7708 17.1478 20.6062 16.8929 21.5 16.8929ZM6.13979 23.0357H9.21122V19.9643H6.14286L6.13979 23.0357ZM33.7826 23.0357H36.8541V19.9643H33.7826V23.0357ZM19.9643 33.7857V36.8571H23.0357V33.7857H19.9643Z";
const envelopePath =
  "M4.3 15.9669L21.5 26.814L38.7 15.9669L21.5 5.11983L4.3 15.9669ZM43 15.9669V37.6612C43 38.8119 42.547 39.9155 41.7406 40.7292C40.9342 41.5429 39.8404 42 38.7 42H4.3C3.15957 42 2.06585 41.5429 1.25944 40.7292C0.453034 39.9155 0 38.8119 0 37.6612V15.9669C0 14.3833 0.8385 13.0165 2.0855 12.2572L21.5 0L40.9145 12.2572C42.1615 13.0165 43 14.3833 43 15.9669Z";
const idSquarePath = "M9.25 35.679V33.0361H11.8929V35.679H9.25Z";
const idCardPath =
  "M13.2143 0C12.1629 0 11.1546 0.417665 10.4111 1.16111C9.66766 1.90456 9.25 2.91289 9.25 3.96429H3.96429C2.91289 3.96429 1.90456 4.38195 1.16111 5.1254C0.417664 5.86885 0 6.87718 0 7.92857V48.8929C0 49.9442 0.417664 50.9526 1.16111 51.696C1.90456 52.4395 2.91289 52.8571 3.96429 52.8571H33.0357C34.0871 52.8571 35.0954 52.4395 35.8389 51.696C36.5823 50.9526 37 49.9442 37 48.8929V7.92857C37 6.87718 36.5823 5.86885 35.8389 5.1254C35.0954 4.38195 34.0871 3.96429 33.0357 3.96429H27.75C27.75 2.91289 27.3323 1.90456 26.5889 1.16111C25.8454 0.417665 24.8371 0 23.7857 0H13.2143ZM11.8929 3.96429C11.8929 3.61382 12.0321 3.27771 12.2799 3.02989C12.5277 2.78208 12.8638 2.64286 13.2143 2.64286H23.7857C24.1362 2.64286 24.4723 2.78208 24.7201 3.02989C24.9679 3.27771 25.1071 3.61382 25.1071 3.96429V6.60714C25.1071 6.95761 24.9679 7.29372 24.7201 7.54153C24.4723 7.78935 24.1362 7.92857 23.7857 7.92857H13.2143C12.8638 7.92857 12.5277 7.78935 12.2799 7.54153C12.0321 7.29372 11.8929 6.95761 11.8929 6.60714V3.96429ZM7.92857 21.1429C7.57811 21.1429 7.242 21.2821 6.99418 21.5299C6.74636 21.7777 6.60714 22.1138 6.60714 22.4643C6.60714 22.8148 6.74636 23.1509 6.99418 23.3987C7.242 23.6465 7.57811 23.7857 7.92857 23.7857H17.1786C17.529 23.7857 17.8651 23.6465 18.113 23.3987C18.3608 23.1509 18.5 22.8148 18.5 22.4643C18.5 22.1138 18.3608 21.7777 18.113 21.5299C17.8651 21.2821 17.529 21.1429 17.1786 21.1429H7.92857ZM6.60714 15.8571C6.60714 15.5067 6.74636 15.1706 6.99418 14.9228C7.242 14.6749 7.57811 14.5357 7.92857 14.5357H28.4107C28.7612 14.5357 29.0973 14.6749 29.3451 14.9228C29.5929 15.1706 29.7321 15.5067 29.7321 15.8571C29.7321 16.2076 29.5929 16.5437 29.3451 16.7915C29.0973 17.0394 28.7612 17.1786 28.4107 17.1786H7.92857C7.57811 17.1786 7.242 17.0394 6.99418 16.7915C6.74636 16.5437 6.60714 16.2076 6.60714 15.8571ZM6.60714 31.7143C6.60714 31.3638 6.74636 31.0277 6.99418 30.7799C7.242 30.5321 7.57811 30.3929 7.92857 30.3929H13.2143C13.5647 30.3929 13.9009 30.5321 14.1487 30.7799C14.3965 31.0277 14.5357 31.3638 14.5357 31.7143V37C14.5357 37.3505 14.3965 37.6866 14.1487 37.9344C13.9009 38.1822 13.5647 38.3214 13.2143 38.3214H7.92857C7.57811 38.3214 7.242 38.1822 6.99418 37.9344C6.74636 37.6866 6.60714 37.3505 6.60714 37V31.7143ZM23.7857 37C24.8371 37 25.8454 36.5823 26.5889 35.8389C27.3323 35.0954 27.75 34.0871 27.75 33.0357C27.75 31.9843 27.3323 30.976 26.5889 30.2325C25.8454 29.4891 24.8371 29.0714 23.7857 29.0714C22.7343 29.0714 21.726 29.4891 20.9825 30.2325C20.2391 30.976 19.8214 31.9843 19.8214 33.0357C19.8214 34.0871 20.2391 35.0954 20.9825 35.8389C21.726 36.5823 22.7343 37 23.7857 37ZM15.8571 42.9464C15.8571 40.1503 21.1389 38.7416 23.7857 38.7416C26.4325 38.7416 31.7143 40.1503 31.7143 42.9464V46.25H15.8571V42.9464Z";

function ClockIcon() {
  return (
    <svg
      className={styles.apptIcon}
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={clockPath}
        fill="white"
      />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg
      className={styles.apptIcon}
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="42"
      viewBox="0 0 43 42"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={envelopePath} fill="white" />
    </svg>
  );
}

function RegistrationIcon() {
  return (
    <svg
      className={styles.apptIcon}
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="53"
      viewBox="0 0 37 53"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={idSquarePath} fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={idCardPath}
        fill="white"
      />
    </svg>
  );
}

export function AppointmentSection() {
  return (
    <section id="brxe-yurdka" className={styles.apptSection}>
      <div className={styles.apptTextRow}>
        <div className={styles.apptTextCol}>
          <div className={styles.apptEyebrow}>Plan Your Visit Today</div>
          <h2 className={styles.apptTitle}>Request An Appointment</h2>
          <div className={styles.apptParagraph}>
            <p>
              Stay informed with tips, news, and insights to keep your smile
              healthy and confident. Explore our blog and take your oral health
              knowledge to the next level.
            </p>
          </div>
        </div>
        <div className={styles.apptTextSpacer} />
      </div>

      <div className={styles.apptCardRow}>
        <div className={styles.apptCardSpacer} />
        <div className={`${styles.apptCard} ${styles.apptCardPullUp}`}>
          <div className={styles.apptCardItem}>
            <ul className={styles.apptCardLabelList}>
              <li className={styles.apptCardLabelItem}>
                <ClockIcon />
                <span>OPENING HOURS</span>
              </li>
            </ul>
            <div className={styles.apptCardValue}>9am-6pm</div>
          </div>

          <div className={styles.apptCardItem}>
            <ul className={styles.apptCardLabelList}>
              <li className={styles.apptCardLabelItem}>
                <EnvelopeIcon />
                <span>CONTACT US</span>
              </li>
            </ul>
            <div className={styles.apptCardValue}>
              <p>
                <a
                  className={styles.apptCardLink}
                  href="mailto:admin@advancedsmileclinic.com"
                >
                  admin@advancedsmileclinic.com
                </a>
              </p>
            </div>
          </div>

          <div className={styles.apptCardItem}>
            <ul className={styles.apptCardLabelList}>
              <li className={styles.apptCardLabelItem}>
                <RegistrationIcon />
                <span>ONLINE REGISTRATION FORM</span>
              </li>
            </ul>
            <div className={styles.apptCardValue}>
              Fill out our Welcome package online
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
