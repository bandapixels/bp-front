import React from "react";
import styles from "./input.module.scss";

interface InputProps {
  id: string;
  placeholder?: string;
  type?: string;
  name: string;
  disabled?: boolean;
}

const Input: React.FunctionComponent<InputProps> = ({
  id,
  placeholder,
  type,
  name,
  disabled,
  children
}) => {
  return (
    <label htmlFor={id} className={styles.inputText}>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        disabled={disabled}
      />
      <span>{children}</span>
    </label>
  );
};

export default Input;
