import React from "react";
import Flex from "styled-flex-component";
import Axios from "axios";
import { inject, observer } from "mobx-react";

import { Text, Button, LoginBody } from "../../styles/global";
import Wrapper from "../wrapper";

const Login = (props): JSX.Element => {
  // const login = () => {
  //   try {
  //     Axios.get('https://github.com/login/oauth/authorize', {
  //       params: {
  //         client_id: '0db14f58ca77506e9c7e',
  //         scope: 'repo, user ',
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const { AuthUser } = props.AuthStore;
  console.log(AuthUser, "store");
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

export default inject("AuthStore")(observer(Login));
