import React from "react";
import Flex from "styled-flex-component";
import Head from "next/head";
import { Text, Button, LoginBody } from "../../styles/global";

const Login = () => {
  return (
    <LoginBody>
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

      <Text center>
        GitBounty is built heavily upon Github <br /> Users are authenticated
        using Github Accounts
      </Text>

      <Flex justifyCenter>
        <div>
          <Flex justifyCenter>
            <Button round> Login with Github </Button>{" "}
          </Flex>
          <br />
          <br />
          <Flex>
            <Text style={{ paddingRight: "15px", color: "grey" }} small>
              Don't have a Github Account
            </Text>
            <a id="link" href="https://github.com">
              Create One{" "}
            </a>
          </Flex>
        </div>
      </Flex>
    </LoginBody>
  );
};

export default Login;
