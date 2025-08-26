import { useEffect, useState } from "react";
import Link from "next/link";
import ItemsFilterContainer from "./ItemsFilterContainer";
import AllItem from "./AllItem";
import { ItemsList } from "./types";
import Section2Skeleton from "./Section2Skeleton";
import { useGetProduct } from "@/src/hooks/react-query/useGetProduct";
import styles from "./productList.module.css";
import { useListResize } from "@/src/hooks/use/useListResize";
import EmptySearchList from "../app/EmptySearchList";

function AllItemsList({
  page,
  setPage,
  setPageCount,
  setIsDataCount,
}: ItemsList) {
  const { isItemCount } = useListResize("product", "all");

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
      <ItemsFilterContainer
        setPage={setPage}
        setPageCount={setPageCount}
        totalCount={data?.totalCount ?? 0}
        setIsDataCount={setIsDataCount}
        filter={filter}
        setFilter={setFilter}
        keyword={keyword}
        setKeyword={setKeyword}
        isItemCount={isItemCount}
        setOrderBy={setOrderBy}
      />
      {isLoading ? (
        <Section2Skeleton />
      ) : (
        <ul className={styles.productCover}>
          {allProduct && allProduct.length === 0 && <EmptySearchList />}
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
