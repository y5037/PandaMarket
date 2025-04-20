import axiosInstance from "./axiosInstance";

// 베스트/전체 상품 리스트
export async function getProductData(params = {}) {
  const query = new URLSearchParams(params).toString();
  const res = await axiosInstance.get(`/products?${query}`);

  return res.data;
}
