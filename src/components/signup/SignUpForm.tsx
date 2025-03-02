import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/loginSignup/loginSignup.module.css";
import logoImg from "@/public/assets/images/loginSignup/login_logo.png";
import GoogleImg from "@/public/assets/images/loginSignup/google.svg";
import KaKaoImg from "@/public/assets/images/loginSignup/kakao.svg";
import InVisibleImg from "@/public/assets/images/loginSignup/btn_invisible.svg";
import VisibleImg from "@/public/assets/images/loginSignup/btn_visible.svg";
import { useSignup } from "@/src/hooks/useSignup";
import { useSignupProps } from "@/src/context/SignupProvider";
import { Modal } from "../app/Modal";

function SignUpForm() {
  const {
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
  } = useSignup();

  const {
    postSignup,
    showModal,
    setShowModal,
    isModalMessage,
    isRoute,
    setIsRoute,
  } = useSignupProps();

  return (
    <>
      {showModal && (
        <Modal
          isRoute={isRoute}
          setIsRoute={setIsRoute}
          showModal={showModal}
          setShowModal={setShowModal}
          isModalMessage={isModalMessage}
        />
      )}
      <div className={styles.containWrap}>
        <div className={styles.signInLayout}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logoImg} alt="판다마켓" className={styles.logoImg} />
              <p className={styles.companyName}>판다마켓</p>
            </Link>
          </div>
          <div className={styles.formWrap}>
            <form>
              <div className={styles.inputBox}>
                <label htmlFor="useremail">이메일</label>
                <div className={styles.cover}>
                  <input
                    id="useremail"
                    className={`${emailErrorChk ? styles.inputError : ""} ${
                      styles.input
                    }`}
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    onChange={getEmailInfo}
                    required={emailRequiredChk ? true : false}
                  />
                  <p className={styles.txtWarning}>{emailError}</p>
                </div>
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="username">닉네임</label>
                <div className={styles.cover}>
                  <input
                    id="username"
                    className={`${nameErrorChk ? styles.inputError : ""} ${
                      styles.input
                    }`}
                    type="text"
                    placeholder="닉네임을 입력해주세요"
                    onChange={getNameEmailInfo}
                    required={nameRequiredChk ? true : false}
                  />
                  <p className={styles.txtWarning}>{nicknameError}</p>
                </div>
              </div>
              <div className={`${styles.inputBox} ${styles.pointer}`}>
                <label htmlFor="userpw">비밀번호</label>
                <div className={styles.cover}>
                  <input
                    id="userpw"
                    className={`${passwordErrorChk ? styles.inputError : ""} ${
                      styles.input
                    }`}
                    type={passwordVisible ? "text" : "password"}
                    placeholder="비밀번호를 입력해주세요"
                    onChange={getPasswordInfo}
                    required={passwordRequiredChk ? true : false}
                    ref={isPasswordInput}
                  />
                  <p className={styles.txtWarning}>{passwordError}</p>
                  <button
                    type="button"
                    className={styles.btnVisible}
                    onClick={handlePasswordVisible}
                  >
                    {passwordVisible ? <VisibleImg /> : <InVisibleImg />}
                  </button>
                </div>
              </div>
              <div className={`${styles.inputBox} ${styles.pointer}`}>
                <label htmlFor="pwcheck">비밀번호 확인</label>
                <div className={styles.cover}>
                  <input
                    id="pwcheck"
                    className={`${
                      rePasswordErrorChk ? styles.inputError : ""
                    } ${styles.input}`}
                    type={rePasswordVisible ? "text" : "password"}
                    placeholder="비밀번호를 입력해주세요"
                    onChange={getRePasswordInfo}
                    required={rePasswordRequiredChk ? true : false}
                    ref={isRePasswordInput}
                  />
                  <p className={styles.txtWarning}>{rePasswordError}</p>
                  <button
                    type="button"
                    className={styles.btnVisible}
                    onClick={handleRePasswordVisible}
                  >
                    {rePasswordVisible ? <VisibleImg /> : <InVisibleImg />}
                  </button>
                </div>
              </div>
              <div className={styles.btnBox}>
                <button
                  type="button"
                  className={styles.btnSubmit}
                  disabled={isSubmit ? false : true}
                  onClick={postSignup}
                >
                  회원가입
                </button>
              </div>
            </form>
          </div>
          <div className={styles.signSocial}>
            <div className={styles.layoutBox}>
              <p className={styles.txt}>간편 로그인하기</p>
              <div className={styles.cover}>
                <div className={styles.btnGoogle}>
                  <Link
                    href="https://www.google.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <GoogleImg />
                  </Link>
                </div>
                <div className={styles.btnKakao}>
                  <Link
                    href="https://www.kakaocorp.com/page/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <KaKaoImg />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.returnLink}>
            이미 회원이신가요?{" "}
            <Link href="/login">
              로그인
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
