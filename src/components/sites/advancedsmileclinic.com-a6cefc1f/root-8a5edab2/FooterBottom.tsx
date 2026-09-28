import styles from "./FooterBottom.module.css";

const ARROW_PATH =
  "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z";

const CIRCLE_PATH =
  "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";

const POSTS = [
  {
    title: "Root Canal vs Tooth Extraction in Coral Gables and Hialeah, FL",
    href: "https://advancedsmileclinic.com/root-canal-vs-tooth-extraction-in-coral-gables-and-hialeah-fl/",
  },
  {
    title: "What Is Root Canal Therapy and When Is It Needed? in Coral Gables and Hialeah, FL",
    href: "https://advancedsmileclinic.com/what-is-root-canal-therapy-and-when-is-it-needed-in-coral-gables-and-hialeah-fl/",
  },
  {
    title: "Some Signs That Indicate You Should Visit the Dentist in Coral Gables and Hialeah, FL",
    href: "https://advancedsmileclinic.com/some-signs-that-indicate-you-should-visit-the-dentist-in-coral-gables-and-hialeah-fl/",
  },
];

export function FooterBottom() {
  return (
    <div className={styles.footerBottom}>
      <div id="brxe-tjdwpw" className={styles.footerBlogs}>
        <div id="brxe-hrojhr" className={styles.footerBlogsHead}>
          <h2 id="brxe-bvjvtn" className={styles.footerBlogsTitle}>
            BLOGS
          </h2>
        </div>

        <div id="brxe-zxowcz" className={styles.footerBlogsList}>
          <ul className={styles.footerPosts}>
            {POSTS.map((post) => (
              <li key={post.href} className={styles.footerPost}>
                <div className={styles.footerPostInner}>
                  <div className={styles.footerPostContent}>
                    <h3 className={styles.footerPostTitle}>
                      <div className={styles.footerPostItem}>
                        <div className={styles.footerPostIconWrap}>
                          <svg
                            className={styles.footerPostDot}
                            viewBox="0 0 512 512"
                            width={8}
                            height={8}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d={CIRCLE_PATH} fill="currentColor" />
                          </svg>
                        </div>
                        <div className={styles.footerPostTitleWrap}>
                          <a
                            href={post.href}
                            aria-label={`Read more about ${post.title}`}
                          >
                            {post.title}
                          </a>
                        </div>
                      </div>
                    </h3>
                    <div className={styles.footerReadMoreWrap}>
                      <a className={styles.footerReadMore} href={post.href}>
                        <svg
                          className={styles.footerReadMoreIcon}
                          viewBox="0 0 512 512"
                          width={16}
                          height={16}
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d={ARROW_PATH} fill="currentColor" />
                        </svg>
                        {" Read More"}
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div id="brxe-xvedjt" className={styles.footerCopyright}>
        <div id="brxe-ngtswn" className={styles.footerCopyrightText}>
          <p className={styles.footerCopyrightLine}>
            {"Copyright © 2025 Advanced Smile Clinic , All rights reserved."}
            <br />
            <span className={styles.footerUnderline}>
              <a href="/privacy-policy/">Privacy Policy</a>
            </span>
            {"\u00a0|\u00a0"}
            <span className={styles.footerUnderline}>
              <a href="/accessibility-statement/">{"Accessibility\u00a0"}</a>
            </span>
            {"|\u00a0"}
            <span className={styles.footerUnderline}>
              <a href="/disclaimer/">Disclaimer</a>
            </span>
            {" | Website designed by "}
            <a
              href="https://www.geekdentalmarketing.com/"
              target="_blank"
              rel="noopener"
            >
              <strong>Geek Dental Marketing®.</strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
