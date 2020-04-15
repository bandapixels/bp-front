import React from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

interface ButtonProps {
  type?: "button";
  classes?: string;
  handlerClick?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  handlerClick,
  classes,
  type,
  children
}) => {
  const moduleClasses = classes.split(" ").map(classN => styles[classN]);

  return (
    <button
      className={classNames(moduleClasses)}
      onClick={handlerClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
