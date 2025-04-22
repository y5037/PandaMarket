import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ProductList {
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
