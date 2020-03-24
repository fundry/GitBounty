import React from "react";
import Flex from "styled-flex-component";
import { FiSearch, FiFilter } from "react-icons/fi";
import Link from "next/link";
import { inject, observer } from "mobx-react";

import { Filter } from "../../../components/modals/";

import {
  Body,
  Text,
  Hover,
  Items,
  Input,
  InputBox
} from "../../../styles/global";
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

const Issues = (props): JSX.Element => {
  const { authenticated } = props.AuthStore;
  const { openFilterModal, openGuidelineModal } = props.ModalStore;

  return (
    <Body blue white>
      <Filter />
      <Flex justifyBetween>
        <Flex>
          <Hover
            onClick={() => {
              openFilterModal();
            }}
            style={{ margin: "0.1em 0.5em 0.5em" }}
          >
            <FiFilter style={{ fontSize: "1.5em" }} />
          </Hover>

          <Text> 1,400,00 Issues </Text>
        </Flex>
        <InputBox>
          <Flex>
            <Input borderless placeholder="Search name or type" />
            <FiSearch style={{ fontSize: "1.7em", color: "#0e2f5a" }} />
          </Flex>
        </InputBox>
      </Flex>

      {data.map(({ id, orgname, Bug, Summary }) => {
        return (
          <IssueCard
            auth={authenticated}
            id={id}
            org={orgname}
            bug={Bug}
            summary={Summary}
            openModal={openGuidelineModal}
          />
        );
      })}
    </Body>
  );
};

export default inject("AuthStore", "ModalStore")(observer(Issues));
