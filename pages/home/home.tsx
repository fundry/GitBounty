import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { inject, observer } from "mobx-react";

// import useWindowWidth from "../../styles/hook_style";
import { Footer, Banner } from "../../components";
import { Body, Text } from "../../styles/global";
import Wrapper from "../wrapper";

import Features from "./features";
import Issues from "./issues/issues";

const T = gql`
  {
    repository(owner: "vickywane", name: "portfolio") {
      issues(last: 1) {
        edges {
          node {
            title
          }
        }
      }
    }
  }
`;

const Home = (props): JSX.Element => {
  const { loading, data, error } = useQuery(T);

  // const hook = useWindowWidth;

  return (
    <div
      style={{
        overflow: "hidden"
      }}
    >
      <Banner head="Home" />

      <Body>
        <Text center>
          Home Home Home Home Home Home Home Home Home Home Home Home Home Home
          Home Home Home Home Home Home Home Home Home Home Home Home Home Home
          Home Home{" "}
        </Text>

        <br />
        <Features />
        <br />
      </Body>

      <Issues />

      <br />
      <Footer />
    </div>
  );
};

const Main = () => {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
};

export default inject("AuthStore")(observer(Main));
