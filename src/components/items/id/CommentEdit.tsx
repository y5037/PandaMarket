import { CommentUIProps } from "./types";
import styles from "./productDetail.module.css";
import useEditProductComment from "@/src/hooks/useEditProductComment";

export const CommentEdit: React.FC<CommentUIProps> = ({
  changedComment,
  productId,
  commentId,
  refetch,
  setShowEdit,
  setShowSelect,
}) => {
  const { mutate: updateComment } = useEditProductComment(productId);

  const handleUpdateComment = () => {
    if (!commentId || !productId) return;

    updateComment(
      { commentId, changedComment },
      {
        onSuccess: async () => {
          await refetch();
          setShowEdit(null);
          setShowSelect(null);
        },
      }
    );
  };

  return (
    <div className={styles.editContainer}>
      <button
        onClick={() => {
          setShowEdit(null);
          setShowSelect(null);
        }}
      >
        취소
      </button>
      <button onClick={handleUpdateComment}>수정 완료</button>
    </div>
  );
};
