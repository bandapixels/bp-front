import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Main from "../src/core/features/SunUp/Containers/Main/Main";
import UserFlow from "../src/core/features/SunUp/Containers/UserFlow/UserFlow";
import Problems from "../src/core/features/SunUp/Containers/Problems/Problems";
import Challenge from "../src/core/features/SunUp/Containers/Challenge/Challenge";
import ProjectTimeline from "../src/core/features/SunUp/Containers/ProjectTimeline/ProjectTimeline";
import Analysis from "../src/core/features/SunUp/Containers/Analysis/Analysis";
import Images from "../src/core/features/SunUp/Containers/Images/Images";
import Results from "../src/core/features/SunUp/Containers/Results/Results";
import Footer from "../src/core/features/SunUp/Containers/Footer/Footer";
import StoreLayout from "../src/core/layouts/StoreLayout";
import ScrollLayout from "../src/core/layouts/ScrollLayout";

const SunUp: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <title>SunUP</title>
        <meta property="og:title" content="SunUP" />
        <meta
          property="og:description"
          content="SunUP - Solar Panel Interactive Web Application"
        />
        <meta
          property="og:image"
          content="https://banda-copy.vercel.app/images/sunup.png"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Project sunup" />
        <meta property="og:url" content="https://banda-copy.vercel.app/sunup" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bandapixels",
            "url": "https://banda-copy.vercel.app",
            "email": "team@bandapixels.com",
            "logo": "https://banda-copy.vercel.app/images/banda-logo.jpg",
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
          <Problems />
          <Challenge />
          <ProjectTimeline />
          <Analysis />
          <Images />
          <Results />
          <Footer />
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default SunUp;
