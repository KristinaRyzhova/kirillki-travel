import React from "react";
import styles from "./overlay.module.css";

interface OverlayProps {
  isVisible: boolean;
  onClick: () => void;
}

export const Overlay: React.FC<OverlayProps> = ({ isVisible, onClick }) => {
  return isVisible ? (
    <div className={styles.overlay} onClick={onClick}></div>
  ) : null;
};
