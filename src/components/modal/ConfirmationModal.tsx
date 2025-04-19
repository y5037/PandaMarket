import ModalContainer from "../app/ModalContainer";
import styles from "@/styles/app/modal.module.css";
import { useRouter } from "next/router";

interface Props {
  effectiveData?: boolean;
  setIsSignup?: (value: boolean) => void;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  isModalMessage: string;
}

export const ConfirmationModal = ({
  effectiveData,
  showModal,
  setShowModal,
  isModalMessage,
}: Props) => {
  const router = useRouter();

  const handleConfirmModal = () => {
    if (effectiveData) {
      router.push("/login");
    }
    setShowModal(false);
  };

  return (
    <>
      <ModalContainer isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className={styles.contents}>
          <div className={styles.message}>{isModalMessage}</div>
          <div className={styles.buttonContainer}>
            <button type="submit" onClick={handleConfirmModal} autoFocus>
              확인
            </button>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};
