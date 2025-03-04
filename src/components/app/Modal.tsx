import ModalContainer from "./ModalContainer";
import styles from "@/styles/app/modal.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface Props {
  isLogout?: boolean;
  isSignup?: boolean;
  setIsSignup?: (value: boolean) => void;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  isModalMessage: string;
}

export const Modal = ({
  isLogout,
  isSignup,
  setIsSignup,
  showModal,
  setShowModal,
  isModalMessage,
}: Props) => {
  const router = useRouter();

  const handleCloseModal = () => {
    if (isSignup) {
      router.push("/login");
      setIsSignup?.(false);
    } else if (isLogout) {
      sessionStorage.removeItem("accessToken");
      if (router.route === "/") {
        window.location.reload();
      } else {
        router.push("/");
      }
    }

    setShowModal(false);
  };

  return (
    <>
      <ModalContainer isOpen={showModal} onClose={handleCloseModal}>
        <div className={styles.contents}>
          <div className={styles.message}>{isModalMessage}</div>
          <div className={styles.buttonContainer}>
            {isLogout && <button className={styles.cancel}>취소</button>}
            <button
              type="submit"
              onClick={handleCloseModal}
              autoFocus={!isLogout}
            >
              {isLogout ? "로그아웃" : "확인"}
            </button>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};
