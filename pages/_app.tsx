import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyles } from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <>
      <Head>
        <title>Mark Colby</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#000000" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
