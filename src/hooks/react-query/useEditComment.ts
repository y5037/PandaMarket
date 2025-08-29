import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

const fetchComments = async ({
  commentId,
  changedComment,
}: {
  commentId: number;
  changedComment: string;
}) => {
  try {
    await axiosInstance.patch(`/comments/${commentId}`, {
      content: changedComment,
    });
  } catch (err) {
    console.error("API 요청 실패:", err);
    throw err;
  }
};

const useEditComment = (
  type: "product" | "board",
  postId: string | string[]
) => {
  const queryClient = useQueryClient();
  const id = Array.isArray(postId) ? postId[0] : postId;

  return useMutation({
    mutationFn: fetchComments,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [
          `${type === "product" ? "productComment" : "boardComment"}`,
          id,
        ],
      });
      await queryClient.refetchQueries({
        queryKey: [
          `${type === "product" ? "productComment" : "boardComment"}`,
          id,
        ],
      });
    },
    onError: (err) => {
      console.error("삭제 중 오류 발생", err);
    },
  });
};

export default useEditComment;
