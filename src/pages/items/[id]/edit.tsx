import Head from "next/head";
import ItemsListNav from "../../../components/app/NavBar";
import UploadForm from "@/src/components/items/id/edit/UploadForm";
import useProtectedPage from "@/src/hooks/use/useProtectedPage";

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
