import { useMediaQuery } from "react-responsive";

function useWindowSize() {
  const isTablet = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return { isTablet, isMobile };
}

export default useWindowSize;
