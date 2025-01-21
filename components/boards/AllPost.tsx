import Image from "next/image";
import styles from "../../styles/boards/postList.module.css";
import noImg from "@/public/assets/images/app/common/no_img.jpg";
import WishHeartImg from "@/public/assets/images/boards/ic_heart.svg";

function AllPost() {
  return (
    <>
      <div className={styles.contentsCover}>
        <p className={styles.title}>
          맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
        </p>
        <div className={styles.thumbnailImg}>
          <Image src={noImg} alt="게시글 이미지" priority />
        </div>
      </div>
      <div className={styles.infoCover}>
        <div className={styles.leftLine}>
          <div className={styles.profileImg}>
            <Image
              src="/assets/images/items/default_profile.svg"
              alt="프로필 이미지"
              fill
            />
          </div>
          <p className={styles.nickName}>총명한판다</p>
          <p className={styles.date}>2024. 04. 16</p>
        </div>
        <div className={styles.rightLine}>
          <WishHeartImg width={24} height={24} />
          <p className={styles.num}>9999+</p>
        </div>
      </div>
    </>
  );
}

export default AllPost;
