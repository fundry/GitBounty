import React from "react";

import { Header, Footer } from "../../../components/";
import { Body, Text } from "../../../styles/global";

const Task = () => {
  return (
    <div>
      <Header />{" "}
      <Body>
        <Text>Claimed task</Text>
      </Body>{" "}
      <Footer />{" "}
    </div>
  );
};
export default Task;