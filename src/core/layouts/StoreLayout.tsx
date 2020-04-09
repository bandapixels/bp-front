import React, { ReactNode } from "react";
import Header from "../shared/Header/Header";

interface Props {
  children: ReactNode;
}

const StoreLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          box-sizing: border-box;
          font-family: "Raleway", sans-serif;
          padding: 0;
        }
      `}</style>
      <Header />
      {children}
    </>
  );
};

export default StoreLayout;
