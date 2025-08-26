import styles from "./boardList.module.css";
import { useEffect, useState } from "react";
import { ItemsList } from "./types";
import BoardsFilterContainer from "./BoardsFilterContainer";
import { useGetBoard } from "@/src/hooks/react-query/useGetBoard";
import Section2Skeleton from "./Section2Skeleton";
import EmptySearchList from "../app/EmptySearchList";
import AllBoard from "./AllBoard";

function AllBoardsList({
  page,
  setPage,
  setPageCount,
  setIsDataCount,
}: ItemsList) {
  let isItemCount = 6;
  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [filter, setFilter] = useState("최신순");
  const { data, isLoading } = useGetBoard({
    page,
    orderBy,
    pageSize: isItemCount,
    keyword,
  });
  const allBoard = data?.list;

  useEffect(() => {
    if (data?.totalCount) {
      setPageCount(data.totalCount);
    }
  }, [data?.totalCount, isItemCount, setPageCount]);

  return (
    <>
      <div className={`${styles.postContents} ${styles.allPost}`}>
        <div className={styles.headContainer}>
          <BoardsFilterContainer
            setPage={setPage}
            setIsDataCount={setIsDataCount}
            filter={filter}
            setFilter={setFilter}
            keyword={keyword}
            setKeyword={setKeyword}
            isItemCount={isItemCount}
            setOrderBy={setOrderBy}
          />
        </div>
        {isLoading ? (
          <Section2Skeleton />
        ) : (
          <ul className={styles.postCover}>
            {allBoard && allBoard.length === 0 && <EmptySearchList />}
            {allBoard &&
              allBoard.map((item) => {
                return (
                  <li key={item.id} className={styles.item}>
                    <AllBoard item={item} />
                  </li>
                );
              })}
          </ul>
        )}
      </div>
    </>
  );
}

export default AllBoardsList;
