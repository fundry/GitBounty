import React from "react";
import App from "next/app";
import { Provider } from "mobx-react";
import { Auth, Modals } from "../state/";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider ModalStore={Modals} AuthStore={Auth}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
