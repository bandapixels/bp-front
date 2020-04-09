import React from "react";

interface ButtonProps {
  title?: string;
  classes?: string;
  handlerClick?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  title,
  handlerClick,
  classes
}) => {
  return (
    <button className={classes} onClick={handlerClick}>
      {title}
    </button>
  );
};

export default Button;
