import { FC } from "react";
import styles from "./modal.module.css";
import { ModalUIProps } from "./type";
import { OverlayUI } from "../overlay";

export const ModalUI: FC<ModalUIProps> = ({ onClose, children }) => {
  return (
    <>
      <OverlayUI isVisible={true} onClick={onClose} />
      <div className={styles.modal}>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </>
  );
};
