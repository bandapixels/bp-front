import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import styles from "./menuItem.module.scss";

interface MenuItemProps {
  name: string;
  href: string;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({ name, href }) => {
  const router = useRouter();
  const linkStyles = classNames({
    activeLink: href === router.pathname
  });

  return (
    <li className={styles.menuItem}>
      <Link href={href}>
        <a className={linkStyles}>{name}</a>
      </Link>
    </li>
  );
};

export default MenuItem;
