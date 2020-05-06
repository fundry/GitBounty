import React from "react";
import App from "next/app";
import { Provider } from "mobx-react";
import { Auth, Modals, Task } from "../state/";

const MyApp = props => {
  const { Component, pageProps } = props;
  return (
    <Provider ModalStore={Modals} AuthStore={Auth} TaskStore={Task}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
