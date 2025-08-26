import { useCallback, useEffect, useState } from "react";
import calculatorMediaQuery from "./useWindowSize";

export const useListResize = (
  type: "product" | "board",
  mode: "all" | "best"
) => {
  const { isTablet, isMobile } = calculatorMediaQuery();

  const getItemCount = useCallback(() => {
    if (type === "product" && mode === "all") {
      if (isMobile) return 4;
      if (isTablet) return 6;
      return 10;
    } else if (type === "product" && mode === "best") {
      if (isMobile) return 1;
      if (isTablet) return 2;
      return 4;
    } else if (type === "board" && mode === "best") {
      if (isMobile) return 1;
      if (isTablet) return 2;
      return 3;
    }

    return 0;
  }, [type, mode, isMobile, isTablet]);
  const [isItemCount, setIsItemCount] = useState(getItemCount);

  useEffect(() => {
    const handleResize = () => {
      setIsItemCount(getItemCount());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, isTablet, getItemCount]);

  return { isItemCount };
};
