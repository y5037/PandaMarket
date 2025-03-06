import "@/styles/app/reset.css";
import type { AppProps } from "next/app";
import Loading from "@/src/components/app/Loading";
import ScrollToTop from "@/src/components/app/ScrollToTop";
import Head from "next/head";
import { useLoading } from "@/src/hooks/useLoading";
import { useAuth } from "../hooks/useAuth";
import { Modal } from "../components/app/Modal";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { loading } = useLoading();
  const { showModal, setShowModal, isModalMessage, setIsModalMessage } =
    useAuth();

  useEffect(() => {
    if (!showModal) return;

    if (showModal) {
      setIsModalMessage("인증이 만료되어 로그인 화면으로 이동합니다.");
    }
  }, [showModal]);

  return (
    <>
      <Head>
        <link rel="icon" href="/assets/images/meta/favicon.ico" />
      </Head>
      <ScrollToTop />
      {loading ? <Loading /> : <Component {...pageProps} />}
      {showModal && (
        <Modal
          effectiveData
          showModal={showModal}
          setShowModal={setShowModal}
          isModalMessage={isModalMessage}
        />
      )}
    </>
  );
}
