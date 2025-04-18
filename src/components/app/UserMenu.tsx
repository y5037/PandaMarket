import styles from "@/styles/app/navi.module.css";
import { SignModal } from "../modal/SignModal";
import { useModalController } from "@/src/utils/useModalController";

export function UserMenu() {
  const { showModal, setShowModal, isModalMessage, setIsModalMessage } =
    useModalController();

  const handleLogout = () => {
    setIsModalMessage("로그아웃 하시겠습니까?");
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <SignModal
          isLogout
          showModal={showModal}
          setShowModal={setShowModal}
          isModalMessage={isModalMessage}
        />
      )}
      <ul className={styles.menuContainer}>
        <li className={styles.menu} onClick={handleLogout}>
          로그아웃
        </li>
      </ul>
    </>
  );
}
