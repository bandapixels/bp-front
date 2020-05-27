import React from "react";
import AnimationOnScroll from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./results.module.scss";

const Results: React.FunctionComponent = () => {
  return (
    <section className={styles.appNaviResults}>
      <div className={styles.appNaviResultsContainer}>
        <AnimationOnScroll animationName="fadeInUp" duration={1}>
          <h3 className="appNaviH3">Results</h3>
        </AnimationOnScroll>
        <AnimationOnScroll animationName="fadeInUp" duration={1} delay={0.5}>
          <p className="appNaviParagraph resultText">
            Getting down to the project realization, the owners of the AppNavi
            brand have distinguished us among other companies yet at the initial
            stage of specialist selection and gave preference to cooperation
            with us.
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll animationName="zoomIn" duration={1} delay={1}>
          <blockquote className="appNaviBlockquote">
            <em>
              Getting down to the project realization, the owners of the AppNavi
              brand have distinguished us among other companies yet at the
              initial stage of specialist selection and gave preference to
              cooperation with us.
            </em>
            <cite>
              <b>Carsten Neumann,</b>
              <br />
              co-owner of the AppNavi project
            </cite>
          </blockquote>
        </AnimationOnScroll>
        <div className={styles.resultsSteps}>
          <div className={styles.twoStepsRow}>
            <div className={styles.stepItem}>
              <AnimationOnScroll
                animationName="fadeInRight"
                duration={1}
                delay={0.5}
              >
                <span className={styles.stepItemNumber}>1</span>
              </AnimationOnScroll>
              <AnimationOnScroll animationName="zoomIn" duration={0.5}>
                <div className={styles.stepBorder}>
                  <AnimationOnScroll
                    animationName="fadeInUp"
                    duration={1}
                    delay={1.5}
                  >
                    <p className="appNaviParagraph">
                      Day and night modes have improved the working conditions
                      of employees who work in several shifts, reduced eye
                      strain, increased productivity, which was stated by
                      representatives of the companies that use this application
                    </p>
                  </AnimationOnScroll>
                </div>
              </AnimationOnScroll>
            </div>
            <div className={styles.stepItem}>
              <AnimationOnScroll
                animationName="fadeInRight"
                duration={1}
                delay={0.5}
              >
                <span className={styles.stepItemNumber}>2</span>
              </AnimationOnScroll>
              <AnimationOnScroll animationName="zoomIn" duration={1}>
                <div className={styles.stepBorder}>
                  <AnimationOnScroll
                    animationName="fadeInUp"
                    duration={1}
                    delay={1.5}
                  >
                    <p className="appNaviParagraph">
                      The modern animated logo of the brand has become more
                      memorable and recognizable. Now it can be used in
                      advertising and print branded products.
                    </p>
                  </AnimationOnScroll>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
          <div className={styles.oneStepRow}>
            <div className={styles.stepItem}>
              <AnimationOnScroll
                animationName="fadeInRight"
                duration={1}
                delay={1.5}
              >
                <span className={styles.stepItemNumber}>3</span>
              </AnimationOnScroll>
              <AnimationOnScroll animationName="zoomIn" duration={1} delay={1}>
                <div className={styles.stepBorder}>
                  <AnimationOnScroll
                    animationName="fadeInUp"
                    duration={1}
                    delay={2.5}
                  >
                    <p className="appNaviParagraph">
                      Due to the improved UX design, users were able to go
                      through user scenarios much faster, which has increased
                      their training productivity. Hence, this had had a
                      positive effect on the company budget, further reduced
                      spendings on employee onboarding and thereby increased
                      loyalty to AppNavi
                    </p>
                  </AnimationOnScroll>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
          <div className={styles.twoStepsRow}>
            <div className={styles.stepItem}>
              <AnimationOnScroll
                animationName="fadeInRight"
                duration={1}
                delay={3.5}
              >
                <span className={styles.stepItemNumber}>4</span>
              </AnimationOnScroll>
              <AnimationOnScroll animationName="zoomIn" duration={1} delay={3}>
                <div className={styles.stepBorder}>
                  <AnimationOnScroll
                    animationName="fadeInUp"
                    duration={1}
                    delay={4.5}
                  >
                    <p className="appNaviParagraph">
                      Such improvements have contributed to the popularity of
                      AppNavi, it has began to be recommend and widely used.
                      Thus, the company has increased the number of clients
                      gained by testimonials
                    </p>
                  </AnimationOnScroll>
                </div>
              </AnimationOnScroll>
            </div>
            <div className={styles.stepItem}>
              <AnimationOnScroll
                animationName="fadeInRight"
                duration={1}
                delay={3.5}
              >
                <span className={styles.stepItemNumber}>5</span>
              </AnimationOnScroll>
              <AnimationOnScroll animationName="zoomIn" duration={1} delay={3}>
                <div className={styles.stepBorder}>
                  <AnimationOnScroll
                    animationName="fadeInUp"
                    duration={1}
                    delay={4.5}
                  >
                    <p className="appNaviParagraph">
                      The program has become simple and understandable for new
                      clients, thus increasing the % of conversion
                    </p>
                  </AnimationOnScroll>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/images/projects/AppNavi/results-layout.svg"
        alt="Results"
        className={styles.resultsLayout}
      />
    </section>
  );
};

export default Results;
