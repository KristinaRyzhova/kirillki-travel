import { FC, useEffect } from "react";
import ReactDOM from "react-dom";
import { ModalUI } from "../ui";
import { ModalProps } from "./type";

const modalRoot = document.getElementById("modals");

export const Modal: FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    const noScroll = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = noScroll;
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!modalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalUI onClose={onClose}>{children}</ModalUI>,
    modalRoot as HTMLDivElement
  );
};