import React from "react";

import styles from "./layout.module.css";
import { Header } from "../../header/header";
import { Footer } from "../../footer/footer";

export const LayoutUI = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
