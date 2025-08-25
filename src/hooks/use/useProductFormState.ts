import { ValuesItem } from "@/src/components/items/shared/types";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

export const useProductFormState = (
  setValues: React.Dispatch<React.SetStateAction<ValuesItem>>
) => {
  const [tag, setTag] = useState("");
  const [tagList, setTagList] = useState<string[]>([]);
  const [enteredNum, setEnterdNum] = useState<string | number>("");
  const [price, setPrice] = useState<number>(0);
  const priceInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (typeof enteredNum === "string") {
      const numberPrice = enteredNum.replace(/,/g, "");
      setPrice(Number(numberPrice));
    }
    if (priceInput.current)
      if (priceInput.current.value === "") {
        setPrice(0);
      }

    setValues((prevValue) => ({
      ...prevValue,
      ["price"]: price,
    }));
  }, [enteredNum, price, setValues]);

  const handleChange = (name: string, value: string | number | string[]) => {
    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value }: { name: string; value: string | number | string[] } =
      e.target;
    handleChange(name, value);
  };

  const changeEnteredNum = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(",", ""));
    setEnterdNum(removedCommaValue.toLocaleString());

    if (isNaN(removedCommaValue) || removedCommaValue === 0) {
      setEnterdNum("");
    }
  };

  // onKeyDown 이벤트 키가 Enter와 일치하면 실행
  const activeEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    const specialCharRegex =
      /[ \{\}\[\]\/?.,;:|\)*~`!^\+┼<>@\#$%&\'\"\\\(\=]/gi;
    // onKeyDown 이벤트의 한글 입력 시 이벤트가 두 번 호출 되는 버그 방지
    if (e.nativeEvent.isComposing) {
      return;
    }
    // 특수문자 및 스페이스바 입력 방지
    if (specialCharRegex.test(e.key)) {
      e.preventDefault();
    }
    if (e.key === "Enter" && tag) {
      e.preventDefault(); // 빈칸 엔터 방지

      const newTags = [...tagList, tag]; // 새 배열 생성
      setTagList(newTags);
      handleChange("tag", newTags);
      setTag(""); // 입력 초기화
      (e.target as HTMLInputElement).value = "";
    }
  };

  const handleAddValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  // 클릭한 태그 삭제
  const handleDeleteClick = (i: number) => {
    const newTags = tagList.filter((_, idx) => idx !== i); // 새 배열 생성
    setTagList(newTags);
    handleChange("tag", newTags);
  };

  return {
    tagList,
    setTagList,
    enteredNum,
    changeEnteredNum,
    priceInput,
    activeEnter,
    handleInputChange,
    handleAddValue,
    handleDeleteClick,
  };
};
