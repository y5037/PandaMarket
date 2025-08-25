import { useEffect, useRef, useState } from "react";

export function useClickOutside() {
  const [selectbox, setSelectbox] = useState(false);
  const [showSelect, setShowSelect] = useState<number | null>(null);

  const outRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: { target: any }) => {
      if (outRef.current && !outRef.current.contains(e.target)) {
        setSelectbox(false);
        setShowSelect(null);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { outRef, selectbox, setSelectbox, showSelect, setShowSelect };
}
