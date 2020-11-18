import React from "react";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./analysis.module.scss";

const Analysis: React.FunctionComponent = () => {
  return (
    <section className={styles.dcrAnalysisWrapper}>
      <AnimationOnScroll animationName={AnimationNames.fadeInUp} duration={1}>
        <h3>Analysis and solutions</h3>
      </AnimationOnScroll>
      <div className={styles.dcrAnalysisList}>
        <div className={styles.dcrAnalysisItem}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInLeft}
            duration={0.5}
          >
            <div className={styles.dcrAnalysisItemImages}>
              <div className={styles.dcrAnalysisItemNumber}>
                <span>1</span>
              </div>
              <img src="/images/projects/dcr/analysis.png" alt="" />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInRight}
            duration={0.5}
          >
            <div className={styles.dcrAnalysisItemContent}>
              <h4>Detailed analysis</h4>
              <p>
                In order to provide comprehensive solution to the existing
                design problems, we studied the platform in detail, identifying
                its weaknesses.
              </p>
            </div>
          </AnimationOnScroll>
        </div>
        <div className={styles.dcrAnalysisItem}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInLeft}
            duration={0.5}
            delay={0.5}
          >
            <div className={styles.dcrAnalysisItemImages}>
              <div className={styles.dcrAnalysisItemNumber}>
                <span>2</span>
              </div>
              <img src="/images/projects/dcr/discuss.png" alt="" />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInRight}
            duration={0.5}
            delay={0.5}
          >
            <div className={styles.dcrAnalysisItemContent}>
              <h4>Defining business goals</h4>
              <p>
                Our specialists analyzed customers’ complaints, discussed their
                wishes, determined the goals and objectives of the service, as
                well as conducted analytics based on heat maps, discussed key
                user scenarios and prioritized them.
              </p>
            </div>
          </AnimationOnScroll>
        </div>
        <div className={styles.dcrAnalysisItem}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInLeft}
            duration={0.5}
            delay={0.7}
          >
            <div className={styles.dcrAnalysisItemImages}>
              <div className={styles.dcrAnalysisItemNumber}>
                <span>3</span>
              </div>
              <img src="/images/projects/dcr/road.png" alt="" />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInRight}
            duration={0.5}
            delay={0.7}
          >
            <div className={styles.dcrAnalysisItemContent}>
              <h4>Proposal with the solutions</h4>
              <p>
                It was obvious that the DCR Solutions platform needed a
                significant upgrade. We suggested updating the interface,
                creating a new UI-kit and shorter user scripts, changing the
                placement of individual blocks and elements for better user
                experience.
              </p>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
