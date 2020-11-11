import React, { useRef } from "react";
import useGrid from "../../../../utils/useGrid";
import AnimatedLine from "../../../../shared/AnimatedLine/AnimatedLine";

import styles from "./AboutUs.module.scss";
import useRedrawGrid from "../../../../utils/useRedrawGrid";

const AboutUs: React.FunctionComponent = () => {
  const refGridWrapper = useRef<HTMLDivElement>();

  useGrid(refGridWrapper, "rgba(167,167,167,0.1)", "#171718");
  useRedrawGrid(refGridWrapper);

  return (
    <section
      className={styles.aboutWrapper}
      ref={refGridWrapper}
      data-header="black"
    >
      <div className={styles.aboutUsBig}>
        <span>About</span>
        <span />
      </div>
      <div className={styles.virtuesWrapper}>
        <div className={styles.virtuesItem}>
          <h4 className={styles.virtuesTitle}>March 2014</h4>
          <p className={styles.virtuesDescription}>
            Customers trust us,
            <br />
            you can too ...
          </p>
        </div>
        <div className={styles.virtuesItem}>
          <h4 className={styles.virtuesTitle}>8 simultaneous projects</h4>
          <p className={styles.virtuesDescription}>
            we do not much but give all our best 100%
          </p>
        </div>
        <div className={styles.virtuesItem}>
          <h4 className={styles.virtuesTitle}>We are in Ukraine</h4>
          <p className={styles.virtuesDescription}>Eastern Europe</p>
        </div>
        <div className={styles.virtuesItem}>
          <h4 className={styles.virtuesTitle}>
            We form a team depending
            <br />
            on the requirements of the
            <br />
            project in our office
          </h4>
          <p className={styles.virtuesDescription}>
            you do not pay for what you do not need
          </p>
        </div>
        <div className={styles.virtuesItem}>
          <h4 className={styles.virtuesTitle}>
            We are in touch
            <br />
            at your time
          </h4>
          <p className={styles.virtuesDescription}>
            working with us is not inconvenient
          </p>
        </div>
      </div>
      <AnimatedLine backgroundColor="#BDBDBD" filledColor="#333" />
    </section>
  );
};

export default AboutUs;
