import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";

// ProductDetail.tsx
export interface CommentUIProps {
  setShowEdit: (React.Dispatch<React.SetStateAction<number | null>>);
  setShowSelect: (React.Dispatch<React.SetStateAction<number | null>>);
}

interface ListWriter {
  id: number;
  image: string | StaticImport
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
  images: string | StaticImport;
  isFavorite: boolean;
  name: string;
  ownerId: number;
  ownerNickname: string;
  price: number;
  tags: string[];
  updatedAt: string;
}
