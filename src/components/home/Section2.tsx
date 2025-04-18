import Image from "next/image";
import homeContent1Img from "@/public/assets/images/app/home/Img_home_01.png";
import homeContent2Img from "@/public/assets/images/app/home/Img_home_02.png";
import homeContent3Img from "@/public/assets/images/app/home/Img_home_03.png";
import styles from "./home.module.css";

export function Section2() {
  return (
    <div className={`${styles.section} ${styles.section2} ${styles.type2}`}>
      <div className={styles.contentsWrap}>
        <div className={styles.imgBox}>
          <Image src={homeContent1Img} alt="인기상품 컨텐츠 이미지" />
        </div>
        <div className={styles.txtBox}>
          <div className={styles.cover}>
            <p className={styles.keyword}>Hot item</p>
            <p className={styles.title}>
              인기 상품을
              <br />
              확인해 보세요
            </p>
            <p className={styles.description}>
              가장HOT한 중고 거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.contentsWrap} ${styles.reverseWrap}`}>
        <div className={`${styles.txtBox} ${styles.reverse}`}>
          <div className={styles.cover}>
            <p className={styles.keyword}>Search</p>
            <p className={styles.title}>
              구매를 원하는
              <br />
              상품을 검색하세요
            </p>
            <p className={styles.description}>
              구매하고 싶은 물품을 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
        </div>
        <div className={styles.imgBox}>
          <Image src={homeContent2Img} alt="구매 검색 컨텐츠 이미지" />
        </div>
      </div>
      <div className={styles.contentsWrap}>
        <div className={styles.imgBox}>
          <Image src={homeContent3Img} alt="상품 등록 컨텐츠 이미지" />
        </div>
        <div className={styles.txtBox}>
          <div className={styles.cover}>
            <p className={styles.keyword}>Register</p>
            <p className={styles.title}>
              판매를 원하는
              <br />
              상품을 등록하세요
            </p>
            <p className={styles.description}>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
