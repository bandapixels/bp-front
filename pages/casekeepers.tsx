import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Main from "../src/core/features/CaseKeepers/Containers/Main/Main";
import UserFlow from "../src/core/features/CaseKeepers/Containers/UserFlow/UserFlow";
import Research from "../src/core/features/CaseKeepers/Containers/Research/Research";
import Timeline from "../src/core/features/CaseKeepers/Containers/Timeline/Timeline";
import Problematics from "../src/core/features/CaseKeepers/Containers/Problematics/Problematics";
import Challenge from "../src/core/features/CaseKeepers/Containers/Challenge/Challenge";
import Colors from "../src/core/features/CaseKeepers/Containers/Colors/Colors";
import Analysis from "../src/core/features/CaseKeepers/Containers/Analysis/Analysis";
import Footer from "../src/core/features/CaseKeepers/Containers/Footer/Footer";
import StoreLayout from "../src/core/layouts/StoreLayout";
import ScrollLayout from "../src/core/layouts/ScrollLayout";

const CaseKeepers: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <title>CaseKeepers</title>
      </Head>
      <StoreLayout>
        <ScrollLayout>
          <Main />
          <UserFlow />
          <Research />
          <Timeline />
          <Problematics />
          <Challenge />
          <Colors />
          <Analysis />
          <Footer />
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default CaseKeepers;
