import { useLayoutEffect, useState } from "react";
import { useModalController } from "./useModalController";

export function useAuth() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const { showModal, setShowModal, isModalMessage, setIsModalMessage } =
    useModalController();

  useLayoutEffect(() => {
    const accessToken =
      typeof window !== "undefined"
        ? localStorage.getItem("accessToken")
        : null;

    setAccessToken(accessToken);
  }, []);

  return {
    accessToken,
    showModal,
    setShowModal,
    isModalMessage,
    setIsModalMessage,
  };
}
