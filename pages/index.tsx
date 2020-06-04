import React from "react";
import { NextPage } from "next";
import StoreLayout from "../src/core/layouts/StoreLayout";
import BlockWithVideo from "../src/core/features/MainPageBlocks/Containers/BlockWithVideo/BlockWithVideo";
import DiscussTheProject from "../src/core/features/MainPageBlocks/Containers/DiscussTheProject/Containers/DiscussTheProject";
import AboutUs from "../src/core/features/MainPageBlocks/Containers/AboutUs/AboutUs";
import ContactsBlock from "../src/core/shared/ContactsBlock/ContactsBlock";
import Projects from "../src/core/features/MainPageBlocks/Containers/Projects/Projects";
import YourAdvantages from "../src/core/features/MainPageBlocks/Containers/YourAdvantages/YourAdvantages";
import FullPageScroll from "../src/core/shared/FullPageScroll/Containers/FullPageScroll";
// import Preloader from "../src/core/shared/Preloader/Preloader";

const Home: NextPage = () => {
  // const [isLoad, setLoad] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => setLoad(true), 3000);
  // }, []);

  return (
    <StoreLayout>
      {/* <Preloader isLoad={isLoad} /> */}
      <FullPageScroll startScroll>
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
