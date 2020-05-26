import React, { useRef, useState, FormEvent } from "react";
import classNames from "classnames";
import useGrid from "../../../../utils/useGrid";

import FormContacts from "./components/FormContacts/FormContacts";
import FormTask from "./components/FormTask/FormTask";
import FormProjectType from "./components/FormProjectType/FormProjectType";
import FormBudget from "./components/FormBudget/FormBudget";
import Button from "../../../../shared/coreUi/Button/Button";
import MobileSteps from "./components/MobileSteps/MobileSteps";
import ModalThanks from "../../../../shared/Modal/ModalThanks/ModalThanks";
import AnimatedLine from "../../../../shared/AnimatedLine/AnimatedLine";

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

  useGrid(refGridWrapper, "rgba(23,23,24,0.1)", "#fff");

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
      <AnimatedLine backgroundColor="#333" filledColor="#fff" />
    </section>
  );
};

export default DiscussTheProject;
