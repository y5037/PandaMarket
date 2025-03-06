import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";
import { useRouter } from "next/router";
import axios from "axios";
import axiosInstance from "../api/axiosInstance";
import { modalController } from "../utils/modalController";
import { ContextType } from "./types";

const LoginContext = createContext<ContextType | null>(null);

export function LoginProvider({ children }: { children: ReactNode }) {
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const router = useRouter();

  const { showModal, setShowModal, isModalMessage, setIsModalMessage } =
    modalController();

  async function postLogin() {
    setIsLoader(true);
    try {
      const response = await axiosInstance.post("/auth/signIn", {
        email: isEmail,
        password: isPassword,
      });

      const { accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);

      router.push("/items");
    } catch (err) {
      setShowModal(true);
      if (axios.isAxiosError(err)) {
        setIsModalMessage(err.response?.data.message);
      }
    } finally {
      setIsLoader(false);
    }
  }

  return (
    <LoginContext.Provider
      value={{
        isEmail,
        setIsEmail,
        isPassword,
        setIsPassword,
        postLogin,
        showModal,
        setShowModal,
        isModalMessage,
        setIsModalMessage,
        isLoader,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export function useLoginProps() {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("LoginProvider 안에서 사용하세요.");
  }

  return context;
}
