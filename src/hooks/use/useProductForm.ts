import { PRODUCT_INITIAL_VALUES } from "@/src/constants/product";
import { ProductDataProps } from "@/src/types/itemTypes";
import { useEffect, useState } from "react";

export const useProductForm = (productData?: ProductDataProps) => {
  const [values, setValues] = useState<{
    name: string;
    description: string;
    price: number | string;
    tag: string[];
  }>(PRODUCT_INITIAL_VALUES);

  const [imgFile, setImgFile] = useState("");

  useEffect(() => {
    if (!productData) return;

    if (productData) {
      setImgFile(productData?.images?.[0]);
      setValues((prevValues) => ({
        ...prevValues,
        name: productData?.name,
        description: productData?.description,
        price: productData?.price,
        tag: productData?.tags,
      }));
    }
  }, [productData]);

  return { values, setValues, imgFile, setImgFile };
};
