import React, { useState } from "react";
import classNames from "classnames";
import styles from "./input.module.scss";

interface InputProps {
  id: string;
  placeholder?: string;
  type?: string;
  name: string;
  disabled?: boolean;
  handlerOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FunctionComponent<InputProps> = ({
  id,
  placeholder,
  type,
  name,
  disabled,
  handlerOnChange,
  children
}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <label htmlFor={id} className={styles.inputText}>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        disabled={disabled}
        onChange={(e): void => {
          handlerOnChange(e);
          setInputValue(e.target.value);
        }}
        className={classNames({ filledInput: inputValue.length > 0 })}
      />
      <span>{children}</span>
    </label>
  );
};

export default Input;
