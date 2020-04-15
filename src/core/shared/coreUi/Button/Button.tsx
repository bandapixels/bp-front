import React from "react";
import classNames from "classnames";
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
  const moduleClasses = classes.split(" ").map(classN => styles[classN]);

  return (
    <button
      className={classNames(moduleClasses)}
      onClick={handlerClick}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
