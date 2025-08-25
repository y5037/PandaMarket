import { ChangeEvent, useEffect, useRef, useState } from "react";
import emailValidation from "@/src/utils/emailValidation";
import { useSignupProps } from "@/src/context/SignupProvider";

export function useSignup() {
  const [getId, setGetId] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");
  const [emailRequiredChk, setEmailRequiredChk] = useState(true);
  const [nameRequiredChk, setNameRequiredChk] = useState(true);
  const [passwordRequiredChk, setPasswordRequiredChk] = useState(true);
  const [rePasswordRequiredChk, setRePasswordRequiredChk] = useState(true);
  const [emailErrorChk, setEmailErrorChk] = useState(false);
  const [nameErrorChk, setNameErrorChk] = useState(false);
  const [passwordErrorChk, setPasswordErrorChk] = useState(false);
  const [rePasswordErrorChk, setRePasswordErrorChk] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const isPasswordInput = useRef<HTMLInputElement>(null);
  const isRePasswordInput = useRef<HTMLInputElement>(null);

  const {
    isEmail,
    setIsEmail,
    isName,
    setIsName,
    isPassword,
    setIsPassword,
    isRePassword,
    setIsRePassword,
  } = useSignupProps();

  const getEmailInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setGetId(e.target.id);
    setIsEmail(e.target.value);
  };

  const getPasswordInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setGetId(e.target.id);
    setIsPassword(e.target.value);
  };

  const getNameEmailInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setGetId(e.target.id);
    setIsName?.(e.target.value);
  };

  const getRePasswordInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setGetId(e.target.id);
    setIsRePassword?.(e.target.value);
  };

  const emailErrorContext = (txt: string, flag: boolean) => {
    setEmailError(txt);
    setEmailRequiredChk(flag);
  };

  const passwordErrorContext = (txt: string, flag: boolean) => {
    setPasswordError(txt);
    setPasswordRequiredChk(flag);
  };

  const nameErrorContext = (txt: string, flag: boolean) => {
    setNicknameError(txt);
    setNameRequiredChk(flag);
  };

  const rePasswordErrorContext = (txt: string, flag: boolean) => {
    setRePasswordError(txt);
    setRePasswordRequiredChk(flag);
  };

  const handlePasswordVisible = () => {
    if (passwordVisible) {
      setPasswordVisible(false);
    } else {
      setPasswordVisible(true);
    }
  };

  const handleRePasswordVisible = () => {
    if (rePasswordVisible) {
      setRePasswordVisible(false);
    } else {
      setRePasswordVisible(true);
    }
  };

  useEffect(() => {
    switch (getId) {
      case "useremail":
        if (isEmail === "") {
          emailErrorContext("이메일을 입력해주세요", true);
          setEmailErrorChk(true);
        } else if (isEmail !== "" && !emailValidation(isEmail)) {
          emailErrorContext("잘못된 이메일 형식입니다", true);
          setEmailErrorChk(true);
        } else if (emailValidation(isEmail)) {
          emailErrorContext("", false);
          setEmailErrorChk(false);
        }
        break;
      case "username":
        if (isName === "") {
          nameErrorContext("닉네임을 입력해주세요", true);
          setNameErrorChk(true);
        } else if (isName !== "") {
          nameErrorContext("", false);
          setNameErrorChk(false);
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
      case "pwcheck":
        if (isRePassword === "" || isRePassword !== isPassword) {
          rePasswordErrorContext("비밀번호가 일치하지 않습니다", true);
          setRePasswordErrorChk(true);
        } else if (isRePassword === isPassword) {
          rePasswordErrorContext("", false);
          setRePasswordErrorChk(false);
        }

        if (passwordRequiredChk) {
          rePasswordErrorContext("비밀번호를 먼저 입력해주세요", true);
          setRePasswordErrorChk(true);
          if (isRePasswordInput.current) isRePasswordInput.current.value = "";
          if (isPasswordInput.current) isPasswordInput.current.focus();
        }
        break;
      default:
    }
  }, [isEmail, isPassword, isName, isRePassword, getId, passwordRequiredChk]);

  // 비밀번호 변경시 비밀번호 확인 인풋 초기화
  useEffect(() => {
    if (isRePasswordInput.current) isRePasswordInput.current.value = "";
    setRePasswordRequiredChk(true);
  }, [isPassword]);

  useEffect(() => {
    if (
      emailRequiredChk !== true &&
      passwordRequiredChk !== true &&
      nameRequiredChk !== true &&
      rePasswordRequiredChk !== true
    ) {
      setIsSubmit(true);
    } else {
      setIsSubmit(false);
    }
  }, [
    emailRequiredChk,
    nameRequiredChk,
    passwordRequiredChk,
    rePasswordRequiredChk,
  ]);

  return {
    emailErrorChk,
    nameErrorChk,
    passwordErrorChk,
    rePasswordErrorChk,
    getEmailInfo,
    getNameEmailInfo,
    getPasswordInfo,
    getRePasswordInfo,
    emailRequiredChk,
    nameRequiredChk,
    passwordRequiredChk,
    rePasswordRequiredChk,
    emailError,
    nicknameError,
    passwordError,
    rePasswordError,
    passwordVisible,
    rePasswordVisible,
    isPasswordInput,
    isRePasswordInput,
    handlePasswordVisible,
    handleRePasswordVisible,
    isSubmit,
  };
}
