import Image from "next/image";
import { ListComment } from "@/src/types/itemTypes";
import { getTimeDiff } from "../../app/Dayjs";
import { SelectBox, SelectButton } from "../SelectBox";
import OptionMenuImg from "@/public/assets/images/items/option_menu.svg";
import styles from "./productDetail.module.css";
import { useState } from "react";
import { CommentUIProps } from "./types";
import { useGetUser } from "@/src/hooks/useGetUser";
import { useModalController } from "@/src/utils/useModalController";
import { DelCommentModal } from "@/src/components/modal/DelCommentModal";
import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { useClickOutside } from "@/src/utils/useClickOutside";

const CommentEditUI: React.FC<CommentUIProps> = ({
  setShowEdit,
  setShowSelect,
}) => {
  return (
    <div className={styles.editContainer}>
      <button
        onClick={() => {
          setShowEdit(null);
          setShowSelect(null);
        }}
      >
        취소
      </button>
      <button>수정 완료</button>
    </div>
  );
};

interface Props {
  commentsData: ListComment[] | undefined;
  productId: string | string[];
  refetch: UseInfiniteQueryResult["refetch"];
}

function CommentList({ commentsData, productId, refetch }: Props) {
  const [showEdit, setShowEdit] = useState<number | null>(null);
  const [isImgError, setIsImgError] = useState(false);
  const [commentId, setCommentId] = useState<number>();

  const { showModal, setShowModal, isModalMessage, setIsModalMessage } =
    useModalController();

  const handleDeleteComment = (id: number) => {
    setIsModalMessage("댓글을 삭제하시겠습니까?");
    setShowModal(true);
    setCommentId(id);
  };

  const { data: userData } = useGetUser();

  const { outRef, showSelect, setShowSelect } = useClickOutside();

  return (
    <>
      {showModal && (
        <DelCommentModal
          productId={productId}
          commentId={commentId}
          isDelProductComment
          showModal={showModal}
          setShowModal={setShowModal}
          isModalMessage={isModalMessage}
          refetch={refetch}
        />
      )}
      {commentsData?.map((comment, i) => {
        const { writer } = comment;
        return (
          <div key={comment.id} className={styles.li}>
            <div className={styles.contentText}>
              {showEdit === i ? (
                <>
                  <textarea
                    defaultValue={comment.content}
                    className={styles.textarea}
                  />
                  <CommentEditUI
                    setShowEdit={setShowEdit}
                    setShowSelect={setShowSelect}
                  />
                </>
              ) : (
                <>
                  <p>{comment.content}</p>
                  {userData?.id === writer.id && (
                    <div className={styles.btnMore}>
                      <OptionMenuImg onClick={() => setShowSelect(i)} />
                      {showSelect === i && (
                        <>
                          <SelectBox>
                            <SelectButton onClick={() => setShowEdit(i)}>
                              수정하기
                            </SelectButton>
                            <SelectButton
                              ref={outRef}
                              onClick={() => handleDeleteComment(comment.id)}
                            >
                              삭제하기
                            </SelectButton>
                          </SelectBox>
                        </>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
            <div className={styles.author}>
              <div className={styles.profileImg}>
                <Image
                  src={
                    isImgError || writer.image === null
                      ? "/assets/images/items/default_profile.svg"
                      : `${writer.image}`
                  }
                  onError={() => setIsImgError(true)}
                  fill
                  alt="프로필 이미지"
                />
              </div>
              <div className={styles.authorContent}>
                <p className={styles.nickName}>{writer.nickname}</p>
                <p className={styles.date}>{getTimeDiff(comment.updatedAt)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CommentList;
