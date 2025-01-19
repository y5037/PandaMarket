import "@/styles/app/reset.css";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import Loading from "@/components/app/Loading";
import ScrollToTop from "@/components/app/ScrollToTop";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/images/meta/favicon.ico" />
        <Script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"`,
          }}
        />
      </Head>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Component {...pageProps} />
      </Suspense>
    </>
  );
}
