import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"; // eslint-disable-line import/no-unresolved
import { GlobalStyles } from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Mark Colby</title>
      </Head>
      <Analytics />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
