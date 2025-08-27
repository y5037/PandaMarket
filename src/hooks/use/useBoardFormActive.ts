import { ValuesItem } from "@/src/components/boards/shared/types";
import { BoardDataProps } from "@/src/types/boardTypes";
import { useEffect, useState } from "react";

type Mode = "add" | "edit";

export const useBoardFormActive = (
  imgFile: string,
  values: ValuesItem,
  boardData?: BoardDataProps,
  mode: Mode = "add"
) => {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    let active = false;

    if (mode === "add") {
      active =
        imgFile.length > 0 && values.title !== "" && values.content !== "";
    }

    if (mode === "edit" && boardData) {
      const isThumbnailChanged = imgFile !== boardData?.image;
      const isNameChanged = values.title !== boardData?.title;
      const isDescChanged = values.content !== boardData?.content;
      active =
        imgFile.length > 0 &&
        values.title !== "" &&
        values.content !== "" &&
        (isThumbnailChanged || isNameChanged || isDescChanged);
    }

    setIsDisabled(!active);
  }, [imgFile, values, boardData, mode]);

  return isDisabled;
};
