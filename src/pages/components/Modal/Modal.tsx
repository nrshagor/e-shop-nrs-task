// Modal.tsx
import React, { useState, useEffect } from "react";
import style from "@/styles/modal.module.scss";
import { FaLessThan } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
    } else {
      setIsClosing(true);
      const timeoutId = setTimeout(() => {
        setIsRendered(false);
        setIsClosing(false);
      }, 500); // Adjust the duration based on your animation time
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isRendered && (
        <div
          className={`${style.modalOverlay} ${isOpen ? style.open : ""} ${
            isClosing ? style.closing : ""
          }`}
          onClick={handleOverlayClick}
        >
          <div
            className={`${style.modal} ${isOpen ? style.open : ""} ${
              isClosing ? style.closing : ""
            }`}
          >
            <div className={style.modalHeader}>
              <button onClick={onClose}>
                <FaLessThan />
              </button>
              <h2>Add New Customer</h2>
            </div>

            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
