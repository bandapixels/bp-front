import React, { useRef } from "react";
import useOutsideClick from "../../../utils/useOutsideClick";
import styles from "./modalThanks.module.scss";

import Button from "../../coreUi/Button/Button";

interface ModalThanksProps {
  clickHandler: () => void;
}

const ModalThanks: React.FunctionComponent<ModalThanksProps> = ({
  clickHandler
}) => {
  const refThanks = useRef<HTMLDivElement>();

  useOutsideClick(refThanks, clickHandler);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWrapThanks}>
        <div className={styles.thanksWrapper} ref={refThanks}>
          <p>
            Thanks for the application, our manager will contact you shortly
          </p>
          <Button classes="emptyBtn" handlerClick={clickHandler}>
            Go Back
            <img src="/images/icons/arrow-yellow.svg" alt="arrow" />
          </Button>
        </div>
        <Button classes="btnCloseDark" />
      </div>
    </div>
  );
};

export default ModalThanks;
