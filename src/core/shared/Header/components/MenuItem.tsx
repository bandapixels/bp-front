import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../header.module.scss";

interface MenuItemProps {
  name: string;
  href: string;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({ name, href }) => {
  const router = useRouter();
  return (
    <li className={styles.menuItem}>
      <Link href={href}>
        <a className={href === router.pathname ? styles.activeLink : ""}>
          {name}
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
