import React from "react";
import { NextPage } from "next";
import StoreLayout from "../src/core/layouts/StoreLayout";
import BlockWithVideo from "../src/core/features/MainPageBlocks/Containers/BlockWithVideo/BlockWithVideo";

const Home: NextPage = () => {
  return (
    <StoreLayout>
      <BlockWithVideo />
    </StoreLayout>
  );
};

export default Home;
