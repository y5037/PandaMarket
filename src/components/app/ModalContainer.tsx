import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "@/styles/app/modal.module.css";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function ModalContainer({
  isOpen,
  onClose,
  children,
  className,
}: ModalProps) {
  if (typeof window === "undefined") return null;
  if (!isOpen) return null;

  return createPortal(
    <div className={`${styles.modalOverlay} ${className}`} onClick={onClose}>
      <div
        className={`${styles.modalContent} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
