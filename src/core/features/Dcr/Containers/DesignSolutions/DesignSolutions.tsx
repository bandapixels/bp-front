import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./designSolutions.module.scss";

const DesignSolutions: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.dcrDesignWrapper}>
      <img
        src="/images/projects/dcr/design-map-left.png"
        className={styles.dcrDesignMapLeft}
        alt="map-left"
      />
      <img
        src="/images/projects/dcr/design-map-right.png"
        className={styles.dcrDesignMapRight}
        alt="map-right"
      />
      <img
        src="/images/projects/dcr/corner-top.png"
        alt="corner"
        className={styles.dcrDesignCorner}
      />
      <div className={styles.dcrDesignMain}>
        <div className={styles.dcrDesignMainLeft}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
          >
            <h3>Design concepts</h3>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.5}
          >
            <h5>
              <span>80+</span> UI elements created
            </h5>
          </AnimationOnScroll>
          <p>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              delay={0.7}
              as="span"
            >
              While working on the UI design, we redesigned all the buttons on
              the site, visually expanding them and making them more rounded,
              while leaving the original blue color, which helped to preserve
              the associative connections and simplify user interactions on the
              site.
            </AnimationOnScroll>
          </p>
        </div>
        <div className={styles.dcrDesignMainRight}>
          <img
            src={`/images/projects/dcr/design-solutions${
              isMobile ? "-mobile" : ""
            }.png`}
            alt=""
          />
        </div>
      </div>
      <div className={styles.dcrDesignIcons}>
        <div className={styles.dcrDesignIconsLeft}>
          <img
            src={`/images/projects/dcr/icons${isMobile ? "-mobile" : ""}.png`}
            alt=""
          />
        </div>
        <div className={styles.dcrDesignIconsRight}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.2}
          >
            <h5>
              <span>50+</span> custom icons
            </h5>
          </AnimationOnScroll>
          <p>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              delay={0.5}
              as="span"
            >
              Adding unified icons to certain sections of the portal refreshed
              the appearance, diluted a large amount of text, and strengthened
              the user's associative connections with specific actions.
            </AnimationOnScroll>
          </p>
        </div>
      </div>
      <div className={styles.dcrDesignDesigners}>
        <div className={styles.dcrDesignDesignersLeft}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.2}
          >
            <h5>
              <span>4</span> ideas of user interactions
            </h5>
          </AnimationOnScroll>
          <p>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              delay={0.5}
              as="span"
            >
              Our team also managed to successfully combine the serious topics
              of the portal and thematic images, without distracting the
              attention of users.
            </AnimationOnScroll>
          </p>
        </div>
        <div className={styles.dcrDesignDesignersRight}>
          <img
            src={`/images/projects/dcr/creative-designers${
              isMobile ? "-mobile" : ""
            }.png`}
            alt=""
          />
        </div>
      </div>
      <div className={styles.dcrDesignAccents}>
        <div className={styles.dcrDesignAccentsLeft}>
          <img
            src={`/images/projects/dcr/accent${isMobile ? "-mobile" : ""}.png`}
            alt=""
          />
        </div>
        <div className={styles.dcrDesignAccentsRight}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.2}
          >
            <h5>
              <span>7</span> ideas of highlighting
            </h5>
          </AnimationOnScroll>
          <p>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              delay={0.5}
              as="span"
            >
              By adding more air between the elements of the site and drawing
              the boundaries between the blocks, we managed to make the portal
              visually easier, and the interaction on the site more convenient.
            </AnimationOnScroll>
          </p>
        </div>
      </div>
      <div className={styles.dcrDesignNavigation}>
        <div className={styles.dcrDesignNavigationLeft}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.2}
          >
            <h5>
              <span>3</span> ways to show easy navigation
            </h5>
          </AnimationOnScroll>
          <p>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              delay={0.5}
              as="span"
            >
              By creating checkboxes we have improved the process of finding
              necessary information on the site, thus increasing the probability
              for a user to solve the problem and find the answer.
            </AnimationOnScroll>
          </p>
        </div>
        <div className={styles.dcrDesignNavigationRight}>
          <img
            src={`/images/projects/dcr/navigation${
              isMobile ? "-mobile" : ""
            }.png`}
            alt=""
          />
        </div>
      </div>
      <div className={styles.dcrDesignPopup}>
        <img src="/images/projects/dcr/popup.png" alt="" />
      </div>
    </section>
  );
};

export default DesignSolutions;
