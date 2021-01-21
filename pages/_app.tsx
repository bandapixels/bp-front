import React from "react";
import { AppProps } from "next/app";

import "../src/assets/scss/reset.scss";
import Head from "next/head";

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
