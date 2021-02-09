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
import constants from "../src/core/shared/constants";
import Solution from "../src/core/features/AppNavi/Containers/Solution/Solution";
import Technologies from "../src/core/features/AppNavi/Containers/Technologies/Technologies";
import SolutionVideo from "../src/core/features/AppNavi/Containers/SolutionVideo/SolutionVideo";

const AppNavi: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <title>AppNavi</title>
        <meta property="og:title" content="AppNavi" />
        <meta
          property="og:description"
          content="AppNavi - Web App and Browser Extension"
        />
        <meta
          property="og:image"
          content={`${constants.schema}${constants.host}/images/projectsMain/appnavi.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Project AppNavi" />
        <meta
          property="og:url"
          content={`${constants.schema}${constants.host}/appnavi`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bandapixels",
            "url": "${constants.schema}${constants.host}",
            "email": "team@bandapixels.com",
            "logo": "${constants.schema}${constants.host}/images/banda-logo.jpg",
            "sameAs" : [
              "https://www.behance.net/bandapixels",
              "https://www.facebook.com/BandaPixels",
              "https://dribbble.com/bandapixels",
              "https://www.linkedin.com/organization-guest/company/bandapixels"
            ]
          }`,
          }}
        />
      </Head>
      <StoreLayout>
        <ScrollLayout>
          <MainBlock />
          <AboutTheProject />
          <AboutVideo />
          <Problematics />
          <Challenge />
          <Solution />
          <SolutionVideo />
          <AnalysisAndSolution />
          <Results />
          <Technologies />
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default AppNavi;
