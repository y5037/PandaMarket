import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

const fetchProductComments = async ({
  productId,
  comment,
}: {
  productId: string | string[];
  comment: string;
}) => {
  try {
    const response = await axiosInstance.post(
      `/products/${productId}/comments`,
      {
        content: comment,
      }
    );

    return response.data;
  } catch (err) {
    console.error("API 요청 실패:", err);
    throw err;
  }
};

const usePostProductComments = (productIdParam: string | string[]) => {
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
      console.error("등록 중 오류 발생", err);
    },
  });
};

export default usePostProductComments;
