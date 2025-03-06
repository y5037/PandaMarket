import axios from "axios";
import { useAuth } from "../hooks/useAuth";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export function setupInterceptors() {
  const {setShowModal} = useAuth();

  axiosInstance.interceptors.request.use(
    (config) => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("accessToken");
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        } else {
          console.warn("토큰이 존재하지 않습니다.");
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true; // 중복 요청 방지

        try {
          const refreshToken = localStorage.getItem("refreshToken"); // refreshToken 가져오기
          if (!refreshToken) {
            setShowModal(true);
            console.warn("인증이 만료되어 로그인 화면으로 이동합니다.");
            return Promise.reject(error);
          }

          // 새 accessToken 발급 요청
          const { data } = await axiosInstance.post("/auth/refresh-token", {
            refreshToken,
          });

          // 새로운 accessToken 저장
          localStorage.setItem("accessToken", data.accessToken);

          originalRequest.header[
            "Authorization"
          ] = `Bearer ${data.accessToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.error("토큰 갱신 실패", refreshError);
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );
}

export default axiosInstance;
