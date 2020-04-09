import React, { ReactNode } from "react";
import Header from "../shared/Header/Header";

interface Props {
  children: ReactNode;
}

const StoreLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default StoreLayout;
