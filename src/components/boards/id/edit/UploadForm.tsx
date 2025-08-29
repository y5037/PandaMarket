import styles from "../../shared/form.module.css";
import { useRouter } from "next/router";
import ChooseImgFile from "../../shared/ChooseImgFile";
import { useParams } from "next/navigation";
import InputContainer from "./InputContainer";
import { useBoardForm } from "@/src/hooks/use/useBoardForm";
import { useBoardFormActive } from "@/src/hooks/use/useBoardFormActive";
import { usePatchBoard } from "@/src/hooks/react-query/usePatchBoard";
import { useGetBoardDetail } from "@/src/hooks/react-query/useGetBoardDetail";

function UploadForm() {
  const router = useRouter();
  const paramsId = useParams();
  const boardId = String(paramsId?.id);

  const { data: boardData, isLoading } = useGetBoardDetail(boardId);
  const { mutate: uploadBoard, isPending } = usePatchBoard(boardId);

  const uploadLoading = isLoading || isPending;

  const { values, setValues, imgFile, setImgFile } = useBoardForm(boardData);
  const isDisabled = useBoardFormActive(imgFile, values, boardData, "edit");

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    uploadBoard(
      { values, imgFile, boardId },
      {
        onSuccess: () => {
          router.push(`/boards/${boardId}`);
        },
      }
    );
  };

  return (
    <div className={styles.pagiContainer}>
      <form>
        <div className={styles.submitContainer}>
          <p className={styles.submitTitle}>게시글 수정하기</p>
          <button
            type="button"
            className={styles.btnSubmit}
            disabled={isDisabled || uploadLoading ? true : false}
            onClick={handleSubmit}
          >
            수정
          </button>
        </div>
        <InputContainer
          uploadLoading={uploadLoading}
          values={values}
          setValues={setValues}
        />
        <ChooseImgFile imgFile={imgFile} setImgFile={setImgFile} />
      </form>
    </div>
  );
}

export default UploadForm;
