import React from "react";
import styles from "./mobileSteps.module.scss";

import Button from "../../../../../../shared/coreUi/Button/Button";

interface MobileStepsProps {
  step: number;
  handlerChangeStep: () => void;
}

const MobileSteps: React.FunctionComponent<MobileStepsProps> = ({
  step,
  handlerChangeStep
}) => {
  return (
    <div className={styles.stepWrapper}>
      <p className={styles.currentStep}>{step} / 2</p>
      <div className={styles.stepProgress} />
      {step === 1 && (
        <Button
          classes="yellowBtnWithIcon"
          type="button"
          handlerClick={handlerChangeStep}
        >
          Next Step
          <img src="/images/icons/arrow.svg" alt="arrow" />
        </Button>
      )}
      {step === 2 && (
        <Button classes="yellowBtnWithIcon" type="submit">
          Send
          <img src="/images/icons/arrow.svg" alt="arrow" />
        </Button>
      )}
    </div>
  );
};

export default MobileSteps;
