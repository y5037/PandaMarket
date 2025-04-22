import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";
import { ProductList } from "./type";

const fetchProduct = async (params = {}): Promise<ProductList[]> => {
  try {
    const query = new URLSearchParams(params).toString();
    const response = await axiosInstance.get(`/products?${query}`);

    return response.data.list;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const useGetProduct = (params = {}) => {
  return useQuery<ProductList[]>({
    queryKey: ["product", params],
    queryFn: () => fetchProduct(params),
  });
};
