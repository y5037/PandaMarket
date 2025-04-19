import { UseInfiniteQueryResult } from "@tanstack/react-query";
import ModalContainer from "../app/ModalContainer";
import styles from "@/styles/app/modal.module.css";
import useDelProductComments from "@/src/hooks/useDelProductComment";

interface Props {
  productId?: string | string[];
  commentId?: number;
  isDelProductComment?: boolean;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  isModalMessage: string;
  refetch: UseInfiniteQueryResult["refetch"];
}

export const DelCommentModal = ({
  productId,
  commentId,
  isDelProductComment,
  showModal,
  setShowModal,
  isModalMessage,
  refetch,
}: Props) => {
  const { mutate: deleteComment } = useDelProductComments(productId!);

  const handleConfirmModal = () => {
    if (!commentId || !productId) return;

    deleteComment(
      { commentId },
      {
        onSuccess: async () => {
          await refetch();
          setShowModal(false);
        },
      }
    );
  };

  return (
    <>
      <ModalContainer isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className={styles.contents}>
          <div className={styles.message}>{isModalMessage}</div>
          <div className={styles.buttonContainer}>
            {isDelProductComment && (
              <button
                className={styles.cancel}
                onClick={() => setShowModal(false)}
              >
                취소
              </button>
            )}
            <button type="submit" onClick={handleConfirmModal} autoFocus>
              확인
            </button>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};
