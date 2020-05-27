import React from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { useRouter } from "next/router";
import { changeSection } from "../../../FullPageScroll/fullPageScroll.actions";
import styles from "./menuItem.module.scss";

interface MenuItemProps {
  name: string;
  href: string;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({ name, href }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const linkStyles = classNames({
    activeLink: href === router.pathname,
    contactsHeader: router.pathname === "/contacts"
  });

  const changeLink = (e, link: string): void => {
    e.preventDefault();

    if (router.pathname !== link) {
      dispatch(changeSection(0));
      router.push(link);
    }
  };

  return (
    <li className={styles.menuItem}>
      <a
        className={linkStyles}
        href={href}
        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void =>
          changeLink(e, href)
        }
      >
        {name}
      </a>
    </li>
  );
};

export default MenuItem;
