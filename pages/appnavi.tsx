import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import MainBlock from "../src/core/features/AppNavi/Containers/MainBlock/MainBlock";
import AboutTheProject from "../src/core/features/AppNavi/Containers/AboutTheProject/AboutTheProject";
import AboutVideo from "../src/core/features/AppNavi/Containers/AboutVideo/AboutVideo";
import Problematics from "../src/core/features/AppNavi/Containers/Problematics/Problematics";
import Challenge from "../src/core/features/AppNavi/Containers/Challenge/Challenge";
import AnalysisAndSolution from "../src/core/features/AppNavi/Containers/AnalysisAndSolution/AnalysisAndSolution";
import AnalysisVideo from "../src/core/features/AppNavi/Containers/AnalysisVideo/AnalysisVideo";
import AnalysisBottom from "../src/core/features/AppNavi/Containers/AnalysisBottom/AnalysisBottom";
import Results from "../src/core/features/AppNavi/Containers/Results/Results";
import StoreLayout from "../src/core/layouts/StoreLayout";
import ScrollLayout from "../src/core/layouts/ScrollLayout";

const AppNavi: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <title>AppNavi</title>
      </Head>
      <StoreLayout>
        <ScrollLayout>
          <MainBlock />
          <AboutTheProject />
          <Problematics />
          <Challenge />
          <AboutVideo />
          <AnalysisAndSolution />
          <AnalysisVideo />
          <AnalysisBottom />
          <Results />
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default AppNavi;
