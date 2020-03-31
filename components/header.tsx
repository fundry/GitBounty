import React from "react";
import Router from "next/router";
import Flex from "styled-flex-component";
import Head from "next/head";
import Link from "next/link";

import { HeaderBody, Button } from "../styles/global";
import { inject, observer } from "mobx-react";

const Header = (props): JSX.Element => {
  const { authenticated } = props.AuthStore;

  return (
    <HeaderBody>
      <Head>
        <title> GitBounty | {props.head} </title>
      </Head>

      <Flex>
        <Link href="/" as="/">
          <h4> GitBounty </h4>
        </Link>
        <h5>
          <a href="" style={{ textDecoration: "none" }}>
            {props.org}{" "}
          </a>
        </h5>
      </Flex>

      <Flex>
        <a href="/"> Organziations </a>
        <a href="/home/issues/allIssues"> Issues </a>
        {authenticated ? (
          <div
            onClick={() => {
              Router.push({
                pathname: "/app/profile/profile"
              });
            }}
          >
            <p> IMAGE </p>
          </div>
        ) : (
          <Button
            onClick={() => {
              Router.push({
                pathname: "/auth/login"
              });
            }}
            round
            small
          >
            Login
          </Button>
        )}
      </Flex>
    </HeaderBody>
  );
};

export default inject("AuthStore")(observer(Header));
