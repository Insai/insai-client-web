import React from "react";
import { Dialog } from "@blueprintjs/core";
import ConnectionView from "./ConnectionView";
import LoadingView from "./LoadingView";
import RecordingView from "./RecordingView";

export default class extends React.PureComponent {
  render() {
    const { isConnected, isLoading } = this.props;
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
        {isLoading && !isConnected && <LoadingView />}
        {!isLoading && !isConnected && <ConnectionView {...this.props} />}
        {isConnected && <RecordingView {...this.props} />}
      </Dialog>
    );
  }
}
