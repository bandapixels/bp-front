import React from "react";
import Input from "../../../../../../../shared/coreUi/Input/Input";
import { DiscussTheProjectInterface } from "../../../discussTheProject.state";
import styles from "../../discussTheProject.module.scss";

interface FormContactsProps {
  handlerOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: DiscussTheProjectInterface;
}

const FormContacts: React.FunctionComponent<FormContactsProps> = ({
  handlerOnChange,
  formData
}) => {
  return (
    <div className={styles.formContacts}>
      <h6>Your contacts</h6>
      <Input
        id="discuss-name"
        type="text"
        name="name"
        handlerOnChange={handlerOnChange}
        required
        value={formData.name.value}
        error={formData.name.error}
      >
        Name
      </Input>
      <Input
        id="discuss-company"
        type="text"
        name="company"
        handlerOnChange={handlerOnChange}
        required
        value={formData.company.value}
        error={formData.company.error}
      >
        Company
      </Input>
      <Input
        id="discuss-email"
        type="email"
        name="email"
        handlerOnChange={handlerOnChange}
        required
        value={formData.email.value}
        error={formData.email.error}
      >
        Email
      </Input>
      <Input
        id="discuss-skype"
        type="text"
        name="skype"
        handlerOnChange={handlerOnChange}
        required
        value={formData.skype.value}
        error={formData.skype.error}
      >
        Skype
      </Input>
    </div>
  );
};

export default FormContacts;
