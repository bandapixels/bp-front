import React, { useState } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import styles from "./textarea.module.scss";
import { AppState } from "../../../store/store";
import { getErrors } from "../../../features/MainPageBlocks/Containers/DiscussTheProject/discussTheProject.selectors";

interface TextareaProps {
  id?: string;
  placeholder?: string;
  name: string;
  disabled?: boolean;
  handlerOnChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const Textarea: React.FunctionComponent<TextareaProps> = ({
  id,
  placeholder,
  name,
  disabled,
  handlerOnChange,
  required
}) => {
  const errors = useSelector((state: AppState) => getErrors(state));
  const [textareaValue, setTextareaValue] = useState("");
  const { error } = errors[name];
  const textareaClasses = classNames(styles.textarea, {
    filledText: textareaValue.length > 0
  });
  const textareaWrapperClasses = classNames(styles.textareaWrapper, {
    textareaError: error
  });

  return (
    <div className={textareaWrapperClasses}>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className={textareaClasses}
        disabled={disabled}
        rows={20}
        onChange={(e): void => {
          handlerOnChange(e);
          setTextareaValue(e.target.value);
        }}
        required={required}
      />
      {error && (
        <p className={styles.errorMessage}>
          {error === "length" && "required to fill"}
        </p>
      )}
    </div>
  );
};

export default Textarea;
