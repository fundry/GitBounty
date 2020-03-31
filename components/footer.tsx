import React, { useState } from "react";
import Flex from "styled-flex-component";
import {} from "react-icons/di";
import { FiTwitter, FiGithub, FiMail } from "react-icons/fi";

import {
  Body,
  FooterBody,
  Text,
  Hover,
  Column,
  Bottom
} from "../styles/global";
import useWindowWidth from "../styles/hook_style";

const Footer = (props): JSX.Element => {
  const hooks = useWindowWidth();

  const [Width, setWidth] = useState(500);

  console.log(hooks);

  return (
    <div>
      <FooterBody>
        {hooks > 700 ? (
          <Body>
            <Flex justifyBetween>
              <div style={{ paddingTop: "10px" }}>
                <Flex column>
                  <h5> GitBounty </h5>
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
              </div>

              <div style={{ width: "80%" }}>
                <Flex justifyBetween>
                  <Column>
                    <h6> ABOUT </h6>

                    <Flex column>
                      <a> Resources </a>
                      <a> Resources </a>
                      <a> Resources </a>
                    </Flex>
                  </Column>

                  <Column>
                    <h6> API </h6>

                    <Flex column>
                      <a> Resources </a>
                      <a> Resources </a>
                      <a> Resources </a>
                    </Flex>
                  </Column>

                  <Column>
                    <h6> DOCUMENTATION </h6>

                    <Flex column>
                      <a> Resources </a>
                      <a> Resources </a>
                      <a> Resources </a>
                    </Flex>
                  </Column>

                  <Column>
                    <h6> MORE </h6>

                    <Flex column>
                      <a> Resources </a>
                      <a> Resources </a>
                      <a> Resources </a>
                    </Flex>
                  </Column>
                </Flex>
              </div>
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

      <Bottom>
        <p style={{ textAlign: "center" }}>
          Copyright © {new Date().getFullYear()} . All rights reserved . <br />
          Crafted from Fundry{" "}
        </p>
      </Bottom>
    </div>
  );
};

export default Footer;
