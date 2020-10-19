import React from "react";
import styles from "./colors.module.scss";

const Colors: React.FunctionComponent = () => {
  return (
    <section className={styles.keepersColors}>
      <div className={styles.keepersColorsWrapper}>
        <h3>Colors & Typography</h3>
        <div className={styles.keepersColorsList}>
          <div className={styles.keepersColorsItem}>
            <img
              src="/images/projects/caseKeepers/color-blue.png"
              alt="Blue color"
            />
            <p>#376EB2</p>
          </div>
          <div className={styles.keepersColorsItem}>
            <img
              src="/images/projects/caseKeepers/color-green.png"
              alt="Green color"
            />
            <p>#0B9219</p>
          </div>
          <div className={styles.keepersColorsItem}>
            <img
              src="/images/projects/caseKeepers/color-brown.png"
              alt="Brown color"
            />
            <p>#E69D44</p>
          </div>
          <div className={styles.keepersColorsItem}>
            <img
              src="/images/projects/caseKeepers/color-violet.png"
              alt="Violet color"
            />
            <p>#AD6DA9</p>
          </div>
          <div className={styles.keepersColorsItem}>
            <img
              src="/images/projects/caseKeepers/color-red.png"
              alt="Red color"
            />
            <p>#F86B6B</p>
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
