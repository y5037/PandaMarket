import Image from "next/image";
import styles from "@/styles/app/empty.module.css";
import notFoundImg from "@/public/assets/images/items/not_found.png";

export default function EmptySearchList() {
  return (
    <>
      <div className={styles.emptyList}>
        <Image src={notFoundImg} alt="Not Found" />
        <p>검색 결과가 없습니다</p>
      </div>
    </>
  );
}
