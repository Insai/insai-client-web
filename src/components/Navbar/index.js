import React from "react";
import { Navbar, Classes, Alignment, Button, Intent } from "@blueprintjs/core";

export default class extends React.PureComponent {
  render() {
    return (
      <Navbar className={Classes.DARK}>
        <Navbar.Group align={Alignment.RIGHT}>
          {this.props.isConnected ? (
            <Button
              text="Disconnect"
              rightIcon="predictive-analysis"
              intent={Intent.DANGER}
              onClick={this.props.disconnectHeadset}
              loading={this.props.isLoading}
            />
          ) : (
            <Button
              text="Connect"
              rightIcon="predictive-analysis"
              onClick={this.props.openDialog}
              intent={Intent.PRIMARY}
            />
          )}
        </Navbar.Group>
      </Navbar>
    );
  }
}
