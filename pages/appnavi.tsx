import React from "react";
import { NextPage } from "next";
import MainBlock from "../src/core/features/AppNavi/Containers/MainBlock/MainBlock";
import AboutTheProject from "../src/core/features/AppNavi/Containers/AboutTheProject/AboutTheProject";
import AboutVideo from "../src/core/features/AppNavi/Containers/AboutVideo/AboutVideo";
import Problematics from "../src/core/features/AppNavi/Containers/Problematics/Problematics";
import Challenge from "../src/core/features/AppNavi/Containers/Challenge/Challenge";
import AnalysisAndSolution from "../src/core/features/AppNavi/Containers/AnalysisAndSolution/AnalysisAndSolution";
import AnalysisVideo from "../src/core/features/AppNavi/Containers/AnalysisVideo/AnalysisVideo";
import AnalysisBottom from "../src/core/features/AppNavi/Containers/AnalysisBottom/AnalysisBottom";
import Results from "../src/core/features/AppNavi/Containers/Results/Results";

const AppNavi: NextPage = () => {
  return (
    <>
      <MainBlock />
      <AboutTheProject />
      <AboutVideo />
      <Problematics />
      <Challenge />
      <AnalysisAndSolution />
      <AnalysisVideo />
      <AnalysisBottom />
      <Results />
    </>
  );
};

export default AppNavi;
