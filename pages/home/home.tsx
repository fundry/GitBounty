import React from 'react';
import Head from 'next/head';
import { Footer, Banner } from '../../components';
import { Body, Text } from '../../styles/global';

import Features from './features';
import Issues from './issues/issues';

const Home = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>GitBounty | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />

      <Body>
        <Text center>
          Home Home Home Home Home Home Home Home Home Home Home Home Home Home
          Home Home Home Home Home Home Home Home Home Home Home Home Home Home
          Home Home{' '}
        </Text>

        <Features />
        <Issues />
      </Body>

      <Footer />
    </div>
  );
};

export default Home;
