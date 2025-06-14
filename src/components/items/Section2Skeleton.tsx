import styles from "./Skeleton.module.css";

const repeat = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

export default function Section2Skeleton() {
  return (
    <ul className={styles.section2Wrap}>
      {repeat.map((item) => {
        return (
          <>
            <li key={item.id} className={styles.wrap}>
              <div className={styles.skeletonBox}>
                <div className={styles.skeletonLoading}></div>
              </div>
              <div className={styles.skeletonLine}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
              </div>
            </li>
          </>
        );
      })}
    </ul>
  );
}
