import React from "react";

import { BannerBody, Button } from "../styles/global";
import Header from "./header";

const Banner = (props: any): JSX.Element => {
  return (
    <div>
      <Header head={props.head} />
      <BannerBody>
        <h2> Github issues brought together </h2>{" "}
        <Button round> View Organizations </Button>
      </BannerBody>
    </div>
  );
};

export default Banner;
