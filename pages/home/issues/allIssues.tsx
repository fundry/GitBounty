import React from "react";

import { Text, Body } from "../../../styles/global";
import IssueCard from "./issueCard";
import Wrapper from "../../wrapper";
import Header from "../../../components/header";

const AllIssues = (): JSX.Element => {
  return (
    <Wrapper>
      <Header />

      <Body>
        <Text> AllIssues </Text>

        <IssueCard id={1} org="" bug="" summary="" />
      </Body>
    </Wrapper>
  );
};

export default AllIssues;
