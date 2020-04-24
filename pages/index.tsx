import React from "react";
import { NextPage } from "next";
import StoreLayout from "../src/core/layouts/StoreLayout";
import BlockWithVideo from "../src/core/features/MainPageBlocks/Containers/BlockWithVideo/BlockWithVideo";
import YourAdvantages from "../src/core/features/MainPageBlocks/Containers/YourAdvantages/YourAdvantages";

const Home: NextPage = () => {
  return (
    <StoreLayout>
      <BlockWithVideo />
      <YourAdvantages />
    </StoreLayout>
  );
};

export default Home;
