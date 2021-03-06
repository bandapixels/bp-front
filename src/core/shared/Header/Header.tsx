import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { changeSection } from "../FullPageScroll/fullPageScroll.actions";
import { getSection } from "../FullPageScroll/fullPageScroll.selectors";
import { AppState } from "../../store/store";
import Button from "../coreUi/Button/Button";
import MenuList from "./components/MenuList/MenuList";
import OpenedMobileMenu from "./components/OpenedMobileMenu/OpenedMobileMenu";
import Arrow from "../Icons/Arrow/Arrow";
import { checkBrowser } from "../../utils/checkBrowser";

import styles from "./header.module.scss";

const Header: React.FunctionComponent = () => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const headerRef = useRef<HTMLElement>();
  const activeSection = useSelector((state: AppState) => getSection(state));
  const dispatch = useDispatch();
  const router = useRouter();
  const casesPages = [
    "/appnavi",
    "/sunup",
    "/shed",
    "/dcr",
    "/casekeepers",
    "/careers",
    "/careers/[id]"
  ];
  const handlerOpenMobileMenu = (): void => {
    setOpenedMenu(!openedMenu);
  };

  const scrollToSection = (scrollTo: number, section = activeSection): void => {
    const needToScroll = (scrollTo - section) * -100;
    const wrapper = document.querySelector(".fullpageWrapper") as HTMLElement;
    const scrollHeight =
      +wrapper.getAttribute("style")?.replace(/[^-\d]/g, "") || 0;

    if (needToScroll !== 0) {
      wrapper.style.transform = `translateY(${scrollHeight + needToScroll}vh)`;
      dispatch(changeSection(scrollTo));
    }
  };

  const handlerLogoClick = (): void => {
    if (router.pathname !== "/") {
      router.push("/");
    } else {
      scrollToSection(0);
    }
  };

  const handlerClick = (): void => {
    const browser = checkBrowser();

    if (
      browser.name === "Firefox" &&
      +browser.version < 60 &&
      router.pathname === "/"
    ) {
      const section = document.querySelector(".discussWrapper") as HTMLElement;

      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
    } else if (router.pathname === "/") {
      scrollToSection(4);
    } else {
      router.push("/form");
    }
  };

  const headerStyles = classNames(styles.header, {
    openedMenuWrapper: openedMenu,
    smallYellowHeader: router.pathname === "/form",
    blogHeader: router.pathname === "/projects",
    casesHeader: casesPages.includes(router.pathname),
    smallFullYellowHeader: router.route === "/404"
  });

  const handlerScrollInCases = (): void => {
    const header = headerRef.current;

    if (window.scrollY > 200) {
      header.classList.add("smallCasesHeader");
    } else {
      header.classList.remove("smallCasesHeader");
    }
  };

  useEffect(() => {
    if (casesPages.includes(router.pathname)) {
      window.addEventListener("scroll", handlerScrollInCases);
    }

    return (): void =>
      window.removeEventListener("scroll", handlerScrollInCases);
  }, []);

  return (
    <header className={headerStyles} ref={headerRef}>
      <div className={styles.logoWrapper} onClick={handlerLogoClick}>
        <div className={styles.bigBlackLogo} />
      </div>
      <div className={styles.headerLeftPart}>
        <MenuList />
        <button className={styles.headerBtn} onClick={handlerClick}>
          <div>
            <span>discuss the project</span>
            <Arrow />
          </div>
        </button>
        <Button classes="menuSwitchBtn" handlerClick={handlerOpenMobileMenu} />
      </div>
      <OpenedMobileMenu openedMenu={openedMenu} />
    </header>
  );
};

export default Header;
