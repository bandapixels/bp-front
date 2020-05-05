import React from "react";
import { NextPage } from "next";
import StoreLayout from "../src/core/layouts/StoreLayout";
import BlockWithVideo from "../src/core/features/MainPageBlocks/Containers/BlockWithVideo/BlockWithVideo";
import DiscussTheProject from "../src/core/features/MainPageBlocks/Containers/DiscussTheProject/DiscussTheProject";
import AboutUs from "../src/core/features/MainPageBlocks/Containers/AboutUs/AboutUs";
import ContactsBlock from "../src/core/shared/ContactsBlock/ContactsBlock";
import Projects from "../src/core/features/MainPageBlocks/Containers/Projects/Projects";

const Home: NextPage = () => {
  return (
    <StoreLayout>
      <BlockWithVideo />
      <ContactsBlock />
      <DiscussTheProject />
      <Projects />
      <AboutUs />
    </StoreLayout>
  );
};

export default Home;
