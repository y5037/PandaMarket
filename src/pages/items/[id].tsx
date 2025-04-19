import { MutableRefObject, RefObject, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductDetail from "@/src/components/items/id/ProductDetail";
import NavBar from "@/src/components/app/NavBar";
import CommentContainer from "@/src/components/items/id/CommentContainer";
import { getProductId } from "@/src/api/productApi";
import { ProductDataProps } from "@/src/types/itemTypes";
import Head from "next/head";
import useProtectedPage from "@/src/utils/useProtectedPage";
import useGetProductComments from "@/src/hooks/useGetProductComments";
import { useScrollPositioning } from "@/src/utils/useScrollPositioning";
import { useScrollDetector } from "@/src/utils/useScrollDetector";

function ProductDetailPage() {
  const [productData, setProductData] = useState<ProductDataProps>();
  const [loading, setLoading] = useState(true);

  useProtectedPage();

  const router = useRouter();
  const rawProductId = router.query.id!;
  const productId = Array.isArray(rawProductId)
    ? rawProductId[0]
    : rawProductId;

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

  // router.isReady 사용 이유: Next.js는 렌더링된 후 쿼리 객체를 채우기 때문에 라우터 필드가 클라리언트 측에서 업데이트 되고 사용할 준비가 되었는지 여부를 먼저 확인해야 한다.
  // API
  useEffect(() => {
    if (!router.isReady) return;
    getProductId(productId, setProductData, setLoading);
  }, [router.isReady, productId]);

  return (
    <>
      <Head>
        <title>{productData?.name} - 판다마켓</title>
      </Head>
      <NavBar />
      <ProductDetail productData={productData} loading={loading} />
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
