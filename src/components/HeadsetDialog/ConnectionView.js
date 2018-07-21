import React from "react";

import {
  FormGroup,
  InputGroup,
  Switch,
  Intent,
  Tooltip,
  Checkbox,
  Button,
  Classes,
  TagInput
} from "@blueprintjs/core";

export default class extends React.PureComponent {
  render() {
    const { connectState, recordState } = this.props;
    console.log(connectState);
    return [
      <div className={Classes.DIALOG_BODY} key="connection-body">
        <FormGroup label="Configuration">
          <Switch
            label="Simulate"
            checked={connectState.simulate}
            onChange={() => this.props.setSimulate(!connectState.simulate)}
          />
        </FormGroup>
        <FormGroup label="Recording">
          <InputGroup
            placeholder="Name your recordings"
            value={recordState.title}
            onChange={event => this.props.changeTitle(event.target.value)}
          />
          <TagInput
            label="Tags"
            leftIcon="tag"
            onChange={values => this.props.changeTags(values)}
            values={recordState.tags}
          />
          <Checkbox
            label="Cloud"
            onChange={() => this.props.setCloud(!recordState.cloud)}
            checked={recordState.cloud}
          />
        </FormGroup>
      </div>,
      <div className={Classes.DIALOG_FOOTER} key="connection-footer">
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Tooltip content="Cancel setup">
            <Button onClick={this.props.onClose} text="Cancel" />
          </Tooltip>
          <Tooltip content="Connect to your headset">
            <Button
              onClick={this.props.onClose}
              text="Next"
              intent={Intent.SUCCESS}
            />
          </Tooltip>
        </div>
      </div>
    ];
  }
}
