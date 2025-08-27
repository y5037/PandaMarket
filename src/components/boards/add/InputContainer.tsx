import { InitialValues } from "../shared/types";
import styles from "../shared/form.module.css";
import { useBoardFormState } from "@/src/hooks/use/useBoardFormState";

function InputContainer({ setValues, uploadLoading }: InitialValues) {
  const { handleInputChange } = useBoardFormState(setValues);

  return (
    <fieldset disabled={uploadLoading}>
      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>제목</p>
        <input
          name="title"
          type="text"
          placeholder="제목을 입력해주세요"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>내용</p>
        <textarea
          name="content"
          placeholder="내용을 입력해주세요"
          onChange={handleInputChange}
        />
      </div>
    </fieldset>
  );
}

export default InputContainer;
