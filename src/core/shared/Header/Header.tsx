import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { changeSection } from "../FullPageScroll/fullPageScroll.actions";
import { getSection } from "../FullPageScroll/fullPageScroll.selectors";
import { AppState } from "../../store/store";
import Button from "../coreUi/Button/Button";
import MenuList from "./components/MenuList/MenuList";
import OpenedMobileMenu from "./components/OpenedMobileMenu/OpenedMobileMenu";

import styles from "./header.module.scss";

const Header: React.FunctionComponent = () => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const activeSection = useSelector((state: AppState) => getSection(state));
  const dispatch = useDispatch();

  const handlerOpenMobileMenu = (): void => {
    setOpenedMenu(!openedMenu);
  };

  const scrollToForm = (): void => {
    const needToScroll = (4 - activeSection) * -100;
    const wrapper = document.querySelector(".fullpageWrapper") as HTMLElement;
    const scrollHeight =
      +wrapper.getAttribute("style")?.replace(/[^-\d]/g, "") || 0;

    if (needToScroll !== 0) {
      wrapper.style.transform = `translateY(${scrollHeight + needToScroll}vh)`;
    }
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
          <span
            onClick={(): void => {
              scrollToForm();
              dispatch(changeSection(4));
            }}
          >
            discuss the project
          </span>
        </Button>
        <Button classes="menuSwitchBtn" handlerClick={handlerOpenMobileMenu} />
      </div>
      <OpenedMobileMenu openedMenu={openedMenu} />
    </header>
  );
};

export default Header;
