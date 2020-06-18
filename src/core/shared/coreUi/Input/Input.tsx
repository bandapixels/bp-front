import React from "react";
import classNames from "classnames";
import styles from "./input.module.scss";

interface InputProps {
  id: string;
  placeholder?: string;
  type?: "text" | "email" | "number";
  name: string;
  disabled?: boolean;
  handlerOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  value: string;
  error?: string | boolean;
}

const Input: React.FunctionComponent<InputProps> = ({
  id,
  placeholder,
  type,
  name,
  disabled,
  handlerOnChange,
  children,
  required,
  value,
  error
}) => {
  const inputClasses = classNames({
    filledInput: value.length > 0
  });
  const labelClasses = classNames(styles.inputText, {
    fieldError: !!error
  });

  return (
    <label htmlFor={id} className={labelClasses}>
      <div className={styles.inputWrapper}>
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          name={name}
          disabled={disabled}
          onChange={(e): void => {
            handlerOnChange(e);
          }}
          className={inputClasses}
          required={required}
          value={value}
        />
        {error && (
          <p className={styles.errorMessage}>
            {error === "length" && "required to fill"}
            {error === "email" && "enter the correct email"}
            {error === "skype" && "enter the correct skype login"}
          </p>
        )}
      </div>
      <span>{children}</span>
    </label>
  );
};

export default Input;
