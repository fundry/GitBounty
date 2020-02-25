import React from 'react';

import { Text } from '../../../styles/global';
import IssueCard from './issueCard';

const Issues = (): JSX.Element => {
  return (
    <div>
      <Text> ISSUES </Text>

      <IssueCard />
    </div>
  );
};

export default Issues;
