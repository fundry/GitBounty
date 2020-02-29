import React from "react";
import Head from "next/head";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { Footer, Banner } from "../../components";
import { Body, Text } from "../../styles/global";

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

  // console.log(loading, error, data);

  return (
    <div>
      <Banner head="Home" />

      <Body>
        <Text center>
          Home Home Home Home Home Home Home Home Home Home Home Home Home Home
          Home Home Home Home Home Home Home Home Home Home Home Home Home Home
          Home Home{" "}
        </Text>

        <Features />
        <br />
        <Issues />
      </Body>

      <Footer />
    </div>
  );
};

export default Home;
