import React, { useRef, useEffect } from "react";
import useOutsideClick from "../../../utils/useOutsideClick";
import styles from "./modalThanks.module.scss";

import Button from "../../coreUi/Button/Button";

interface ModalThanksProps {
  clickHandler: () => void;
  error?: string;
}

const ModalThanks: React.FunctionComponent<ModalThanksProps> = ({
  clickHandler,
  error
}) => {
  const refThanks = useRef<HTMLDivElement>();

  useEffect(() => {
    document.body.classList.add("removeScrolling");

    return (): void => {
      document.body.classList.remove("removeScrolling");
    };
  });

  useOutsideClick(refThanks, clickHandler);

  return (
    <div className={styles.modalOverlayThanks}>
      <div className={styles.modalWrapThanks}>
        <div className={styles.thanksWrapper} ref={refThanks}>
          {error ? (
            <p>{error}</p>
          ) : (
            <p>
              Thanks for the application, our manager will contact you shortly
            </p>
          )}
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
