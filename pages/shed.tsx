import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Main from "../src/core/features/Shed/Containers/Main/Main";
import About from "../src/core/features/Shed/Containers/About/About";
import Prototype from "../src/core/features/Shed/Containers/Prototype/Prototype";
import Timeline from "../src/core/features/Shed/Containers/Timeline/Timeline";
import Problematics from "../src/core/features/Shed/Containers/Problematics/Problematics";
import Challenge from "../src/core/features/Shed/Containers/Challenge/Challenge";
import Implementation from "../src/core/features/Shed/Containers/Implementation/Implementation";
import Colors from "../src/core/features/Shed/Containers/Colors/Colors";
import Footer from "../src/core/features/Shed/Containers/Footer/Footer";
import ScrollLayout from "../src/core/layouts/ScrollLayout";
import StoreLayout from "../src/core/layouts/StoreLayout";

const Shed: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <title>Shed</title>
        <meta property="og:title" content="Shed" />
        <meta
          property="og:description"
          content="Shed - a Service Where you Can Rent Everything You Need"
        />
        <meta
          property="og:image"
          content="https://banda-copy.vercel.app/images/shed.png"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Project Shed" />
        <meta property="og:url" content="https://banda-copy.vercel.app/shed" />
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
          <About />
          <Prototype />
          <Timeline />
          <Problematics />
          <Challenge />
          <Implementation />
          <Colors />
          <Footer />
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default Shed;
