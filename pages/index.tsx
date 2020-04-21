import React from "react";
import { NextPage } from "next";
import StoreLayout from "../src/core/layouts/StoreLayout";
import BlockWithVideo from "../src/core/features/MainPageBlocks/Containers/BlockWithVideo/BlockWithVideo";
import ContactsBlock from "../src/core/shared/ContactsBlock/ContactsBlock";

const Home: NextPage = () => {
  return (
    <StoreLayout>
      <BlockWithVideo />
      <ContactsBlock />
    </StoreLayout>
  );
};

export default Home;
