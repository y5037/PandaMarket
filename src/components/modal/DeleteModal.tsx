import { UseInfiniteQueryResult, useQueryClient } from "@tanstack/react-query";
import ModalContainer from "../app/ModalContainer";
import styles from "@/styles/app/modal.module.css";
import useDelComments from "@/src/hooks/react-query/useDelComment";
import useDelProduct from "@/src/hooks/react-query/useDelProduct";
import { useRouter } from "next/router";
import useDelBoard from "@/src/hooks/react-query/useDelBoard";

interface Props {
  productId?: string | string[];
  boardId?: string | string[];
  commentId?: number;
  isDelProduct?: boolean;
  isDelBoard?: boolean;
  isDelProductComment?: boolean;
  isDelBoardComment?: boolean;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  isModalMessage: string;
  refetch?: UseInfiniteQueryResult["refetch"];
}

export const DeleteModal = ({
  productId,
  boardId,
  commentId,
  isDelProduct,
  isDelBoard,
  isDelProductComment,
  isDelBoardComment,
  showModal,
  setShowModal,
  isModalMessage,
  refetch,
}: Props) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutateAsync: deleteProductAsync } = useDelProduct(productId);
  const { mutateAsync: deleteBoardAsync } = useDelBoard(boardId);
  const { mutate: deleteComment } = useDelComments(
    isDelProductComment ? "product" : "board"
  );

  const handleConfirmModal = async () => {
    if (isDelProduct) {
      if (!productId) return;

      await deleteProductAsync();
      await queryClient.removeQueries({ queryKey: ["product"], exact: false });
      await router.replace("/items");
    } else if (isDelBoard) {
      if (!boardId) return;

      await deleteBoardAsync();
      await queryClient.removeQueries({ queryKey: ["board"], exact: false });
      await router.replace("/boards");
    }

    if (isDelProductComment || isDelBoardComment) {
      if (!commentId) return;

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
