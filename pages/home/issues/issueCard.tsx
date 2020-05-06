import React from "react";
import Flex from "styled-flex-component";
import {
  DiAngularSimple,
  DiPostgresql,
  DiJavascript,
  DiGithub
} from "react-icons/di";
import { FiClock } from "react-icons/fi";
import Link from "next/link";

import {
  Text,
  IssueCard as Card,
  Title,
  IssueItems,
  Button
} from "../../../styles/global";

interface CustomProps {
  id: number;
  org: string;
  bug: string;
  summary: string;
  auth: boolean;
  openModal: any;
}

const IssueCard = ({
  id,
  org,
  bug,
  summary,
  auth,
  openModal
}: CustomProps): JSX.Element => {
  return (
    <Card id={id}>
      <Flex justifyBetween>
        <Flex>
          <img
            alt="org"
            src="/fb.png"
            style={{
              maxWidth: "17%",
              paddingRight: "10px"
            }}
          />
          <Title small center>
            {org}
          </Title>
        </Flex>

        <DiGithub style={{ fontSize: "2em", color: "grey" }} />
      </Flex>

      <Link href="/home/issues/[issue]" as={`/home/issues/${id}`}>
        <a style={{ textDecoration: "none" }}>
          <Title unbold small center>
            {bug}{" "}
          </Title>{" "}
        </a>
      </Link>

      <Text small>{summary}</Text>
      <hr />
      <Flex justifyBetween>
        <p> EASY </p>

        <Flex>
          <FiClock style={{ fontSize: "1.3em" }} />
          <p style={{ marginLeft: "7px" }}> 5 days </p>
        </Flex>
      </Flex>
      <div>
        <DiAngularSimple style={{ fontSize: "2rem" }} />{" "}
        <DiJavascript style={{ fontSize: "2rem" }} />{" "}
        <DiPostgresql style={{ fontSize: "2rem" }} />
      </div>

      {auth ? (
        <Flex justifyCenter>
          <Button onClick={() => openModal()}> Claim </Button>{" "}
        </Flex>
      ) : null}
    </Card>
  );
};

export default IssueCard;
