import React, { useRef, useEffect } from "react";
import { createGrid, addAnimationToGrid } from "../../../../utils/grid";

import styles from "./AboutUs.module.scss";

const AboutUs: React.FunctionComponent = () => {
  const refGridWrapper = useRef<HTMLDivElement>();

  useEffect(() => {
    const mainWrapper = refGridWrapper.current;

    createGrid(mainWrapper, 75);

    document.addEventListener("mousemove", e => {
      addAnimationToGrid(e, "rgba(23,23,24,.1)", "#171718", mainWrapper);
    });
  }, []);

  return (
    <section className={styles.aboutWrapper} ref={refGridWrapper}>
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
    </section>
  );
};

export default AboutUs;
