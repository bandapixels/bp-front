import React from "react";
import MenuList from "./MenuList";
import SocialList from "./SocialList";
import styles from "../header.module.scss";

const OpenedMobileMenu: React.FunctionComponent = () => {
  return (
    <div className={styles.openedMobileWrapper}>
      <MenuList />
      <SocialList />
      <a href="mailto:team@bandapixels.com" className={styles.mailBtn}>
        team@bandapixels.com
      </a>
    </div>
  );
};

export default OpenedMobileMenu;
