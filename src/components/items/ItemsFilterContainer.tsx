import { useEffect, ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowDownImg from "@/public/assets/images/items/select_down.svg";
import productSearchImg from "@/public/assets/images/items/pd_search.png";
import { SearchForm } from "./types";
import styles from "./productList.module.css";
import { useDropdown } from "@/src/hooks/use/useDropdown";

function ItemsFilterContainer({
  setPage,
  setPageCount,
  totalCount,
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
    setOrderBy(sort === "최신순" ? "recent" : "favorite");
    setPage(1);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    setIsDataCount(isItemCount);
    setPageCount(totalCount);
    setPage(1);
  }, [keyword, isItemCount, setIsDataCount, setPage]);

  return (
    <>
      <div className={styles.filterCover}>
        <p className={styles.listTitle}>전체 상품</p>
        <div className={styles.searchContainer}>
          <div className={styles.formCover}>
            <div className={styles.inputBox}>
              <Image src={productSearchImg} alt="상품검색" />
              <input
                name="search"
                placeholder="검색할 상품을 입력해주세요"
                onChange={handleSearch}
              />
            </div>
            <Link href="/items/add">
              <button type="button">상품 등록하기</button>
            </Link>
          </div>
          <div className={styles.selectBox} ref={dropdownRef}>
            <div
              className={styles.btnSelectBox}
              onClick={() => setDropdown((prev) => !prev)}
            >
              <p className={styles.text}>{filter}</p>
              <ArrowDownImg className={`${dropdown && styles.on}`} />
            </div>
            {dropdown && (
              <ul className={styles.btnChoose}>
                <li onClick={() => handleSortFilter("최신순")}>최신순</li>
                <li onClick={() => handleSortFilter("좋아요순")}>좋아요순</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemsFilterContainer;
