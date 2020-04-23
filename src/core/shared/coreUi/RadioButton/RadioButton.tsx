import React from "react";
import classNames from "classnames";

import styles from "./radioButton.module.scss";

interface InputProps {
  id: string;
  name: string;
  disabled?: boolean;
  value: string;
  smallInput?: boolean;
  handlerOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FunctionComponent<InputProps> = ({
  id,
  name,
  disabled,
  value,
  smallInput,
  handlerOnChange,
  children
}) => {
  const classes = classNames(styles.inputRadio, {
    smallInput
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
      />
      <div>
        <span className={styles.radioCircle} />
        <span>{children}</span>
      </div>
    </label>
  );
};

export default RadioButton;
