import { ChangeEvent, useEffect, useState } from "react";
import { useLoginProps } from "@/src/context/LoginProvider";
import emailCheck from "@/src/utils/emailValidation";

export function useLogin() {
  const [getId, setGetId] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailRequiredChk, setEmailRequiredChk] = useState(true);
  const [passwordRequiredChk, setPasswordRequiredChk] = useState(true);
  const [emailErrorChk, setEmailErrorChk] = useState(false);
  const [passwordErrorChk, setPasswordErrorChk] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const { isEmail, setIsEmail, isPassword, setIsPassword } = useLoginProps();

  const getEmailInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setGetId(e.target.id);
    setIsEmail(e.target.value);
  };

  const getPasswordInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setGetId(e.target.id);
    setIsPassword(e.target.value);
  };

  const emailErrorContext = (txt: string, flag: boolean) => {
    setEmailError(txt);
    setEmailRequiredChk(flag);
  };

  const passwordErrorContext = (txt: string, flag: boolean) => {
    setPasswordError(txt);
    setPasswordRequiredChk(flag);
  };

  const handlePasswordVisible = () => {
    if (passwordVisible) {
      setPasswordVisible(false);
    } else {
      setPasswordVisible(true);
    }
  };

  useEffect(() => {
    switch (getId) {
      case "useremail":
        if (isEmail === "") {
          emailErrorContext("이메일을 입력해주세요", true);
          setEmailErrorChk(true);
        } else if (isEmail !== "" && !emailCheck(isEmail)) {
          emailErrorContext("잘못된 이메일 형식입니다", true);
          setEmailErrorChk(true);
        } else if (emailCheck(isEmail)) {
          emailErrorContext("", false);
          setEmailErrorChk(false);
        }
        break;
      case "userpw":
        if (isPassword === "") {
          passwordErrorContext("비밀번호를 입력해주세요", true);
          setPasswordErrorChk(true);
        } else if (isPassword.length < 8) {
          passwordErrorContext("비밀번호를 8자 이상 입력해주세요", true);
          setPasswordErrorChk(true);
        } else if (isPassword.length >= 8) {
          passwordErrorContext("", false);
          setPasswordErrorChk(false);
        }
        break;
      default:
    }
  }, [isEmail, isPassword, getId]);

  useEffect(() => {
    if (emailRequiredChk !== true && passwordRequiredChk !== true) {
      setIsSubmit(true);
    } else {
      setIsSubmit(false);
    }
  }, [emailRequiredChk, passwordRequiredChk]);

  return {
    emailError,
    passwordError,
    emailRequiredChk,
    passwordRequiredChk,
    emailErrorChk,
    passwordErrorChk,
    passwordVisible,
    isSubmit,
    getEmailInfo,
    getPasswordInfo,
    handlePasswordVisible,
  };
}
