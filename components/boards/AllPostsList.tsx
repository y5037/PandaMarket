import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/boards/postList.module.css";
import searchImg from "@/public/assets/images/boards/ic_search.png";
import SelectArrowImg from "@/public/assets/images/boards/select_down.svg";
import AllPost from "./AllPost";

function AllPostsList() {
  return (
    <>
      <div className={`${styles.postContents} ${styles.allPost}`}>
        <div className={styles.headContainer}>
          <div className={styles.titleCover}>
            <p className={styles.listTitle}>게시글</p>
            <Link href={""}>
              <button type="button">글쓰기</button>
            </Link>
          </div>
          <form>
            <div className={styles.formCover}>
              <div className={styles.searchCover}>
                <div className={styles.inputBox}>
                  <Image src={searchImg} alt="검색하기" />
                  <input name="search" placeholder="검색어를 입력해주세요" />
                </div>
              </div>
              <div className={styles.selectBox}>
                <div className={styles.option}>
                  <p className={styles.text}>최신순</p>
                  {/* on 여부에 따라 화살표 rotate */}
                  <SelectArrowImg />
                </div>
                {/* active 여부에 따라 DropDown */}
                <ul className={styles.optionChoose}>
                  <li>최신순</li>
                  <li>좋아요순</li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        <ul className={styles.postCover}>
          <li className={styles.item}>
            <AllPost />
          </li>
        </ul>
      </div>
    </>
  );
}

export default AllPostsList;
