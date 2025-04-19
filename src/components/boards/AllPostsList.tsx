import Link from "next/link";
import Image from "next/image";
import searchImg from "@/public/assets/images/boards/ic_search.png";
import SelectArrowImg from "@/public/assets/images/boards/select_down.svg";
import AllPost from "./AllPost";
import styles from "./postList.module.css";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Item } from "./types";
import Section2Skeleton from "./Section2Skeleton";
import { useClickOutside } from "@/src/utils/useClickOutside";

type Destructuring = {
  list: Item[];
  totalCount: number;
};

type AllPostsListProps = {
  recentPost: Destructuring | null;
  setKeyword: Dispatch<SetStateAction<string>>;
  setOrder: Dispatch<SetStateAction<string>>;
  recentLoading: boolean;
};

function AllPostsList({
  recentPost,
  setKeyword,
  setOrder,
  recentLoading,
}: AllPostsListProps) {
  const [isFilter, setIsFilter] = useState("최신순");
  const { list } = recentPost || {};

  const handleOrderChange = (order: string) => {
    setOrder(order);
  };

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const { outRef, selectbox, setSelectbox } = useClickOutside();

  return (
    <>
      <div className={`${styles.postContents} ${styles.allPost}`}>
        <div className={styles.headContainer}>
          <div className={styles.titleCover}>
            <p className={styles.listTitle}>게시글</p>
            <Link href={""}>
              <button type="button">글쓰기</button>
            </Link>
          </div>
          <form>
            <div className={styles.formCover}>
              <div className={styles.searchCover}>
                <div className={styles.inputBox}>
                  <Image src={searchImg} alt="검색하기" />
                  <input
                    name="search"
                    onChange={handleValueChange}
                    placeholder="검색어를 입력해주세요"
                  />
                </div>
              </div>
              <div className={styles.selectBox} ref={outRef}>
                <div
                  className={styles.option}
                  onClick={() => setSelectbox((prev) => !prev)}
                >
                  <p className={styles.text}>{isFilter}</p>
                  <SelectArrowImg className={selectbox ? styles.on : ""} />
                </div>
                {selectbox && (
                  <ul className={styles.optionChoose}>
                    <li
                      onClick={() => {
                        handleOrderChange("recent");
                        setIsFilter("최신순");
                      }}
                    >
                      최신순
                    </li>
                    <li
                      onClick={() => {
                        handleOrderChange("like");
                        setIsFilter("좋아요순");
                      }}
                    >
                      좋아요순
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </form>
        </div>
        {/* 무한스크롤 기능 필요. 현재는 최대 10개만 불러오고 있음 */}
        {recentLoading ? (
          <Section2Skeleton />
        ) : (
          <ul className={styles.postCover}>
            {list &&
              list.map((item) => {
                return (
                  <li key={item.id} className={styles.item}>
                    <AllPost item={item} />
                  </li>
                );
              })}
          </ul>
        )}
      </div>
    </>
  );
}

export default AllPostsList;
