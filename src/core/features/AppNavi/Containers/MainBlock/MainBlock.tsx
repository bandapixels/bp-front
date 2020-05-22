import React from "react";
import styles from "./mainBlock.module.scss";

const MainBlock: React.FunctionComponent = () => {
  return (
    <section className={styles.appNaviMain}>
      <img
        src="/images/projects/AppNavi/trap.svg"
        alt="figure"
        className={styles.mainFigure}
      />
      <img
        src="/images/projects/AppNavi/transparent-logo.svg"
        alt="AppNavi Transparent Logo"
        className={styles.mainTransparentLogo}
      />
      <div className={styles.mainContent}>
        <div className={styles.appNaviMainLeft}>
          <div className={styles.naviLogoWrapper}>
            <img src="/images/projects/AppNavi/logo.svg" alt="AppNavi Logo" />
          </div>
          <p>
            Software easily
            <br /> explained!
          </p>
        </div>
        <div className={styles.appNaviMainRight}>
          <img src="/images/projects/AppNavi/tablet.png" alt="AppNavi Tablet" />
        </div>
      </div>
    </section>
  );
};

export default MainBlock;
