import React from "react";
import { NextPage } from "next";
import StoreLayout from "../src/core/layouts/StoreLayout";
import WeOffer from "../src/core/features/ServicesBlocks/Containers/WeOffer/WeOffer";
import TechnologyStack from "../src/core/features/ServicesBlocks/Containers/TechnologyStack/TechnologyStack";
import Contacts from "../src/core/shared/ContactsBlock/ContactsBlock";
import FullPageScroll from "../src/core/shared/FullPageScroll/Containers/FullPageScroll";

const Services: NextPage = () => {
  return (
    <StoreLayout>
      <FullPageScroll startScroll>
        <WeOffer />
        <TechnologyStack />
        <Contacts classes="servicesBtn" />
      </FullPageScroll>
    </StoreLayout>
  );
};

export default Services;
