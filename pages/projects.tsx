import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import StoreLayout from "../src/core/layouts/StoreLayout";
import Projects from "../src/core/features/MainPage/Containers/Projects/Projects";

const Contacts: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
      </Head>
      <StoreLayout>
        <Projects />
      </StoreLayout>
    </>
  );
};

export default Contacts;
