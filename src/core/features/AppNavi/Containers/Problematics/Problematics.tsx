import React from "react";
import AnimationOnScroll from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./problematics.module.scss";

const Problematics: React.FunctionComponent = () => {
  return (
    <section className={styles.problematicsWrapper}>
      <div className={styles.appNaviContainer}>
        <div className={styles.problematicsInfo}>
          <AnimationOnScroll animationName="fadeInUp" duration={1}>
            <h3 className="appNaviH3">Problematics</h3>
          </AnimationOnScroll>
          <AnimationOnScroll animationName="fadeInUp" duration={1} delay={0.5}>
            <p className="appNaviParagraph">
              <span className="blueText">AppNavi</span> suggests a completely
              new approach to employee training as well as increases all
              specialists' work efficiency. However, despite the rather high
              popularity among the clients, confusing and unoptimized user flows
              became a real obstacle for the company in attracting new clients.
              Initially, the problem lied in relatively outdated application
              design. The AppNavi program looked too complicated and didn’t
              establish any trust with the users, raising fear that they
              wouldn’t be able to puzzle it out.Thus, it couldn’t guarantee an
              increase in clients and in company budget.
            </p>
          </AnimationOnScroll>
        </div>
        <div className={styles.decorP}>
          <img src="/images/projects/AppNavi/p.svg" alt="Decor P" />
        </div>
      </div>
      <AnimationOnScroll animationName="zoomIn" duration={1} delay={1}>
        <div className={styles.problematicsQuote}>
          <blockquote className="appNaviBlockquote">
            <em>
              Apart from that, the app already had its users who were used to
              it, which we needed to consider and make a new design version that
              wouldn't interfere with their established workflow.
            </em>
            <cite>
              <b>Carsten Neumann,</b>
              <br />
              co-owner of the AppNavi project
            </cite>
          </blockquote>
        </div>
      </AnimationOnScroll>
      <div className={styles.wrapperAppLayOut}>
        <img src="/images/projects/AppNavi/app-layout.png" alt="App Layout" />
      </div>
      <img
        src="/images/projects/AppNavi/o.svg"
        alt="Decor O"
        className={styles.decorO}
      />
    </section>
  );
};

export default Problematics;