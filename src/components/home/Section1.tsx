import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/home/home.module.css";
import banner1Img from "@/public/assets/images/app/home/Img_home_top.png";

export function Section1() {
  return (
    <div className={`${styles.section} ${styles.section1} ${styles.type1}`}>
      <div className={styles.contentsWrap}>
        <div className={styles.txtBox}>
          <p className={styles.title}>
            일상의 모든 물건을
            <br />
            거래해 보세요
          </p>
          <Link href="/items">
            <div className={styles.btnMain}>구경하러 가기</div>
          </Link>
        </div>
        <div className={styles.imgBox}>
          <Image src={banner1Img} alt="메인 배너 이미지" />
        </div>
      </div>
    </div>
  );
}
