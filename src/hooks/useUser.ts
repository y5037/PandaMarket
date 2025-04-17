import axiosInstance from "../api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../utils/useAuth";

export function useUser<T>() {
  const { accessToken } = useAuth();

  const {
    data: isUserData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosInstance.get("/users/me");
      return response.data;
    },
    enabled: !!accessToken,
    retry: false,
  });

  return { isUserData, error, isLoading };
}
