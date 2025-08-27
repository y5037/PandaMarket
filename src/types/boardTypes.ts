export interface BoardDataProps {
  id: number;
  title: string;
  content: string;
  image: string;
  writer: boardWriter[];
  likeCount: number;
  createdAt: string;
  updatedAt: string;
}

interface boardWriter {
  id: number;
  nickname: string;
}

export interface BoardList {
  id: number;
  title: string;
  content: string;
  image: string;
}
