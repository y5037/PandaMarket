import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/home/home.module.css";
import Logo from "@/public/assets/images/app/navi/logo.svg";
import profileDefaultImg from "@/public/assets/images/app/navi/profile_default.png";
import { useAuth } from "@/src/hooks/useAuth";

function MainNav() {
  const { accessToken } = useAuth();
  return (
    <div className={styles.fixContainer}>
      <nav className={styles.headerWrap}>
        <div className={styles.logoWrap}>
          <Link href="/">
            <Logo />
            <p className={styles.companyName}>판다마켓</p>
          </Link>
        </div>
        {accessToken ? (
          <div className={styles.userControl}>
            <div className={styles.circle}>
              <Image src={profileDefaultImg} alt="기본프로필이미지" />
            </div>
          </div>
        ) : (
          <Link href="/login">
            <div className={styles.btnLogin}>로그인</div>
          </Link>
        )}
      </nav>
    </div>
  );
}

export default MainNav;
