import ModalContainer from "../app/ModalContainer";
import styles from "@/styles/app/modal.module.css";
import { useRouter } from "next/router";

interface Props {
  isLogout?: boolean;
  isSignup?: boolean;
  setIsSignup?: (value: boolean) => void;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  isModalMessage: string;
}

export const SignModal = ({
  isLogout,
  isSignup,
  setIsSignup,
  showModal,
  setShowModal,
  isModalMessage,
}: Props) => {
  const router = useRouter();

  const handleConfirmModal = () => {
    if (isSignup) {
      handleSignup();
    } else if (isLogout) {
      handleLogout();
    }
    setShowModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    if (router.route === "/") {
      window.location.reload();
    } else {
      router.push("/");
    }
  };

  const handleSignup = () => {
    router.push("/login");
    setIsSignup?.(false);
  };

  return (
    <>
      <ModalContainer isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className={styles.contents}>
          <div className={styles.message}>{isModalMessage}</div>
          <div className={styles.buttonContainer}>
            {isLogout && (
              <button
                className={styles.cancel}
                onClick={() => setShowModal(false)}
              >
                취소
              </button>
            )}
            <button
              type="submit"
              onClick={handleConfirmModal}
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
