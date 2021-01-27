import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Main from "../src/core/features/CaseKeepers/Containers/Main/Main";
import UserFlow from "../src/core/features/CaseKeepers/Containers/UserFlow/UserFlow";
import Research from "../src/core/features/CaseKeepers/Containers/Research/Research";
import Timeline from "../src/core/features/CaseKeepers/Containers/Timeline/Timeline";
import Problematics from "../src/core/features/CaseKeepers/Containers/Problematics/Problematics";
import Challenge from "../src/core/features/CaseKeepers/Containers/Challenge/Challenge";
import Colors from "../src/core/features/CaseKeepers/Containers/Colors/Colors";
import Analysis from "../src/core/features/CaseKeepers/Containers/Analysis/Analysis";
import Footer from "../src/core/features/CaseKeepers/Containers/Footer/Footer";
import StoreLayout from "../src/core/layouts/StoreLayout";
import ScrollLayout from "../src/core/layouts/ScrollLayout";

const CaseKeepers: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <title>CaseKeepers</title>
        <meta property="og:title" content="CaseKeepers" />
        <meta
          property="og:description"
          content="CaseKeepers - Service for Lawyers & Their Clients"
        />
        <meta
          property="og:image"
          content="https://bandapixels.com/images/projectsMain/casekeepers.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Project CaseKeepers" />
        <meta property="og:url" content="https://bandapixels.com/casekeepers" />
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
          <UserFlow />
          <Research />
          <Timeline />
          <Problematics />
          <Challenge />
          <Colors />
          <Analysis />
          <Footer />
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default CaseKeepers;
