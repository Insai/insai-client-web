import React from "react";
import { Spinner, Intent } from "@blueprintjs/core";
import styled from "styled-components";
import PocketList from "./PocketList";

const SpinnerContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class KnowledgeDashboard extends React.Component {
  state = {};
  componentWillMount() {
    this.props.getItems();
  }
  render() {
    if (this.props.isLoading) {
      return (
        <SpinnerContainer>
          <Spinner size={95} intent={Intent.PRIMARY} />
        </SpinnerContainer>
      );
    }
    const sortedItems = this.props.items.sort((a, b) => a.sort_id > b.sort_id);
    return <PocketList items={sortedItems} />;
  }
}

export default KnowledgeDashboard;
