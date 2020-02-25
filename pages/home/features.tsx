import React from 'react';

// import Feature from '../../assets/svg/feature.svg';
import { Items, Text, Title } from '../../styles/global';

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

//TODO: setup assets loader. <img src={Feature} alt="feature" style={{}} />

const Features = (): JSX.Element => {
  return (
    <div>
      <Items>
        {data.map(({ id, title, summary }) => {
          return (
            <div key={id}>
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
