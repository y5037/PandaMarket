import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

const fetchBoard = async (boardId: string) => {
  try {
    const response = await axiosInstance.get(`/articles/${boardId}`);

    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const useGetBoardDetail = (boardId: string) => {
  return useQuery({
    queryKey: ["board", boardId],
    queryFn: () => fetchBoard(boardId),
  });
};
