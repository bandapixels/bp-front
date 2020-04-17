import React from "react";
import { NextPage } from "next";
import StoreLayout from "../src/core/layouts/StoreLayout";
import BlockWithVideo from "../src/core/features/MainPageBlocks/Containers/BlockWithVideo/BlockWithVideo";
import AboutUs from "../src/core/features/MainPageBlocks/Containers/AboutUs/AboutUs";

const Home: NextPage = () => {
  return (
    <StoreLayout>
      <BlockWithVideo />
      <AboutUs />
    </StoreLayout>
  );
};

export default Home;
