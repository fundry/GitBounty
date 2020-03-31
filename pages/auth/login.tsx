import React from "react";
import Flex from "styled-flex-component";
import Axios from "axios";
import { inject, observer } from "mobx-react";

import { Text, Button, LoginBody } from "../../styles/global";
import Wrapper from "../wrapper";

const Login = (props): JSX.Element => {
  const { AuthUser } = props.AuthStore;
  return (
    <Wrapper>
      <LoginBody>
        <Flex justifyCenter>
          <img src="/Github.png" alt="Github" style={{ maxWidth: "15%" }} />
        </Flex>

        <Text center>
          GitBounty is built upon Github's API <br /> Users are authenticated
          using their Github Accounts
        </Text>

        <Flex justifyCenter>
          <div>
            <Flex justifyCenter>
              <Button
                onClick={() => {
                  AuthUser();
                }}
              >
                Login with Github{" "}
              </Button>
            </Flex>
            <br />
            <br />
            <Flex>
              <Text style={{ paddingRight: "15px", color: "grey" }} small>
                Don't have a Github Account
              </Text>
              <a
                id="link"
                href="https://github.com"
                style={{ fontSize: "1.1rem", textDecoration: "none" }}
              >
                Create One{" "}
              </a>
            </Flex>
          </div>
        </Flex>
      </LoginBody>
    </Wrapper>
  );
};

export default inject("AuthStore")(observer(Login));
