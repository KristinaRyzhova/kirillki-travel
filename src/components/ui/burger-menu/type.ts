export interface BurgerMenuUIProps {
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export interface CustomNavLinkProps {
  isActive: boolean;
}
