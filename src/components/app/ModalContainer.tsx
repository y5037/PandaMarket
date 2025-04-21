import React from "react";
import { createPortal } from "react-dom";
import styles from "@/styles/app/modal.module.css";
import { useRouter } from "next/router";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
  effectiveData?: boolean;
}

export default function ModalContainer({
  isOpen,
  onClose,
  children,
  className,
  effectiveData,
}: ModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  return createPortal(
    <div
      className={`${styles.modalOverlay} ${className}`}
      onClick={() => {
        if (onClose) onClose();
        if (effectiveData) router.replace("/login");
      }}
    >
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
