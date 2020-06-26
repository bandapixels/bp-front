import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import StoreLayout from "../src/core/layouts/StoreLayout";
import ContactsBlock from "../src/core/shared/ContactsBlock/ContactsBlock";

const Contacts: NextPage = () => {
  return (
    <StoreLayout>
      <Head>
        <title>Contacts</title>
      </Head>
      <ContactsBlock />
    </StoreLayout>
  );
};

export default Contacts;
