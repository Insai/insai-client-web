import React from "react";
import { Navbar, Classes, Alignment, Button, Intent } from "@blueprintjs/core";

export default class extends React.PureComponent {
  render() {
    const { connectState, openDialog } = this.props;
    return (
      <Navbar className={Classes.DARK}>
        <Navbar.Group align={Alignment.RIGHT}>
          {connectState && connectState.isConnected ? (
            <Button text="Disconnect" rightIcon="predictive-analysis" />
          ) : (
            <Button
              text="Connect"
              rightIcon="predictive-analysis"
              onClick={openDialog}
              intent={Intent.PRIMARY}
            />
          )}
        </Navbar.Group>
      </Navbar>
    );
  }
}
