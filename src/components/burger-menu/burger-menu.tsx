import { useState, useEffect } from "react";
import { BurgerMenuUI } from "../ui/burger-menu/burger-menu";
import { OverlayUI } from "../ui";

export const BurgerMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <BurgerMenuUI
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        closeMenu={() => setMenuOpen(false)}
      />

      <OverlayUI isVisible={menuOpen} onClick={() => setMenuOpen(false)} />
    </>
  );
};
