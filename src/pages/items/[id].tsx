import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductDetail from "@/src/components/items/id/ProductDetail";
import NavBar from "@/src/components/app/NavBar";
import CommentContainer from "@/src/components/items/id/CommentContainer";
import { getComments, getProductId } from "@/src/api/ProductAPI";
import { CommentDataProps, ProductDataProps } from "./types";
import Head from "next/head";

function ProductDetailPage() {
  const [productData, setProductData] = useState<ProductDataProps>();
  const [commentsData, setCommentsData] = useState<CommentDataProps>();
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const productId = router.query.id!;

  // router.isReady 사용 이유: Next.js는 렌더링된 후 쿼리 객체를 채우기 때문에 라우터 필드가 클라리언트 측에서 업데이트 되고 사용할 준비가 되었는지 여부를 먼저 확인해야 한다.
  // API
  useEffect(() => {
    if (!router.isReady) return;
    getProductId(productId, setProductData, setLoading);
    getComments(productId, setCommentsData);
  }, [router.isReady, productId]);

  return (
    <>
      <Head>
        <title>{productData?.name} - 판다마켓</title>
      </Head>
      <NavBar />
      <ProductDetail productData={productData} loading={loading} />
      <CommentContainer commentsData={commentsData} loading={loading} />
    </>
  );
}

export default ProductDetailPage;
