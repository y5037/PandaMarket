import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import notFoundImg from "@/public/assets/images/items/not_found.png";
import AllItemsContainer from "./AllItemsContainer";
import AllItem from "./AllItem";
import { ItemsList } from "./types";
import Section2Skeleton from "./Section2Skeleton";
import { useGetProduct } from "@/src/hooks/useGetProduct";
import { useListResize } from "@/src/utils/useListResize";
import styles from "./productList.module.css";

function EmptyPlaceholder() {
  return (
    <div className={styles.emptyList}>
      <Image src={notFoundImg} alt="Not Found" />
      <p>검색 결과가 없습니다</p>
    </div>
  );
}

function AllItemsList({
  page,
  setPage,
  setPageCount,
  setIsDataCount,
}: ItemsList) {
  const { isItemCount } = useListResize("all");

  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [filter, setFilter] = useState("최신순");
  const { data, isLoading } = useGetProduct({
    page,
    orderBy,
    pageSize: isItemCount,
    keyword,
  });
  const allProduct = data?.list;

  useEffect(() => {
    if (data?.totalCount) {
      setPageCount(data.totalCount);
    }
  }, [data?.totalCount, isItemCount, setPageCount]);

  return (
    <div className={`${styles.productContents} ${styles.generalProduct}`}>
      <AllItemsContainer
        setPage={setPage}
        setIsDataCount={setIsDataCount}
        filter={filter}
        setFilter={setFilter}
        setKeyword={setKeyword}
        isItemCount={isItemCount}
        setOrderBy={setOrderBy}
      />
      {isLoading ? (
        <Section2Skeleton />
      ) : (
        <ul className={styles.productCover}>
          {allProduct && allProduct.length === 0 && <EmptyPlaceholder />}
          {allProduct &&
            allProduct.length > 0 &&
            allProduct.map((item) => {
              return (
                <li key={item.id} className={styles.item}>
                  <Link href={`/items/${item.id}`}>
                    <AllItem item={item} />
                  </Link>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}

export default AllItemsList;
