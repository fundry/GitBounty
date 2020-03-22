import React from "react";
import Wrapper from "../../wrapper";
import { DiHtml5 } from "react-icons/di";
import Flex from "styled-flex-component";

import Header from "../../../components/header";
import { Body, Text, Title, Hover, Button } from "../../../styles/global";

export default function org() {
  return (
    <Wrapper>
      <Header head="Organizations" />
      <br />

      <Body>
        <img alt="organization" src="" />

        <Flex justifyBetween>
          <Hover style={{ paddingRight: "10px" }}>
            <DiHtml5 style={{ fontSize: "2em" }} />
          </Hover>

          <Title center> Fix All Broken Links and Images </Title>

          <Button> View On Github </Button>
        </Flex>
        <Text>
          Images are broken are broken are broken are broken are broken are
          broken are broken are broken are broken are broken are broken are
          broken are broken are broken are broken are broken are broken are
          broken are broken are broken are broken are broken are broken are
          broken are broken are broken are broken are broken are broken{" "}
        </Text>
      </Body>
    </Wrapper>
  );
}
