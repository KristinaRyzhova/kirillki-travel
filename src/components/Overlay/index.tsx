import React from "react";
import styles from "./overlay.module.css";

interface OverlayProps {
  isOpen: boolean;
  onClick: () => void;
}

export const Overlay: React.FC<OverlayProps> = ({ isOpen, onClick }) => {
  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
      onClick={onClick}
    ></div>
  );
};
