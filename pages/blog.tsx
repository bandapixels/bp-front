import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import StoreLayout from "../src/core/layouts/StoreLayout";
import FullPageScroll from "../src/core/shared/FullPageScroll/Containers/FullPageScroll";
import WelcomeToBlog from "../src/core/features/BlogPage/Containers/WelcomeToBlog/WelcomeToBlog";
import Posts from "../src/core/features/BlogPage/Containers/Posts/Posts";
import ContactsBlock from "../src/core/shared/ContactsBlock/ContactsBlock";

const Home: NextPage = () => {
  return (
    <StoreLayout>
      <Head>
        <title>Blog</title>
      </Head>
      <FullPageScroll>
        <WelcomeToBlog />
        <Posts />
        <ContactsBlock />
      </FullPageScroll>
    </StoreLayout>
  );
};

export default Home;
