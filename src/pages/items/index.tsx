import { useState } from "react";
import { BestItemsList } from "@/src/components/items/BestItemsList";
import NavBar from "@/src/components/app/NavBar";
import PaginationComponents from "@/src/components/app/Pagination";
import AllItemsList from "@/src/components/items/AllItemsList";
import Head from "next/head";
import Footer from "@/src/components/app/Footer";
import useProtectedPage from "@/src/utils/useProtectedPage";
import styles from "@/src/components/items/productList.module.css";

function ProductListPage() {
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [isDataCount, setIsDataCount] = useState<number>(0);

  useProtectedPage();

  return (
    <>
      <Head>
        <title>중고마켓 - 판다마켓</title>
      </Head>
      <NavBar />
      <div className={styles.pagiContainer}>
        <BestItemsList />
        <AllItemsList
          page={page}
          setPage={setPage}
          setPageCount={setPageCount}
          setIsDataCount={setIsDataCount}
        />
        <PaginationComponents
          page={page}
          setPage={setPage}
          pageCount={pageCount}
          isDataCount={isDataCount}
        />
      </div>
      <Footer />
    </>
  );
}

export default ProductListPage;
