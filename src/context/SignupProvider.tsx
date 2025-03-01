import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { modalController } from "../utils/modalController";
import axiosInstance from "../api/axios";
import axios from "axios";

const SignupContext = createContext({
  postSignup: () => {},
  isEmail: "",
  setIsEmail: (value: SetStateAction<string>) => {},
  isName: "",
  setIsName: (value: SetStateAction<string>) => {},
  isPassword: "",
  setIsPassword: (value: SetStateAction<string>) => {},
  isRePassword: "",
  setIsRePassword: (value: SetStateAction<string>) => {},
  showModal: false,
  setShowModal: (value: SetStateAction<boolean>) => {},
  isModalMessage: "",
  setIsModalMessage: (value: SetStateAction<string>) => {},
  isRoute: false,
  setIsRoute: (value: SetStateAction<boolean>) => {},
});

export function SignupProvider({ children }: { children: ReactNode }) {
  const [isEmail, setIsEmail] = useState("");
  const [isName, setIsName] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isRePassword, setIsRePassword] = useState("");
  const [isRoute, setIsRoute] = useState(false);

  const { showModal, setShowModal, isModalMessage, setIsModalMessage } =
    modalController();

  async function postSignup() {
    try {
      await axiosInstance.post("/auth/signUp", {
        email: isEmail,
        nickname: isName,
        password: isPassword,
        passwordConfirmation: isRePassword,
      });

      setShowModal(true);
      setIsModalMessage("가입이 완료되어 로그인 페이지로 이동됩니다");
      setIsRoute(true);
    } catch (err) {
      setShowModal(true);

      if (axios.isAxiosError(err)) {
        setIsModalMessage(err.response?.data.message);
      }
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
        isRoute,
        setIsRoute
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
