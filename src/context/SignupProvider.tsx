import { createContext, ReactNode, useContext, useState } from "react";
import { useModalController } from "../utils/useModalController";
import axiosInstance from "../api/axiosInstance";
import axios from "axios";
import { ContextType } from "./types";

const SignupContext = createContext<ContextType | null>(null);

export function SignupProvider({ children }: { children: ReactNode }) {
  const [isEmail, setIsEmail] = useState("");
  const [isName, setIsName] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isRePassword, setIsRePassword] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const { showModal, setShowModal, isModalMessage, setIsModalMessage } =
    useModalController();

  async function postSignup() {
    setIsLoader(true);
    try {
      await axiosInstance.post("/auth/signUp", {
        email: isEmail,
        nickname: isName,
        password: isPassword,
        passwordConfirmation: isRePassword,
      });

      setIsModalMessage("가입이 완료되어 로그인 페이지로 이동됩니다");
      setShowModal(true);
      setIsSignup(true);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.data.message === "Validation Failed") {
          setIsModalMessage(
            "닉네임의 최대 글자수는 공백 포함 20 글자수 입니다"
          );
        } else {
          setIsModalMessage(err.response?.data.message);
        }
        setShowModal(true);
        setIsSignup(false);
      }
    } finally {
      setIsLoader(false);
    }
  }

  return (
    <SignupContext.Provider
      value={{
        postSignup,
        isEmail,
        setIsEmail,
        isName,
        setIsName,
        isPassword,
        setIsPassword,
        isRePassword,
        setIsRePassword,
        showModal,
        setShowModal,
        isModalMessage,
        setIsModalMessage,
        isSignup,
        setIsSignup,
        isLoader,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
}

export function useSignupProps() {
  const context = useContext(SignupContext);

  if (!context) {
    throw new Error("SignupProvider 안에서 사용하세요.");
  }

  return context;
}
