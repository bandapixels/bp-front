import React from "react";
import MenuList from "./MenuIList";
import styles from "../header.module.scss";

const OpenedMobileMenu: React.FunctionComponent = () => {
  return (
    <div className={styles.openedMobileWrapper}>
      <MenuList />
    </div>
  );
};

export default OpenedMobileMenu;
