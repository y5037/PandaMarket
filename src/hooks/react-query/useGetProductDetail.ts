import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

const fetchProduct = async (productId: string) => {
  try {
    const response = await axiosInstance.get(`/products/${productId}`);

    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const useGetProductDetail = (productId: string) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
  });
};
