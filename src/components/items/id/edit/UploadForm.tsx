import { useState, useEffect } from "react";
import styles from "../../shared/form.module.css";
import { useRouter } from "next/router";
import ChooseImgFile from "../../shared/ChooseImgFile";
import { useParams } from "next/navigation";
import { useGetProductDetail } from "@/src/hooks/react-query/useGetProductDetail";
import InputContainer from "./InputContainer";
import { usePatchProduct } from "@/src/hooks/react-query/usePatchProduct";

function UploadForm() {
  const INITIAL_VALUES = {
    name: "",
    description: "",
    price: 0,
    tag: [],
  };

  const [values, setValues] = useState<{
    name: string;
    description: string;
    price: number | string;
    tag: string[];
  }>(INITIAL_VALUES);

  const [imgFile, setImgFile] = useState("");
  const [isDisableChk, setIsDisableChk] = useState(true);

  const router = useRouter();
  const paramsId = useParams();
  const productId = String(paramsId?.id);

  const { data: productData, isLoading: detailLoading } =
    useGetProductDetail(productId);
  const { mutate: uploadProduct } = usePatchProduct(productId);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    uploadProduct(
      { values, imgFile, productId },
      {
        onSuccess: () => {
          router.push(`/items/${productId}`);
        },
      }
    );
  };

  useEffect(() => {
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

  useEffect(() => {
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

    if (
      imgFile.length > 0 &&
      values.name !== "" &&
      values.description !== "" &&
      Number(values.price) > 0 &&
      values.tag?.length > 0 &&
      (isThumbnailChanged ||
        isNameChanged ||
        isDescChanged ||
        isPriceChanged ||
        tagsChanged)
    ) {
      setIsDisableChk(false);
    } else {
      setIsDisableChk(true);
    }
  }, [
    imgFile,
    values.name,
    values.description,
    values.price,
    values.tag,
    productData,
  ]);

  return (
    <div className={styles.pagiContainer}>
      <form>
        <div className={styles.submitContainer}>
          <p className={styles.submitTitle}>상품 수정하기</p>
          <button
            type="button"
            className={styles.btnSubmit}
            disabled={isDisableChk ? true : false}
            onClick={handleSubmit}
          >
            수정
          </button>
        </div>
        <ChooseImgFile imgFile={imgFile} setImgFile={setImgFile} />
        <InputContainer values={values} setValues={setValues} />
      </form>
    </div>
  );
}

export default UploadForm;
