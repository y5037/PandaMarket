import axiosInstance from "@/src/api/axiosInstance";
import { BoardList } from "@/src/types/boardTypes";
import { useQuery } from "@tanstack/react-query";

const fetchBoard = async (params = {}) => {
  try {
    const query = new URLSearchParams(params).toString();
    const response = await axiosInstance.get(`/articles?${query}`);

    return { list: response.data.list, totalCount: response.data.totalCount };
  } catch (err) {
    console.error("API 요청 실패:", err);
    throw err;
  }
};

export const useGetBoard = (params = {}) => {
  return useQuery<{ list: BoardList[]; totalCount: number }>({
    queryKey: ["board", params],
    queryFn: () => fetchBoard(params),
  });
};
