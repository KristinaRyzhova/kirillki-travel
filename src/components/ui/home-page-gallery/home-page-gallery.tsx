import React from "react";
import styles from "./home-page-gallery.module.css";
import { HomePagePhotoGalleryUIProps } from "./type";

export const HomePagePhotoGalleryUI: React.FC<HomePagePhotoGalleryUIProps> = ({
  link,
  name,
  onClose,
}) => {
  return (
    <div className={styles.photoDetailsContainer}>
      <button
        onClick={onClose}
        aria-label="Close modal"
        className={styles.closeButton}
        type="button"
      ></button>
      <img src={link} alt={name} className={styles.photoImage} />
      <div className={styles.photoTitle}>{name}</div>
    </div>
  );
};
