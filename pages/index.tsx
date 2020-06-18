import React from "react";
import { NextPage } from "next";
import StoreLayout from "../src/core/layouts/StoreLayout";
import BlockWithVideo from "../src/core/features/MainPage/Containers/BlockWithVideo/BlockWithVideo";
import DiscussTheProject from "../src/core/features/MainPage/Containers/DiscussTheProject/Containers/DiscussTheProject";
import AboutUs from "../src/core/features/MainPage/Containers/AboutUs/AboutUs";
import ContactsBlock from "../src/core/shared/ContactsBlock/ContactsBlock";
import Projects from "../src/core/features/MainPage/Containers/Projects/Projects";
import YourAdvantages from "../src/core/features/MainPage/Containers/YourAdvantages/YourAdvantages";
import FullPageScroll from "../src/core/shared/FullPageScroll/Containers/FullPageScroll";
import Preloader from "../src/core/shared/Preloader/Containers/Preloader";

const Home: NextPage = () => {
  return (
    <StoreLayout>
      <Preloader />
      <FullPageScroll>
        <BlockWithVideo />
        <AboutUs />
        <YourAdvantages />
        <Projects />
        <DiscussTheProject />
        <ContactsBlock />
      </FullPageScroll>
    </StoreLayout>
  );
};

export default Home;
