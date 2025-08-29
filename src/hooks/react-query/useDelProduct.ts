import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

const useDelProduct = (productId: string | string[] | undefined) => {
  const queryClient = useQueryClient();

  const id = Array.isArray(productId)
    ? productId[0]
    : productId;

  const fetchProduct = async (): Promise<void> => {
    await axiosInstance.delete(`/products/${id}`);
  };

  return useMutation<void, Error, void>({
    mutationFn: fetchProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["product"],
        exact: false,
      });
    },
  });
};

export default useDelProduct;
