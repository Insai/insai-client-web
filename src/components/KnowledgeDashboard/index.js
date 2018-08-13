import React from "react";
import { Card, Button, Spinner, Intent, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import styled from "styled-components";

const ListContainer = styled.section`
  height: 100%;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  & h5 {
    padding: 10px;
    width: 350px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const SpinnerContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class PocketList extends React.PureComponent {
  render() {
    return (
      <ListContainer>
        {this.props.items.map(item => (
          <Card key={item.item_id}>
            <CardContent>
              <Icon
                icon={
                  Number(item.is_article)
                    ? IconNames.ALIGN_LEFT
                    : IconNames.APPLICATION
                }
              />
              <h5>
                <a href={item.resolved_url}>
                  {item.resolved_title || item.resolved_url}
                </a>
              </h5>
            </CardContent>
          </Card>
        ))}
      </ListContainer>
    );
  }
}

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
    return <PocketList items={this.props.items} />;
  }
}

export default KnowledgeDashboard;
