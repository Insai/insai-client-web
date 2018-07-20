import React from "react";
import { scaleTime, scaleLinear } from "d3-scale";
import { line } from "d3-shape";
import { extent } from "d3-array";

export default class extends React.Component {
  renderChart = () => {
    const data = [{ time: "123", value: 1 }, { time: "123", value: 1 }];
    const xScale = scaleTime()
      .domain(extent(data, ({ time }) => time))
      .rangeRound([0, 400]);
    const yScale = scaleLinear()
      .domain(extent(data, ({ value }) => value))
      .rangeRound([400, 0]);

    const lineChart = line()
      .x(d => xScale(d.time))
      .y(d => yScale(d.value));

    return <path className="line" d={lineChart(data)} />;
  };
  render() {
    return (
      <svg className="timeseries" width={400} height={400}>
        {this.renderChart()}
      </svg>
    );
  }
}
