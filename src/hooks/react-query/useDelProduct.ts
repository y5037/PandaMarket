import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

const useDelProduct = (productIdParam: string | string[] | undefined) => {
  const queryClient = useQueryClient();

  const productId = Array.isArray(productIdParam)
    ? productIdParam[0]
    : productIdParam;

  const deleteProduct = async (): Promise<void> => {
    await axiosInstance.delete(`/products/${productId}`);
  };

  return useMutation<void, Error, void>({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["product"],
        exact: false,
      });
    },
  });
};

export default useDelProduct;
