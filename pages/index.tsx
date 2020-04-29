import React from "react";
import { NextPage } from "next";
import StoreLayout from "../src/core/layouts/StoreLayout";
import BlockWithVideo from "../src/core/features/MainPageBlocks/Containers/BlockWithVideo/BlockWithVideo";
import DiscussTheProject from "../src/core/features/MainPageBlocks/Containers/DiscussTheProject/DiscussTheProject";

const Home: NextPage = () => {
  return (
    <StoreLayout>
      <BlockWithVideo />
      <DiscussTheProject />
    </StoreLayout>
  );
};

export default Home;
