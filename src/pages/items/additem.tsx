import Head from "next/head";
import ItemsListNav from "../../components/app/NavBar";
import UploadForm from "../../components/items/additem/UploadForm";
import useProtectedPage from "@/src/utils/useProtectedPage";

function addItemPage() {
  useProtectedPage();

  return (
    <>
      <Head>
        <title>상품 등록 - 판다마켓</title>
      </Head>
      <ItemsListNav />
      <UploadForm />
    </>
  );
}

export default addItemPage;
