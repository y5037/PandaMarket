import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/assets/images/loginSignup/login_logo.png";
import GoogleImg from "@/public/assets/images/loginSignup/google.svg";
import KaKaoImg from "@/public/assets/images/loginSignup/kakao.svg";
import InVisibleImg from "@/public/assets/images/loginSignup/btn_invisible.svg";
import VisibleImg from "@/public/assets/images/loginSignup/btn_visible.svg";
import IconLoader from "@/public/assets/images/app/button/loader.gif";
import { useLogin } from "@/src/utils/useLogin";
import { useLoginProps } from "@/src/context/LoginProvider";
import { SignModal } from "../modal/SignModal";
import styles from "./loginSignup.module.css";

function LoginForm() {
  const {
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
  } = useLogin();

  const { postLogin, showModal, setShowModal, isModalMessage, isLoader } =
    useLoginProps();

  return (
    <>
      {showModal && (
        <SignModal
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                postLogin?.();
              }}
            >
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
              <div className={styles.btnBox}>
                <button
                  type="submit"
                  className={styles.btnSubmit}
                  disabled={isSubmit ? false : true}
                >
                  {isLoader ? (
                    <Image src={IconLoader} alt="Loading" width={50} />
                  ) : (
                    "로그인"
                  )}
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
            판다마켓이 처음이신가요? <Link href="/signup">회원가입</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
