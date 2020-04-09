import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  type?: "button";
  title?: string;
  classes?: string;
  handlerClick?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  title,
  handlerClick,
  classes,
  type
}) => {
  return (
    <button className={styles[classes]} onClick={handlerClick} type={type}>
      {title}
    </button>
  );
};

export default Button;
