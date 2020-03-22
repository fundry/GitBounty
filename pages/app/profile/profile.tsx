import React from "react";
import { inject, observer } from "mobx-react";
import Flex from "styled-flex-component";
import { Nav } from "react-bootstrap";

import Header from "../../../components/header";
import { Text, Title, Contain, Body } from "../../../styles/global";
import Wrapper from "../../wrapper";

import Issues from "../issues";
import PR from "../pr";

const Profile = (props): JSX.Element => {
  return (
    <Wrapper>
      <Header head="Profile" />

      <Body>
        <Flex justifyBetween>
          <Contain>
            <Title>Nwani Victory</Title>
          </Contain>

          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="Issues" href="#">
                Issues
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Pull Requests" href="#">
                Pull Requests
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Comments" href="#">
                Threads
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Flex>{" "}
      </Body>
    </Wrapper>
  );
};

export default inject("AuthStore")(observer(Profile));
