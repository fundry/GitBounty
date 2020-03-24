import styled from "styled-components";
import media from "styled-media-query";

const Text: any = styled.p`
  font-size: ${props => (props.small ? "1.2rem" : "1.3rem")};
  text-align: ${props => (props.center ? "center" : null)};
`;

const Body: any = styled.div`
  padding: 1rem;
  background: ${props => (props.blue ? "#0e2f5a" : null)};
  color: ${props => (props.white ? "#fff" : null)};
`;

const Title: any = styled.h4`
  font-size: ${props => (props.small ? "1.5rem " : null)};
  font-weight: ${props => (props.unbold ? "normal" : null)};
  text-align: ${props => (props.center ? "center" : null)};
`;

const BannerBody: any = styled.nav`
  padding: 5rem;
  background: transparent;
  text-align: center;
  h1 {
    color: grey;
    margin: 0.5em;
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
    color: #0e2f5a;
    &:hover {
      color: grey;
      cursor: pointer;
    }
  }
  a {
    font-size: 1.1em;
    padding-right: 10px;
  }
`;

const Button: any = styled.button`
  padding: ${props => (props.small ? "0.3rem 1.7rem" : "0.7rem 2.5rem")};
  border: 1px solid #000;
  outline: 0px;
  border-radius: ${props => (props.round ? "5rem" : null)};
  background: transparent;
  color: #000;
  font-size: 1.2em;
  display: ${props => (props.flex ? "flex" : null)} ${media.lessThan("medium")`
  border-radius: ${props => (props.round ? "4rem" : null)};
  `};
  ${media.lessThan("large")`
  border-radius: ${props => (props.round ? "4rem" : null)};
  `};
  ${media.lessThan("small")`
  border-radius: ${props => (props.round ? "4rem" : null)};
  `};
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
  width: 27rem;
  box-shadow: 0px 2px 3px grey;
  background: #fff;
  color: #000;
  border-radius: 0.5rem;
`;

const IssueItems = styled.div({
  ...autoGrid(200, 20),
  padding: "1em",
  marginLeft: "0.5em"
});

const Input = styled.input`
  padding: 0.3em 1em;
  border: ${props => (props.borderless ? "0px" : "1px solid #000")};
  border-radius: 5px;
  width: 30rem;
  outline: 0px;
  color: #0e2f5a;
  font-size: 1.1em;
`;

const InputBox = styled.div`
  padding: 0.5em 0.4em;
  border: 1px solid #000;
  border-radius: 5px;
  width: 30rem;
  background: #fff;
`;

const LoginBody = styled.div`
  margin: 10rem 2rem;
  #link {
    color: #0e2f5a;
  }
`;

const Hover = styled.div`
  cursor: pointer;
  text-align: ${props => (props.right ? "right" : null)};
`;

const Contain = styled.div`
  padding: 0.5em;
`;

export {
  Contain,
  Hover,
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
