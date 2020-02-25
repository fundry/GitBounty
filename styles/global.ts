import styled from 'styled-components';

const Text: any = styled.p`
  font-size: 1.1rem;
  text-align: ${(props) => (props.center ? 'center' : null)};
`;

const Body: any = styled.div`padding: 1rem;`;

const Title: any = styled.h3`
  font-size: ${(props) => (props.small ? '2rem ' : null)};
  font-weight: ${(props) => (props.unbold ? 'lighter' : null)};
  text-align: ${(props) => (props.center ? 'center' : null)};
`;

const BannerBody: any = styled.nav`
  padding: 5rem;
  background: transparent;
  text-align: center;
  h2 {
    color: grey;
  }
  a {
    padding-right: 10px;
  }
`;

const HeaderBody: any = styled.nav`
  padding: 1rem;
  display: flex;
  background: transparent;
  box-shadow: 0px 3px 4px grey;
  justify-content: space-between;
  h4 {
    color: grey;
  }
  a {
    padding-right: 10px;
  }
`;

const Button: any = styled.button`
  padding: 0.5rem 2.5rem;
  border: 1px solid #000;
  outline: 0px;
  background: transparent;
  color: #000;
`;

const FooterBody: any = styled.nav`
  padding: 1rem;
  display: flex;
  background: transparent;
  justify-content: space-between;
  h5 {
    text-align: center;
    color: grey;
    padding-top: 2%;
  }
  a {
    padding-right: 10px;
  }
`;

const Column: any = styled.nav`
  padding: 0.4rem;
  display: column;
  background: transparent;
  a {
    padding-right: 10px;
  }
`;

const autoGrid = (minColumnWidth = 250, gridGap = 0) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 3fr))`,
  gridGap,
});

const Items = styled.div({
  ...autoGrid(200, 20),
  padding: '1em',
  marginLeft: '0.5em',
});

export {
  Items,
  Title,
  Text,
  HeaderBody,
  Body,
  Button,
  FooterBody,
  Column,
  BannerBody,
};
