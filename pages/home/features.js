import React from "react";
import Flex from "styled-flex-component";

import { Items, Text, Title, BigTitle } from "../../styles/global";

const data = [
  {
    id: 1,
    title: "Experience World Class Development",
    summary:
      "Exprience what it feels like to develop and deploy code at industry standard "
  },
  {
    id: 2,
    title: "Earn Cash Reward",
    summary:
      "Exprience what it feels like to develop and deploy code at industry standard "
  },
  {
    id: 3,
    title: "Something here sha",
    summary:
      "Exprience what it feels like to develop and deploy code at industry standard "
  },
  {
    id: 4,
    title: "Contribute to Open Source Software",
    summary:
      "Exprience what it feels like to develop and deploy code at industry standard "
  }
];

const Features = () => {
  return (
    <div>
      <div>
        <BigTitle small>
          Why Build <b>Gitbounty </b>?{" "}
        </BigTitle>

        <Text>
          Issues from organizations on <a href="/">Github </a> can be viewed
          through the issues column.{" "}
        </Text>
      </div>
      <br />
      <br />
      <Items>
        {data.map(({ id, title, summary }) => {
          return (
            <div key={id}>
              <Flex justifyCenter>
                <img src="/feature.svg" alt="feature illustration" style={{}} />
              </Flex>
              <br />
              <Title center>{title} </Title>
              <Text center small>
                {summary}
              </Text>
              <br />
            </div>
          );
        })}
      </Items>
    </div>
  );
};

export default Features;
