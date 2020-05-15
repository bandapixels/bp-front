import React, { useState } from "react";
import classNames from "classnames";
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
  const [textareaValue, setTextareaValue] = useState("");

  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      className={classNames(styles.textarea, {
        filledText: textareaValue.length > 0
      })}
      disabled={disabled}
      rows={20}
      onChange={(e): void => {
        handlerOnChange(e);
        setTextareaValue(e.target.value);
      }}
    />
  );
};

export default Textarea;
