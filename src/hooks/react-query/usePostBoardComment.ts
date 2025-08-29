import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

const fetchBoardComments = async ({
  id,
  comment,
}: {
  id: string | string[];
  comment: string;
}) => {
  try {
    const response = await axiosInstance.post(`/articles/${id}/comments`, {
      content: comment,
    });

    return response.data;
  } catch (err) {
    console.error("API 요청 실패:", err);
    throw err;
  }
};

const usePostBoardComments = (boardIdParam: string | string[]) => {
  const queryClient = useQueryClient();
  const boardId = Array.isArray(boardIdParam)
    ? boardIdParam[0]
    : boardIdParam;

  return useMutation({
    mutationFn: fetchBoardComments,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["boardComment", boardId],
      });

      await queryClient.refetchQueries({
        queryKey: ["boardComment", boardId],
      });
    },
    onError: (err) => {
      console.error("등록 중 오류 발생", err);
    },
  });
};

export default usePostBoardComments;
