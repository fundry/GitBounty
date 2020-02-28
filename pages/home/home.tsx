import React from 'react';
import Head from 'next/head';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import { Footer, Banner } from '../../components';
import { Body, Text } from '../../styles/global';

import Features from './features';
import Issues from './issues/issues';

// const octokit = new Octokit({
//   auth: '5109216f8601ecfeaa29bcb35cc22e6f1ecbd24b',
//   userAgent: '',
//   previews: [],
//   timeZone: '',
//   baseUrl: 'https://api.github.com',
//   log: {
//     error: console.error(),
//   },
// });

const T = gql`
  {
    repository(owner: "vickywane", name: "portfolio") {
      issues(last: 1) {
        edges {
          node {
            title
          }
        }
      }
    }
  }
`;

const Home = (props): JSX.Element => {
  const { loading, data, error } = useQuery(T);

  console.log(loading, error, data);

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
