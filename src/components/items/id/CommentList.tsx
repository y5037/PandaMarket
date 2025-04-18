import Image from "next/image";
import { ListComment } from "@/src/types/itemTypes";
import { getTimeDiff } from "../../app/Dayjs";
import { SelectBox, SelectButton } from "../SelectBox";
import OptionMenuImg from "@/public/assets/images/items/option_menu.svg";
import styles from "./productDetail.module.css";
import { useEffect, useRef, useState } from "react";
import { CommentUIProps } from "./types";
import { useGetUser } from "@/src/hooks/useGetUser";

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
}

function CommentList({ commentsData }: Props) {
  const [showEdit, setShowEdit] = useState<number | null>(null);
  const [showSelect, setShowSelect] = useState<number | null>(null);
  const [isImgError, setIsImgError] = useState(false);

  const outRef = useRef<HTMLDivElement | null>(null);

  const { data: userData } = useGetUser();

  useEffect(() => {
    const handleClickOutside = (e: { target: any }) => {
      if (outRef.current && !outRef.current.contains(e.target)) {
        setShowSelect(null);
      }
    };
    window.addEventListener("mouseup", handleClickOutside, true);
    return () => {
      window.removeEventListener("mouseup", handleClickOutside, true);
    };
  }, []);

  return commentsData?.map((comment, i) => {
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
                        <SelectButton
                          onClick={() => setShowEdit(i)}
                          ref={outRef}
                        >
                          수정하기
                        </SelectButton>
                        <SelectButton>삭제하기</SelectButton>
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
  });
}

export default CommentList;
