import React from 'react';
import Head from 'next/head';
import { Footer, Header } from '../../components';

const Home = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>GitBounty | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <p> Home </p>

      <Footer />
    </div>
  );
};

export default Home;
