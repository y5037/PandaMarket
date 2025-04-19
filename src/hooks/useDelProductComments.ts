import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

const fetchProductComments = async ({
  commentId,
}: {
  productId?: string | string[];
  commentId: number;
}) => {
  try {
    const res = await axiosInstance.delete(`/comments/${commentId}`);

    return { success: true };
  } catch (err) {
    console.error("API 요청 실패:", err);
    throw err;
  }
};

const useDelProductComments = (productIdParam: string | string[]) => {
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
    onError: (error) => {
      console.error("삭제 중 오류 발생", error);
    },
  });
};

export default useDelProductComments;
