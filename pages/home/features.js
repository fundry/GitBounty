import React from "react";
import Flex from "styled-flex-component";

import { Items, Text, Title } from "../../styles/global";
import useWindowWidth from "../../styles/hook_style";

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
  const hooks = useWindowWidth();

  return (
    <div>
      {hooks > 900 ? (
        <Flex justifyBetween>
          {data.map(({ id, title, summary }) => {
            return (
              <div key={id}>
                <Flex justifyCenter>
                  <img
                    src="/feature.svg"
                    alt="feature illustration"
                    style={{
                      maxWidth: "45%"
                    }}
                  />
                </Flex>

                <Title center small>
                  {title}{" "}
                </Title>
                <Text center small>
                  {summary}
                </Text>
              </div>
            );
          })}
        </Flex>
      ) : (
        <Items>
          {data.map(({ id, title, summary }) => {
            return (
              <div key={id}>
                <Flex justifyCenter>
                  <img
                    src="/feature.svg"
                    alt="feature illustration"
                    style={{
                      maxWidth: "45%"
                    }}
                  />
                </Flex>

                <Title center small>
                  {title}{" "}
                </Title>
                <Text center small>
                  {summary}
                </Text>
              </div>
            );
          })}
        </Items>
      )}
    </div>
  );
};

export default Features;
