import { useEffect, useState } from "react";
import Link from "next/link";
import BestItem from "./BestItem";
import Section1Skeleton from "./Section1Skeleton";
import styles from "./productList.module.css";
import { useGetProduct } from "@/src/hooks/useGetProduct";
import calculatorMediaQuery from "../../utils/useWindowSize";

function BestItemsList() {
  const { isTablet, isMobile } = calculatorMediaQuery();
  const [isResponsive, setIsResponsive] = useState(0);
  const [isItemCount, setIsItemCount] = useState(
    isMobile ? 1 : isTablet ? 2 : 4
  );
  
  const orderBy = "favorite";
  const page = 1;
  const keyword = "";

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth);
      isMobile
        ? setIsItemCount(1)
        : isTablet
        ? setIsItemCount(2)
        : setIsItemCount(4);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isResponsive, isMobile, isTablet]);

  const { data: bestProduct, isLoading } = useGetProduct({
    page,
    orderBy,
    pageSize: isItemCount,
    keyword,
  });

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
