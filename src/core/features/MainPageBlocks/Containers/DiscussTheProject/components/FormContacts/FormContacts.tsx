import React from "react";
import Input from "../../../../../../shared/coreUi/Input/Input";

import styles from "../../discussTheProject.module.scss";

interface FormContactsProps {
  handlerOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormContacts: React.FunctionComponent<FormContactsProps> = ({
  handlerOnChange
}) => {
  return (
    <div className={styles.formContacts}>
      <h6>Your contacts</h6>
      <Input
        id="discuss-name"
        type="text"
        name="name"
        handlerOnChange={handlerOnChange}
      >
        Name
      </Input>
      <Input
        id="discuss-company"
        type="text"
        name="company"
        handlerOnChange={handlerOnChange}
      >
        Company
      </Input>
      <Input
        id="discuss-email"
        type="text"
        name="email"
        handlerOnChange={handlerOnChange}
      >
        Email
      </Input>
      <Input
        id="discuss-skype"
        type="text"
        name="skype"
        handlerOnChange={handlerOnChange}
      >
        Skype
      </Input>
    </div>
  );
};

export default FormContacts;
