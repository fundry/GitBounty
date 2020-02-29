import Home from "./home/home";

const Index = () => (
  <div>
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
