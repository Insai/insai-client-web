import React from "react";
import {
  Button,
  Classes,
  Dialog,
  H5,
  Intent,
  Tooltip
} from "@blueprintjs/core";

export default class extends React.PureComponent {
  render() {
    const { onClose, showDialog } = this.props;
    console.log(this.props);
    return (
      <Dialog
        icon="info-sign"
        onClose={onClose}
        title="Connect Headset"
        autoFocus
        canEscapeKeyClose
        canOutsideClickClose
        enforceFocus
        usePortal
        isOpen={showDialog}
      >
        <div className={Classes.DIALOG_BODY}>BODY</div>
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Tooltip content="Cancel setup">
              <Button onClick={onClose} text="Cancel" />
            </Tooltip>
            <Tooltip content="Connect to your headset">
              <Button
                onClick={onClose}
                text="Connect"
                intent={Intent.SUCCESS}
              />
            </Tooltip>
          </div>
        </div>
      </Dialog>
    );
  }
}
