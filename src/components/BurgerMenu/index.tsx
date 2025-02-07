import { useState, useEffect } from "react";
import styles from "./burger-menu.module.css";
import { NavLink } from "react-router-dom";

export const BurgerMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  interface CustomNavLinkProps {
    isActive: boolean;
  }

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 576) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

      <div
        className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}
        onClick={() => setMenuOpen(false)}
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
      </div>
    </>
  );
};
