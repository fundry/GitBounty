import React from "react";
import { Header, Footer } from "../../components/";
import { Body, Text } from "../../styles/global";

const Service = () => {
  return (
    <div>
      <Header />

      <Body>
        <Text>
          {" "}
          This would be to explain what Gitbounty is all about including the
          legalilites{" "}
        </Text>
      </Body>

      <Footer />
    </div>
  );
};

export default Service;
