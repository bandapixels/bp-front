import React from "react";
import { AppProps } from "next/app";

import "../src/assets/scss/reset.scss";

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
