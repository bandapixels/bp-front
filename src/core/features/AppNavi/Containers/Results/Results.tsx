import React from "react";
import styles from "./results.module.scss";

const Results: React.FunctionComponent = () => {
  return (
    <section className={styles.appNaviResults}>
      <div className={styles.appNaviResultsContainer}>
        <h3 className="appNaviH3">Results</h3>
        <p className="appNaviParagraph">
          Getting down to the project realization, the owners of the AppNavi
          brand have distinguished us among other companies yet at the initial
          stage of specialist selection and gave preference to cooperation with
          us.
        </p>
        <blockquote className="appNaviBlockquote">
          <em>
            Getting down to the project realization, the owners of the AppNavi
            brand have distinguished us among other companies yet at the initial
            stage of specialist selection and gave preference to cooperation
            with us.
          </em>
          <cite>
            <b>Carsten Neumann,</b>
            <br />
            co-owner of the AppNavi project
          </cite>
        </blockquote>
        <div className={styles.resultsSteps}>
          <div className={styles.twoStepsRow}>
            <div className={styles.stepItem}>
              <span className={styles.stepItemNumber}>1</span>
              <p className="appNaviParagraph">
                Day and night modes have improved the working conditions of
                employees who work in several shifts, reduced eye strain,
                increased productivity, which was stated by representatives of
                the companies that use this application{" "}
              </p>
            </div>
            <div className={styles.stepItem}>
              <span className={styles.stepItemNumber}>2</span>
              <p className="appNaviParagraph">
                The modern animated logo of the brand has become more memorable
                and recognizable. Now it can be used in advertising and print
                branded products.
              </p>
            </div>
          </div>
          <div className={styles.oneStepRow}>
            <div className={styles.stepItem}>
              <span className={styles.stepItemNumber}>3</span>
              <p className="appNaviParagraph">
                Due to the improved UX design, users were able to go through
                user scenarios much faster, which has increased their training
                productivity. Hence, this had had a positive effect on the
                company budget, further reduced spendings on employee onboarding
                and thereby increased loyalty to AppNavi
              </p>
            </div>
          </div>
          <div className={styles.twoStepsRow}>
            <div className={styles.stepItem}>
              <span className={styles.stepItemNumber}>4</span>
              <p className="appNaviParagraph">
                Such improvements have contributed to the popularity of AppNavi,
                it has began to be recommend and widely used. Thus, the company
                has increased the number of clients gained by testimonials
              </p>
            </div>
            <div className={styles.stepItem}>
              <span className={styles.stepItemNumber}>5</span>
              <p className="appNaviParagraph">
                The program has become simple and understandable for new
                clients, thus increasing the % of conversion
              </p>
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
