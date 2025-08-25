import axiosInstance from "../../api/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetchUser = async () => {
  try {
    const response = await axiosInstance.get(`/users/me`);

    return response.data;
  } catch (err) {
    console.error("API 요청 실패:", err);
    throw err;
  }
};

export const useGetUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
};
