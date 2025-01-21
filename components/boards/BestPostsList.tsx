import styles from "../../styles/boards/postList.module.css";
import BestPost from "./BestPost";

function BestPostsList() {
  return (
    <>
      <div className={`${styles.postContents} ${styles.bestPost}`}>
        <p className={styles.listTitle}>베스트 게시글</p>
        <ul className={styles.postCover}>
          <li className={styles.item}>
            <BestPost />
          </li>
        </ul>
      </div>
    </>
  );
}

export default BestPostsList;
