import React from "react";
import Flex from "styled-flex-component";

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
            alt="organisation"
            src={"../../../assets/svg/feature.svg"}
            style={{ paddingRight: "10px" }}
          />

          <Title unbold small center>
            {org}
          </Title>
        </Flex>
        <Title small center>
          {bug}{" "}
        </Title>
        <Text small>{summary}</Text>

        <Flex justifyCenter>
          <Button> Claim </Button>{" "}
        </Flex>
      </Card>{" "}
    </IssueItems>
  );
};

export default IssueCard;
