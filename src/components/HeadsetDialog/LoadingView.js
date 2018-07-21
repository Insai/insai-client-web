import React from "react";
import { Spinner, Classes } from "@blueprintjs/core";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default () => (
  <Container className={Classes.DIALOG_BODY}>
    <Spinner />
  </Container>
);
