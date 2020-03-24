import React from "react";
import { inject, observer } from "mobx-react";
import Flex from "styled-flex-component";
import { Nav, Tab, Tabs } from "react-bootstrap";

import Header from "../../../components/header";
import { Text, Title, Contain, Body } from "../../../styles/global";
import Wrapper from "../../wrapper";

import Tasks from "../tasks/list";
import PR from "../pr";

const Profile = (props): JSX.Element => {
  return (
    <Wrapper>
      <Header head="Profile" />

      <Body>
        <div style={{ textAlign: "right" }}>
          <Flex>
            <img src="" alt="user" style={{ marginRight: "10px" }} />

            <Contain>
              <Title>Nwani Victory</Title>
            </Contain>
          </Flex>
        </div>

        <Tabs
          style={{ textAlign: "center" }}
          defaultActiveKey="Issues"
          id="uncontrolled-tab-exampale"
        >
          <Tab eventKey="Issues" title="Issues">
            <Tasks />
          </Tab>
          <Tab eventKey="PR" title="Pull Requests">
            <PR />
          </Tab>
          <Tab eventKey="Threads" title="Threads">
            <p> Threads </p>
          </Tab>
        </Tabs>
      </Body>
    </Wrapper>
  );
};

export default inject("AuthStore")(observer(Profile));
