import React, { useState } from "react";
import classNames from "classnames";
import Button from "../coreUi/Button/Button";
import MenuList from "./components/MenuList/MenuList";
import OpenedMobileMenu from "./components/OpenedMobileMenu/OpenedMobileMenu";

import styles from "./header.module.scss";

const Header: React.FunctionComponent = () => {
  const [openedMenu, setOpenedMenu] = useState(false);

  const handlerOpenMobileMenu = (): void => {
    setOpenedMenu(!openedMenu);
  };

  const headerStyles = classNames(styles.header, {
    openedMenuWrapper: openedMenu
  });

  return (
    <header className={headerStyles}>
      <div className={styles.logoWrapper}>
        <div className={styles.bigBlackLogo} />
      </div>
      <div className={styles.headerLeftPart}>
        <MenuList />
        <Button classes="headerBtn">
          discuss the project
          <img src="/images/icons/arrow.svg" alt="arrow" />
        </Button>
        <Button classes="menuSwitchBtn" handlerClick={handlerOpenMobileMenu} />
      </div>
      <OpenedMobileMenu openedMenu={openedMenu} />
    </header>
  );
};

export default Header;
