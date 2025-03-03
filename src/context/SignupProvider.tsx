import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { modalController } from "../utils/modalController";
import axiosInstance from "../api/axiosInstance";
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
      setIsModalMessage("가입이 완료되어 로그인 페이지로 이동됩니다");
      setShowModal(true);
      setIsRoute(true);
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
        setIsRoute(false);
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
        setIsRoute,
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
