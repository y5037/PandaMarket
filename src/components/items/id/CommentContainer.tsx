import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear"; // 윤년 판단 플러그인
import "dayjs/locale/ko";
import BtnBackImg from "@/public/assets/images/app/button/btn_back.svg";
import EmptyCommentImg from "@/public/assets/images/items/empty_comment.svg";
import SpinnerImg from "@/public/assets/images/app/loading/spinner.svg";
import CommentSkeleton from "./CommentSkeleton";
import { ListComment } from "@/src/types/itemTypes";
import CommentList from "./CommentList";
import styles from "./productDetail.module.css";
import usePostProductComments from "@/src/hooks/usePostProductComments";
import { UseInfiniteQueryResult } from "@tanstack/react-query";

dayjs.extend(isLeapYear);
dayjs.locale("ko");

function EmptyPlaceholder() {
  return (
    <div className={styles.emptyComment}>
      <EmptyCommentImg />
    </div>
  );
}

function CommentContainer({
  productId,
  commentsData,
  loading,
  isFetchingNextPage,
  hasNextPage,
  refetch,
}: {
  productId: string | string[];
  commentsData: ListComment[];
  loading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  refetch: UseInfiniteQueryResult["refetch"];
}) {
  const [comment, setComment] = useState("");

  const getWriteComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const { mutate: uploadComment } = usePostProductComments(productId);

  const handleUploadComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment) return;

    uploadComment(
      { productId, comment },
      {
        onSuccess: async () => {
          setComment("");
          await refetch();
        },
      }
    );
  };

  const showBackButton =
    !loading &&
    hasNextPage === false &&
    (!isFetchingNextPage || commentsData.length === 0);

  return (
    <div className={`${styles.pagiContainer} ${styles.commentContainer}`}>
      <div className={styles.section2}>
        <form onSubmit={handleUploadComment}>
          <label htmlFor="inquiry" className={styles.subTitle}>
            문의하기
          </label>
          <textarea
            name="inquiry"
            id="inquiry"
            className={styles.textarea}
            value={comment}
            onChange={getWriteComment}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <button className={styles.btnSubmit} disabled={!comment}>
            등록
          </button>
        </form>
        <div className={styles.commentList}>
          {loading ? (
            <CommentSkeleton />
          ) : (
            <>
              {commentsData.length > 0 ? (
                <>
                  <CommentList
                    commentsData={commentsData}
                    productId={productId}
                    refetch={refetch}
                  />

                  {isFetchingNextPage && (
                    <div className={styles.loading}>
                      <SpinnerImg width={70} height={70} />
                    </div>
                  )}
                </>
              ) : (
                <EmptyPlaceholder />
              )}
            </>
          )}
        </div>
        {showBackButton && (
          <div className={styles.btnCover}>
            <Link href="/items">
              <button type="button" className={styles.btnBack}>
                목록으로 돌아가기 <BtnBackImg />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentContainer;
