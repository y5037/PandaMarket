import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

const postLike = async (boardId: string) => {
  return await axiosInstance.post(`/articles/${boardId}/like`);
};

const deleteLike = async (boardId: string) => {
  return await axiosInstance.delete(`/articles/${boardId}/like`);
};

export const useToggleLike = (boardId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (liked: boolean) => {
      return liked ? deleteLike(boardId) : postLike(boardId);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board", boardId] });
    },
  });
};
