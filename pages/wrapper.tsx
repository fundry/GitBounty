import React from "react";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";

import Client from "../data/config";

const Layout = ({ children }) => {
  return (
    <ApolloProvider client={Client}>
      <Head>
        <meta charSet="utf-8" />
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/.bundjs/bootstraple.min.js" />

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
      </Head>
      {children}
    </ApolloProvider>
  );
};

export default Layout;
