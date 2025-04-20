import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

const postLike = async (productId: string) => {
  return await axiosInstance.post(`/products/${productId}/favorite`);
};

const deleteLike = async (productId: string) => {
  return await axiosInstance.delete(`/products/${productId}/favorite`);
};

export const useToggleLike = (productId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (liked: boolean) => {
      return liked ? deleteLike(productId) : postLike(productId);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
    },
  });
};
