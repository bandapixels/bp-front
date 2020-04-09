import React from "react";
import MenuList from "../MenuList/MenuList";
import SocialList from "../SocialList/SocialList";
import styles from "./openedMobileMenu.module.scss";

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
