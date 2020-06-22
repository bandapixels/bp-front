import React, { FormEvent, useRef, useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { getStatus } from "../../../mainPage.selector";
import { SendFormData } from "../../../mainPage.actions";
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
import Arrow from "../../../../../shared/Icons/Arrow/Arrow";
import styles from "./discussTheProject.module.scss";
import { AppState } from "../../../../../store/store";

export const formInitialState = {
  name: {
    error: false,
    step: 1,
    value: ""
  },
  company: {
    error: false,
    step: 1,
    value: ""
  },
  email: {
    error: false,
    step: 1,
    value: ""
  },
  skype: {
    error: false,
    step: 1,
    value: ""
  },
  task: {
    error: false,
    step: 1,
    value: ""
  },
  projectType: {
    error: false,
    step: 2,
    value: ""
  },
  budget: {
    error: false,
    step: 2,
    value: ""
  }
};

const DiscussTheProject: React.FunctionComponent = () => {
  const refGridWrapper = useRef<HTMLDivElement>();
  const refForm = useRef<HTMLFormElement>();
  const [step, setStep] = useState(1);
  const formClasses = classNames(styles.discussForm, {
    showSecondStep: step === 2
  });
  const [formSend, setFormSend] = useState(false);
  const [formData, setFormData] = useState({ ...formInitialState });
  const formStatus = useSelector((state: AppState) => getStatus(state));
  const dispatch = useDispatch();

  const handlerClosePopup = (): void => {
    setFormSend(!formSend);
  };

  const formValidation = (data, change = false): number => {
    const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const skypeReg = /^[a-zA-Z][a-zA-Z0-9_.,-]{5,31}$/;
    const checkLength = ["name", "company", "task", "projectType", "budget"];
    let newData = { ...formData };

    Object.entries(data).forEach(
      ([formName, formValue]: [
        string,
        { error: boolean | string; step: number; value: string }
      ]) => {
        let error: boolean | string = false;

        if (checkLength.includes(formName) && formValue.value.length === 0) {
          error = "length";
        }

        if (formName === "email" && !emailReg.test(formValue.value)) {
          error = "email";
        }

        if (formName === "skype" && !skypeReg.test(formValue.value)) {
          error = "skype";
        }

        if (change && formValue.value.length === 0) {
          error = false;
        }

        newData = {
          ...newData,
          [formName]: { ...data[formName], error }
        };
      }
    );
    setFormData(newData);

    const errors = Object.entries(newData).filter(
      ([, info]: [
        string,
        { error: boolean | string; step: number; value: string }
      ]) => info.error
    );

    return errors?.length;
  };

  const handlerOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const input = e.target;
    const inputName: string = input.name;
    const inputVal: string = input.value;

    if (inputName in formData) {
      formValidation(
        {
          [inputName]: {
            ...formData[inputName],
            value: inputVal
          }
        },
        true
      );
    }
  };

  const getErrorsInStep = (neededStep: number): number => {
    const stepErrors = Object.entries(formData).filter(
      ([, info]: [
        string,
        { error: boolean | string; step: number; value: string }
      ]) => info.step === neededStep && info.error
    );

    return stepErrors?.length;
  };

  const handlerChangeStep = (): void => {
    formValidation(formData);
    const offset: number = refGridWrapper.current.offsetTop;
    const errorsInStep = getErrorsInStep(1);

    if (errorsInStep === 0) {
      setStep(2);
    }

    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  };

  const prepareDataToSend = (): {} => {
    const data = {
      email: formData.email.value,
      body: `Name: ${formData.name.value} \n Company: ${formData.company.value} \n Skype: ${formData.skype.value} \n Task: ${formData.task.value} \n Project type: ${formData.projectType.value} \n Budget: ${formData.budget.value}`
    };

    return data;
  };

  const handlerSendData = (data): void => {
    const errors = formValidation(data);

    if (!errors) {
      const dataToSend = prepareDataToSend();

      dispatch(new SendFormData(dataToSend));
      setFormSend(!formSend);
      setFormData(formInitialState);
      refForm.current.reset();
    }
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
          ref={refForm}
          onSubmit={(e: FormEvent<HTMLFormElement>): void => e.preventDefault()}
        >
          <div className={styles.discussFormLeftPart}>
            <div className={styles.formMainInfo}>
              <FormContacts
                handlerOnChange={handlerOnChange}
                formData={formData}
              />
              <FormTask handlerOnChange={handlerOnChange} formData={formData} />
            </div>
            <FormProjectType
              handlerOnChange={handlerOnChange}
              formData={formData}
            />
          </div>
          <div className={styles.discussFormRightPart}>
            <FormBudget handlerOnChange={handlerOnChange} formData={formData} />
            <Button
              classes="btnWithArrow"
              handlerClick={(): void => handlerSendData(formData)}
            >
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
      {formSend && formStatus === "success" && (
        <ModalThanks clickHandler={handlerClosePopup} />
      )}
      {formSend && formStatus !== "success" && (
        <ModalThanks
          clickHandler={handlerClosePopup}
          error="Please try again"
        />
      )}
      <AnimatedLine backgroundColor="#333" filledColor="#fff" />
    </section>
  );
};

export default DiscussTheProject;
