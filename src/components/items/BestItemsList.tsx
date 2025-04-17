import { useState } from "react";
import Link from "next/link";
import BestItemsContainer from "./BestItemsContainer";
import BestItem from "./BestItem";
import { Props } from "./types";
import Section1Skeleton from "./Section1Skeleton";
import styles from "./productList.module.css";

function BestItemsList() {
  const [productList, setProductList] = useState<Props[]>([]);
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <BestItemsContainer
        setProductList={setProductList}
        setLoading={setLoading}
      />
      <div className={`${styles.productContents} ${styles.bestProduct}`}>
        <p className={styles.listTitle}>베스트 상품</p>
        {loading ? (
          <Section1Skeleton />
        ) : (
          <ul className={styles.productCover}>
            {productList.map((item) => {
              return (
                <li key={item.id} className={styles.item}>
                  <Link href={`/items/${item.id}`}>
                    <BestItem item={item} />
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export { BestItemsList };
