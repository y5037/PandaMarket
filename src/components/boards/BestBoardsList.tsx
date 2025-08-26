import { useListResize } from "@/src/hooks/use/useListResize";
import BestBoard from "./BestBoard";
import Section1Skeleton from "./Section1Skeleton";
import styles from "./boardList.module.css";
import { useGetBoard } from "@/src/hooks/react-query/useGetBoard";

function BestBoardList() {
  const orderBy = "like";
  const page = 1;
  const keyword = "";

  const { isItemCount } = useListResize("board", "best");

  const { data, isLoading } = useGetBoard({
    page,
    orderBy,
    pageSize: isItemCount,
    keyword,
  });
  const bestBoard = data?.list;

  return (
    <>
      <div className={`${styles.postContents} ${styles.bestPost}`}>
        <p className={styles.listTitle}>베스트 게시글</p>

        {isLoading ? (
          <Section1Skeleton />
        ) : (
          <ul className={styles.postCover}>
            {bestBoard?.map((item) => {
              return (
                <li key={item.id} className={styles.item}>
                  <BestBoard item={item} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export default BestBoardList;
