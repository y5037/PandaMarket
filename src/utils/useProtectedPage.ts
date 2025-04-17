import { useEffect } from "react";
import { useRouter } from "next/router";

export default function useProtectedPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      router.replace("/login");
    }
  }, [router]);
}
