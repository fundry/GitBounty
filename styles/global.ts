import styled from "styled-components";

const Text: any = styled.p`
  font-size: ${props => (props.small ? "1.2rem" : "1.3rem")};
  text-align: ${props => (props.center ? "center" : null)};
`;

const Body: any = styled.div`
  padding: 1rem;
`;

const Title: any = styled.h4`
  font-size: ${props => (props.small ? "1.5rem " : null)};
  font-weight: ${props => (props.unbold ? "lighter" : null)};
  text-align: ${props => (props.center ? "center" : null)};
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
  padding: 0.7rem 3rem;
  border: 1px solid #000;
  outline: 0px;
  border-radius: ${props => (props.round ? "5rem" : null)};
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
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 3fr))`,
  gridGap
});

const Items = styled.div({
  ...autoGrid(200, 20),
  padding: "1em",
  marginLeft: "0.5em"
});

const IssueCard = styled.div`
  padding: 0.5em 1em;
  width: 17rem;
  box-shadow: 0px 3px 4px grey;
`;

const IssueItems = styled.div({
  ...autoGrid(200, 20),
  padding: "1em",
  marginLeft: "0.5em"
});

const Input = styled.input`
  padding: 0.5em 1.5em;
  border: ${props => (props.borderless ? "0px" : "1px solid #000")};
  border-radius: 5px;
  width: 30rem;
  outline: 0px;
`;

const InputBox = styled.div`
  padding: 0.5em 1em;
  border: 1px solid #000;
  border-radius: 5px;
  width: 30rem;
`;

const LoginBody = styled.div`
  margin: 10rem 2rem;
  #link {
    color: #0e2f5a;
  }
`;

export {
  Input,
  IssueCard,
  InputBox,
  IssueItems,
  Items,
  LoginBody,
  Title,
  Text,
  HeaderBody,
  Body,
  Button,
  FooterBody,
  Column,
  BannerBody
};
