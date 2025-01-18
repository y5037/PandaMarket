import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/items/productList.module.css";
import btnWishImg from "@/public/assets/images/items/btn_wish.png";
import { Props } from "./types";

function BestItem({ item }: { item: Props }) {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [isImgError, setIsImgError] = useState(false);
  const formattedPrice = item.price.toLocaleString();

  return (
    <>
      <div className={`${styles.thumbnail} ${styles.skeleton}`}>
        <img
          src={
            isImgError ? "/assets/images/app/common/no_img.jpg" : item.images
          }
          alt={item.name}
          onError={() => setIsImgError(true)}
          style={loaded ? { display: "block" } : { display: "none" }}
          onLoad={() => setLoaded(true)}
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
