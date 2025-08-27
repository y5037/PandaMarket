import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

interface Props {
  title: string;
  content: string;
}

const fetchBoard = async ({
  values,
  imgFile,
}: {
  values: Props;
  imgFile: string;
}) => {
  const payload = {
    title: values.title,
    content: values.content,
    image: imgFile,
  };

  try {
    const response = await axiosInstance.post(`/articles`, payload);

    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const usePostBoard = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchBoard,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["board"],
      });
    },
  });
};
