import styles from "../../shared/form.module.css";
import { useRouter } from "next/router";
import ChooseImgFile from "../../shared/ChooseImgFile";
import { useParams } from "next/navigation";
import { useGetProductDetail } from "@/src/hooks/react-query/useGetProductDetail";
import InputContainer from "./InputContainer";
import { usePatchProduct } from "@/src/hooks/react-query/usePatchProduct";
import { useProductFormActive } from "@/src/hooks/use/useProductFormActive";
import { useProductForm } from "@/src/hooks/use/useProductForm";

function UploadForm() {
  const router = useRouter();
  const paramsId = useParams();
  const productId = String(paramsId?.id);

  const { data: productData, isLoading } = useGetProductDetail(productId);
  const { mutate: uploadProduct, isPending } = usePatchProduct(productId);

  const uploadLoading = isLoading || isPending;

  const { values, setValues, imgFile, setImgFile } =
    useProductForm(productData);
  const isDisabled = useProductFormActive(imgFile, values, productData, "edit");

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

  return (
    <div className={styles.pagiContainer}>
      <form>
        <div className={styles.submitContainer}>
          <p className={styles.submitTitle}>상품 수정하기</p>
          <button
            type="button"
            className={styles.btnSubmit}
            disabled={isDisabled || uploadLoading ? true : false}
            onClick={handleSubmit}
          >
            수정
          </button>
        </div>
        <ChooseImgFile imgFile={imgFile} setImgFile={setImgFile} />
        <InputContainer
          uploadLoading={uploadLoading}
          values={values}
          setValues={setValues}
        />
      </form>
    </div>
  );
}

export default UploadForm;
