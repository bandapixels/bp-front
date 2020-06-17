import React, { useRef, useState, FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import useGrid from "../../../../../utils/useGrid";
import useRedrawGrid from "../../../../../utils/useRedrawGrid";
import FormContacts from "./components/FormContacts/FormContacts";
import FormTask from "./components/FormTask/FormTask";
import FormProjectType from "./components/FormProjectType/FormProjectType";
import FormBudget from "./components/FormBudget/FormBudget";
import Button from "../../../../../shared/coreUi/Button/Button";
import MobileSteps from "./components/MobileSteps/MobileSteps";
import ModalThanks from "../../../../../shared/Modal/ModalThanks/ModalThanks";
import AnimatedLine from "../../../../../shared/AnimatedLine/AnimatedLine";
import { AppState } from "../../../../../store/store";
import { getData } from "../discussTheProject.selectors";
import { saveData, resetAll } from "../discussTheProject.actions";
import Arrow from "../../../../../shared/Icons/Arrow/Arrow";

import styles from "./discussTheProject.module.scss";

const DiscussTheProject: React.FunctionComponent = () => {
  const refGridWrapper = useRef<HTMLDivElement>();
  const [step, setStep] = useState(1);
  const formClasses = classNames(styles.discussForm, {
    showSecondStep: step === 2
  });
  const [formSend, setFormSend] = useState(false);
  const dispatch = useDispatch();
  const formData: AppState = useSelector((state: AppState) => getData(state));

  const handlerClosePopup = (): void => {
    setFormSend(!formSend);
  };

  const formValidation = (data): AppState => {
    const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const skypeReg = /^[a-zA-Z][a-zA-Z0-9_.,-]{5,31}$/;
    const checkLength = ["name", "company", "task", "projectType", "budget"];
    let newData = { ...formData };
    let error: boolean | string = false;

    Object.entries(data).forEach(
      ([formName, formValue]: [
        string,
        { error: boolean | string; step: number; value: string }
      ]) => {
        if (checkLength.includes(formName) && formValue.value.length < 1) {
          error = "length";
        }

        if (formName === "email" && !emailReg.test(formValue.value)) {
          error = "email";
        }

        if (formName === "skype" && !skypeReg.test(formValue.value)) {
          error = "skype";
        }

        newData = {
          ...newData,
          [formName]: { ...data[formName], error }
        };
      }
    );

    dispatch(saveData(newData));

    return newData;
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
      formValidation({
        [inputName]: {
          ...formData[inputName],
          value: inputVal
        }
      });
    }
  };

  const getErrorsInStep = (neededStep: number, data): number => {
    const stepErrors = Object.entries(data).filter(
      ([, info]: [
        string,
        { error: boolean | string; step: number; value: string }
      ]) => info.step === neededStep && info.error
    );

    return stepErrors?.length;
  };

  const handlerChangeStep = (): void => {
    const offset: number = refGridWrapper.current.offsetTop;
    const data = formValidation(formData);
    const errorsInStep = getErrorsInStep(1, data);
    if (errorsInStep === 0) {
      setStep(2);
    }

    window.scrollTo({
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
  useRedrawGrid(refGridWrapper);

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
              <div>
                <span>
                  Send
                  <br />
                  request
                </span>
                <Arrow />
              </div>
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
