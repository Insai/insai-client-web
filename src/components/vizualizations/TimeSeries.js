import React from "react";
import * as d3 from "d3";
import dataSample from "./cyton-sample.data";

const styles = {
  height: 700,
  width: 600,
  margin: {
    left: 50,
    right: 10,
    top: 10,
    bottom: 50
  }
};
// number of channels on Cyton board
const CHANNELS = 16;

// Graph constants
const MIN_X = -2.0,
  MAX_X = 2.0,
  X_SCALE = 10000,
  N_SAMPLES = 10;

export default class extends React.Component {
  state = {
    data: [],
    ch1: null,
    ch2: null,
    lineGenerator: d3.line(),
    xScale: d3
      .scaleTime()
      .range([styles.margin.left, styles.width - styles.margin.right]),
    yScale: d3
      .scaleLinear()
      .range([styles.height - styles.margin.bottom, styles.margin.top])
  };
  xAxis = d3.axisBottom().scale(this.state.xScale);
  yAxis = d3.axisLeft().scale(this.state.yScale);

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.dataState.channelData.length > 0) return null; // data hasn't been loaded yet
    const { dataState } = nextProps;
    const { lineGenerator, xScale, yScale, data } = prevState;

    // data has changed -> recalculate scale domains
    const newData = [
      ...data,
      { ...dataState, timestamp: new Date().getTime() }
    ];
    const timeDomain = d3.extent(newData, d => new Date(+d.timestamp));
    const recordMax = d3.max(newData, d => d3.max(d.channelData));
    const recordMin = d3.min(newData, d => d3.min(d.channelData));
    xScale.domain(timeDomain);
    yScale.domain([recordMin, recordMax]);

    // calculate lines for different channels
    lineGenerator.x(d => xScale(d.timestamp));
    lineGenerator.y(d => yScale(d.channelData[0]));
    const ch1 = lineGenerator(newData);

    lineGenerator.y(d => yScale(d.channelData[1]));
    const ch2 = lineGenerator(newData);

    lineGenerator.y(d => yScale(d.channelData[2]));
    const ch3 = lineGenerator(newData);

    return {
      ch1,
      ch2,
      ch3,
      data: newData.slice(newData.length - 100, newData.length)
    };
  }
  componentDidUpdate() {
    // TODO: data is coming in to fast => Timeout
    setTimeout(() => {
      d3.select(this.refs.xAxis).call(this.xAxis);
      d3.select(this.refs.yAxis).call(this.yAxis);
    }, 1000);
  }
  componentDidMount() {
    d3.select(this.refs.xAxis).call(this.xAxis);
    d3.select(this.refs.yAxis).call(this.yAxis);
  }
  render() {
    return (
      <svg width={styles.width} height={styles.height}>
        <path d={this.state.ch1} fill="none" stroke="#add" strokeWidth="2" />
        <path d={this.state.ch2} fill="none" stroke="#ada" strokeWidth="2" />
        <path d={this.state.ch3} fill="none" stroke="#dad" strokeWidth="2" />
        <g>
          <g
            ref="xAxis"
            transform={`translate(0, ${styles.height - styles.margin.bottom})`}
          />
          <g ref="yAxis" transform={`translate(${styles.margin.left}, 0)`} />
        </g>
      </svg>
    );
  }
}
