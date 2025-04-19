import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

const fetchProductComments = async ({
  commentId,
  changedComment,
}: {
  productId?: string | string[];
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

const useEditProductComment = (productIdParam: string | string[]) => {
  const queryClient = useQueryClient();
  const productId = Array.isArray(productIdParam)
    ? productIdParam[0]
    : productIdParam;

  return useMutation({
    mutationFn: fetchProductComments,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["productComment", productId],
      });
      await queryClient.refetchQueries({
        queryKey: ["productComment", productId],
      });
    },
    onError: (err) => {
      console.error("삭제 중 오류 발생", err);
    },
  });
};

export default useEditProductComment;
