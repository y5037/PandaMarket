import { useEffect, useRef, useState } from "react";

export function useDropdown() {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        dropdownRef.current.contains(event.target as Node)
      ) {
        return;
      }
      // dropdownRef 영역 외 클릭 시 DropDown을 비활성화 하는 이벤트 때문에 로그아웃 버튼 클릭과 동시에 DropDown이 닫혀 로그아웃이 되지 않는 버그로 인해 setTimeout 추가
      setTimeout(() => {
        setDropdown(false);
      }, 100);
    }

    if (dropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);

  return {
    dropdown,
    setDropdown,
    dropdownRef,
  };
}
