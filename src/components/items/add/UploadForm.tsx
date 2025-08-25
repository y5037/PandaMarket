import InputContainer from "./InputContainer";
import ChooseImgFile from "../shared/ChooseImgFile";
import styles from "../shared/form.module.css";
import { usePostProduct } from "@/src/hooks/react-query/usePostProduct";
import { useRouter } from "next/router";
import { useProductFormActive } from "@/src/hooks/use/useProductFormActive";
import { useProductForm } from "@/src/hooks/use/useProductForm";

function UploadForm() {
  const router = useRouter();

  const { mutate: uploadProduct } = usePostProduct();

  const { values, setValues, imgFile, setImgFile } = useProductForm();
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
