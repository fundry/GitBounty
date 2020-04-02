import styled from "styled-components";
import media from "styled-media-query";

const Text: any = styled.p`
  font-size: ${props => (props.small ? "1.2rem" : "1.3rem")};
  text-align: ${props => (props.center ? "center" : null)};
  ${media.lessThan("small")`
  font-size: ${props => (props.small ? "1.05rem" : "1.2rem")};
  `};
  ${media.lessThan("medium")`
  font-size: ${props => (props.small ? "1.1rem" : "1.25rem")};
  `};
`;

const Body: any = styled.div`
  padding: 1rem;
  width: 100%;
  padding-left: ${props => (props.banner ? "12em" : "8em")};
  padding-right: ${props => (props.banner ? "12em" : "8em")};
  background: ${props => (props.blue ? "#0e2f5a" : null)};
  color: ${props => (props.white ? "#fff" : null)};
  ${media.lessThan("large")`
  padding-left: ${props => (props.pad ? "3em" : "1rem")};
  padding-right: ${props => (props.pad ? "3em" : "1rem")};
  `};
  ${media.lessThan("medium")`
   padding-left: ${props => (props.pad ? "1.5em" : "1rem")};
  padding-right: ${props => (props.pad ? "1.5em" : "1rem")};
  `};
  ${media.lessThan("small")`
   padding-left: ${props => (props.pad ? "0.4em" : "0.2rem")};
  padding-right: ${props => (props.pad ? "0.4em" : "0.2rem")};
  `};
`;

const Title: any = styled.h4`
  font-size: ${props => (props.small ? "1.5rem " : null)};
  font-weight: ${props => (props.unbold ? "normal" : null)};
  text-align: ${props => (props.center ? "center" : null)};
  ${media.lessThan("small")`
   font-size: ${props => (props.small ? "1.3rem " : "1.5rem")};
    font-weight: normal;
   `};
`;

const BannerBody: any = styled.nav`
  padding: 3rem;
  background: transparent;
  text-align: center;
  h1 {
    color: grey;
    margin: 0.5em;
  }
  a {
    padding-right: 10px;
  }
  ${media.lessThan("small")`
  padding : 4rem 2rem 2rem 2rem;
  h1 {
    padding-bottom: 20px;
    font-size: 1.8em;
    margin: 0.2em;
  }
  `};
  ${media.lessThan("medium")`
  padding : 4rem 2rem 2rem 2rem;
  h1 {
    padding-bottom: 20px;
    font-size: 2em;
    margin: 0.2em;
  }
  `};
`;

const HeaderBody: any = styled.nav`
  padding: 0.7rem 1rem;
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
  h5 {
    padding-top: 3px;
  }
  a {
    color: #0e2f5a;
    font-size: 1.05em;
    padding-right: 10px;
    padding-left: 5px;
    text-decoration: none;
  }
`;

const Button: any = styled.button`
  padding: ${props => (props.small ? "0.1rem 1.7rem" : "0.7rem 2.5rem")};
  border: ${props => (props.white ? "1px solid #fff" : "1px solid #000")};
  outline: 0px;
  border-radius: ${props => (props.round ? "5rem" : null)};
  background: transparent;
  color: ${props => (props.white ? " #fff" : "#000")};
  font-size: ${props => (props.small ? "1rem" : "1.2rem")};
  display: ${props => (props.flex ? "flex" : null)} ${media.lessThan("medium")`
  border-radius: ${props => (props.round ? "3rem" : null)};
  `};
  ${media.lessThan("large")`
  border-radius: ${props => (props.round ? "4rem" : null)};
  `};
  ${media.lessThan("small")`
  border-radius: ${props => (props.round ? "2rem" : null)};
  padding: ${props => (props.small ? "0.3rem 1.7rem" : "0.5rem 1.7rem")};
  font-size: 1em;
  `};
`;

const FooterBody: any = styled.footer`
  padding: 1rem;
  background: #f2f5ff;
  h5 {
    text-align: center;
    color: #0e2f5a;
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
    text-decoration: none;
    padding-right: 10px;
  }
  h6 {
    text-align: center;
    color: #0e2f5a;
  }
`;

const autoGrid = (minColumnWidth = 300, gridGap = 0) => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 3fr))`,
  gridGap
});

const IssueItems = styled.div({
  ...autoGrid(290, 30),
  padding: "0.7em",
  marginLeft: "0.3em",
  margin: "0.5em"
});

const Items = styled.div({
  ...autoGrid(170, 40),
  padding: "0.5em",
  margin: "0.5rem",
  marginLeft: "0.5em"
});

const IssueCard = styled.div`
  padding: 0.5em 1em;
  width: 27rem;
  box-shadow: 0px 2px 3px grey;
  background: #fff;
  color: #000;
  border-radius: 0.5rem;
  ${media.lessThan("medium")`
  width: 20rem;
  `};
  ${media.lessThan("small")`
  width: 17rem;
  `};
`;

const Input = styled.input`
  padding: 0.3em 1em;
  border: ${props => (props.borderless ? "0px" : "1px solid #000")};
  border-radius: ${props => (props.borderless ? null : "5px")};
  width: 30rem;
  outline: 0px;
  color: #0e2f5a;
  font-size: 1.1em;
  ${media.lessThan("small")`
  width: 21rem;
  padding: 0.1rem 0.5rem;
  font-size: 1rem;
  `};
`;

const InputBox = styled.div`
  padding: 0.5em 0.4em;
  border: 1px solid #000;
  border-radius: 5px;
  width: 30rem;
  background: #fff;
  ${media.lessThan("small")`
    width: 22rem;
  `};
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

const TaskContainer: any = styled.div`
  padding: 0.3rem;
  margin: 0.3rem;
`;

const Notification: any = styled.div`
  padding: 0.5rem 2rem;
  font-weight: 800px;
  background: ${props => (props.issue ? "#0e2f5a" : "transparent")};
  color: ${props => (props.issue ? "#fff" : "black")};
`;

const Bottom = styled.div`
  padding: 0.1rem 0.5rem;
  background: #0e2f5a;
  color: #fff;
  font-size: 0.9rem;
`;

export {
  Bottom,
  Notification,
  TaskContainer,
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
