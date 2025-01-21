import styles from "../../styles/boards/postList.module.css";
import BestPost from "./BestPost";

function BestPostsList({ likePost }) {
  const { list } = likePost || {};

  return (
    <>
      <div className={`${styles.postContents} ${styles.bestPost}`}>
        <p className={styles.listTitle}>베스트 게시글</p>
        <ul className={styles.postCover}>
          {list?.map((item) => {
            return (
              <li key={item.id} className={styles.item}>
                <BestPost item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default BestPostsList;
