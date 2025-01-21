import { useState } from "react";
import Head from "next/head";
import ItemListNav from "@/components/app/ItemListNav";
import styles from "../../styles/boards/postList.module.css";
import BestPostsList from "@/components/boards/BestPostsList";
import AllPostsList from "@/components/boards/AllPostsList";
import { useQueryArticles } from "@/hook/useQueryBoard";

function PostListPage() {
  const [order, setOrder] = useState("recent");
  const [keyword, setKeyword] = useState('');
  const { data: likePost, loading: likeLoading } = useQueryArticles({
    queryUrl: "articles?orderBy=like&pageSize=3",
  });
  const { data: recentPost, loading: recentLoading } = useQueryArticles({
    queryUrl: `articles?orderBy=${order}&keyword=${keyword}`,
  });

  return (
    <>
      <Head>
        <title>자유게시판 - 판다마켓</title>
      </Head>
      <ItemListNav />
      <div className={styles.pagiContainer}>
        <BestPostsList likePost={likePost} />
        <AllPostsList setOrder={setOrder} recentPost={recentPost} setKeyword={setKeyword}/>
      </div>
    </>
  );
}

export default PostListPage;
