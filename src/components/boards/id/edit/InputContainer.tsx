import { InitialValues } from "../../shared/types";
import styles from "../../shared/form.module.css";
import { useBoardFormState } from "@/src/hooks/use/useBoardFormState";

function InputContainer({ values, setValues, uploadLoading }: InitialValues) {
  const { handleInputChange } = useBoardFormState(setValues);

  console.log(values);

  return (
    <fieldset disabled={uploadLoading}>
      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>제목</p>
        <input
          maxLength={50}
          name="title"
          type="text"
          defaultValue={values?.title}
          placeholder="제목을 입력해주세요"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>내용</p>
        <textarea
          name="content"
          defaultValue={values?.content}
          placeholder="내용을 입력해주세요"
          onChange={handleInputChange}
        />
      </div>
    </fieldset>
  );
}

export default InputContainer;
