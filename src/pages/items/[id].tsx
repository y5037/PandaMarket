import { MutableRefObject, RefObject, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductDetail from "@/src/components/items/id/ProductDetail";
import NavBar from "@/src/components/app/NavBar";
import CommentContainer from "@/src/components/items/id/CommentContainer";
import Head from "next/head";
import useProtectedPage from "@/src/utils/useProtectedPage";
import useGetProductComments from "@/src/hooks/useGetProductComments";
import { useScrollPositioning } from "@/src/utils/useScrollPositioning";
import { useScrollDetector } from "@/src/utils/useScrollDetector";
import { useGetProductDetail } from "@/src/hooks/useGetProductDetail";

function ProductDetailPage() {
  useProtectedPage();

  const router = useRouter();
  const rawProductId = router.query.id!;
  const productId = Array.isArray(rawProductId)
    ? rawProductId[0]
    : rawProductId;

  const { data: productData, isLoading:detailLoading } = useGetProductDetail(productId);

  const {
    data: comment,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useGetProductComments(productId);

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
        <title>{productData?.name} - 판다마켓</title>
      </Head>
      <NavBar />
      <ProductDetail loading={detailLoading} productId={productId} productData={productData}/>
      <CommentContainer
        productId={productId}
        commentsData={commentsData}
        loading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        refetch={refetch}
      />
    </>
  );
}

export default ProductDetailPage;
