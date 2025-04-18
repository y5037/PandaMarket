import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

const fetchProductComments = async () => {
  try {
    const response = await axiosInstance.post(`/products/{}/comments`)
  } catch(err) {
    console.error('API 요청 실패:', err)
  }
};

const usePostProductComments = () => {
    return useQuery({
        queryKey:['productComment'],
        queryFn:() => fetchProductComments(),
    })
}
