import { useState, useEffect, FormEvent } from "react";
import InputContainer from "./InputContainer";
import ChooseImgFile from "./ChooseImgFile";
import styles from "./additem.module.css";

function UploadForm() {
  const INITIAL_VALUES = {
    name: "",
    description: "",
    price: 0,
    tag: [],
  };

  // file input 제외한 모든 input
  const [values, setValues] = useState<{
    name: string;
    description: string;
    price: number | string;
    tag: string[];
  }>(INITIAL_VALUES);

  const [imgFile, setImgFile] = useState("");
  const [isDisableChk, setIsDisableChk] = useState(true);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("price", values.price as string);
    formData.append("tag", values.tag as any as string);
    formData.append("images", imgFile);
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
      <form onSubmit={handleSubmit}>
        <div className={styles.submitContainer}>
          <p className={styles.submitTitle}>상품 등록하기</p>
          <button
            type="button"
            className={styles.btnSubmit}
            disabled={isDisableChk ? true : false}
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
