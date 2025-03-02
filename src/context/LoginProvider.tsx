import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useRouter } from "next/router";
import axios from "axios";
import axiosInstance from "../api/axiosInstance";
import { modalController } from "../utils/modalController";

const LoginContext = createContext({
  postLogin: () => {},
  isEmail: "",
  setIsEmail: (value: SetStateAction<string>) => {},
  isPassword: "",
  setIsPassword: (value: SetStateAction<string>) => {},
  showModal: false,
  setShowModal: (value: SetStateAction<boolean>) => {},
  isModalMessage: "",
  setIsModalMessage: (value: SetStateAction<string>) => {},
});

export function LoginProvider({ children }: { children: ReactNode }) {
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const router = useRouter();

  const { showModal, setShowModal, isModalMessage, setIsModalMessage } =
    modalController();

  async function postLogin() {
    try {
      const response = await axiosInstance.post("/auth/signIn", {
        email: isEmail,
        password: isPassword,
      });

      const { accessToken } = response.data;
      sessionStorage.setItem("accessToken", accessToken);

      router.push("/items");
    } catch (err) {
      setShowModal(true);
      if (axios.isAxiosError(err)) {
        setIsModalMessage(err.response?.data.message);
      }
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
