import React from "react";
import Flex from "styled-flex-component";
import { DiHtml5 } from "react-icons/di";
import { IoLogoGithub } from "react-icons/io";
import { inject, observer } from "mobx-react";

import { Header, Footer } from "../../../components/";
import { Body, Hover, Title, Text, Button } from "../../../styles/global";
import Wrapper from "../../wrapper";

const Task = props => {
  return (
    <Wrapper>
      <Header />

      <Body>
        <Body>
          <img alt="organization" src="" />

          <Flex justifyBetween>
            <Hover style={{ paddingRight: "10px" }}>
              <DiHtml5 style={{ fontSize: "2em" }} />
            </Hover>

            <Title center> Fix All Broken Links and Images </Title>

            <Hover style={{ paddingRight: "10px" }}>
              <IoLogoGithub style={{ fontSize: "2.5rem" }} />
            </Hover>
          </Flex>
          <Text>
            Images are broken are broken are broken are broken are broken are
            broken are broken are broken are broken are broken are broken are
            broken are broken are broken are broken are broken are broken are
            broken are broken are broken are broken are broken are broken are
            broken are broken are broken are broken are broken are broken{" "}
          </Text>
        </Body>
      </Body>

      <Footer />
    </Wrapper>
  );
};

export default Task;
