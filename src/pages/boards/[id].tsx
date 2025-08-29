import { MutableRefObject, RefObject } from "react";
import { useRouter } from "next/router";
import NavBar from "@/src/components/app/NavBar";
import CommentContainer from "@/src/components/shared/detailComments/CommentContainer";
import Head from "next/head";
import useProtectedPage from "@/src/hooks/use/useProtectedPage";
import { useScrollPositioning } from "@/src/hooks/use/useScrollPositioning";
import { useScrollDetector } from "@/src/hooks/use/useScrollDetector";
import { useGetBoardDetail } from "@/src/hooks/react-query/useGetBoardDetail";
import useGetBoardComments from "@/src/hooks/react-query/useGetBoardComments";
import BoardDetail from "@/src/components/boards/id/BoardDetail";

function BoardDetailPage() {
  useProtectedPage();

  const router = useRouter();
  const paramId = router.query.id!;
  const boardId = Array.isArray(paramId) ? paramId[0] : paramId;

  const { data: boardData, isLoading: detailLoading } =
    useGetBoardDetail(boardId);

  const {
    data: comment,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useGetBoardComments(boardId);

  const commentsData = comment?.pages.flatMap((page) => page.comments) ?? [];

  const {
    listRef,
    prevScrollHeightRef,
    prevScrollTopRef,
  }: {
    listRef: RefObject<HTMLDivElement | null>;
    prevScrollHeightRef: MutableRefObject<number>;
    prevScrollTopRef: MutableRefObject<number>;
  } = useScrollPositioning(comment);

  useScrollDetector(() => {
    if (hasNextPage && !isFetchingNextPage) {
      prevScrollHeightRef.current = listRef.current?.scrollHeight || 0;
      prevScrollTopRef.current = window.scrollY;
      fetchNextPage();
    }
  });

  return (
    <>
      <Head>
        <title>
          {boardData ? boardData?.title + " - 판다마켓" : "판다마켓"}
        </title>
      </Head>
      <NavBar />
      <BoardDetail loading={detailLoading} id={boardId} boardData={boardData} />
      <CommentContainer
        type="board"
        id={boardId}
        commentsData={commentsData}
        loading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        refetch={refetch}
      />
    </>
  );
}

export default BoardDetailPage;
