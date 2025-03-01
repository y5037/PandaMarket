import { useLoginProps } from "@/src/context/LoginProvider";
import ModalContainer from "./ModalContainer";
import styles from "@/styles/app/modal.module.css";
import { useRouter } from "next/router";

interface Props {
  isRoute?: boolean;
  setIsRoute?: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  isModalMessage: string;
}

export const Modal = ({
  isRoute,
  setIsRoute,
  showModal,
  setShowModal,
  isModalMessage,
}: Props) => {
  const closeModal = () => setShowModal(false);

  const router = useRouter();

  return (
    <>
      <ModalContainer isOpen={showModal} onClose={closeModal}>
        <div className={styles.contents}>
          <div className={styles.message}>{isModalMessage}</div>
          <div className={styles.buttonContainer}>
            <button
              type="button"
              onClick={() => {
                closeModal();
                if (isRoute) {
                  router.push("/login");
                  setIsRoute?.(false);
                }
              }}
            >
              확인
            </button>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};
