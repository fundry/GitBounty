import React from "react";
import Flex from "styled-flex-component";
import { DiAngularSimple, DiPostgresql, DiJavascript } from "react-icons/di";
import { FiClock } from "react-icons/fi";

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
}

const IssueCard = ({ id, org, bug, summary }: CustomProps): JSX.Element => {
  return (
    <IssueItems>
      <Card id={id}>
        <Flex>
          <img
            alt="org"
            src="../../../assets/images/fb.png"
            style={{
              paddingRight: "10px",
              position: "absolute",
              bottom: "5ren"
            }}
          />

          <Title small center>
            {org}
          </Title>
        </Flex>
        <Title unbold small center>
          {bug}{" "}
        </Title>
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

        <Flex justifyCenter>
          <Button> Claim </Button>{" "}
        </Flex>
      </Card>{" "}
    </IssueItems>
  );
};

export default IssueCard;
