import { useRouter } from "next/router";

export function useAuth() {
  const accessToken =
    typeof window !== "undefined"
      ? sessionStorage.getItem("accessToken")
      : null;
  const router = useRouter();

  return { accessToken };
}
