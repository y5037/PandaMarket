import styles from "@/styles/app/navi.module.css";

export function UserMenu() {
  return (
    <ul className={styles.menuContainer}>
      <li className={styles.menu}>마이페이지</li>
      <li className={styles.menu}>로그아웃</li>
    </ul>
  );
}
