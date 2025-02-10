import React from "react";
import styles from "./overlay.module.css";
import { OverlayPropsUI } from "./type";

export const OverlayUI: React.FC<OverlayPropsUI> = ({ isVisible, onClick }) => {
  return isVisible ? (
    <div className={styles.overlay} onClick={onClick}></div>
  ) : null;
};
