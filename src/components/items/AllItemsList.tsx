import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import notFoundImg from "@/public/assets/images/items/not_found.png";
import AllItemsContainer from "./AllItemsContainer";
import AllItem from "./AllItem";
import { ItemsList, List } from "./types";
import Section2Skeleton from "./Section2Skeleton";
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
  const [productContainer, setProductContainer] = useState<List[]>([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className={`${styles.productContents} ${styles.generalProduct}`}>
      <AllItemsContainer
        setProductContainer={setProductContainer}
        page={page}
        setPage={setPage}
        setPageCount={setPageCount}
        setIsDataCount={setIsDataCount}
        setLoading={setLoading}
      />
      {loading ? (
        <Section2Skeleton />
      ) : (
        <ul className={styles.productCover}>
          {productContainer.length === 0 && <EmptyPlaceholder />}
          {productContainer.length > 0 &&
            productContainer.map((item) => {
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
