import Head from "next/head";
import ItemsListNav from "../../../components/app/NavBar";
import useProtectedPage from "@/src/hooks/use/useProtectedPage";
import UploadForm from "@/src/components/boards/id/edit/UploadForm";

function AddItemPage() {
  useProtectedPage();

  return (
    <>
      <Head>
        <title>게시글 수정 - 판다마켓</title>
      </Head>
      <ItemsListNav />
      <UploadForm />
    </>
  );
}

export default AddItemPage;
