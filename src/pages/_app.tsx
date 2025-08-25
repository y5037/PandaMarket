import "@/styles/app/reset.css";
import type { AppProps } from "next/app";
import Loading from "@/src/components/app/Loading";
import ScrollToTop from "@/src/components/app/ScrollToTop";
import Head from "next/head";
import { ConfirmationModal } from "../components/modal/ConfirmationModal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLoading } from "../hooks/use/useLoading";
import { useRefreshToken } from "../hooks/use/useRefreshToken";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  const { loading } = useLoading();

  const { showModal, setShowModal, isModalMessage } = useRefreshToken();

  return (
    <>
      <Head>
        <link rel="icon" href="/assets/images/meta/favicon.ico" />
      </Head>
      <ScrollToTop />
      <QueryClientProvider client={queryClient}>
        {loading ? <Loading /> : <Component {...pageProps} />}
        {showModal && (
          <ConfirmationModal
            effectiveData
            showModal={showModal}
            setShowModal={setShowModal}
            isModalMessage={isModalMessage}
          />
        )}
      </QueryClientProvider>
    </>
  );
}
