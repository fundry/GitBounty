import React from "react";

import { Header, Footer } from "../../components/";
import Wrapper from "../wrapper";
import { Contain, Body, Text } from "../../styles/global";

const Organizations = (props): JSX.Element => {
  return (
    <Wrapper>
      <Header />
      <Body>
        <Text> ORGANIZATIONS </Text>
      </Body>
      <Footer />
    </Wrapper>
  );
};
export default Organizations;
