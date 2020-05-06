import React from "react";
import Router from "next/router";
import Flex from "styled-flex-component";
import Head from "next/head";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { inject, observer } from "mobx-react";

import useWindowWidth from "../styles/hook_style";
import { HeaderBody, Button, Hover } from "../styles/global";

const Header = (props): JSX.Element => {
  const { authenticated } = props.AuthStore;
  const Hooks = useWindowWidth();

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
            {props.org}
          </a>
        </h5>
      </Flex>

      {Hooks >= 700 ? (
        <Flex>
          <li style={{ display: "flex", flexDirection: "row" }}>
            <a href="/" style={{ textDecoration: "none" }}>
              Organziations
            </a>
            <a href="/home/issues/allIssues" style={{ textDecoration: "none" }}>
              Issues
            </a>
            {authenticated ? (
              <div
                onClick={() => {
                  Router.push({
                    pathname: "/app/profile/profile"
                  });
                }}
              >
                <img src="/sample.png" style={{ height: "5vh" }} alt="User" />
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
          </li>
        </Flex>
      ) : (
        <Flex>
          <div style={{ borderRight: "3px solid #0e2f5a" }} />
          <Hover style={{ padding: "0.5rem 0.5rem" }}>
            <FiMenu style={{ fontSize: "2rem" }} />
          </Hover>
        </Flex>
      )}
    </HeaderBody>
  );
};

export default inject("AuthStore")(observer(Header));
