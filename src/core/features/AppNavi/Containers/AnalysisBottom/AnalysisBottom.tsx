import React from "react";
import styles from "./analysisBottom.module.scss";

const AnalysisBottom: React.FunctionComponent = () => {
  return (
    <section className={styles.analysisBottomWrapper}>
      <div className={styles.analysisTopText}>
        <p>
          As at the time of contacting us the{" "}
          <span className="blueText">AppNavi</span> service was used by clients
          who worked both during the day and at night, it was decided to develop
          two modes - day (light) and night (dark). Due to this, clients would
          be able to work in a comfortable mode at any time of the day. Still,
          the blue color remains the main one, symbolizing stability and
          representing SAAS - the subject of the AppNavi application.
        </p>
      </div>
      <div className={styles.analysisLayout}>
        <img
          src="/images/projects/AppNavi/analysis-layout.png"
          alt="Analysis Layout"
        />
        <img
          src="/images/projects/AppNavi/decor-analysis.png"
          alt="Analysis Decor"
          className={styles.analysisDecor}
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
        <div className={styles.logosText}>
          <p>
            Also, in the course of work, the corporate identity of the company
            underwent changes in order to create its stronger visual marketing
            position. Working on the AppNavi logotype, we tried to reconstruct
            associative elements, demonstrate the brand, display the main idea
            of the company.
          </p>
          <p>
            Our task was to create a timeless, simple and understandable
            logotype that every person could draw with several moves; the
            logotype which would be so strong visually, that it could be used
            even without any text or company name. The result was a visually
            simple logo that consisted of three simple notional elements,
            conveying one main idea. “Exploration”, “speed”, “research” – these
            associations we put into the new logotype.
          </p>
          <p>
            The first element in the logo personifies the user who looks for the
            answer to his question. The second element is a pop-up tooltip that
            helps the user to achieve the desired goal. The third element
            resembles the “play” button and implies fast operating speed with
            the help of the AppNavi application.
          </p>
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
