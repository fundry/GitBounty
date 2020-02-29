import React from "react";

import Header from "../../../components/header";
import { Text } from "../../../styles/global";
import Wrapper from "../../wrapper";

const Profile = () => {
  return (
    <Wrapper>
      <Header head="Profile" />

      <div>
        <Text> PROFILE </Text>
      </div>
    </Wrapper>
  );
};

export default Profile;
