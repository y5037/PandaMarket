import { useLayoutEffect, useState } from "react";

export function useAuth() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useLayoutEffect(() => {
    const accessToken =
      typeof window !== "undefined"
        ? sessionStorage.getItem("accessToken")
        : null;

    setAccessToken(accessToken);
  }, []);

  return { accessToken };
}
