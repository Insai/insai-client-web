import React, { Component } from "react";
import "react-mosaic-component/react-mosaic-component.css";
import {
  Mosaic,
  MosaicWindow,
  MosaicWindowContext
} from "react-mosaic-component";
import { Button } from "@blueprintjs/core";
import styled from "styled-components";
import TimeSeries from "./TimeSeries";
import FFT from "./FFT";
import BandPower from "./BandPower";

const ELEMENT_MAP = {
  a: {
    title: "TimeSeries",
    component: <TimeSeries />
  },
  b: {
    title: "FFT",
    component: <FFT />
  },
  c: {
    title: "BandPower",
    component: <BandPower />
  },
  new: "New"
};

const MosaicView = styled(Mosaic)`
  height: 800px;
`;

class RemoveButton extends React.PureComponent {
  static contextTypes = MosaicWindowContext;
  remove = () =>
    this.context.mosaicActions.remove(
      this.context.mosaicWindowActions.getPath()
    );

  render() {
    return <Button icon="cross" onClick={this.remove} minimal />;
  }
}
export default class extends Component {
  render() {
    return (
      <MosaicView
        className="mosaic-blueprint-theme"
        renderTile={(id, path) => (
          <MosaicWindow
            path={path}
            createNode={() => "new"}
            title={ELEMENT_MAP[id].title}
            toolbarControls={[<RemoveButton key="remove" />]}
          >
            {ELEMENT_MAP[id].component}
          </MosaicWindow>
        )}
        initialValue={{
          direction: "row",
          first: "a",
          second: {
            direction: "column",
            first: "b",
            second: "c"
          },
          splitPercentage: 40
        }}
      />
    );
  }
}
