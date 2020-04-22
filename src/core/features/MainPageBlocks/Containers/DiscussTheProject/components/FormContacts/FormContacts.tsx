import React from "react";
import Input from "../../../../../../shared/coreUi/Input/Input";

import styles from "../../discussTheProject.module.scss";

const FormContacts: React.FunctionComponent = () => {
  return (
    <div className={styles.formContacts}>
      <h6>Your contacts</h6>
      <Input id="discuss-name" type="text" name="name">
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
  );
};

export default FormContacts;
