import React from "react";
import {
  Navbar,
  Classes,
  Alignment,
  Button,
  Intent,
  NavbarDivider
} from "@blueprintjs/core";
import RecordControls from "./RecordControls";
import PageNav from "./PageNav";

export default class extends React.PureComponent {
  render() {
    return (
      <Navbar className={Classes.DARK}>
        <Navbar.Group align={Alignment.LEFT}>
          <PageNav />
          <NavbarDivider />
          {this.props.location.pathname === "/" && (
            <Button icon="folder-open" text="recordings" minimal />
          )}
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          {this.props.isConnected && <RecordControls {...this.props} />}
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
        </Navbar.Group>
      </Navbar>
    );
  }
}
