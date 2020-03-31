import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Router from "next/router";

import { BannerBody, Button, Hover } from "../styles/global";
import Header from "./header";

const Banner = (props: any): JSX.Element => {
  return (
    <div>
      <Header head={props.head} />
      <BannerBody>
        <img
          src="/Github.png"
          style={{
            maxWidth: "15%"
          }}
        />
        <h1> Github Issues Brought Together </h1>{" "}
        <Button
          onClick={() => {
            Router.push({
              pathname: "/home/organizations"
            });
          }}
          flex
          round
        >
          View Organizations
          <IoIosArrowRoundForward
            style={{ marginLeft: "10px", fontSize: "2em" }}
          />
        </Button>
      </BannerBody>
    </div>
  );
};

export default Banner;
