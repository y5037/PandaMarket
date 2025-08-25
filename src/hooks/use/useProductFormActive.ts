import { ValuesItem } from "@/src/components/items/shared/types";
import { ProductDataProps } from "@/src/types/itemTypes";
import { useEffect, useState } from "react";

type Mode = "add" | "edit";

export const useProductFormActive = (
  imgFile: string,
  values: ValuesItem,
  productData?: ProductDataProps,
  mode: Mode = "add"
) => {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    let active = false;

    if (mode === "add") {
      active =
        imgFile.length > 0 &&
        values.name !== "" &&
        values.description !== "" &&
        Number(values.price) > 0 &&
        values.tag.length > 0;
    }

    if (mode === "edit" && productData) {
      const tagsChanged = (() => {
        const original = productData?.tags || [];
        const current = values.tag || [];

        if (original.length !== current.length) return true;

        const originalSet = new Set(original);
        return current.some((tag) => !originalSet.has(tag));
      })();

      const isThumbnailChanged = imgFile !== productData?.images[0];
      const isNameChanged = values.name !== productData?.name;
      const isDescChanged = values.description !== productData?.description;
      const isPriceChanged = Number(values.price) !== productData?.price;
      active =
        imgFile.length > 0 &&
        values.name !== "" &&
        values.description !== "" &&
        Number(values.price) > 0 &&
        values.tag?.length > 0 &&
        (isThumbnailChanged ||
          isNameChanged ||
          isDescChanged ||
          isPriceChanged ||
          tagsChanged);
    }

    setIsDisabled(!active);
  }, [imgFile, values, productData, mode]);

  return isDisabled;
};
