import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

const useDelBoard = (boardId: string | string[] | undefined) => {
  const queryClient = useQueryClient();

  const id = Array.isArray(boardId) ? boardId[0] : boardId;

  const fetchBoard = async (): Promise<void> => {
    await axiosInstance.delete(`/articles/${id}`);
  };

  return useMutation<void, Error, void>({
    mutationFn: fetchBoard,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["board"],
        exact: false,
      });
    },
  });
};

export default useDelBoard;
