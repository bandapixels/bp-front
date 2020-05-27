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

const AppNavi: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
      </Head>
      <StoreLayout>
        <MainBlock />
        <AboutTheProject />
        <AboutVideo />
        <Problematics />
        <Challenge />
        <AnalysisAndSolution />
        <AnalysisVideo />
        <AnalysisBottom />
        <Results />
      </StoreLayout>
    </>
  );
};

export default AppNavi;
