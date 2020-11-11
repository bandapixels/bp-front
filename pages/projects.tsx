import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import StoreLayout from "../src/core/layouts/StoreLayout";
import ProjectsWrapper from "../src/core/features/Projects/Containers/ProjectsWrapper/ProjectsWrapper";
import FullPageScroll from "../src/core/shared/FullPageScroll/Containers/FullPageScroll";

const Contacts: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <title>Projects</title>
      </Head>
      <StoreLayout>
        <FullPageScroll>
          <ProjectsWrapper />
        </FullPageScroll>
      </StoreLayout>
    </>
  );
};

export default Contacts;
