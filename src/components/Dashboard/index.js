import React, { Component } from "react";
import "react-mosaic-component/react-mosaic-component.css";
import { Mosaic, MosaicWindow } from "react-mosaic-component";
import styled from "styled-components";

const ELEMENT_MAP = {
  a: "Left Window",
  b: "Top Right Window",
  c: "Bottom Right Window",
  new: "New"
};

const MosaicView = styled(Mosaic)`
  height: 500px;
`;

export default class extends Component {
  render() {
    return (
      <MosaicView
        className="mosaic-blueprint-theme"
        renderTile={(id, path) => (
          <MosaicWindow
            path={path}
            createNode={() => "new"}
            title={ELEMENT_MAP[id]}
          >
            <h1>{ELEMENT_MAP[id]}</h1>
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
