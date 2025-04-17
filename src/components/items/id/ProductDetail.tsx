import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FavoriteImg from "@/public/assets/images/items/favorite.svg";
import OptionMenuImg from "@/public/assets/images/items/option_menu.svg";
import NoImg from "@/public/assets/images/app/common/no_img.jpg";
import { SelectBox, SelectButton } from "../SelectBox";
import { ProductDataProps } from "@/src/components/items/id/types";
import ImgSkeleton from "./ImgSkeleton";
import TextSkeleton from "@/src/components/items/id/TextSkeleton";
import styles from "./productDetail.module.css";

function ProductDetail({
  productData,
  loading,
}: {
  productData: ProductDataProps | undefined;
  loading: boolean;
}) {
  const formattedPrice = Number(productData?.price).toLocaleString();
  const formattedDate = String(productData?.createdAt).slice(0, 10);

  const [selectBox, setSelectBox] = useState(false);
  const [isImgError, setIsImgError] = useState(false);
  const outRef = useRef<HTMLDivElement | null>(null);

  const handleOptionClick = () => {
    selectBox ? setSelectBox(false) : setSelectBox(true);
  };

  useEffect(() => {
    const handleClickOutside = (e: { target: any }) => {
      // 해당 이벤트가 영역 밖이라면 케밥 버튼 비활성화
      if (outRef.current && !outRef.current.contains(e.target)) {
        setSelectBox(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className={`${styles.pagiContainer} ${styles.emptyTopBox}`}>
      <div className={styles.section1}>
        {loading ? (
          <ImgSkeleton />
        ) : (
          <div className={styles.productImg}>
            {`${productData?.images}`.length === 0 || isImgError ? (
              <Image
                src={NoImg}
                onError={() => setIsImgError(true)}
                fill
                alt="상품 이미지"
              />
            ) : (
              <Image
                src={`${productData?.images}`}
                onError={() => setIsImgError(true)}
                fill
                alt="상품 이미지"
              />
            )}
          </div>
        )}

        {loading ? (
          <TextSkeleton />
        ) : (
          <div className={styles.descriptionContainer}>
            <div>
              <div className={styles.titleCover}>
                <p className={styles.title}>{productData?.name}</p>
                <p className={styles.price}>{formattedPrice}원</p>
                <div
                  className={styles.btnMore}
                  onClick={handleOptionClick}
                  ref={outRef}
                >
                  <OptionMenuImg />
                  {selectBox && (
                    <SelectBox>
                      {/* <SelectButton>수정하기</SelectButton> */}
                      <SelectButton>삭제하기</SelectButton>
                    </SelectBox>
                  )}
                </div>
              </div>
              <div className={styles.descriptionCover}>
                <p className={styles.subTitle}>상품 소개</p>
                <p className={styles.description}>{productData?.description}</p>
              </div>
              <div className={styles.tagsCover}>
                <p className={styles.subTitle}>상품 태그</p>
                <ul>
                  {productData?.tags &&
                    productData.tags.map((tag, i) => {
                      return (
                        <li key={i} className={styles.tagName}>
                          #{tag}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className={styles.cover}>
              <div className={styles.owner}>
                <div className={styles.profileImg}>
                  <Image
                    src="/assets/images/items/default_profile.svg"
                    alt="프로필 이미지"
                    fill
                  />
                </div>
                <div className={styles.postInfo}>
                  <p className={styles.nickName}>
                    {productData?.ownerNickname}
                  </p>
                  <p className={styles.date}>{formattedDate}</p>
                </div>
              </div>
              <div className={styles.favoritCount}>
                <FavoriteImg />
                <p className={styles.count}>{productData?.favoriteCount}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
