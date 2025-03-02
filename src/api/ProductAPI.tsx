import axiosInstance from "./axiosInstance";
import { CommentDataProps, ProductDataProps } from "./types";

// 베스트/전체 상품 리스트
export async function getProductData(params = {}) {
  const query = new URLSearchParams(params).toString();
  const res = await axiosInstance.get(`/products?${query}`);

  return res.data;
}

// 디테일 상품 정보
export async function getProductId(
  productId: string | string[],
  setProductData: React.Dispatch<
    React.SetStateAction<ProductDataProps | undefined>
  >,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    const res = await axiosInstance.get(`/products/${productId}`);
    setProductData(res.data);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
}

// 디테일 댓글
export async function getComments(
  productId: string | string[],
  setCommentsData: React.Dispatch<
    React.SetStateAction<CommentDataProps | undefined>
  >
) {
  try {
    const res = await axiosInstance.get(
      `/products/${productId}/comments?limit=10`
    );
    setCommentsData(res.data);
  } catch (err) {
    console.error(err);
  }
}
