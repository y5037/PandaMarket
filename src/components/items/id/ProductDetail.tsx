import { useEffect, useState } from "react";
import Image from "next/image";
import FavoriteDefault from "@/public/assets/images/items/favorite.svg";
import FavoriteActive from "@/public/assets/images/items/favorite_active.svg";
import OptionMenuImg from "@/public/assets/images/items/option_menu.svg";
import NoImg from "@/public/assets/images/app/common/no_img.jpg";
import { SelectBox, SelectButton } from "../SelectBox";
import ImgSkeleton from "./ImgSkeleton";
import TextSkeleton from "@/src/components/items/id/TextSkeleton";
import styles from "./productDetail.module.css";
import { useToggleLike } from "@/src/hooks/react-query/usePostLikeProduct";
import { ProductDataProps } from "./types";
import { DeleteModal } from "../../modal/DeleteModal";
import { useGetUser } from "@/src/hooks/react-query/useGetUser";
import Link from "next/link";
import { useClickOutside } from "@/src/hooks/use/useClickOutside";
import { useModalController } from "@/src/hooks/use/useModalController";

function ProductDetail({
  productId,
  productData,
  loading,
}: {
  productId: string;
  productData: ProductDataProps;
  loading: boolean;
}) {
  const [isImgError, setIsImgError] = useState(false);
  const [liked, setLiked] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);

  const { outRef, selectbox, setSelectbox } = useClickOutside();

  const { showModal, setShowModal, isModalMessage, setIsModalMessage } =
    useModalController();

  const formattedPrice = Number(productData?.price).toLocaleString();
  const formattedDate = String(productData?.createdAt).slice(0, 10);

  const { data: userData } = useGetUser();
  const { mutate: toggleLike } = useToggleLike(productId);

  const handleLike = () => {
    const nextLiked = !liked;
    setLiked(nextLiked);
    setFavoriteCount((prev) => prev + (nextLiked ? 1 : -1));
    toggleLike(!nextLiked);
  };

  const handleDeleteProduct = () => {
    setIsModalMessage("상품을 삭제하시겠습니까?");
    setShowModal(true);
  };

  useEffect(() => {
    if (productData) {
      setLiked(productData.isFavorite);
      setFavoriteCount(productData.favoriteCount);
    }
  }, [productData]);

  return (
    <>
      {showModal && (
        <DeleteModal
          productId={productId}
          isDelProduct
          showModal={showModal}
          setShowModal={setShowModal}
          isModalMessage={isModalMessage}
        />
      )}
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
                  {userData?.id === productData?.ownerId && (
                    <div
                      className={styles.btnMore}
                      onClick={() => setSelectbox((prev) => !prev)}
                      ref={outRef}
                    >
                      <OptionMenuImg />
                      {selectbox && (
                        <SelectBox>
                          <Link href={`/items/${productId}/edit`}>
                            <SelectButton>수정하기</SelectButton>
                          </Link>
                          <SelectButton onClick={handleDeleteProduct}>
                            삭제하기
                          </SelectButton>
                        </SelectBox>
                      )}
                    </div>
                  )}
                </div>
                <div className={styles.descriptionCover}>
                  <p className={styles.subTitle}>상품 소개</p>
                  <p className={styles.description}>
                    {productData?.description}
                  </p>
                </div>
                <div className={styles.tagsCover}>
                  <p className={styles.subTitle}>상품 태그</p>
                  <ul>
                    {(productData?.tags as string[]).map((tag, i) => {
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
                <button className={styles.favoritCount} onClick={handleLike}>
                  {liked ? <FavoriteActive /> : <FavoriteDefault />}
                  <p className={styles.count}>{favoriteCount}</p>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
