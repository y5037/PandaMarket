import { useInfiniteQuery } from "@tanstack/react-query";
import { ListComment } from "../../types/itemTypes";
import axiosInstance from "../../api/axiosInstance";

const fetchBoardComments = async ({
  pageParam = 1,
  boardId,
}: {
  pageParam?: number;
  boardId: string | string[];
}): Promise<{
  comments: ListComment[];
  nextPage?: number;
}> => {
  try {
    const requestURL =
      pageParam === 1
        ? `/articles/${boardId}/comments?limit=5`
        : `/articles/${boardId}/comments?limit=5&cursor=${pageParam}`;

    const response = await axiosInstance.get(requestURL);

    return {
      comments: response.data.list,
      nextPage: response.data.nextCursor,
    };
  } catch (err) {
    console.error("API 요청 실패:", err);
    throw err;
  }
};

const useGetBoardComments = (boardIdParam: string | string[]) => {
  const boardId = Array.isArray(boardIdParam)
    ? boardIdParam[0]
    : boardIdParam;

  return useInfiniteQuery({
    queryKey: ["boardComment", boardId],
    queryFn: ({ pageParam = 1 }) =>
      fetchBoardComments({ pageParam, boardId }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetBoardComments;
