import { useState, useEffect } from "react";
import styles from "../../shared/form.module.css";
import { useRouter } from "next/router";
import ChooseImgFile from "../../shared/ChooseImgFile";
import { useParams } from "next/navigation";
import { useGetProductDetail } from "@/src/hooks/react-query/useGetProductDetail";
import InputContainer from "./InputContainer";
import { usePatchProduct } from "@/src/hooks/react-query/usePatchProduct";
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
  const paramsId = useParams();
  const productId = String(paramsId?.id);

  const { data: productData, isLoading: detailLoading } =
    useGetProductDetail(productId);
  const { mutate: uploadProduct } = usePatchProduct(productId);

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

  return (
    <div className={styles.pagiContainer}>
      <form>
        <div className={styles.submitContainer}>
          <p className={styles.submitTitle}>상품 수정하기</p>
          <button
            type="button"
            className={styles.btnSubmit}
            disabled={isDisabled ? true : false}
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
