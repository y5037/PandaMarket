import { useEffect, useState } from "react";
import calculatorMediaQuery from "../utils/calculatormediaQuery";
import { getProductData } from "@/api/api";

const useDevice = () => {
  const { isTablet, isMobile } = calculatorMediaQuery();
  const [isResponsive, setIsResponsive] = useState(window.innerWidth);
  const [isItemCount, setIsItemCount] = useState(
    isMobile ? 1 : isTablet ? 2 : 4
  );

  useEffect(() => {
    try {
      const { list } = await getProductData(options);
      setProductList(list);
    } catch (error) {
      console.log(error);
    }

    const handleResize = () => {
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
  }, [isResponsive, isMobile, isTablet]);
};
