import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  classes?: string;
  handlerClick?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  handlerClick,
  classes,
  type,
  children
}) => {
  return (
    <button className={styles[classes]} onClick={handlerClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
