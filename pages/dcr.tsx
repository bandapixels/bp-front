import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Main from "../src/core/features/Dcr/Containers/Main/Main";
import Analysis from "../src/core/features/Dcr/Containers/Analysis/Analysis";
import UserFlow from "../src/core/features/Dcr/Containers/UserFlow/UserFlow";
import Prototypes from "../src/core/features/Dcr/Containers/Prototypes/Prototypes";
import Problem from "../src/core/features/Dcr/Containers/Problem/Problem";
import DesignSolutions from "../src/core/features/Dcr/Containers/DesignSolutions/DesignSolutions";
import Footer from "../src/core/features/Dcr/Containers/Footer/Footer";
import StoreLayout from "../src/core/layouts/StoreLayout";
import ScrollLayout from "../src/core/layouts/ScrollLayout";

const Dcr: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <title>DCR</title>
        <meta property="og:title" content="DCR" />
        <meta
          property="og:description"
          content="DCR - Business Digitalization Platform "
        />
        <meta
          property="og:image"
          content="https://bandapixels.com/images/projectsMain/dcr.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Project DCR" />
        <meta property="og:url" content="https://bandapixels.com/dcr" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Bandapixels",
                    "url": "https://bandapixels.com",
                    "email": "team@bandapixels.com",
                    "logo": "https://bandapixels.com/images/banda-logo.jpg",
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
      <StoreLayout>
        <ScrollLayout>
          <Main />
          <Analysis />
          <UserFlow />
          <Prototypes />
          <Problem />
          <DesignSolutions />
          <Footer />
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default Dcr;
