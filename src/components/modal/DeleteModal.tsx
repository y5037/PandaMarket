import { UseInfiniteQueryResult } from "@tanstack/react-query";
import ModalContainer from "../app/ModalContainer";
import styles from "@/styles/app/modal.module.css";
import useDelProductComments from "@/src/hooks/react-query/useDelProductComment";
import useDelProduct from "@/src/hooks/react-query/useDelProduct";
import { useRouter } from "next/router";

interface Props {
  productId?: string | string[];
  commentId?: number;
  isDelProduct?: boolean;
  isDelProductComment?: boolean;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  isModalMessage: string;
  refetch?: UseInfiniteQueryResult["refetch"];
}

export const DeleteModal = ({
  productId,
  commentId,
  isDelProduct,
  isDelProductComment,
  showModal,
  setShowModal,
  isModalMessage,
  refetch,
}: Props) => {
  const router = useRouter();

  const { mutate: deleteProduct } = useDelProduct(productId);
  const { mutate: deleteComment } = useDelProductComments(productId!);

  const handleConfirmModal = () => {
    if (isDelProduct) {
      if (!productId) return;

      deleteProduct();
      router.replace("/items");
    }

    if (isDelProductComment) {
      if (!commentId || !productId) return;

      deleteComment(
        { commentId },
        {
          onSuccess: async () => {
            if (refetch) await refetch();
            setShowModal(false);
          },
        }
      );
    }
  };

  return (
    <>
      <ModalContainer isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className={styles.contents}>
          <div className={styles.message}>{isModalMessage}</div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.cancel}
              onClick={() => setShowModal(false)}
            >
              취소
            </button>
            <button type="submit" onClick={handleConfirmModal} autoFocus>
              확인
            </button>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};
