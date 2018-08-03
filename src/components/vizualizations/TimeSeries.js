import React from "react";
import * as d3 from "d3";
import { Colors } from "@blueprintjs/core";

const colors = [
  Colors.VERMILION1,
  Colors.ROSE1,
  Colors.VIOLET1,
  Colors.INDIGO1,
  Colors.COBALT1,
  Colors.TURQUOISE1,
  Colors.FOREST1,
  Colors.LIME1,
  Colors.GOLD1,
  Colors.SEPIA1,
  Colors.VERMILION4,
  Colors.VIOLET4,
  Colors.TURQUOISE4,
  Colors.LIGHT_GRAY4,
  Colors.SEPIA4,
  Colors.FOREST4
];

const styles = {
  height: 380,
  width: 1000,
  margin: {
    left: 60,
    right: 10,
    top: 20,
    bottom: 60
  }
};
// number of channels on Cyton board
const N_CHANNELS = 16;

// Graph constants
const MIN_X = -0.0002,
  MAX_X = 0.0002;

export default class extends React.Component {
  state = {
    data: [],
    channels: [],
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

    // return array of calculated lines for different channels
    const channels = Array(N_CHANNELS)
      .fill()
      .map((_, i) =>
        newData.map(d => ({ timestamp: d.timestamp, value: d.channelData[i] }))
      )
      .map((ch, i) => {
        lineGenerator.x(d => xScale(d.timestamp));
        lineGenerator.y(d => yScale(d.value));
        return lineGenerator(ch);
      });

    return {
      channels,
      data: newData.slice(newData.length - 100, newData.length)
    };
  }
  componentDidUpdate() {
    // TODO: data is coming in to fast => Timeout
    setTimeout(() => {
      d3.select(this.refs.xAxis).call(this.xAxis);
      d3.select(this.refs.yAxis).call(this.yAxis);
    }, 10000);
  }
  componentDidMount() {
    d3.select(this.refs.xAxis).call(this.xAxis);
    d3.select(this.refs.yAxis).call(this.yAxis);
  }
  render() {
    return (
      <svg width={styles.width} height={styles.height}>
        {this.state.channels.map((d, i) => (
          <path
            d={d}
            fill="none"
            strokeWidth="2"
            stroke={colors[i]}
            key={`channel_${i}`}
          />
        ))}
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
