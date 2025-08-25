import { useEffect, useRef } from "react";
import { useAuth } from "./useAuth";
import { setupInterceptors } from "@/src/api/axiosInstance";

export function useRefreshToken() {
  const { showModal, setShowModal, isModalMessage, setIsModalMessage } =
    useAuth();
  const hasSetMessage = useRef(false);

  useEffect(() => {
    if (!showModal) return;

    if (showModal) {
      setIsModalMessage("인증이 만료되어 로그인 화면으로 이동합니다.");
      hasSetMessage.current = true;
    }
  }, [showModal, setIsModalMessage]);

  useEffect(() => {
    setupInterceptors(setShowModal);
  }, [setShowModal]);

  return { showModal, setShowModal, isModalMessage };
}
