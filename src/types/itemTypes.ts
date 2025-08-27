export interface ParamsId {
  productId: string | undefined;
}

export interface ProductDataProps {
  createdAt: string;
  description: string;
  favoriteCount: number;
  id: number;
  images: string[];
  isFavorite: boolean;
  name: string;
  ownerId: number;
  ownerNickname: string;
  price: number;
  tags: string[];
  updatedAt: string;
}

interface ListWriter {
  id: number;
  image?: string | null;
  nickname: string;
}

export interface ListComment {
  content: string;
  createdAt: string;
  id: number;
  updatedAt: string;
  writer: ListWriter;
}
