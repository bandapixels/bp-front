import React from "react";
import RadioButton from "../../../../../../../shared/coreUi/RadioButton/RadioButton";

import styles from "../../discussTheProject.module.scss";

interface FormBudgetProps {
  handlerOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormBudget: React.FunctionComponent<FormBudgetProps> = ({
  handlerOnChange
}) => {
  return (
    <div className={styles.formBudget}>
      <h6>Budget</h6>
      <div className={styles.projectBudgetContainer}>
        <RadioButton
          id="budget-1"
          value="budget-1"
          name="budget"
          smallInput
          handlerOnChange={handlerOnChange}
          required
        >
          $ 5 000 - $ 10 000
        </RadioButton>
        <RadioButton
          id="budget-2"
          value="budget-2"
          name="budget"
          smallInput
          handlerOnChange={handlerOnChange}
          required
        >
          $ 10 000 - $ 20 000
        </RadioButton>
        <RadioButton
          id="budget-3"
          value="budget-3"
          name="budget"
          smallInput
          handlerOnChange={handlerOnChange}
          required
        >
          $ 20 000 - $ 30 000
        </RadioButton>
        <RadioButton
          id="budget-4"
          value="budget-4"
          name="budget"
          smallInput
          handlerOnChange={handlerOnChange}
          required
        >
          $ 30 000 - $ 50 000
        </RadioButton>
        <RadioButton
          id="budget-5"
          value="budget-5"
          name="budget"
          smallInput
          handlerOnChange={handlerOnChange}
          required
        >
          $ 50 000 - $ 100 000
        </RadioButton>
        <RadioButton
          id="budget-6"
          value="budget-6"
          name="budget"
          smallInput
          handlerOnChange={handlerOnChange}
          required
        >
          $ 100 000 +
        </RadioButton>
        <RadioButton
          id="budget-7"
          value="budget-7"
          name="budget"
          smallInput
          handlerOnChange={handlerOnChange}
          required
        >
          I need help
        </RadioButton>
      </div>
    </div>
  );
};

export default FormBudget;
