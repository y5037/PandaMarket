import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

const fetchProductImg = async (previewUrl: Blob) => {
  const formData = new FormData();

  formData.append("image", previewUrl);
  try {
    const response = await axiosInstance.post(`/images/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.url;
  } catch (err) {
    console.error("API 요청 실패:", err);
    throw err;
  }
};

export const usePostProductImg = () => {
  return useMutation({
    mutationFn: fetchProductImg,
  });
};
