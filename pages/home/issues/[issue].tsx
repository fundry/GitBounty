import React, { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { FiX } from "react-icons/fi";
import Flex from "styled-flex-component";
import { observer, inject } from "mobx-react";
import Router from "next/router";

import Wrapper from "../../wrapper";
import Header from "../../../components/header";
import { Guideline } from "../../../components/modals/";
import {
  Body,
  Text,
  Title,
  Hover,
  Button,
  Notification
} from "../../../styles/global";

const Issue = props => {
  const { openGuidelineModal, showGuideline } = props.ModalStore;
  console.log(showGuideline, "val");
  const [Wait, setWait] = useState(false);
  const [Notify, setNotify] = useState(false);

  return (
    <Wrapper>
      <Header head="Issue" org="| Facebook" />

      {Notify ? (
        <Notification issue>
          <Flex justifyBetween>
            <Text
              small
              style={{
                paddingTop: "5px"
              }}
            >
              TASK_NAME has been added to your list of tasks here
            </Text>

            <Flex>
              <Button
                onClick={() => {
                  Router.push({
                    pathname: "/app/profile/profile"
                  });
                }}
                white
                small
              >
                Open Task
              </Button>

              <Hover style={{ padding: "0.5rem  1rem" }}>
                <FiX
                  onClick={() => {
                    setNotify(false);
                  }}
                  style={{ fontSize: "1.7rem" }}
                />
              </Hover>
            </Flex>
          </Flex>
        </Notification>
      ) : null}

      <Guideline />
      <br />

      <Body onselectstart={false}>
        <Flex justifyBetween>
          <img alt="organization" src="/fb.png" style={{ maxWidth: "4%" }} />

          <Title center> Fix All Broken Links and Images </Title>

          <Hover style={{ paddingRight: "10px" }}>
            <IoLogoGithub style={{ fontSize: "2.5rem" }} />
          </Hover>
        </Flex>

        <h5 style={{ paddingTop: "5px", fontWeight: "normal" }}>
          <b> Duration </b> : 5 days
        </h5>

        <Text>
          Images are broken are broken are broken are broken are broken are
          broken are broken are broken are broken are broken are broken are
          broken are broken are broken are broken are broken are broken are
          broken are broken are broken are broken are broken are broken are
          broken are broken are broken are broken are broken are broken
        </Text>

        <hr />
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

        <Flex justifyCenter>
          {!Wait ? (
            <Button
              onClick={() => {
                openGuidelineModal();
                setWait(true);
                setNotify(true);
              }}
            >
              Claim task
            </Button>
          ) : (
            <Text small>Awaiting approval</Text>
          )}
        </Flex>
      </Body>
    </Wrapper>
  );
};

export default inject("ModalStore")(observer(Issue));
