import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const BarChart = ({ data }) => {
  const container = useRef(null);

  // define dimensions of the chart
  const width = 1000;
  const height = 500;

  // define color scale
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  useEffect(() => {
    const svg = d3.select(container.current);

    // create scales
    const xScale = d3
      .scaleBand()
      .domain(data.map(d => d.month))
      .range([0, width])
      .padding(0.3);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.sales + d.sales2 + d.sales3)])
      .range([height, 0]);

    // create the stacked bars
    const stackedData = d3.stack().keys(["sales", "sales2", "sales3"])(data);

    // add bars
    svg
      .selectAll(".bar")
      .data(stackedData)
      .enter()
      .append("g")
      .attr("fill", d => color(d.key))
      .selectAll("rect")
      .data(d => d)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d.data.month))
      .attr("y", d => yScale(d[1]))
      .attr("height", d => yScale(d[0]) - yScale(d[1]))
      .attr("width", xScale.bandwidth());

    // add legend
    const legend = svg
      .append("g")
      .attr("transform", `translate(${width + 100}, ${height - 100})`);

    legend
      .selectAll("rect")
      .data(["sales", "sales2", "sales3"])
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * 20)
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", d => color(d));

    legend
      .selectAll("text")
      .data(["sales", "sales2", "sales3"])
      .enter()
      .append("text")
      .attr("x", 20)
      .attr("y", (d, i) => i * 20 + 10)
      .style("fill", "white")
      .style("font-size", "12px")
      .text(d => d);
    // add axes
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("transform", "rotate(-65)");
      
    svg
      .append("g")
      .call(d3.axisLeft(yScale));
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div style={{ width: width, height: height, margin: "auto" }}>
    <svg ref={container} style={{
       overflow: "visible",
       marginRight: "0px",
       marginLeft: "0px", 
       marginTop: "0px",
       marginBottom: "0px", 
       height: "100%",
       width: "100%",
    }}>
      <style>
        {`
          rect.bar {
            shape-rendering: crispEdges;
          }

          .axis path,
          .axis line {
            fill: none;
            stroke: #000;
            shape-rendering: crispEdges;
          }
        `}
      </style>
    </svg>
    </div>
  );
};


export default BarChart;