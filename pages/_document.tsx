import { ServerStyleSheet } from "styled-components";

import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            // eslint-disable-next-line react/jsx-props-no-spreading
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width" />
          <title>Mark Colby</title>
          <meta
            name="description"
            content="Personal website for Mark Colby, a software engineer and submarine veteran who loves full-stack web tech. Checkout the latest things I've been working on!"
          />
          <meta property="og:title" content="Mark Colby" key="title" />
          <meta
            property="og:description"
            content="Personal website for Mark Colby, a software engineer and submarine veteran who loves full-stack web tech. Checkout the latest things I've been working on!"
          />
          <meta property="og:image" content="/markcolby_ogImage.jpg" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://markcolby.dev" />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="mask-icon" href="/favicon.svg" color="#000" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/my.webmanifest" />
          <link rel="canonical" href="https://markcolby.dev" />
          <meta name="theme-color" content="#000" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
