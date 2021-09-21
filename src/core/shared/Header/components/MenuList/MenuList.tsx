import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./menuList.module.scss";

const MenuList: React.FunctionComponent = () => {
  const menuItems = [
    {
      name: "Main",
      href: "/"
    },
    {
      name: "Services",
      href: "/services"
    },
    {
      name: "Projects",
      href: "/projects"
    },
    {
      name: "Blog",
      href: "/blog"
    },
    {
      name: "Careers",
      href: "/careers"
    },
    {
      name: "Contacts",
      href: "/contacts"
    }
  ];

  return (
    <nav className={styles.navBarMenu}>
      <ul className={styles.menuList}>
        {menuItems.map(({ name, href }) => (
          <MenuItem name={name} href={href} key={name} />
        ))}
      </ul>
    </nav>
  );
};

export default MenuList;
