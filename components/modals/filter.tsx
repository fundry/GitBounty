import React from "react";
import { Modal } from "react-bootstrap";
import Flex from "styled-flex-component";
import { inject, observer } from "mobx-react";

import { Text } from "../../styles/global";

const Filter = (props): JSX.Element => {
  const { filterModal, closeFilterModal } = props.ModalStore;

  return (
    <Modal
      show={filterModal}
      onHide={() => {
        closeFilterModal();
      }}
    >
      <Text>Filter modal</Text>
    </Modal>
  );
};

export default inject("ModalStore")(observer(Filter));
