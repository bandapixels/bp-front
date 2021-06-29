import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import StoreLayout from "../src/core/layouts/StoreLayout";
import BlockWithVideo from "../src/core/features/MainPage/Containers/BlockWithVideo/BlockWithVideo";
import DiscussTheProject from "../src/core/features/MainPage/Containers/DiscussTheProject/Containers/DiscussTheProject";
import AboutUs from "../src/core/features/MainPage/Containers/AboutUs/AboutUs";
import ContactsBlock from "../src/core/shared/ContactsBlock/ContactsBlock";
import Projects from "../src/core/features/MainPage/Containers/Projects/Projects";
import YourAdvantages from "../src/core/features/MainPage/Containers/YourAdvantages/YourAdvantages";
import FullPageScroll from "../src/core/shared/FullPageScroll/Containers/FullPageScroll";
import Preloader from "../src/core/shared/Preloader/Containers/Preloader";
import constants from "../src/core/shared/constants";

const Home: NextPage = () => {
  return (
    <StoreLayout>
      <Preloader />
      <Head>
        <title>Bandapixels</title>
        <meta property="og:title" content="Bandapixels" />
        <meta
          property="og:description"
          content="Lets make your service the best choice for the users"
        />
        <meta
          property="og:image"
          content={`${constants.schema}${constants.host}/images/banda-logo.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Bandapixels logo" />
        <meta
          property="og:url"
          content={`${constants.schema}${constants.host}`}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GRWFFT4X83"/>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GRWFFT4X83');
          `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bandapixels",
            "url": "${constants.schema}${constants.host}",
            "email": "team@bandapixels.com",
            "logo": "${constants.schema}${constants.host}/images/banda-logo.jpg",
            "sameAs" : [
              "https://www.behance.net/bandapixels",
              "https://www.facebook.com/BandaPixels",
              "https://dribbble.com/bandapixels",
              "https://www.linkedin.com/organization-guest/company/bandapixels"
            ]
          }`
          }}
        />
      </Head>
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
