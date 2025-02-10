import React from "react";
import styles from "./footer.module.css";
import { FooterUIProps } from "./type";

export const FooterUI: React.FC<FooterUIProps> = ({ year, isNewYearPolicy }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        &copy; {isNewYearPolicy ? `kirillki.travel, 2025 - ${year}` : `kirillki.travel, ${year}`}
      </div>
    </footer>
  );
};