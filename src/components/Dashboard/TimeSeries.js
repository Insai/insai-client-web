import React from "react";

export default class extends React.PureComponent {
  render() {
    const { dataState } = this.props;
    return <div>{dataState.channelData}</div>;
  }
}
