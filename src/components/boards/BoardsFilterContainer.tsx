import Link from "next/link";
import styles from "./boardList.module.css";
import Image from "next/image";
import searchImg from "@/public/assets/images/boards/ic_search.png";
import SelectArrowImg from "@/public/assets/images/boards/select_down.svg";
import { useDropdown } from "@/src/hooks/use/useDropdown";
import { ChangeEvent, useEffect } from "react";
import { SearchForm } from "./types";

function BoardsFilterContainer({
  setPage,
  setIsDataCount,
  filter,
  setFilter,
  keyword,
  setKeyword,
  isItemCount,
  setOrderBy,
}: SearchForm) {
  const { dropdown, setDropdown, dropdownRef } = useDropdown();

  const handleSortFilter = (sort: string) => {
    setFilter(sort);
    setOrderBy(sort === "최신순" ? "recent" : "like");
    setPage(1);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    setIsDataCount(isItemCount);
    setPage(1);
  }, [keyword, filter, isItemCount, setIsDataCount, setPage]);

  return (
    <>
      <div className={styles.titleCover}>
        <p className={styles.listTitle}>게시글</p>
        <Link href={""}>
          <button type="button">글쓰기</button>
        </Link>
      </div>

      <div className={styles.formCover}>
        <div className={styles.searchCover}>
          <div className={styles.inputBox}>
            <Image src={searchImg} alt="검색하기" />
            <input
              name="search"
              onChange={handleSearch}
              placeholder="검색어를 입력해주세요"
            />
          </div>
        </div>
        <div className={styles.selectBox} ref={dropdownRef}>
          <div
            className={styles.option}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <p className={styles.text}>{filter}</p>
            <SelectArrowImg className={dropdown ? styles.on : ""} />
          </div>
          {dropdown && (
            <ul className={styles.btnChoose}>
              <li onClick={() => handleSortFilter("최신순")}>최신순</li>
              <li onClick={() => handleSortFilter("좋아요순")}>좋아요순</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default BoardsFilterContainer;
