import { useInfiniteQuery } from "@tanstack/react-query";
import { ListComment } from "../../types/itemTypes";
import axiosInstance from "../../api/axiosInstance";

const fetchProductComments = async ({
  pageParam = 1,
  productId,
}: {
  pageParam?: number;
  productId: string | string[];
}): Promise<{
  comments: ListComment[];
  nextPage?: number;
}> => {
  try {
    const requestURL =
      pageParam === 1
        ? `/products/${productId}/comments?limit=5`
        : `/products/${productId}/comments?limit=5&cursor=${pageParam}`;

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

const useGetProductComments = (productIdParam: string | string[]) => {
  const productId = Array.isArray(productIdParam)
    ? productIdParam[0]
    : productIdParam;

  return useInfiniteQuery({
    queryKey: ["productComment", productId],
    queryFn: ({ pageParam = 1 }) =>
      fetchProductComments({ pageParam, productId }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetProductComments;
