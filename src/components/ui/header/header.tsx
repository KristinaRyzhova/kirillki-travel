import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import { BurgerMenu } from "../../burger-menu";

export const HeaderUI: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.logo}>
          kiri<span className={styles.orange}>ll</span>ki.travel
        </NavLink>
        <BurgerMenu />
      </nav>
    </header>
  );
};