import Head from "next/head";
import ItemsListNav from "../../components/app/ItemListNav";
import RegisterForm from "../../components/items/additem/RegisterForm";

function ProductRgsPage() {
  return (
    <>
      <Head>
        <title>상품 등록 - 판다마켓</title>
      </Head>
      <ItemsListNav />
      <RegisterForm />
    </>
  );
}

export default ProductRgsPage;
