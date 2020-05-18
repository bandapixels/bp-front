import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { AppState } from "../store/store";
import configureStore from "../store/configureStore";
import Header from "../shared/Header/Header";

interface Props {
  children: ReactNode;
}

interface ContainerProps extends Props {
  store: AppState;
}

const Container: React.FunctionComponent<ContainerProps> = ({
  children,
  store
}) => {
  return (
    <Provider store={store}>
      <Header />
      {children}
    </Provider>
  );
};

const StoreLayout = (withRedux(configureStore)(
  Container
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) as any) as React.FunctionComponent<Props>;

export default StoreLayout;
