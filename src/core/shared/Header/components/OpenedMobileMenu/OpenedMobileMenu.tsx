import React, { useState, useEffect } from "react";
import classNames from "classnames";
import MenuList from "../MenuList/MenuList";
import SocialList from "../SocialList/SocialList";
import styles from "./openedMobileMenu.module.scss";

interface MenuProps {
  openedMenu?: boolean;
}

const OpenedMobileMenu: React.FunctionComponent<MenuProps> = ({
  openedMenu
}) => {
  const [shouldRender, setRender] = useState(openedMenu);
  const classes = classNames(styles.openedMobileWrapper, {
    slideUp: !openedMenu,
    slideDown: openedMenu
  });

  useEffect(() => {
    if (openedMenu) setRender(true);
  }, [openedMenu]);

  const onAnimationEnd = (): void => {
    if (!openedMenu) setRender(false);
  };

  return (
    shouldRender && (
      <div className={classes} onAnimationEnd={onAnimationEnd}>
        <MenuList />
        <div>
          <SocialList />
          <a href="mailto:team@bandapixels.com" className={styles.mailBtn}>
            team@bandapixels.com
          </a>
        </div>
      </div>
    )
  );
};

export default OpenedMobileMenu;
