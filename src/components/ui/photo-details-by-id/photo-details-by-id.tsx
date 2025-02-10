import React from "react";
import styles from './photo-details-by-id.module.css';
import { PhotoDetailsByIdUIProps } from "./type";

export const PhotoDetailsByIdUI: React.FC<PhotoDetailsByIdUIProps> = ({ link, name }) => {
  return (
    <div className={styles.photoDetailsContainer}>
      <img src={link} alt={name} className={styles.photoImage} />
      <div className={styles.photoTitle}>{name}</div>
    </div>
  );
};