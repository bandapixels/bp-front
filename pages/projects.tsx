import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import StoreLayout from "../src/core/layouts/StoreLayout";
import ProjectsWrapper from "../src/core/features/Projects/Containers/ProjectsWrapper/ProjectsWrapper";
import FullPageScroll from "../src/core/shared/FullPageScroll/Containers/FullPageScroll";

const Contacts: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <title>Projects</title>
        <meta property="og:title" content="Bandapixels" />
        <meta
          property="og:description"
          content="Lets make your service the best choice for the users"
        />
        <meta
          property="og:image"
          content="https://banda-copy.vercel.app/images/banda-logo.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Bandapixels logo" />
        <meta
          property="og:url"
          content="https://banda-copy.vercel.app/projects"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bandapixels",
            "url": "https://banda-copy.vercel.app",
            "email": "team(at)bandapixels.com",
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
        <FullPageScroll>
          <ProjectsWrapper />
        </FullPageScroll>
      </StoreLayout>
    </>
  );
};

export default Contacts;
