import React, { useRef, useState, FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import useGrid from "../../../../../utils/useGrid";

import FormContacts from "./components/FormContacts/FormContacts";
import FormTask from "./components/FormTask/FormTask";
import FormProjectType from "./components/FormProjectType/FormProjectType";
import FormBudget from "./components/FormBudget/FormBudget";
import Button from "../../../../../shared/coreUi/Button/Button";
import MobileSteps from "./components/MobileSteps/MobileSteps";
import ModalThanks from "../../../../../shared/Modal/ModalThanks/ModalThanks";
import AnimatedLine from "../../../../../shared/AnimatedLine/AnimatedLine";

import styles from "./discussTheProject.module.scss";
import { AppState } from "../../../../../store/store";
import { getErrors, getData } from "../discussTheProject.selectors";
import { saveErrors, saveData, resetAll } from "../discussTheProject.actions";

const DiscussTheProject: React.FunctionComponent = () => {
  const refGridWrapper = useRef<HTMLDivElement>();
  const [step, setStep] = useState(1);
  const formClasses = classNames(styles.discussForm, {
    showSecondStep: step === 2
  });
  const [formSend, setFormSend] = useState(false);
  const dispatch = useDispatch();
  const formData: AppState = useSelector((state: AppState) => getData(state));
  const formErrors = useSelector((state: AppState) => getErrors(state));

  const handlerClosePopup = (): void => {
    setFormSend(!formSend);
  };

  const formValidation = (data): void => {
    const emailReg = /^([a-z0-9_-]+)@([\da-z-]+)\.([a-z]{2,5})$/;
    const checkLength = [
      "name",
      "company",
      "task",
      "projectType",
      "budget",
      "skype"
    ];
    let newErrors = { ...formErrors };

    Object.entries(data).forEach(([formName, formValue]: [string, string]) => {
      if (checkLength.includes(formName)) {
        if (formValue.length < 1) {
          newErrors = Object.assign(newErrors, { [formName]: "length" });
        } else {
          newErrors = Object.assign(newErrors, { [formName]: false });
        }
      }

      if (formName === "email") {
        if (!emailReg.test(formValue)) {
          newErrors = Object.assign(newErrors, { [formName]: "email" });
        } else {
          newErrors = Object.assign(newErrors, { [formName]: false });
        }
      }
    });

    dispatch(saveErrors(newErrors));
  };

  const validateOnSubmit = (): void => {
    formValidation(formData);
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

      dispatch(saveData(newData));
      formValidation({ [inputName]: inputVal });
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
    dispatch(resetAll());
    e.currentTarget.reset();
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
            <Button classes="btnWithArrow" handlerClick={validateOnSubmit}>
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
