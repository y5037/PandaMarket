// ImgPreview.tsx
export interface PreviewProps {
  preview: string;
  handleDeleteClick: () => void;
}

// RegisterImgFile.tsx
export interface ImgFileProps {
  imgFile: string;
  setImgFile: React.Dispatch<React.SetStateAction<string>>;
}

// RegisterInput.tsx
export interface InitialValues {
  setValues: React.Dispatch<
    React.SetStateAction<{
      name: string;
      description: string;
      price: number | string;
      tag: string[];
    }>
  >;
}
