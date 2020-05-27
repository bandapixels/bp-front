import React from "react";
import { NextPage } from "next";
import StoreLayout from "../src/core/layouts/StoreLayout";
import ContactsBlock from "../src/core/shared/ContactsBlock/ContactsBlock";

const Contacts: NextPage = () => {
  return (
    <StoreLayout>
      <ContactsBlock />
    </StoreLayout>
  );
};

export default Contacts;
