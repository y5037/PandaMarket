import { ReactElement } from "react";

// ProductDetail.tsx
export interface CommentUIProps {
  setShowEdit: (value: ReactElement<React.SetStateAction<number | null>>) => void;
  setShowSelect: (value: ReactElement<React.SetStateAction<number | null>>) => void;
}

interface ListWriter {
  id: number;
  image?: React.ImgHTMLAttributes<HTMLImageElement> | null;
  nickname: string;
}

interface ListComment {
  content: string;
  createdAt: string;
  id: number;
  updatedAt: string;
  writer: ListWriter;
}

export interface TCommentDataProps {
  list: ListComment[];
}

// ProductDetailPage.tsx
export interface TProductDataProps {
  createdAt: string;
  description: string;
  favoriteCount: number;
  id: number;
  images?: React.ImgHTMLAttributes<HTMLImageElement> | null;
  isFavorite: boolean;
  name: string;
  ownerId: number;
  ownerNickname: string;
  price: number;
  tags: string[];
  updatedAt: string;
}
