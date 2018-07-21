import React from "react";
import {
  FormGroup,
  InputGroup,
  Checkbox,
  TagInput,
  Classes,
  Intent,
  Button,
  Tooltip
} from "@blueprintjs/core";
import styled from "styled-components";

const Calibration = styled.section`
  height: 250px;
  background: #dadada;
  border-radius: 1em;
  margin: 5px;
`;

export default class extends React.PureComponent {
  render() {
    const { recordState, isLoading } = this.props;
    return [
      <div className={Classes.DIALOG_BODY} key="recording-body">
        <Calibration />
        <FormGroup label="Recording">
          <InputGroup
            placeholder="Name new recording"
            value={recordState.title}
            onChange={event => this.props.changeTitle(event.target.value)}
          />
          <TagInput
            placeholder="Add some tags to recording"
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
      <div className={Classes.DIALOG_FOOTER} key="recording-footer">
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Tooltip content="Cancel setup">
            <Button onClick={this.props.onClose} text="Cancel" />
          </Tooltip>
          <Tooltip content="Start recording">
            <Button
              onClick={() => this.props.startHeadset()}
              text="Start"
              intent={Intent.SUCCESS}
              loading={isLoading}
            />
          </Tooltip>
        </div>
      </div>
    ];
  }
}
