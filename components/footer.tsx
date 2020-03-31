import React, { useState } from "react";
import Flex from "styled-flex-component";
import {} from "react-icons/di";
import { FiTwitter, FiGithub, FiMail } from "react-icons/fi";

import { Body, FooterBody, Hover, Column } from "../styles/global";
import useWindowWidth from "../styles/hook_style";

const Footer = (props): JSX.Element => {
  const hooks = useWindowWidth();

  const [Width, setWidth] = useState(500);

  console.log(hooks);

  return (
    <FooterBody>
      {hooks > 700 ? (
        <Body>
          <Flex>
            <div style={{ paddingTop: "20pxi" }}>
              <h5> GitBounty </h5>
            </div>

            <Flex justifyBetween>
              <Column>
                <h6> PRODUCT </h6>

                <Flex column>
                  <a> Resources </a>
                  <a> Resources </a>
                  <a> Resources </a>
                </Flex>
              </Column>

              <Column>
                <h6> PRODUCT </h6>

                <Flex column>
                  <a> Resources </a>
                  <a> Resources </a>
                  <a> Resources </a>
                </Flex>
              </Column>

              <Column>
                <h6> PRODUCT </h6>

                <Flex column>
                  <a> Resources </a>
                  <a> Resources </a>
                  <a> Resources </a>
                </Flex>
              </Column>
            </Flex>
          </Flex>
        </Body>
      ) : (
        <Body>
          <Flex column>
            <h5> GitBounty </h5>
            <Flex justifyCenter>
              <Flex>
                <Hover style={{ margin: "0.5rem" }}>
                  <FiGithub style={{ fontSize: "1.5rem" }} />{" "}
                </Hover>
                <Hover style={{ margin: "0.5rem" }}>
                  <FiTwitter style={{ fontSize: "1.5rem" }} />{" "}
                </Hover>
                <Hover style={{ margin: "0.5rem" }}>
                  <FiMail style={{ fontSize: "1.5rem" }} />{" "}
                </Hover>
              </Flex>
            </Flex>
          </Flex>

          <Flex justifyBetween>
            <Column>
              <h6> PRODUCT </h6> <a> Resources </a>
            </Column>
            <Column>
              <h6> LEGAL </h6> <a> Resources </a>
            </Column>
            <Column>
              <h6> SERVICE </h6> <a> Resources </a>
            </Column>{" "}
          </Flex>
        </Body>
      )}
    </FooterBody>
  );
};

export default Footer;
