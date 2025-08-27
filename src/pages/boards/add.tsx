import Head from "next/head";
import ItemsListNav from "../../components/app/NavBar";
import useProtectedPage from "@/src/hooks/use/useProtectedPage";
import UploadForm from "@/src/components/boards/add/UploadForm";

function AddBoardPage() {
  useProtectedPage();

  return (
    <>
      <Head>
        <title>게시글 등록 - 판다마켓</title>
      </Head>
      <ItemsListNav />
      <UploadForm />
    </>
  );
}

export default AddBoardPage;
