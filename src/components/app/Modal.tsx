import ModalContainer from "./ModalContainer";
import styles from "@/styles/app/modal.module.css";
import { useRouter } from "next/router";

interface Props {
  isRoute?: boolean;
  setIsRoute?: (value: boolean) => void;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  isModalMessage: string;
}

export const Modal = ({
  isRoute,
  setIsRoute,
  showModal,
  setShowModal,
  isModalMessage,
}: Props) => {
  const closeModal = () => {
    setShowModal(false);
    if (isRoute) {
      router.push("/login");
      setIsRoute?.(false);
    }
  };

  const router = useRouter();

  return (
    <>
      <ModalContainer isOpen={showModal} onClose={closeModal}>
        <div className={styles.contents}>
          <div className={styles.message}>{isModalMessage}</div>
          <div className={styles.buttonContainer}>
            <button type="submit" onClick={closeModal} autoFocus>
              확인
            </button>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};
