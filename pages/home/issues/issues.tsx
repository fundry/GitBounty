import React, { useEffect, useState } from "react";
import Flex from "styled-flex-component";
import { FiSearch, FiFilter, FiX } from "react-icons/fi";
import Link from "next/link";
import { inject, observer } from "mobx-react";

import { Filter } from "../../../components/modals/";
// import useWindowWidth from "../../../styles/hook_style";
import {
  Body,
  Text,
  Hover,
  Items,
  Input,
  IssueItems,
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
  },
  {
    id: 3,
    orgname: "Fundry",
    Bug: "Fix Broken Image Link",
    Summary: "Broken links are vey easy tomfind. We hae aolot of them witi pur "
  },
  {
    id: 4,
    orgname: "Fundry",
    Bug: "Fix Broken Image Link",
    Summary: "Broken links are vey easy tomfind. We hae aolot of them witi pur "
  }
];

const Issues = (props): JSX.Element => {
  const { authenticated } = props.AuthStore;
  const { openFilterModal, openGuidelineModal } = props.ModalStore;

  const [Search, setSearch] = useState(false);

  const [Width, setWidth] = useState(700);

  // setTimeout(function() {
  //   setWidth(window.innerWidth);
  // }, 1000);
  //
  // const handleResize = value => {
  //   setWidth(value);
  // };
  //
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize.bind(this));
  //   return () => window.removeEventListener("resize", handleResize.bind(this));
  // }, []);

  return (
    <Body blue white>
      <Filter />
      {Width > 700 ? (
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

            <Text small> 1,400,00 Issues </Text>
          </Flex>

          <InputBox>
            <Flex>
              <Input borderless placeholder="Search by name or type" />
              <FiSearch style={{ fontSize: "1.7em", color: "#0e2f5a" }} />
            </Flex>
          </InputBox>
        </Flex>
      ) : (
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
          </Flex>

          {Search ? (
            <InputBox>
              <Flex>
                <Input borderless placeholder="Search issue" />

                <Hover
                  onClick={() => {
                    setSearch(false);
                  }}
                >
                  <FiX style={{ fontSize: "1.5em", color: "#0e2f5a" }} />
                </Hover>
              </Flex>
            </InputBox>
          ) : (
            <Hover
              onClick={() => {
                setSearch(true);
              }}
            >
              <FiSearch style={{ fontSize: "1.5em", color: "#fff" }} />
            </Hover>
          )}
        </Flex>
      )}

      <IssueItems>
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
      </IssueItems>
    </Body>
  );
};

export default inject("AuthStore", "ModalStore")(observer(Issues));
