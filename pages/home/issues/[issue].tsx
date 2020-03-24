import React from "react";
import { DiHtml5 } from "react-icons/di";
import { IoLogoGithub } from "react-icons/io";
import Flex from "styled-flex-component";
import { observer, inject } from "mobx-react";

import Wrapper from "../../wrapper";
import Header from "../../../components/header";
import { Guideline } from "../../../components/modals/";
import { Body, Text, Title, Hover, Button } from "../../../styles/global";

const Issue = props => {
  const { openGuidelineModal, showGuideline } = props.ModalStore;
  console.log(showGuideline, "val");

  return (
    <Wrapper>
      <Header head="Organizations" />
      <Guideline />
      <br />

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

        <Flex justifyCenter>
          <Button
            onClick={() => {
              openGuidelineModal();
              alert("pressed");
            }}
          >
            {" "}
            Claim task{" "}
          </Button>
        </Flex>
      </Body>
    </Wrapper>
  );
};

export default inject("ModalStore")(observer(Issue));
