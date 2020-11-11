import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Main from "../src/core/features/SunUp/Containers/Main/Main";
import UserFlow from "../src/core/features/SunUp/Containers/UserFlow/UserFlow";
import Problems from "../src/core/features/SunUp/Containers/Problems/Problems";
import Challenge from "../src/core/features/SunUp/Containers/Challenge/Challenge";
import ProjectTimeline from "../src/core/features/SunUp/Containers/ProjectTimeline/ProjectTimeline";
import Analysis from "../src/core/features/SunUp/Containers/Analysis/Analysis";
import Images from "../src/core/features/SunUp/Containers/Images/Images";
import Results from "../src/core/features/SunUp/Containers/Results/Results";
import Footer from "../src/core/features/SunUp/Containers/Footer/Footer";
import StoreLayout from "../src/core/layouts/StoreLayout";
import ScrollLayout from "../src/core/layouts/ScrollLayout";

const SunUp: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <title>Sun Up</title>
      </Head>
      <StoreLayout>
        <ScrollLayout>
          <Main />
          <UserFlow />
          <Problems />
          <Challenge />
          <ProjectTimeline />
          <Analysis />
          <Images />
          <Results />
          <Footer />
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default SunUp;
