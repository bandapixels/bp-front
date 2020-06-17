import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";

import styles from "./radioButton.module.scss";
import { AppState } from "../../../store/store";
import { getData } from "../../../features/MainPage/Containers/DiscussTheProject/discussTheProject.selectors";

interface InputProps {
  id: string;
  name: string;
  disabled?: boolean;
  value: string;
  smallInput?: boolean;
  handlerOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const RadioButton: React.FunctionComponent<InputProps> = ({
  id,
  name,
  disabled,
  value,
  smallInput,
  handlerOnChange,
  children,
  required
}) => {
  const data = useSelector((state: AppState) => getData(state));
  const { error } = data[name];
  const classes = classNames(styles.inputRadio, {
    smallInput,
    errorInput: error
  });

  return (
    <label htmlFor={id} className={classes}>
      <input
        type="radio"
        id={id}
        name={name}
        disabled={disabled}
        value={value}
        onChange={(e): void => handlerOnChange(e)}
        required={required}
      />
      <div>
        <span className={styles.radioCircle} />
        <span>{children}</span>
      </div>
    </label>
  );
};

export default RadioButton;
