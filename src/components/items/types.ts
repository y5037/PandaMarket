import { StaticImport } from "next/dist/shared/lib/get-img-props";

// BestItem.tsx
export interface List {
  createAt: string;
  description: string;
  favoriteCount: number;
  id: number;
  images: string | StaticImport;
  name: string;
  ownerId: number;
  price: number;
  tags: string[];
  updatedAt: string;
}

// BestListFilter.tsx
export interface ApiOptions {
  page: number;
  orderBy: string;
  pageSize: number;
  keyword: string;
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
  setIsDataCount: React.Dispatch<React.SetStateAction<number>>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  isItemCount: number;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
};
