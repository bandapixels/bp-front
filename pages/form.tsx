import React from "react";
import { NextPage } from "next";
import StoreLayout from "../src/core/layouts/StoreLayout";
import DiscussTheProject from "../src/core/features/MainPageBlocks/Containers/DiscussTheProject/Containers/DiscussTheProject";

const Contacts: NextPage = () => {
  return (
    <StoreLayout>
      <DiscussTheProject />
    </StoreLayout>
  );
};

export default Contacts;
