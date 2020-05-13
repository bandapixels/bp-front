import React from "react";
import { NextPage } from "next";
import StoreLayout from "../src/core/layouts/StoreLayout";
import WelcomeToBlog from "../src/core/features/BlogPageBlocks/Containers/WelcomeToBlog/WelcomeToBlog";
import Posts from "../src/core/features/BlogPageBlocks/Containers/Posts/Posts";
import ContactsBlock from "../src/core/shared/ContactsBlock/ContactsBlock";

const Home: NextPage = () => {
  return (
    <StoreLayout>
      <WelcomeToBlog />
      <Posts />
      <ContactsBlock />
    </StoreLayout>
  );
};

export default Home;
