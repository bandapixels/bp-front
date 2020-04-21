import React, { useRef, useEffect } from "react";
import { createGrid, addAnimationToGrid } from "../../../../utils/grid";

import Input from "../../../../shared/coreUi/Input/Input";
import Textarea from "../../../../shared/coreUi/Textarea/Textarea";
import RadioButton from "../../../../shared/coreUi/RadioButton/RadioButton";

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
        <h1>Discuss the project</h1>
        <form className={styles.discussForm}>
          <div className={styles.discussFormLeftPart}>
            <div className={styles.formRow}>
              <div className={styles.formContacts}>
                <h6>Your contacts</h6>
                <Input id="discuss-name" type="text" name="name" disabled>
                  Name
                </Input>
                <Input id="discuss-company" type="text" name="company">
                  Company
                </Input>
                <Input id="discuss-email" type="text" name="email">
                  Email
                </Input>
                <Input id="discuss-skype" type="text" name="skype">
                  Skype
                </Input>
              </div>
              <div className={styles.formTask}>
                <h6>Task</h6>
                <Textarea name="task" placeholder="write task..." />
              </div>
            </div>
            <div className={styles.formProjectType}>
              <h6>Project type</h6>
              <div className={styles.projectTypeContainer}>
                <RadioButton id="type-1" value="type-1" name="type" disabled>
                  We want to make the design of the service more convenient and
                  understandable for users.
                </RadioButton>
                <RadioButton id="type-2" value="type-2" name="type">
                  We are doing a new service and want to make a design for it.
                </RadioButton>
                <RadioButton id="type-3" value="type-3" name="type">
                  We improve or expand a working service
                </RadioButton>
                <RadioButton id="type-4" value="type-4" name="type">
                  We are developing a new service for everyone and we know
                  exactly what we want
                </RadioButton>
                <RadioButton id="type-5" value="type-5" name="type">
                  We are a startup and want to make a cool MVP. We want to see a
                  team that will help us.
                </RadioButton>
                <RadioButton id="type-6" value="type-6" name="type">
                  Another variant
                </RadioButton>
              </div>
            </div>
          </div>
          <div className={styles.discussFormRightPart}>
            <div className={styles.formBudget}>
              <h6>Budget</h6>
              <div className={styles.projectBudgetContainer}>
                <RadioButton
                  id="budget-1"
                  value="budget-1"
                  name="budget"
                  smallInput
                  disabled
                >
                  $ 5 000 - $ 10 000
                </RadioButton>
                <RadioButton
                  id="budget-2"
                  value="budget-2"
                  name="budget"
                  smallInput
                >
                  $ 10 000 - $ 20 000
                </RadioButton>
                <RadioButton
                  id="budget-3"
                  value="budget-3"
                  name="budget"
                  smallInput
                >
                  $ 20 000 - $ 30 000
                </RadioButton>
                <RadioButton
                  id="budget-4"
                  value="budget-4"
                  name="budget"
                  smallInput
                >
                  $ 30 000 - $ 50 000
                </RadioButton>
                <RadioButton
                  id="budget-5"
                  value="budget-5"
                  name="budget"
                  smallInput
                >
                  $ 50 000 - $ 100 000
                </RadioButton>
                <RadioButton
                  id="budget-6"
                  value="budget-6"
                  name="budget"
                  smallInput
                >
                  $ 100 000 +
                </RadioButton>
                <RadioButton
                  id="budget-7"
                  value="budget-7"
                  name="budget"
                  smallInput
                >
                  I need help
                </RadioButton>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DiscussTheProject;
