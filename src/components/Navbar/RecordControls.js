import React from "react";
import { NavbarDivider, Button } from "@blueprintjs/core";
import styled from "styled-components";

const ControlsContainer = styled.div``;

export default class extends React.PureComponent {
  render() {
    return [
      <ControlsContainer key="controls-container">
        {this.props.isRecording ? (
          <Button icon="pause" onClick={this.props.stopHeadset} />
        ) : (
          <Button icon="play" onClick={this.props.startHeadset} />
        )}
        <Button
          text={this.props.recordState.title || "No title"}
          minimal
          onClick={this.props.openDialog}
        />
      </ControlsContainer>,
      <NavbarDivider key="controls-divider" />
    ];
  }
}
