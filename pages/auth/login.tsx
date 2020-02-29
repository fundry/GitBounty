import React from "react";
import Flex from "styled-flex-component";

import { Text, Button, LoginBody } from "../../styles/global";
import Wrapper from "../wrapper";

const Login = () => {
  return (
    <Wrapper>
      <LoginBody>
        <Text center>
          GitBounty is built heavily upon Github <br /> Users are authenticated
          using Github Accounts
        </Text>

        <Flex justifyCenter>
          <div>
            <Flex justifyCenter>
              <Button round> Login with Github </Button>{" "}
            </Flex>
            <br />
            <br />
            <Flex>
              <Text style={{ paddingRight: "15px", color: "grey" }} small>
                Don't have a Github Account
              </Text>
              <a id="link" href="https://github.com">
                Create One{" "}
              </a>
            </Flex>
          </div>
        </Flex>
      </LoginBody>
    </Wrapper>
  );
};

export default Login;
