import React, { useEffect, useState } from "react";
import Flex from "styled-flex-component";
import { FiSearch, FiX } from "react-icons/fi";
import { inject, observer } from "mobx-react";
import styled from "styled-components";

import { Filter } from "../../../components/modals/";
import useWindowWidth from "../../../styles/hook_style";
import {
  Body,
  Text,
  Hover,
  Input,
  IssueItems,
  InputBox,
  FilterContain,
  FilterIcon,
  Title
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

const IssueBody = styled.div`
  padding: 0.2rem 0.5rem;
`;

const Issue = props => {
  return (
    <IssueBody>
      <Flex justifyBetween>
        <Text> {props.org} </Text>
        <Title small> {props.bug} </Title>
        <Text>12-12-12 </Text>
      </Flex>
    </IssueBody>
  );
};

const Issues = (props): JSX.Element => {
  const { authenticated } = props.AuthStore;
  const { openFilterModal, openGuidelineModal } = props.ModalStore;

  const [Search, setSearch] = useState(false);

  const hooks = useWindowWidth();
  return (
    <Body blue white>
      <Filter />
      {hooks > 800 ? (
        <Flex justifyBetween>
          {hooks > 700 ? (
            <Flex>
              <FilterContain>
                <FilterIcon />
                <div aria-label="submenu">
                  <p> Filter by </p>
                  <ul>
                    <li>
                      <a href="#">Sub-1</a>
                    </li>
                    <li>
                      <a href="#">Sub-2</a>
                    </li>
                    <li>
                      <a href="#">Sub-3</a>
                    </li>
                  </ul>
                </div>
              </FilterContain>

              <Text small> 1,400,00 Issues </Text>
            </Flex>
          ) : (
            <Hover
              onClick={() => {
                openFilterModal();
              }}
              style={{ margin: "0.1em 0.5em 0.5em" }}
            >
              <FilterIcon />
            </Hover>
          )}

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
              <FilterIcon />
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

      <br />
      {hooks > 1000 ? (
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
      ) : (
        <div>
          {data.map(({ id, orgname, Bug, Summary }) => {
            return (
              <div>
                <Issue
                  auth={authenticated}
                  id={id}
                  org={orgname}
                  bug={Bug}
                  summary={Summary}
                  openModal={openGuidelineModal}
                />
                <br />
              </div>
            );
          })}
        </div>
      )}
    </Body>
  );
};

export default inject("AuthStore", "ModalStore")(observer(Issues));
