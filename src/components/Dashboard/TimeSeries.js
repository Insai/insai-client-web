import React from "react";
import * as d3 from "d3";

const styles = {
  container: {
    height: 800,
    width: 600
  },
  margin: {
    left: 50,
    right: 10,
    top: 10,
    bottom: 100
  }
};
// number of channels on Cyton board
const CHANNELS = 16;

// Graph constants
const MIN_X = -1,
  MAX_X = 1,
  X_SCALE = 1000;

export default class extends React.Component {
  componentDidMount() {
    // subscribe to data changes
    const { dataState } = this.props;
    // channel names
    const channels = Array(CHANNELS)
      .fill()
      .map((_, i) => `ch${i + 1}`);

    // TODO: handle state array
    const data = [dataState];
    const time = data.map(d => d.timestamp);
    const recordings = channels.map((ch, idx) => ({
      id: ch,
      values: data.map(d => ({
        timestamp: d.timestamp,
        value: d.channelData[idx] * X_SCALE
      }))
    }));

    const { margin, container } = styles;
    const width = container.width - margin.left - margin.right;
    const height = container.height - margin.top - margin.bottom;
    // create d3 graph
    const g = d3
      .select(this._rootNode)
      .append("svg")
      .attr("height", container.height)
      .attr("width", container.width)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // x: timestamp of recordings
    const x = d3
      .scaleTime()
      .range([0, width])
      .domain(d3.extent(time));

    // y: channel recording value
    const y = d3
      .scaleLinear()
      .range([height, 0])
      .domain([
        d3.min(recordings, ch => d3.min(ch.values, d => d.value)),
        d3.max(recordings, ch => d3.max(ch.values, d => d.value))
      ]);

    // z: channel names
    const z = d3.scaleOrdinal(d3.schemeCategory10).domain(channels);

    // x - axis
    g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", `translate(0, ${height})`) // move to bottom
      .call(d3.axisBottom(x));

    //y - axis
    g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y))
      .append("text") // label
      .attr("transform", `rotate(-90)`)
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("fill", "#000")
      .text("EEG mV");

    // graph elements
    const line = d3
      .line()
      .curve(d3.curveBasis)
      .x(d => x(d.timestamp))
      .y(d => y(d.value));

    const signal = g
      .selectAll(".recording")
      .data(recordings)
      .enter()
      .append("g")
      .attr("class", "recording");

    signal
      .append("path")
      .attr("class", "line")
      .attr("d", d => line(d.values))
      .style("stroke", d => z(d.id))
      .style("fill", "none");

    // update graph
  }
  shouldComponentUpdate() {
    return false;
  }
  _setRef = node => {
    this._rootNode = node;
  };
  render() {
    return <div className="timeseries-d3" ref={this._setRef} />;
  }
}
