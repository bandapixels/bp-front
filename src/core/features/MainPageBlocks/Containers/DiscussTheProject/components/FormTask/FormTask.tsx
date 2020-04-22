import React from "react";
import Textarea from "../../../../../../shared/coreUi/Textarea/Textarea";

import styles from "../../discussTheProject.module.scss";

const FormTask: React.FunctionComponent = () => {
  return (
    <div className={styles.formTask}>
      <h6>Task</h6>
      <Textarea name="task" placeholder="write task..." />
    </div>
  );
};

export default FormTask;
