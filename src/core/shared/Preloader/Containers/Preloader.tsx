import React, { useState } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import styles from "./preloader.module.scss";
import { getStart } from "../preloader.selectors";
import { AppState } from "../../../store/store";
import { setStart } from "../preloader.actions";

const Preloader: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const shouldStart = useSelector((state: AppState) => getStart(state));
  const [startAnimation, setStartAnimation] = useState(false);
  const classes = classNames(styles.preloaderOverlay, {
    preloaderOut: startAnimation
  });

  const handlerVideoEnd = (): void => {
    setStartAnimation(true);

    if (window.innerWidth < 669) {
      document.body.style.overflow = "visible";
      document.body.style.height = "auto";
    }
  };

  const handlerAnimation = (): void => {
    dispatch(setStart());
  };

  return (
    shouldStart && (
      <div className={classes} onAnimationEnd={handlerAnimation}>
        <video autoPlay muted loop={false} onEnded={handlerVideoEnd}>
          <source src="/videos/logo-loader.mp4" type="video/mp4" />
        </video>
      </div>
    )
  );
};

export default Preloader;
