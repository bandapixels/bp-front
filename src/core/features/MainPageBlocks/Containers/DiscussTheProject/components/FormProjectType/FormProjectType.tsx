import React from "react";
import RadioButton from "../../../../../../shared/coreUi/RadioButton/RadioButton";

import styles from "../../discussTheProject.module.scss";

interface FormProjectTypeProps {
  handlerOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormProjectType: React.FunctionComponent<FormProjectTypeProps> = ({
  handlerOnChange
}) => {
  return (
    <div className={styles.formProjectType}>
      <h6>Project type</h6>
      <div className={styles.projectRadioContainer}>
        <div className={styles.projectRadioRow}>
          <RadioButton
            id="type-1"
            value="type-1"
            name="projectType"
            handlerOnChange={handlerOnChange}
          >
            We want to make the design of the service more convenient and
            understandable for users.
          </RadioButton>
          <RadioButton
            id="type-2"
            value="type-2"
            name="projectType"
            handlerOnChange={handlerOnChange}
          >
            We are doing a new service and want to make a design for it.
          </RadioButton>
          <RadioButton
            id="type-3"
            value="type-3"
            name="projectType"
            handlerOnChange={handlerOnChange}
          >
            We improve or expand a working service
          </RadioButton>
        </div>
        <div className={styles.projectRadioRow}>
          <RadioButton
            id="type-4"
            value="type-4"
            name="projectType"
            handlerOnChange={handlerOnChange}
          >
            We are developing a new service for everyone and we know exactly
            what we want
          </RadioButton>
          <RadioButton
            id="type-5"
            value="type-5"
            name="projectType"
            handlerOnChange={handlerOnChange}
          >
            We are a startup and want to make a cool MVP. We want to see a team
            that will help us.
          </RadioButton>
          <RadioButton
            id="type-6"
            value="type-6"
            name="projectType"
            handlerOnChange={handlerOnChange}
          >
            Another variant
          </RadioButton>
        </div>
      </div>
    </div>
  );
};

export default FormProjectType;
