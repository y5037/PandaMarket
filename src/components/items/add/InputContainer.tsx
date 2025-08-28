import DeleteBtnImg from "@/public/assets/images/items/cancel.svg";
import { InitialValues } from "../shared/types";
import styles from "../shared/form.module.css";
import { useProductFormState } from "@/src/hooks/use/useProductFormState";

// 상품 정보 등록
function InputContainer({ setValues, uploadLoading }: InitialValues) {
  const {
    tagList,
    enteredNum,
    changeEnteredNum,
    priceInput,
    activeEnter,
    handleInputChange,
    handleAddValue,
    handleDeleteClick,
  } = useProductFormState(setValues);

  return (
    <fieldset disabled={uploadLoading}>
      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>상품명</p>
        <input
          maxLength={30}
          name="name"
          type="text"
          placeholder="상품명을 입력해주세요"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>상품 소개</p>
        <textarea
          name="description"
          placeholder="상품 소개를 입력해주세요"
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>판매가격</p>
        <input
          type="text"
          name="price"
          placeholder="판매 가격을 입력해주세요"
          value={enteredNum}
          maxLength={12}
          onChange={(e) => {
            changeEnteredNum(e);
          }}
          ref={priceInput}
        />
      </div>
      <div className={styles.inputContainer}>
        <p className={styles.inputTitle}>태그</p>
        <input
          name="tag"
          type="text"
          placeholder="태그를 입력해주세요"
          onChange={handleAddValue}
          onKeyDown={activeEnter}
        />
        <ul className={styles.tagContainer}>
          {tagList &&
            tagList.map((item, i) => {
              return (
                <li key={i}>
                  <p className={styles.tagText}>#{item}</p>
                  <div
                    className={styles.circle}
                    onClick={() => handleDeleteClick(i)}
                  >
                    <DeleteBtnImg />
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </fieldset>
  );
}

export default InputContainer;
