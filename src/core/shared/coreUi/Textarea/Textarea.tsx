import React from "react";
import styles from "./textarea.module.scss";

interface TextareaProps {
  id?: string;
  placeholder?: string;
  name: string;
  disabled?: boolean;
  handlerOnChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FunctionComponent<TextareaProps> = ({
  id,
  placeholder,
  name,
  disabled,
  handlerOnChange
}) => {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      className={styles.textarea}
      disabled={disabled}
      rows={20}
      onChange={(e): void => handlerOnChange(e)}
    />
  );
};

export default Textarea;
