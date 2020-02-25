import Head from 'next/head';
import React from 'react';

import { HeaderBody, Button } from '../styles/global';

const Header = (): JSX.Element => {
  return (
    <HeaderBody>
      <h4> Git-Bounty </h4>

      <div>
        <a href="/"> Organziations </a>
        <a href="/"> Bounties </a>

        <Button> Login </Button>
      </div>
    </HeaderBody>
  );
};

export default Header;
