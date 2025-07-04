import { useState } from "react";
import Image from "next/image";
import btnWishImg from "@/public/assets/images/items/btn_wish.png";
import NoImg from "@/public/assets/images/app/common/no_img.jpg";
import { List } from "./types";
import styles from "./productList.module.css";

function BestItem({ item }: { item: List }) {
  const [isImgError, setIsImgError] = useState(false);
  const formattedPrice = item.price.toLocaleString();

  return (
    <>
      <div className={`${styles.thumbnail} ${styles.skeleton}`}>
        <Image
          src={isImgError ? NoImg : `${item.images}`}
          alt={item.name}
          onError={() => setIsImgError(true)}
          fill
          priority={true}
          sizes="100%"
        />
      </div>
      <div className={styles.textCover}>
        <p className={styles.itemName}>{item.name}</p>
        <p className={styles.itemPrice}>{formattedPrice}</p>
        <div className={styles.viewWish}>
          <Image src={btnWishImg} alt="찜하기" />
          <p className={styles.numWish}>{item.favoriteCount}</p>
        </div>
      </div>
    </>
  );
}

export default BestItem;
