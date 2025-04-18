import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

interface Props {
  name: string;
  description: string;
  price: number | string;
  tag: string[];
}

const fetchProduct = async ({
  values,
  imgFile,
}: {
  values: Props;
  imgFile: string;
}) => {

  const payload = {
    name: values.name,
    description: values.description,
    price: Number(values.price),
    tags: values.tag,
    images: [imgFile],
  };

  try {
    const response = await axiosInstance.post(`/products`, payload);

    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const usePostProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchProduct,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["product"],
      });
    },
  });
};
