import axiosInstance from "../api/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetchUser = async () => {
  try {
    const response = await axiosInstance.get(`/users/me`);

    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export function useGetUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
}
