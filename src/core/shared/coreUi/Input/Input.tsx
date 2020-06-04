import React, { useState } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import styles from "./input.module.scss";
import { getErrors } from "../../../features/MainPageBlocks/Containers/DiscussTheProject/discussTheProject.selectors";
import { AppState } from "../../../store/store";

interface InputProps {
  id: string;
  placeholder?: string;
  type?: "text" | "email" | "number";
  name: string;
  disabled?: boolean;
  handlerOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FunctionComponent<InputProps> = ({
  id,
  placeholder,
  type,
  name,
  disabled,
  handlerOnChange,
  children,
  required
}) => {
  const [inputValue, setInputValue] = useState("");
  const errors = useSelector((state: AppState) => getErrors(state));
  const inputClasses = classNames({
    filledInput: inputValue.length > 0,
    errorInput: errors[name]
  });

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
        className={inputClasses}
        required={required}
      />
      <span>{children}</span>
    </label>
  );
};

export default Input;
