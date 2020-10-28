import React from "react";
import styles from "./colors.module.scss";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";

const Colors: React.FunctionComponent = () => {
  return (
    <section className={styles.keepersColors}>
      <div className={styles.keepersColorsWrapper}>
        <AnimationOnScroll animationName={AnimationNames.fadeInUp} duration={1}>
          <h3>Colors & Typography</h3>
        </AnimationOnScroll>
        <div className={styles.keepersColorsList}>
          <div className={styles.keepersColorsItem}>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.5}
            >
              <img
                src="/images/projects/caseKeepers/color-blue.png"
                alt="Blue color"
              />
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.7}
              delay={0.7}
            >
              <p>#376EB2</p>
            </AnimationOnScroll>
          </div>
          <div className={styles.keepersColorsItem}>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.5}
              delay={0.1}
            >
              <img
                src="/images/projects/caseKeepers/color-green.png"
                alt="Green color"
              />
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.7}
              delay={0.8}
            >
              <p>#0B9219</p>
            </AnimationOnScroll>
          </div>
          <div className={styles.keepersColorsItem}>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.5}
              delay={0.2}
            >
              <img
                src="/images/projects/caseKeepers/color-brown.png"
                alt="Brown color"
              />
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.7}
              delay={0.9}
            >
              <p>#E69D44</p>
            </AnimationOnScroll>
          </div>
          <div className={styles.keepersColorsItem}>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.5}
              delay={0.3}
            >
              <img
                src="/images/projects/caseKeepers/color-violet.png"
                alt="Violet color"
              />
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.7}
              delay={1}
            >
              <p>#AD6DA9</p>
            </AnimationOnScroll>
          </div>
          <div className={styles.keepersColorsItem}>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.5}
              delay={0.4}
            >
              <img
                src="/images/projects/caseKeepers/color-red.png"
                alt="Red color"
              />
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.7}
              delay={1.1}
            >
              <p>#F86B6B</p>
            </AnimationOnScroll>
          </div>
        </div>
        <div className={styles.keepersColorsFont}>
          <div className={styles.keepersColorsFontImg}>
            <img src="/images/projects/caseKeepers/color-font.png" alt="Font" />
          </div>
          <div className={styles.keepersColorsFontSymbols}>
            <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>0123456789 &nbsp;&nbsp;&nbsp; =+-%</p>
          </div>
        </div>
      </div>
      <img
        src="/images/projects/caseKeepers/color-decor-1.png"
        alt="CaseKeepers decor"
        className={styles.keepersColorsDecor1}
      />
      <img
        src="/images/projects/caseKeepers/color-decor-2.png"
        alt="CaseKeepers decor"
        className={styles.keepersColorsDecor2}
      />
    </section>
  );
};

export default Colors;
