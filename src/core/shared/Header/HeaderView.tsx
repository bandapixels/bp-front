import React, { useState } from "react";
import classNames from "classnames";
import Button from "../coreUi/Button/Button";
import MenuList from "./components/MenuList";
import OpenedMobileMenu from "./components/OpenedMobileMenu";

import styles from "./header.module.scss";

const HeaderView: React.FunctionComponent = () => {
  const [openedMenu, setOpenedMenu] = useState(false);

  const handlerOpenMobileMenu = (): void => {
    setOpenedMenu(!openedMenu);
  };

  const headerStyles = classNames(
    styles.header,
    openedMenu ? styles.openedMenuWrapper : ""
  );

  return (
    <header className={headerStyles}>
      <div className={styles.logoWrapper}>
        <div className={styles.bigBlackLogo} />
      </div>
      <div className={styles.headerLeftPart}>
        <MenuList />
        <Button classes={styles.headerBtn} title="discuss the project" />
        <Button
          classes={styles.menuSwitchBtn}
          handlerClick={handlerOpenMobileMenu}
        />
      </div>
      {openedMenu && <OpenedMobileMenu />}
    </header>
  );
};

export default HeaderView;
