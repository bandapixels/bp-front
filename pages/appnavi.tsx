import React from "react";
import { NextPage } from "next";
import MainBlock from "../src/core/features/AppNavi/Containers/MainBlock/MainBlock";
import AboutTheProject from "../src/core/features/AppNavi/Containers/AboutTheProject/AboutTheProject";
import AboutVideo from "../src/core/features/AppNavi/Containers/AboutVideo/AboutVideo";
import Problematics from "../src/core/features/AppNavi/Containers/Problematics/Problematics";

const AppNavi: NextPage = () => {
  return (
    <>
      <MainBlock />
      <AboutTheProject />
      <AboutVideo />
      <Problematics />
    </>
  );
};

export default AppNavi;
