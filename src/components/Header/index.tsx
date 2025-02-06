import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
import { BurgerMenu } from "../BurgerMenu";

export const Header = () => {
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
