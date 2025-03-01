import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";

type UseQueryProps = {
  queryUrl: string;
  disabled?: boolean;
};

type useQueryResult<T> = {
  data: T | null;
  loading: boolean;
};

export const useQuery = <T>({
  queryUrl,
  disabled = false,
}: UseQueryProps): useQueryResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = async () => {
      try {
        const response = await axiosInstance.get<T>(queryUrl);
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
