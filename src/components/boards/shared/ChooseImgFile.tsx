import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import UploadImg from "@/public/assets/images/items/upload.svg";
import ImgPreview from "./ImgPreview";
import { ImgFileProps } from "./types";
import styles from "../shared/form.module.css";
import { usePostProductImg } from "@/src/hooks/react-query/usePostProductImg";

function ChooseImgFile({ imgFile, setImgFile }: ImgFileProps) {
  const [previewUrl, setPreviewUrl] = useState<Blob>();
  const [previewImg, setPreviewImg] = useState("");
  const [isImgChk, setIsImgChk] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleGetImg = async (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = (e?.target as HTMLInputElement).files![0];
    setPreviewUrl(nextValue);
    e.target.value = "";
  };

  const { mutate: uploadImg } = usePostProductImg();

  const handlePreventionClick = (e: MouseEvent) => {
    if (imgFile) {
      e.preventDefault();
      setIsImgChk(true);
    } else {
      setIsImgChk(false);
    }
  };

  const handleDeleteClick = () => {
    setIsImgChk(false);
    setImgFile("");
    setPreviewImg("");
    setPreviewUrl(undefined);
  };

  useEffect(() => {
    if (imgFile.length > 0) {
      setPreviewImg(imgFile);
    } else if (previewUrl) {
      const nextPreview = URL.createObjectURL(previewUrl);
      setPreviewImg(nextPreview);
    }
  }, [previewUrl, imgFile]);

  useEffect(() => {
    if (!previewUrl) return;

    uploadImg(previewUrl, {
      onSuccess: (data) => {
        setImgFile(data);
      },
      onError: (err) => {
        console.error(err);
      },
    });
  }, [previewUrl, uploadImg, setImgFile]);

  return (
    <div className={`${styles.inputContainer} ${styles.fileBox}`}>
      <p className={styles.inputTitle}>이미지</p>
      <div className={styles.previewContainer}>
        <div className={styles.coverTile}>
          <label htmlFor="imgUpload">
            <div className={styles.cover}>
              <UploadImg />
              <p className={styles.imgUpload}>이미지 등록</p>
            </div>
          </label>
          <input
            id="imgUpload"
            name="imgFile"
            type="file"
            className={styles.btnImgUpload}
            accept=".jpg, .png"
            onChange={handleGetImg}
            ref={inputRef}
            onClick={handlePreventionClick}
          />
        </div>
        {previewImg && (
          <div className={`${styles.coverTile} ${styles.thumbnail}`}>
            <ImgPreview
              preview={previewImg}
              handleDeleteClick={handleDeleteClick}
            />
          </div>
        )}
      </div>
      {isImgChk ? (
        <p className={styles.warnMessage}>
          *이미지 등록은 최대 1개까지 가능합니다.
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default ChooseImgFile;
