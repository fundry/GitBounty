import React from "react";
import Flex from "styled-flex-component";

import { Items, Text, Title } from "../../styles/global";
import Feature from "../../assets/svg/feature.svg";

console.log(Feature);
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
      <Items>
        {data.map(({ id, title, summary }) => {
          return (
            <div key={id}>
              <Flex justifyCenter>
                <img
                  src="../../assets/svg/feature.svg"
                  alt="feature"
                  style={{}}
                />
              </Flex>

              <Title center> {title} </Title>
              <Text center small>
                {summary}{" "}
              </Text>
            </div>
          );
        })}
      </Items>
    </div>
  );
};

export default Features;