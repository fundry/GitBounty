import React from "react";
import Flex from "styled-flex-component";
import { FiSearch } from "react-icons/fi";

import { Body, Text, Items, Input, InputBox } from "../../../styles/global";
import IssueCard from "./issueCard";

const data = [
  {
    id: 1,
    orgname: "Remotify",
    Bug: "Fix Broken Link",
    Summary: "Broken links are vey easy tomfind. We hae aolot of them witi pur "
  },
  {
    id: 2,
    orgname: "Fundry",
    Bug: "Fix Broken Image Link",
    Summary: "Broken links are vey easy tomfind. We hae aolot of them witi pur "
  }
];

const Issues = (): JSX.Element => {
  return (
    <Body blue white>
      <Flex justifyBetween>
        <Text> 1,400,00 Available Issues </Text>

        <InputBox>
          <Flex>
            <Input borderless placeholder="Search name or type" />
            <FiSearch style={{ fontSize: "1.7em", color: "#0e2f5a" }} />
          </Flex>
        </InputBox>
      </Flex>

      {data.map(({ id, orgname, Bug, Summary }) => {
        return <IssueCard id={id} org={orgname} bug={Bug} summary={Summary} />;
      })}
    </Body>
  );
};

export default Issues;
