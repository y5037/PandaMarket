import Head from "next/head";
import NavBar from "../components/app/NavBar";
import styles from "@/styles/app/error.module.css";
import Image from "next/image";
import iconError from "@/public/assets/images/app/error/icon_error.png";
import IconArrowRight from "@/public/assets/images/app/error/arrow_right.svg";
import Link from "next/link";
import Footer from "../components/app/Footer";

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>판다마켓</title>
      </Head>
      <NavBar $error />
      <div className={styles.container}>
        <div className={styles.icon}>
          <Image src={iconError} alt="404" />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.title}>페이지가 없거나 접근할 수 없어요</p>
          <p className={styles.description}>
            입력하신 주소가 맞는지 다시 확인해주세요
          </p>
        </div>
        <Link href={"/"}>
          <button type="button" className={styles.linkButton}>
            코드잇 홈으로
            <IconArrowRight />
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
