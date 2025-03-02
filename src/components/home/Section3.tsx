import Image from "next/image";
import styles from "@/styles/home/home.module.css";
import banner2Img from "@/public/assets/images/app/home/Img_home_bottom.png";

export function Section3() {
  return (
    <div className={`${styles.section} ${styles.section3} ${styles.type1}`}>
      <div className={styles.contentsWrap}>
        <div className={styles.txtBox}>
          <p className={styles.title}>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </p>
        </div>
        <div className={styles.imgBox}>
          <Image src={banner2Img} alt="하단 배너 이미지" />
        </div>
      </div>
    </div>
  );
}
