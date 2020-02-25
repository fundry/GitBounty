import React from 'react';

import { FooterBody, Column } from '../styles/global';

const Footer = (): JSX.Element => {
  return (
    <FooterBody>
      <h5> GitBounty </h5>{' '}
      <Column>
        <h6> PRODUCT </h6> <a> Resources </a>
      </Column>
      <Column>
        <h6> LEGAL </h6> <a> Resources </a>
      </Column>
      <Column>
        <h6> SERVICE </h6> <a> Resources </a>
      </Column>
    </FooterBody>
  );
};

export default Footer;
