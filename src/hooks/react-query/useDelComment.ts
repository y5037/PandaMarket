import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

const fetchComments = async ({ commentId }: { commentId: number }) => {
  try {
    await axiosInstance.delete(`/comments/${commentId}`);

    return { success: true };
  } catch (err) {
    console.error("API 요청 실패:", err);
    throw err;
  }
};

const useDelComments = (
  type: "product" | "board",
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchComments,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [`${type === "product" ? "productComment" : "boardComment"}`],
      });

      await queryClient.refetchQueries({
        queryKey: [`${type === "product" ? "productComment" : "boardComment"}`],
      });
    },
    onError: (err) => {
      console.error("삭제 중 오류 발생", err);
    },
  });
};

export default useDelComments;
