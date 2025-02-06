import styles from "./footer.module.css";
import React from "react";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        &copy; kirillki.travel, {year}
        {/* со следующего года надо: &copy; kirillki.travel, 2025 - {year} */}
      </div>
    </footer>
  );
};