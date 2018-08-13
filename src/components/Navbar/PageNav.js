import React from "react";
import {
  Menu,
  MenuDivider,
  Button,
  Position,
  Popover
} from "@blueprintjs/core";
import { NavLink } from "react-router-dom";

class PageNav extends React.PureComponent {
  render() {
    return (
      <div>
        <Popover
          content={
            <Menu>
              <NavLink to="/" className="bp3-menu-item" tabIndex="0">
                Brain
              </NavLink>
              {/* <NavLink to="/body" className="bp3-menu-item" tabIndex="1">
                Body
              </NavLink> */}
              <MenuDivider />
              <NavLink to="/knowledge" className="bp3-menu-item" tabIndex="2">
                Knowledge
              </NavLink>
            </Menu>
          }
          position={Position.BOTTOM}
        >
          <Button icon="menu" minimal />
        </Popover>
      </div>
    );
  }
}

export default PageNav;
