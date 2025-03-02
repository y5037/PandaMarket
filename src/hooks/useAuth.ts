import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuth() {
  const accessToken =
    typeof window !== "undefined"
      ? sessionStorage.getItem("accessToken")
      : null;
  const router = useRouter();

//   useEffect(() => {
//     if (!accessToken) {
//       router.replace("/login");
//     }
//   }, [router]);

  return { accessToken };
}
