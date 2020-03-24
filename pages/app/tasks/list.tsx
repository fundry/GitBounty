import React from "react";

import { Header, Footer } from "../../../components/";
import { Body, Text } from "../../../styles/global";

const List = props => {
  return (
    <div>
      <Header />

      <Body>
        <p> List of claimed tasks </p>
      </Body>

      <Footer />
    </div>
  );
};
export default List;
