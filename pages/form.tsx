import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import StoreLayout from "../src/core/layouts/StoreLayout";
import DiscussTheProject from "../src/core/features/MainPage/Containers/DiscussTheProject/Containers/DiscussTheProject";

const Contacts: NextPage = () => {
  return (
    <StoreLayout>
      <Head>
        <title>Discuss the project</title>
      </Head>
      <DiscussTheProject />
    </StoreLayout>
  );
};

export default Contacts;
