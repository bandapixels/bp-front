import React from "react";
import styles from "./analysisBottom.module.scss";

const AnalysisBottom: React.FunctionComponent = () => {
  return (
    <section className={styles.analysisBottomWrapper}>
      <div className={styles.analysisLayout}>
        <img
          src="/images/projects/AppNavi/analysis-layout.png"
          alt="Analysis Layout"
        />
      </div>
      <div className={styles.analysisText}>
        <p>
          While developing a new interactive UI design we got rid of some
          redundant elements, reduced the menu size and visually separated it
          from other blocks of the application. We also changed the position of
          some elements to make a more convenient user flow.
        </p>
        <p>
          Blocks and separate components before the redesign were square and
          with sharp corners, which was subconsciously associated with fear,
          danger, difficulties of perception, while buttons were roundish. Such
          discrepancy had a bad effect on the application stylistics. We changed
          the shape of all blocks, buttons and elements to more roundish and
          soft, intending to create the feeling of safety and unifying them in a
          single concept.
        </p>
      </div>
      <div className={styles.logosContainer}>
        <div className={styles.analysisLogoWrapper}>
          <img src="/images/projects/AppNavi/logo.svg" alt="AppNavi Logo" />
        </div>
        <div className={styles.dashedLogoWrapper}>
          <img
            src="/images/projects/AppNavi/logo-dashed.png"
            alt="AppNavi Dashed Logo"
          />
        </div>
        <div className={styles.analysisVideo}>
          <video controls>
            <source src="/videos/AppNavi_animate.mp4" type="video/webm" />
          </video>
        </div>
        <img
          src="/images/projects/AppNavi/trap-bottom.svg"
          alt="figure"
          className={styles.analysisFigure}
        />
      </div>
    </section>
  );
};

export default AnalysisBottom;
