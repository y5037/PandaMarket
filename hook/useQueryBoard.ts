import { axiosIntance } from "@/pages/api/axiosInstance";
import { useEffect, useState } from "react";

type UseQueryProps = {
  queryUrl: string;
  disabled?: boolean;
};

export const useQueryArticles = ({
  queryUrl,
  disabled = false,
}: UseQueryProps) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = async () => {
      setLoading(true);
      try {
        const response = await axiosIntance.get(queryUrl);
        setData(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (!disabled) {
      query();
    }
  }, [queryUrl]);

  return { data, loading };
};
