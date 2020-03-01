import React from "react";
import App from "next/app";
import { Provider } from "mobx-react";
import { Auth } from "../state/";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider AuthStore={Auth}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
