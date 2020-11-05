import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Main from "../src/core/features/Dcr/Containers/Main/Main";
import Analysis from "../src/core/features/Dcr/Containers/Analysis/Analysis";
import UserFlow from "../src/core/features/Dcr/Containers/UserFlow/UserFlow";
import Prototypes from "../src/core/features/Dcr/Containers/Prototypes/Prototypes";
import Problem from "../src/core/features/Dcr/Containers/Problem/Problem";
import DesignSolutions from "../src/core/features/Dcr/Containers/DesignSolutions/DesignSolutions";
import Footer from "../src/core/features/Dcr/Containers/Footer/Footer";
import StoreLayout from "../src/core/layouts/StoreLayout";

const Dcr: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <title>DCR</title>
      </Head>
      <StoreLayout>
        <Main />
        <Analysis />
        <UserFlow />
        <Prototypes />
        <Problem />
        <DesignSolutions />
        <Footer />
      </StoreLayout>
    </>
  );
};

export default Dcr;
