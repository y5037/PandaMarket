import { useEffect, useState } from "react";
import Image from "next/image";
import FavoriteDefault from "@/public/assets/images/items/favorite.svg";
import FavoriteActive from "@/public/assets/images/items/favorite_active.svg";
import OptionMenuImg from "@/public/assets/images/items/option_menu.svg";
import styles from "./boardDetail.module.css";
import { DeleteModal } from "../../modal/DeleteModal";
import { useGetUser } from "@/src/hooks/react-query/useGetUser";
import Link from "next/link";
import { useClickOutside } from "@/src/hooks/use/useClickOutside";
import { useModalController } from "@/src/hooks/use/useModalController";
import { SelectBox, SelectButton } from "../../shared/detailContent/SelectBox";
import { BoardDataProps } from "./types";
import { useToggleLike } from "@/src/hooks/react-query/usePostLikeBoard";
import ContentSkeleton from "./ContentSkeleton";

function BoardDetail({
  id,
  boardData,
  loading,
}: {
  id: string;
  boardData: BoardDataProps;
  loading: boolean;
}) {
  const [showImg, setShowImg] = useState(false);
  const [liked, setLiked] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);

  const { outRef, selectbox, setSelectbox } = useClickOutside();

  const { showModal, setShowModal, isModalMessage, setIsModalMessage } =
    useModalController();

  const formattedDate = String(boardData?.createdAt).slice(0, 10);

  const { data: userData } = useGetUser();
  const { mutate: toggleLike } = useToggleLike(id);

  const handleLike = () => {
    const nextLiked = !liked;
    setLiked(nextLiked);
    setFavoriteCount((prev) => prev + (nextLiked ? 1 : -1));
    toggleLike(!nextLiked);
  };

  const handleDeleteProduct = () => {
    setIsModalMessage("게시글을 삭제하시겠습니까?");
    setShowModal(true);
  };

  useEffect(() => {
    if (boardData) {
      setLiked(boardData.isLiked);
      setFavoriteCount(boardData.likeCount);
    }
  }, [boardData]);

  useEffect(() => {
    if (!boardData?.image) return;

    const img = new (window.Image as { new (): HTMLImageElement })();
    img.src = boardData?.image;
    img.onload = () => setShowImg(true);
    img.onerror = () => setShowImg(false);
  }, [boardData?.image]);

  return (
    <>
      {showModal && (
        <DeleteModal
          boardId={id}
          isDelBoard
          showModal={showModal}
          setShowModal={setShowModal}
          isModalMessage={isModalMessage}
        />
      )}
      <div className={`${styles.pagiContainer} ${styles.emptyTopBox}`}>
        <div className={styles.section1}>
          {loading ? (
            <ContentSkeleton />
          ) : (
            <div className={styles.descriptionContainer}>
              <div className={styles.titleCover}>
                <p className={styles.title}>{boardData.title}</p>
                {userData?.id === boardData.writer.id && (
                  <div
                    className={styles.btnMore}
                    onClick={() => setSelectbox((prev) => !prev)}
                    ref={outRef}
                  >
                    <OptionMenuImg />
                    {selectbox && (
                      <SelectBox>
                        <Link href={`/boards/${id}/edit`}>
                          <SelectButton>수정하기</SelectButton>
                        </Link>
                        <SelectButton onClick={handleDeleteProduct}>
                          삭제하기
                        </SelectButton>
                      </SelectBox>
                    )}
                  </div>
                )}
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
                        {boardData.writer.nickname}
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
              {showImg && (
                <div className={styles.img}>
                  <Image src={boardData.image} fill alt="상품 이미지" />
                </div>
              )}
              <div>
                <div className={styles.descriptionCover}>
                  <p className={styles.description}>{boardData.content}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BoardDetail;
