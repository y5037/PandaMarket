import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ItemWriter {
  id: number;
  nickname: string;
}

export interface Item {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  image: string | StaticImport;
  likeCount: number;
  writer: ItemWriter;
}

// GeneralItemsList.tsx
export type ItemsList = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setPageCount: React.Dispatch<React.SetStateAction<number>>;
  setIsDataCount: React.Dispatch<React.SetStateAction<number>>;
};

// GeneralSearchForm.tsx
export type SearchForm = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setPageCount: React.Dispatch<React.SetStateAction<number>>;
  totalCount: number;
  setIsDataCount: React.Dispatch<React.SetStateAction<number>>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  isItemCount: number;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
};
