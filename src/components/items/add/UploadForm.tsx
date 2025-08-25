import { useState, useEffect } from "react";
import InputContainer from "./InputContainer";
import ChooseImgFile from "../shared/ChooseImgFile";
import styles from "../shared/form.module.css";
import { usePostProduct } from "@/src/hooks/usePostProduct";
import { useRouter } from "next/router";

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

  const { mutate: uploadProduct } = usePostProduct();

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

  useEffect(() => {
    if (
      values.name !== "" &&
      values.description !== "" &&
      Number(values.price) > 0 &&
      values.tag.length > 0
    ) {
      setIsDisableChk(false);
    } else {
      setIsDisableChk(true);
    }
  }, [values]);

  return (
    <div className={styles.pagiContainer}>
      <form>
        <div className={styles.submitContainer}>
          <p className={styles.submitTitle}>상품 등록하기</p>
          <button
            type="button"
            className={styles.btnSubmit}
            disabled={isDisableChk ? true : false}
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
