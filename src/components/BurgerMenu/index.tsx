import { useState, useEffect } from "react";
import styles from "./burger-menu.module.css";
import { NavLink } from "react-router-dom";
import { Overlay } from "../Overlay";

export const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  // Закрытие меню при увеличении ширины экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 576) {
        setMenuOpen(false); // Автоматически закрываем меню
      }
    };

    // Подписка на событие изменения размера окна
    window.addEventListener("resize", handleResize);

    // Удаление обработчика при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Эффект выполняется один раз при монтировании компонента

  // Функция для добавления активного класса к ссылке
  const getActiveClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles.active : styles.inactive;

  return (
    <>
      {/* Затемняющий фон */}
      
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
      <Overlay isOpen={menuOpen} onClick={() => setMenuOpen(false)} />
    </>
  );
};
