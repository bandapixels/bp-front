import React from "react";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./main.module.scss";

const Main: React.FunctionComponent = () => {
  return (
    <section className={styles.dcrMain}>
      <div className={styles.dcrMainWrapper}>
        <div className={styles.dcrMainImages}>
          <div className={styles.dcrMainImagesRow}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeIn}
              duration={1}
            >
              <div className={styles.dcrMainLogo}>
                <img src="/images/projects/dcr/dcr-logo.png" alt="dcr logo" />
              </div>
            </AnimationOnScroll>
            <div className={styles.dcrMainMac}>
              <img
                src="/images/projects/dcr/mac.png"
                alt="dcr interface on the computer"
              />
            </div>
          </div>
        </div>
        <div className={styles.dcrAboutWrapper}>
          <img
            src="/images/projects/dcr/about.png"
            className={styles.dcrAboutImage}
            alt="dcr about"
          />
          <div className={styles.dcrAboutText}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
            >
              <h3>About the company</h3>
            </AnimationOnScroll>
            <p>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                delay={0.5}
                as="span"
              >
                DCR Solutions is an innovative Danish IT company that digitizes
                complex workflows and develops user-supported IT systems.
              </AnimationOnScroll>
            </p>
            <p>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                delay={0.7}
                as="span"
              >
                On their platform, they create various graphs and schemes for
                displaying statistics, which step by step help to solve business
                problems , such as attracting new personnel, company expenses
                and insurance process.
              </AnimationOnScroll>
            </p>
          </div>
        </div>
      </div>
      <img
        src="/images/projects/dcr/corner.png"
        alt="corner"
        className={styles.dcrMainCorner}
      />
    </section>
  );
};

export default Main;
