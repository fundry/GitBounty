import Head from 'next/head';

import Home from './home/home';

const Index = () => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/.bundjs/bootstraple.min.js" />

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans"
        rel="stylesheet"
      />
    </Head>

    <Home />
    <style jsx>{`
      /* @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      } */
    `}</style>

    <style jsx global>{`
      html,
      body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
    `}</style>
  </div>
);

export default Index;
