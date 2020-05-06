import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import media from "styled-media-query";
import Flex from "styled-flex-component";

// import useWindowWidth from "../../styles/hook_style";
import { Footer, Banner } from "../../components";
import { Body, Text, BigTitle } from "../../styles/global";
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

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 50% 50%;
  ${media.lessThan("large")`
      display: flex;
      flex-direction: column;
      align-content: center;
`};
  ${media.lessThan("medium")`
      display: flex;
      flex-direction: column;
      align-content: center;
`};
  ${media.lessThan("small")`
      display: flex;
      flex-direction: column;
      align-content: center;
`};
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
      <br />
      <br />
      <br />

      <Body>
        <Grid>
          <Flex justifyCenter>
            <img
              alt="Bounty Illustration"
              src={"/illustration.svg"}
              style={{ margin: "0px", maxWidth: "70%" }}
            />
          </Flex>

          <div>
            <BigTitle center small>
              Contribute to Open Source Software{" "}
            </BigTitle>
            <Text center>
              Home Home Home Home Home Home Home Home Home Home Home Home Home
              Home Home Home Home Home Home Home Home Home Home Home Home Home
              Home Home Home Home{" "}
            </Text>
          </div>
        </Grid>

        <br />
        <br />
        <Features />
        <br />
      </Body>

      <Issues />

      <br />
      <br />
      <br />
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
