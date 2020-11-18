import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import StoreLayout from "../src/core/layouts/StoreLayout";
import Error from "../src/core/features/Error/Error";

const Custom404: NextPage = () => {
  return (
    <StoreLayout>
      <Head>
        <title>404</title>
      </Head>
      <Error />
    </StoreLayout>
  );
};

export default Custom404;
