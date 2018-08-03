import React, { Component } from "react";
import "react-mosaic-component/react-mosaic-component.css";
import {
  Mosaic,
  MosaicWindow,
  MosaicWindowContext
} from "react-mosaic-component";
import { Button } from "@blueprintjs/core";
import styled from "styled-components";
import TimeSeries from "../vizualizations/TimeSeries";
import FFT from "../vizualizations/FFT";
import BandPower from "../vizualizations/BandPower";

const ELEMENT_MAP = {
  a: {
    title: "BandPower",
    Component: BandPower
  },
  b: {
    title: "TimeSeries",
    Component: TimeSeries
  },
  c: {
    title: "FFT",
    Component: FFT
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
        renderTile={(id, path) => {
          const { title, Component } = ELEMENT_MAP[id];
          return (
            <MosaicWindow
              path={path}
              createNode={() => "new"}
              title={title}
              toolbarControls={[<RemoveButton key="remove" />]}
            >
              {<Component {...this.props} />}
            </MosaicWindow>
          );
        }}
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
