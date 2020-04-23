import React, { useRef, useEffect } from "react";
import { createGrid, addAnimationToGrid } from "../../../../utils/grid";

import FormContacts from "./components/FormContacts/FormContacts";
import FormTask from "./components/FormTask/FormTask";
import FormProjectType from "./components/FormProjectType/FormProjectType";
import FormBudget from "./components/FormBudget/FormBudget";
import Button from "../../../../shared/coreUi/Button/Button";
import MobileSteps from "./components/MobileSteps/MobileSteps";

import styles from "./discussTheProject.module.scss";

const DiscussTheProject: React.FunctionComponent = () => {
  const refGridWrapper = useRef<HTMLDivElement>();

  useEffect(() => {
    const mainWrapper = refGridWrapper.current;

    createGrid(mainWrapper, 75);

    document.addEventListener("mousemove", e => {
      addAnimationToGrid(e, "rgba(23,23,24,.1)", "#fff", mainWrapper);
    });
  }, []);

  return (
    <section className={styles.discussWrapper} ref={refGridWrapper}>
      <div className={styles.discussContainer}>
        <h1>
          <span>Discuss</span> the project
        </h1>
        <form className={styles.discussForm}>
          <div className={styles.discussFormLeftPart}>
            <div className={styles.formMainInfo}>
              <FormContacts />
              <FormTask />
            </div>
            <FormProjectType />
          </div>
          <div className={styles.discussFormRightPart}>
            <FormBudget />
            <Button classes="btnWithArrow">
              <span>
                Send
                <br />
                request
              </span>
            </Button>
          </div>
          <MobileSteps />
        </form>
      </div>
    </section>
  );
};

export default DiscussTheProject;
