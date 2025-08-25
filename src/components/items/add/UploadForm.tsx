import { useState } from "react";
import InputContainer from "./InputContainer";
import ChooseImgFile from "../shared/ChooseImgFile";
import styles from "../shared/form.module.css";
import { usePostProduct } from "@/src/hooks/react-query/usePostProduct";
import { useRouter } from "next/router";
import { INITIAL_VALUES } from "@/src/constants/product";
import { useProductFormActive } from "@/src/hooks/use/useProductFormActive";

function UploadForm() {
  const [values, setValues] = useState<{
    name: string;
    description: string;
    price: number | string;
    tag: string[];
  }>(INITIAL_VALUES);

  const [imgFile, setImgFile] = useState("");

  const router = useRouter();

  const { mutate: uploadProduct } = usePostProduct();

  const isDisabled = useProductFormActive(imgFile, values, undefined, "add");

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    uploadProduct(
      { values, imgFile },
      {
        onSuccess: () => {
          router.push("/items");
        },
      }
    );
  };

  return (
    <div className={styles.pagiContainer}>
      <form>
        <div className={styles.submitContainer}>
          <p className={styles.submitTitle}>상품 등록하기</p>
          <button
            type="button"
            className={styles.btnSubmit}
            disabled={isDisabled ? true : false}
            onClick={handleSubmit}
          >
            등록
          </button>
        </div>
        <ChooseImgFile imgFile={imgFile} setImgFile={setImgFile} />
        <InputContainer setValues={setValues} />
      </form>
    </div>
  );
}

export default UploadForm;
