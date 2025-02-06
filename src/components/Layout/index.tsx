import React from "react";

import styles from "./layout.module.css";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
