import React from "react";
import Head from "next/head";

import Header from "../../../components/header";
import { Text } from "../../../styles/global";

const Profile = () => {
  return (
    <div>
      <Head>
        <title>GitBounty | Login</title>
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
      <Header />

      <div>
        <Text> PROFILE </Text>
      </div>
    </div>
  );
};

export default Profile;
