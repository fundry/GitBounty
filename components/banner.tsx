import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Router from "next/router";
import styled from "styled-components";
import media from "styled-media-query";
import Flex from "styled-flex-component";
import { BannerBody, Button, Text, BigTitle } from "../styles/global";
import Header from "./header";

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 30% 70%;
  ${media.lessThan("large")`
      display: flex;
      flex-direction: column;
      align-content: center;
`};
  ${media.lessThan("medium")`
      display: flex;
      flex-direction: column;
      align-content: center;
`};
  ${media.lessThan("small")`
      display: flex;
      flex-direction: column;
      align-content: center;
`};
`;

const Banner = (props: any): JSX.Element => {
  return (
    <div>
      <Header head={props.head} />
      <BannerBody>
        {" "}
        <Grid>
          <Flex justifyCenter>
            <img
              src="/Octocat.png"
              style={{
                width: "20rem",
                height: "auto"
              }}
            />{" "}
          </Flex>
          <div>
            <BigTitle banner white>
              Github Issues Brought Together{" "}
            </BigTitle>{" "}
            <Text center white>
              {" "}
              dvtgdgtglrm rer jgregkrgnrgreejwgnegetngkfners vkergnreverv er
              gjkegnekgvs{" "}
            </Text>{" "}
            <Flex justifyAround>
              <Button
                onClick={() => {
                  Router.push({
                    pathname: "/home/organizations"
                  });
                }}
                flex
                round
                white
              >
                Attempt an issue
                <IoIosArrowRoundForward
                  style={{ marginLeft: "10px", fontSize: "2em" }}
                />
              </Button>
              <Button
                style={{ border: "0px" }}
                onClick={() => {
                  Router.push({
                    pathname: "/home/organizations"
                  });
                }}
                flex
                borderless
                round
                white
                coloured
              >
                View Organizations
                <IoIosArrowRoundForward
                  style={{ marginLeft: "10px", fontSize: "2em" }}
                />
              </Button>{" "}
            </Flex>
          </div>{" "}
        </Grid>
      </BannerBody>
    </div>
  );
};

export default Banner;
