import React from "react";
import AnimationOnScroll, {
  AnimationNames,
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import useIsMobile from "../../../../utils/useIsMobile";
import styles from "./aboutTheProject.module.scss";

const AboutTheProject: React.FunctionComponent = () => {
  useIsMobile;
  return (
    <section className={styles.appNaviAbout}>
      <div className={styles.appNaviWrapper}>
        <div className={styles.appNaviAboutLeft}>
          <img src="/images/projects/AppNavi/laptop.png" alt="AppNavi Laptop" />
        </div>
        <div className={styles.appNaviAboutRight}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
          >
            <h3 className="appNaviH3 aboutTitle">
              <div>About</div>&nbsp;<div>the project</div>
            </h3>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.25}
          >
            <p className="appNaviParagraph">
              The <span className="blueText">AppNavi</span> application
              successfully substitutes boring study guides on using different
              programs and instructors, suggesting engaging interactivity
              instead. AppNavi eliminates the necessity of hiring a specialist
              for training new employees, which economizes time and budget.
            </p>
          </AnimationOnScroll>
        </div>
      </div>
      <div className={styles.textForMobile}>
        <p className="appNaviParagraph">
          The <span className="blueText">AppNavi</span> application successfully
          substitutes boring study guides on using different programs and
          instructors, suggesting engaging interactivity instead. AppNavi
          eliminates the necessity of hiring a specialist for training new
          employees, which economizes time and budget.
        </p>
      </div>
    </section>
  );
};

export default AboutTheProject;
