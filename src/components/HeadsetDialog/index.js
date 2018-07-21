import React from "react";
import { Dialog } from "@blueprintjs/core";
import ConnectionView from "./ConnectionView";

export default class extends React.PureComponent {
  render() {
    console.log(this.props.connectState);
    return (
      <Dialog
        icon="info-sign"
        onClose={this.props.onClose}
        title="Headset"
        autoFocus
        canEscapeKeyClose
        canOutsideClickClose
        enforceFocus
        usePortal
        isOpen={this.props.showDialog}
      >
        <ConnectionView {...this.props} />
      </Dialog>
    );
  }
}
