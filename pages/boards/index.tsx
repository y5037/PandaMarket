import Head from "next/head";
import ItemListNav from "@/components/app/ItemListNav";
import styles from "../../styles/boards/postList.module.css";
import BestPostsList from "@/components/boards/BestPostsList";
import AllPostsList from "@/components/boards/AllPostsList";

function PostListPage() {
  return (
    <>
      <Head>
        <title>자유게시판 - 판다마켓</title>
      </Head>
      <ItemListNav />
      <div className={styles.pagiContainer}>
        <BestPostsList />
        <AllPostsList />
      </div>
    </>
  );
}

export default PostListPage;
