import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/items/productList.module.css";
import notFoundImg from "@/public/assets/images/items/not_found.png";
import GeneralSearchForm from "./GeneralSearchForm";
import GeneralItem from "./GeneralItem";
import { ItemsList, Props } from "./types";
import Section2Skeleton from "./Section2Skeleton";

function EmptyPlaceholder() {
  return (
    <div className={styles.emptyList}>
      <Image src={notFoundImg} alt="Not Found" />
      <p>검색 결과가 없습니다</p>
    </div>
  );
}

function GeneralItemsList({
  page,
  setPage,
  setPageCount,
  setIsDataCount,
}: ItemsList) {
  const [productContainer, setProductContainer] = useState<Props[]>([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className={`${styles.productContents} ${styles.generalProduct}`}>
      <GeneralSearchForm
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
                    <GeneralItem item={item} />
                  </Link>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}

export default GeneralItemsList;
