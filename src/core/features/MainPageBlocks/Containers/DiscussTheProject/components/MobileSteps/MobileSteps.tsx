import React from "react";
import styles from "./mobileSteps.module.scss";

import Button from "../../../../../../shared/coreUi/Button/Button";

const MobileSteps: React.FunctionComponent = () => {
  return (
    <div className={styles.stepWrapper}>
      <p className={styles.currentStep}>1 / 2</p>
      <div className={styles.stepProgress} />
      <Button classes="yellowBtnWithIcon" type="button">
        Next Step
        <img src="/images/icons/arrow.svg" alt="arrow" />
      </Button>
      {/* <Button classes="yellowBtnWithIcon">
        Send
        <img src="/images/icons/arrow.svg" alt="arrow" />
      </Button> */}
    </div>
  );
};

export default MobileSteps;
