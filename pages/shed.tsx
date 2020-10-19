import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Main from "../src/core/features/Shed/Containers/Main/Main";
import About from "../src/core/features/Shed/Containers/About/About";
import Prototype from "../src/core/features/Shed/Containers/Prototype/Prototype";
import Timeline from "../src/core/features/Shed/Containers/Timeline/Timeline";
import Problematics from "../src/core/features/Shed/Containers/Problematics/Problematics";
import Challenge from "../src/core/features/Shed/Containers/Challenge/Challenge";
import Implementation from "../src/core/features/Shed/Containers/Implementation/Implementation";
import Colors from "../src/core/features/Shed/Containers/Colors/Colors";
import Footer from "../src/core/features/Shed/Containers/Footer/Footer";
import StoreLayout from "../src/core/layouts/StoreLayout";

const Shed: NextPage = () => {
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
        <Implementation />
        <Colors />
        <Footer />
      </StoreLayout>
    </>
  );
};

export default Shed;
