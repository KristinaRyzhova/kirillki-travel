import styles from "./burger-menu.module.css";
import { NavLink } from "react-router-dom";
import { BurgerMenuUIProps, CustomNavLinkProps } from "./type";

export const BurgerMenuUI: React.FC<BurgerMenuUIProps> = ({
  menuOpen,
  toggleMenu,
  closeMenu,
}) => {
  const getActiveClass = ({ isActive }: CustomNavLinkProps): string =>
    isActive ? styles.active : styles.inactive;

  return (
    <>
      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
        onClick={toggleMenu}
      >
        <span
          className={`${styles.burgerLine} ${menuOpen ? styles.lineTop : ""}`}
        ></span>
        <span
          className={`${styles.burgerLine} ${
            menuOpen ? styles.lineMiddle : ""
          }`}
        ></span>
        <span
          className={`${styles.burgerLine} ${
            menuOpen ? styles.lineBottom : ""
          }`}
        ></span>
      </button>

      <nav
        className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}
        onClick={closeMenu}
      >
        <NavLink to="/" className={getActiveClass}>
          Главная
        </NavLink>
        <NavLink to="/about" className={getActiveClass}>
          О нас
        </NavLink>
        <NavLink to="/photo" className={getActiveClass}>
          Фото
        </NavLink>
        <NavLink to="/texts" className={getActiveClass}>
          Тексты
        </NavLink>
      </nav>
    </>
  );
};
