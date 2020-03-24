import React from "react";
import { Modal } from "react-bootstrap";
import Flex from "styled-flex-component";
import { inject, observer } from "mobx-react";
import { FiX } from "react-icons/fi";

import { Title, Text, Button, Body, Hover } from "../../styles/global";

const Guidlines = (props): JSX.Element => {
  const { showGuideline, closeGuidelineModal } = props.ModalStore;

  return (
    <Modal
      show={showGuideline}
      onHide={() => {
        closeGuidelineModal();
      }}
      size="lg"
      style={{
        padding: "1em",
        marginTop: "3rem"
      }}
    >
      <Body>
        <Flex justifyBetween>
          <Title> Guidelines </Title>
          <Hover right>
            <FiX style={{ fontSize: "2em" }} />
          </Hover>
        </Flex>
        <hr />

        <Text>Guideline modal</Text>

        <Flex justifyCenter>
          <Button
            onClick={() => {
              closeGuidelineModal();
            }}
          >
            Yes, I understand
          </Button>
        </Flex>
      </Body>
    </Modal>
  );
};

export default inject("ModalStore")(observer(Guidlines));
