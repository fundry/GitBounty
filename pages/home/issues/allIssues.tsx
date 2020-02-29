import React from "react";

import { Text } from "../../../styles/global";
import IssueCard from "./issueCard";

const AllIssues = (): JSX.Element => {
  return (
    <div>
      <Text> AllIssues </Text>

      <IssueCard id={1} org="" bug="" summary="" />
    </div>
  );
};

export default AllIssues;
