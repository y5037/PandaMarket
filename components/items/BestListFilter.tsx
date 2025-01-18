import { useState, useEffect } from "react";
import getProductData from "@/pages/api/api";
import calculatorMediaQuery from "../../utils/calculatormediaQuery";
import { ApiOptions, Props } from "./types";

function BestListFilter({
  setProductList,
  setLoading,
}: {
  setProductList: React.Dispatch<React.SetStateAction<Props[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isTablet, isMobile } = calculatorMediaQuery();
  const [isResponsive, setIsResponsive] = useState(0);
  const [isItemCount, setIsItemCount] = useState(
    isMobile ? 1 : isTablet ? 2 : 4
  );
  const [orderBy, setOrderby] = useState("favorite");
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const handleLoad = async (options: ApiOptions) => {
    try {
      const { list } = await getProductData(options);
      setProductList(list);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth);
      isMobile
        ? setIsItemCount(1)
        : isTablet
        ? setIsItemCount(2)
        : setIsItemCount(4);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, [isResponsive]);

  useEffect(() => {
    handleLoad({
      page,
      orderBy,
      pageSize: isItemCount,
      keyword,
    });
  }, [orderBy, keyword, page, isItemCount]);
}

export default BestListFilter;
