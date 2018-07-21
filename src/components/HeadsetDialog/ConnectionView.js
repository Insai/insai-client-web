import React from "react";

import {
  FormGroup,
  Switch,
  Intent,
  Tooltip,
  Button,
  Classes
} from "@blueprintjs/core";

export default class extends React.PureComponent {
  render() {
    const { connectState } = this.props;
    return [
      <div className={Classes.DIALOG_BODY} key="connection-body">
        <FormGroup label="Configuration">
          <Switch
            label="Simulate"
            checked={connectState.simulate}
            onChange={() => this.props.setSimulate(!connectState.simulate)}
          />
        </FormGroup>
      </div>,
      <div className={Classes.DIALOG_FOOTER} key="connection-footer">
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Tooltip content="Save configuration">
            <Button onClick={this.props.onClose} text="Save" />
          </Tooltip>
          <Tooltip content="Connect to your headset">
            <Button
              onClick={() => this.props.connectHeadset(connectState)}
              text="Next"
              intent={Intent.SUCCESS}
            />
          </Tooltip>
        </div>
      </div>
    ];
  }
}
