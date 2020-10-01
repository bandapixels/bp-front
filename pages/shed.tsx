import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Main from "../src/core/features/Shred/Containers/Main/Main";
import About from "../src/core/features/Shred/Containers/About/About";
import Prototype from "../src/core/features/Shred/Containers/Prototype/Prototype";
import Timeline from "../src/core/features/Shred/Containers/Timeline/Timeline";
import Problematics from "../src/core/features/Shred/Containers/Problematics/Problematics";
import Challenge from "../src/core/features/Shred/Containers/Challenge/Challenge";
import StoreLayout from "../src/core/layouts/StoreLayout";

const Shred: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
      </Head>
      <StoreLayout>
        <Main />
        <About />
        <Prototype />
        <Timeline />
        <Problematics />
        <Challenge />
      </StoreLayout>
    </>
  );
};

export default Shred;
