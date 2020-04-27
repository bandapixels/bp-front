import React from "react";
import { NextPage } from "next";
import StoreLayout from "../src/core/layouts/StoreLayout";
import BlockWithVideo from "../src/core/features/MainPageBlocks/Containers/BlockWithVideo/BlockWithVideo";
import Projects from "../src/core/features/MainPageBlocks/Containers/Projects/Projects";

const Home: NextPage = () => {
  return (
    <StoreLayout>
      <BlockWithVideo />
      <Projects />
    </StoreLayout>
  );
};

export default Home;
