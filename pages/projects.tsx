import React from "react";
import { NextPage } from "next";
import StoreLayout from "../src/core/layouts/StoreLayout";
import Projects from "../src/core/features/MainPageBlocks/Containers/Projects/Projects";

const Contacts: NextPage = () => {
  return (
    <StoreLayout>
      <Projects />
    </StoreLayout>
  );
};

export default Contacts;
