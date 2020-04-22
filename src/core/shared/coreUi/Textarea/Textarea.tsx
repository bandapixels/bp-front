import React from "react";
import styles from "./textarea.module.scss";

interface TextareaProps {
  id?: string;
  placeholder?: string;
  name: string;
  disabled?: boolean;
}

const Textarea: React.FunctionComponent<TextareaProps> = ({
  id,
  placeholder,
  name,
  disabled
}) => {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      className={styles.textarea}
      disabled={disabled}
      rows={20}
    />
  );
};

export default Textarea;
