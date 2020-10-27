import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import StoreLayout from "../src/core/layouts/StoreLayout";
import WeOffer from "../src/core/features/Services/Containers/WeOffer/WeOffer";
import TechnologyStack from "../src/core/features/Services/Containers/TechnologyStack/TechnologyStack";
import Contacts from "../src/core/shared/ContactsBlock/ContactsBlock";
import FullPageScroll from "../src/core/shared/FullPageScroll/Containers/FullPageScroll";

const Services: NextPage = () => {
  return (
    <StoreLayout>
      <Head>
        <title>Services</title>
      </Head>
      <FullPageScroll>
        <WeOffer />
        <TechnologyStack />
        <Contacts classes="servicesBtn" />
      </FullPageScroll>
    </StoreLayout>
  );
};

export default Services;
