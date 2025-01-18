import styles from "../../../styles/items/additem.module.css";
import DeleteBtnImg from "@/public/assets/images/items/cancel.svg";
import { PreviewProps } from "./types";

function ImgPreview({ preview, handleDeleteClick }:PreviewProps) {
  return (
    <>
      <img src={preview} alt="" />
      <div className={styles.circle} onClick={handleDeleteClick}>
        <DeleteBtnImg />
      </div>
    </>
  );
}

export default ImgPreview;
