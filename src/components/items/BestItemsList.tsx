import Link from "next/link";
import BestItem from "./BestItem";
import Section1Skeleton from "./Section1Skeleton";
import styles from "./productList.module.css";
import { useGetProduct } from "@/src/hooks/react-query/useGetProduct";
import { useListResize } from "@/src/hooks/use/useListResize";

function BestItemsList() {
  const orderBy = "favorite";
  const page = 1;
  const keyword = "";

  const { isItemCount } = useListResize("best");

  const { data, isLoading } = useGetProduct({
    page,
    orderBy,
    pageSize: isItemCount,
    keyword,
  });
  const bestProduct = data?.list;

  return (
    <>
      <div className={`${styles.productContents} ${styles.bestProduct}`}>
        <p className={styles.listTitle}>베스트 상품</p>
        {isLoading ? (
          <Section1Skeleton />
        ) : (
          <ul className={styles.productCover}>
            {bestProduct?.map((item) => {
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
