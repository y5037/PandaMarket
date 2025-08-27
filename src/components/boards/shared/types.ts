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
export type ValuesItem = {
  title: string;
  content: string;
};

export interface InitialValues {
  values?: ValuesItem;
  setValues: React.Dispatch<React.SetStateAction<ValuesItem>>;
  uploadLoading: boolean;
}
