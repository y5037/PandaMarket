import { BOARD_INITIAL_VALUES } from "@/src/constants/product";
import { BoardDataProps } from "@/src/types/boardTypes";
import { useEffect, useState } from "react";

export const useBoardForm = (boardData?: BoardDataProps) => {
  const [values, setValues] = useState<{
    title: string;
    content: string;
  }>(BOARD_INITIAL_VALUES);

  const [imgFile, setImgFile] = useState("");

  useEffect(() => {
    if (!boardData) return;

    if (boardData) {
      setImgFile(boardData?.image);
      setValues((prevValues) => ({
        ...prevValues,
        name: boardData?.title,
        description: boardData?.content,
      }));
    }
  }, [boardData]);

  return { values, setValues, imgFile, setImgFile };
};
