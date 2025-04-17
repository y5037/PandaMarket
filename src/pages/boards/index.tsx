import { useState } from "react";
import Head from "next/head";
import NavBar from "@/src/components/app/NavBar";
import styles from "@/styles/boards/postList.module.css";
import BestPostsList from "@/src/components/boards/BestPostsList";
import AllPostsList from "@/src/components/boards/AllPostsList";
import { useQuery } from "@/src/utils/useQuery";
import { Item } from "@/src/types/boardTypes";
import useProtectedPage from "@/src/utils/useProtectedPage";

function PostListPage() {
  const [order, setOrder] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const { data: likePost, loading: likeLoading } = useQuery<{
    list: Item[];
    totalCount: number;
  }>({
    queryUrl: "articles?orderBy=like&pageSize=3",
  });
  const { data: recentPost, loading: recentLoading } = useQuery<{
    list: Item[];
    totalCount: number;
  }>({
    queryUrl: `articles?orderBy=${order}&keyword=${keyword}`,
  });

  useProtectedPage();

  return (
    <>
      <Head>
        <title>자유게시판 - 판다마켓</title>
      </Head>
      <NavBar />
      <div className={styles.pagiContainer}>
        <BestPostsList likePost={likePost} likeLoading={likeLoading} />
        <AllPostsList
          recentPost={recentPost}
          setOrder={setOrder}
          setKeyword={setKeyword}
          recentLoading={recentLoading}
        />
      </div>
    </>
  );
}

export default PostListPage;
