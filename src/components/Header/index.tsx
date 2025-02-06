import styles from "./header.module.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles.active : styles.inactive;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.logo}>
          kiri<span className={styles.orange}>ll</span>ki.travel
        </NavLink>
        <div className={styles.menu}>
          <NavLink to="/about" className={getActiveClass}>
            О нас
          </NavLink>
          <NavLink to="/photo" className={getActiveClass}>
            Фото
          </NavLink>
          <NavLink to="/texts" className={getActiveClass}>
            Тексты
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
