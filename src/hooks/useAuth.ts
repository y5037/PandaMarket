import { useEffect, useState } from "react";

export function useAuth() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const accessToken =
      typeof window !== "undefined"
        ? sessionStorage.getItem("accessToken")
        : null;

    setAccessToken(accessToken);
  }, [accessToken]);

  return { accessToken };
}
