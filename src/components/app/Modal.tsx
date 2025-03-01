import { useLoginProps } from "@/src/context/LoginProvider";
import ModalContainer from "./ModalContainer";
import styles from "@/styles/app/modal.module.css";

export const Modal = () => {
  const { showModal, setShowModal, isModalMessage } = useLoginProps();

  const closeModal = () => setShowModal(false);

  return (
    <>
      <ModalContainer isOpen={showModal} onClose={closeModal}>
        <div className={styles.contents}>
          <div className={styles.message}>{isModalMessage}</div>
          <div className={styles.buttonContainer}>
            <button type="button" onClick={closeModal}>
              확인
            </button>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};
