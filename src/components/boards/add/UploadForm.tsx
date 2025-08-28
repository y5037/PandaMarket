import ChooseImgFile from "../shared/ChooseImgFile";
import styles from "../shared/form.module.css";
import { useRouter } from "next/router";
import InputContainer from "./InputContainer";
import { usePostBoard } from "@/src/hooks/react-query/usePostBoard";
import { useBoardFormActive } from "@/src/hooks/use/useBoardFormActive";
import { useBoardForm } from "@/src/hooks/use/useBoardForm";

function UploadForm() {
  const router = useRouter();

  const { mutate: uploadBoard, isPending: uploadLoading } = usePostBoard();

  const { values, setValues, imgFile, setImgFile } = useBoardForm();
  const isDisabled = useBoardFormActive(imgFile, values, undefined, "add");

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    uploadBoard(
      { values, imgFile },
      {
        onSuccess: () => {
          router.push("/boards");
        },
      }
    );
  };

  return (
    <div className={styles.pagiContainer}>
      <form>
        <div className={styles.submitContainer}>
          <p className={styles.submitTitle}>게시글 쓰기</p>
          <button
            type="button"
            className={styles.btnSubmit}
            disabled={isDisabled || uploadLoading ? true : false}
            onClick={handleSubmit}
          >
            등록
          </button>
        </div>
        <InputContainer setValues={setValues} uploadLoading={uploadLoading} />
        <ChooseImgFile imgFile={imgFile} setImgFile={setImgFile} />
      </form>
    </div>
  );
}

export default UploadForm;
