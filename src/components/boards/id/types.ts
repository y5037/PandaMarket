import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface CommentUIProps {
  isEditProductComment?: boolean;
  isEditBoardComment?: boolean;
  changedComment: string;
  postId: string | string[];
  commentId: number;
  refetch: UseInfiniteQueryResult["refetch"];
  setShowEdit: React.Dispatch<React.SetStateAction<number | null>>;
  setShowSelect: React.Dispatch<React.SetStateAction<number | null>>;
}

interface ListWriter {
  id: number;
  image?: string | null;
  nickname: string;
}

interface ListComment {
  content: string;
  createdAt: string;
  id: number;
  updatedAt: string;
  writer: ListWriter;
}

export interface CommentDataProps {
  list: ListComment[];
  nextCursor: number;
}

export interface BoardDataProps {
  id: number;
  title: string;
  content: string;
  image: string;
  writer: ListWriter;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
}
