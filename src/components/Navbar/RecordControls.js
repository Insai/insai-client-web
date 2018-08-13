import React from "react";
import { NavbarDivider, Button, Intent } from "@blueprintjs/core";
import styled from "styled-components";

const ControlsContainer = styled.div`
  display: flex;
`;

export class RecordingControls extends React.PureComponent {
  render() {
    return [
      <div key="controls-container">
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
      </div>,
      <NavbarDivider key="controls-divider" />
    ];
  }
}

export default class extends React.PureComponent {
  render() {
    return (
      <ControlsContainer>
        {this.props.isConnected && <RecordingControls {...this.props} />}
        {this.props.isConnected ? (
          <Button
            text="Disconnect"
            rightIcon="predictive-analysis"
            intent={Intent.DANGER}
            onClick={this.props.disconnectHeadset}
            // loading={this.props.isLoading}
          />
        ) : (
          <Button
            text="Connect"
            rightIcon="predictive-analysis"
            onClick={this.props.openDialog}
            intent={Intent.PRIMARY}
          />
        )}
      </ControlsContainer>
    );
  }
}
