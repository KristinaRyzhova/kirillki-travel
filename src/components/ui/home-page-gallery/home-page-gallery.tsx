import React from "react";
import styles from "./home-page-gallery.module.css";
import { HomePagePhotoGalleryUIProps } from "./type";

export const HomePagePhotoGalleryUI: React.FC<HomePagePhotoGalleryUIProps> = ({
  link,
  name,
}) => {
  return (
    <div className={styles.photoDetailsContainer}>
      <img src={link} alt={name} className={styles.photoImage} />
      <div className={styles.photoTitle}>{name}</div>
    </div>
  );
};
