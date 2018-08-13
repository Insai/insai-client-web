import React from "react";
import {
  Navbar,
  Classes,
  Alignment,
  Button,
  NavbarDivider,
  Icon
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Link } from "react-router-dom";
import RecordControls from "./RecordControls";
import PageNav from "./PageNav";

export default class extends React.PureComponent {
  render() {
    return (
      <Navbar className={Classes.DARK} fixedToTop>
        <Navbar.Group align={Alignment.LEFT}>
          <PageNav />
          <NavbarDivider />
          {this.props.location.pathname === "/" && (
            <Button icon="folder-open" text="recordings" minimal />
          )}
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <RecordControls {...this.props} />
          <NavbarDivider />
          <Link to="/account" className="bp3-button">
            <Icon icon={IconNames.USER} />
          </Link>
        </Navbar.Group>
      </Navbar>
    );
  }
}
