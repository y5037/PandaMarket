import Head from "next/head";
import ItemsListNav from "../../../components/app/NavBar";
import useProtectedPage from "@/src/utils/useProtectedPage";
import UploadForm from "@/src/components/items/id/edit/UploadForm";

function AddItemPage() {
  useProtectedPage();

  return (
    <>
      <Head>
        <title>상품 수정 - 판다마켓</title>
      </Head>
      <ItemsListNav />
      <UploadForm />
    </>
  );
}

export default AddItemPage;
