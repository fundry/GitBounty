import React, { useState } from "react";
import Flex from "styled-flex-component";
import { FiMoreVertical, FiX } from "react-icons/fi";
import Link from "next/link";

import {
  Title,
  Hover,
  TaskContainer,
  Body,
  Text,
  Notification
} from "../../../styles/global";

const Data = [
  {
    id: 1,
    title: "Fix Broken Images Source",
    time: "5 days left"
  },
  {
    id: 2,
    title: "Fix Circle CI build Failure",
    time: "3 days left"
  },
  {
    id: 3,
    title: "Fix Brand Page Responsiveness",
    time: "1 days left"
  }
];

const List = props => {
  const [Notify, setNotify] = useState(false);
  return (
    <div>
      {!Notify ? (
        <Notification>
          <Flex justifyBetween>
            <Text small>
              It is advisable not to work on multiple issues at a once, except
              long term issues.
            </Text>

            <Hover
              onClick={() => {
                setNotify(true);
              }}
            >
              <FiX style={{ fontSize: "1.7rem" }} />
            </Hover>
          </Flex>
        </Notification>
      ) : null}
      <Body>
        <TaskContainer>
          {Data.map(({ id, title, time }) => {
            return (
              <div>
                <Flex justifyBetween key={id}>
                  <img src="/fb.png" alt="org" style={{ maxWidth: "6%" }} />

                  <Link href="/app/tasks/[task]" as={`/app/tasks/${id}`}>
                    <a style={{ textDecoration: "none" }}>
                      <Title unbold small>
                        {title}
                      </Title>
                    </a>
                  </Link>

                  <Flex>
                    <Text unbold small>
                      {time}
                    </Text>

                    <Hover style={{ paddingLeft: "10px" }}>
                      <FiMoreVertical style={{ fontSize: "1.5em" }} />
                    </Hover>
                  </Flex>
                </Flex>
                <br />
              </div>
            );
          })}
        </TaskContainer>
      </Body>
    </div>
  );
};
export default List;
