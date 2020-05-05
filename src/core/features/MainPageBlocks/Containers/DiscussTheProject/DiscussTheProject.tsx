import React, { useRef, useEffect, useState, FormEvent } from "react";
import classNames from "classnames";
import { createGrid, addAnimationToGrid } from "../../../../utils/grid";

import FormContacts from "./components/FormContacts/FormContacts";
import FormTask from "./components/FormTask/FormTask";
import FormProjectType from "./components/FormProjectType/FormProjectType";
import FormBudget from "./components/FormBudget/FormBudget";
import Button from "../../../../shared/coreUi/Button/Button";
import MobileSteps from "./components/MobileSteps/MobileSteps";
import ModalThanks from "../../../../shared/Modal/ModalThanks/ModalThanks";

import styles from "./discussTheProject.module.scss";

const DiscussTheProject: React.FunctionComponent = () => {
  const refGridWrapper = useRef<HTMLDivElement>();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    skype: "",
    task: "",
    projectType: "",
    budget: ""
  });
  const [step, setStep] = useState(1);
  const formClasses = classNames(styles.discussForm, {
    showSecondStep: step === 2
  });
  const [formSend, setFormSend] = useState(false);

  const handlerClosePopup = (): void => {
    setFormSend(!formSend);
  };

  const handlerOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const input = e.target;
    const inputName: string = input.name;
    const inputVal: string = input.value;

    if (inputName in formData) {
      const newData = {
        ...formData,
        [inputName]: inputVal
      };

      setFormData(newData);
    }
  };

  const handlerChangeStep = (): void => {
    const offset: number = refGridWrapper.current.offsetTop;

    setStep(step + 1);
    globalThis.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  };

  const handlerSendData = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setFormSend(!formSend);
  };

  useEffect(() => {
    const mainWrapper = refGridWrapper.current;

    createGrid(mainWrapper, 75);

    document.addEventListener("mousemove", e => {
      addAnimationToGrid(e, "rgba(23,23,24,.1)", "#fff", mainWrapper);
    });
  }, []);

  return (
    <section
      className={styles.discussWrapper}
      ref={refGridWrapper}
      data-header="yellow"
    >
      <div className={styles.discussContainer}>
        <h1>
          <span>Discuss</span> the project
        </h1>
        <form
          className={formClasses}
          onSubmit={(e): void => handlerSendData(e)}
        >
          <div className={styles.discussFormLeftPart}>
            <div className={styles.formMainInfo}>
              <FormContacts handlerOnChange={handlerOnChange} />
              <FormTask handlerOnChange={handlerOnChange} />
            </div>
            <FormProjectType handlerOnChange={handlerOnChange} />
          </div>
          <div className={styles.discussFormRightPart}>
            <FormBudget handlerOnChange={handlerOnChange} />
            <Button classes="btnWithArrow">
              <span>
                Send
                <br />
                request
              </span>
            </Button>
          </div>
          <MobileSteps step={step} handlerChangeStep={handlerChangeStep} />
        </form>
      </div>
      {formSend && <ModalThanks clickHandler={handlerClosePopup} />}
    </section>
  );
};

export default DiscussTheProject;
