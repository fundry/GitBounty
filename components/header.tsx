import React from "react";
import Router from "next/router";
import Flex from "styled-flex-component";

import { HeaderBody, Button } from "../styles/global";
import { inject, observer } from "mobx-react";

const Header = (props): JSX.Element => {
  const { authenticated } = props.AuthStore;
  console.log(authenticated, "auth");
  return (
    <HeaderBody>
      <h4> GitBounty </h4>

      <Flex>
        <a href="/"> Organziations </a>
        <a href="/"> Bounties </a>
        {authenticated ? (
          <div
            onClick={() => {
              Router.push({
                pathname: "pages/app/profile"
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
          >
            Login
          </Button>
        )}
      </Flex>
    </HeaderBody>
  );
};

export default inject("AuthStore")(observer(Header));
