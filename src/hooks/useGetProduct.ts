import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";
import { ProductList } from "./type";

const fetchProduct = async (params = {}) => {
  try {
    const query = new URLSearchParams(params).toString();
    const response = await axiosInstance.get(`/products?${query}`);

    return { list: response.data.list, totalCount: response.data.totalCount };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const useGetProduct = (params = {}) => {
  return useQuery<{ list: ProductList[]; totalCount: number }>({
    queryKey: ["product", params],
    queryFn: () => fetchProduct(params),
  });
};
