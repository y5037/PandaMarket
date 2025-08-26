import { useState } from "react";
import Head from "next/head";
import NavBar from "@/src/components/app/NavBar";
import PaginationComponents from "@/src/components/app/Pagination";
import BestBoardList from "@/src/components/boards/BestBoardsList";
import AllBoardsList from "@/src/components/boards/AllBoardsList";
import styles from "@/src/components/boards/boardList.module.css";
import useProtectedPage from "@/src/hooks/use/useProtectedPage";
import Footer from "@/src/components/app/Footer";

function PostListPage() {
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [isDataCount, setIsDataCount] = useState<number>(0);

  useProtectedPage();

  return (
    <>
      <Head>
        <title>자유게시판 - 판다마켓</title>
      </Head>
      <NavBar />
      <div className={styles.pagiContainer}>
        <BestBoardList />
        <AllBoardsList
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

export default PostListPage;
