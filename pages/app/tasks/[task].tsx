import React from "react";
import Flex from "styled-flex-component";
import { FiClock } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { inject, observer } from "mobx-react";

import { Header, Footer } from "../../../components/";
import { Body, Hover, Title, Text, Button } from "../../../styles/global";
import Wrapper from "../../wrapper";

const Task = props => {
  const name = "Facebook"; // this would come from api later

  return (
    <Wrapper>
      <Header org={` | ${name}`} />

      <Body>
        <Flex justifyBetween>
          <img alt="organization" src="/fb.png" style={{ maxWidth: "5%" }} />

          <Title center> Fix All Broken Links and Images </Title>

          <Hover style={{ paddingRight: "10px" }}>
            <IoLogoGithub style={{ fontSize: "2.5rem" }} />
          </Hover>
        </Flex>

        <Body>
          <Text>
            Images are broken are broken are broken are broken are broken are
            broken are broken are broken are broken are broken are broken are
            broken are broken are broken are broken are broken are broken are
            broken are broken are broken are broken are broken are broken are
            broken are broken are broken are broken are broken are broken
          </Text>
        </Body>
        <div>
          <Text small> Contributors </Text>
          <Flex>
            <img
              alt="maintainer"
              src="/sample.png"
              style={{ maxWidth: "7%", margin: "0.5rem" }}
            />
            <img
              alt="maintainer"
              src="/sample.png"
              style={{ maxWidth: "7%", margin: "0.5rem" }}
            />
            <img
              alt="maintainer"
              src="/sample.png"
              style={{ maxWidth: "7%", margin: "0.5rem" }}
            />
            <img
              alt="maintainer"
              src="/sample.png"
              style={{ maxWidth: "7%", margin: "0.5rem" }}
            />
          </Flex>

          <hr />
        </div>

        <Flex justifyBetween>
          <Button>View Trello Board</Button>

          <Button> Reviews </Button>
        </Flex>
      </Body>

      <Footer />
    </Wrapper>
  );
};

export default Task;
