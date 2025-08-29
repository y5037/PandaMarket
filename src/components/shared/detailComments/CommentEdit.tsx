import { CommentUIProps } from "../../items/id/types";
import styles from "./comment.module.css";
import useEditComment from "@/src/hooks/react-query/useEditComment";

export const CommentEdit: React.FC<CommentUIProps> = ({
  isEditProductComment,
  isEditBoardComment,
  changedComment,
  postId,
  commentId,
  refetch,
  setShowEdit,
  setShowSelect,
}) => {
  const { mutate: updateComment, isPending: uploadLoading } = useEditComment(
    isEditProductComment ? "product" : "board",
    postId
  );

  const handleUpdateComment = () => {
    if (isEditProductComment || isEditBoardComment) {
      if (!commentId) return;

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
    }
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
      <button disabled={uploadLoading} onClick={handleUpdateComment}>
        수정 완료
      </button>
    </div>
  );
};
