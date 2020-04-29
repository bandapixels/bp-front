import React from "react";
import Textarea from "../../../../../../shared/coreUi/Textarea/Textarea";

import styles from "../../discussTheProject.module.scss";

interface FormTaskProps {
  handlerOnChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTask: React.FunctionComponent<FormTaskProps> = ({
  handlerOnChange
}) => {
  return (
    <div className={styles.formTask}>
      <h6>Task</h6>
      <Textarea
        name="task"
        placeholder="write task..."
        handlerOnChange={handlerOnChange}
      />
    </div>
  );
};

export default FormTask;
