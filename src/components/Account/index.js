import React from "react";
import styled from "styled-components";
import IntegrationCard from "./IntegrationCard";

const Settings = styled.section`
  width: 400px;
`;

class Account extends React.Component {
  state = {};
  render() {
    return (
      <Settings>
        <IntegrationCard />
      </Settings>
    );
  }
}

export default Account;
