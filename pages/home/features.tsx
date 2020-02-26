import React from 'react';

import { Items, Text, Title } from '../../styles/global';

const Feature = require('../../assets/svg/feature.svg');

const data = [
  {
    id: 1,
    title: 'Experience World Class Development',
    summary:
      'Exprience what it feels like to develop and deploy code at industry standard ',
  },
  {
    id: 2,
    title: 'Earn Cash Reward',
    summary:
      'Exprience what it feels like to develop and deploy code at industry standard ',
  },
  {
    id: 3,
    title: 'Something here sha',
    summary:
      'Exprience what it feels like to develop and deploy code at industry standard ',
  },
  {
    id: 4,
    title: 'Contribute to Open Source Software',
    summary:
      'Exprience what it feels like to develop and deploy code at industry standard ',
  },
];

const Features = (): JSX.Element => {
  return (
    <div>
      <Items>
        {data.map(({ id, title, summary }) => {
          return (
            <div key={id}>
              <img src={Feature} alt="feature" style={{}} />

              <Title center> {title} </Title>
              <Text center> {summary} </Text>
            </div>
          );
        })}
      </Items>
    </div>
  );
};

export default Features;
