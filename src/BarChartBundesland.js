import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

// TODO: - Error message "Error: <rect> attribute height: Expected length, "NaN" when updating bar data (cause: line 95)

const BarChartBundesland = ({ data, keys, colors }) => {
  const container = useRef(null);

  // define dimensions of the chart
  const width = 1000;
  const height = 500;

  useEffect(() => {
    const svg = d3
      .select(container.current)
      .attr("width", width)
      .attr("height", height);

    // create scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .range([0, width])
      .padding(0.3);

    const yScale = d3.scaleLinear().domain([0, 4800000]).range([height, 0]);

    // create the stacked bars
    const stackedData = d3.stack().keys(keys)(data);

    let xIndex = 3.31;

    data.forEach((element) => {
      svg
        .append("rect")
        .attr("x", xIndex)
        .attr("y", 0)
        .attr("width", 23)
        .attr("height", 500)
        .style(
          "fill",
          //Colored background
          function (d) {
            let value = element.hotels;
            if (value === 0) {
              return "#00FF00";
            }
            if (value === 1) {
              return "#FFFF00";
            }
            if (value === 2) {
              return "#FF0000";
            } else {
              return "#FFFFFF00";
            }
          }
        );
      xIndex += 20.7;
    });

    var rects = svg.selectAll("g rect").data(data);

    // add bars
    svg
      .selectAll(".bar")
      .data(stackedData)
      .enter()
      .append("g")
      .attr("fill", (d) => colors[d.key])
      .selectAll("rect")
      .data((d) => d)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.data.month))
      .attr("y", (d) => yScale(d[1]))
      .attr("height", function (d) {
        if ((d.data.inland == null) & (d.data.ausland != null)) {
          // nur ausland ausgewählt
          return height - yScale(d.data.ausland);
        } else {
          // inland und ausland ausgewählt
          return yScale(d[0]) - yScale(d[1]);
        }
      })
      .attr("width", xScale.bandwidth())
      //Text Feld auf Bar
      .append("title")
      .text(function (d) {
        const value = d.data.hotels;
        if (value === 1) {
          return "Maßnahmen vorhanden";
        }
        if (value === 2) {
          return "Ausgangssperre";
        }
        return "Keine Maßnahmen";
      });

    // add legend
    const legend = svg
      .append("g")
      .attr("transform", `translate(${width + 100}, ${height - 100})`);

    legend
      .selectAll("rect")
      .data(stackedData)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * 20)
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", (d) => colors[d.key]);

    legend
      .selectAll("text")
      .data(["Inland", "Ausland"])
      .enter()
      .append("text")
      .attr("x", 20)
      .attr("y", (d, i) => i * 20 + 10)
      .style("fill", "white")
      .style("font-size", "12px")
      .text((d) => d);

    // add axes
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("transform", "rotate(-65)");

    svg.append("g").call(d3.axisLeft(yScale));

    // update bar data
    rects
      .data(data)
      .merge(rects)
      .attr("x", xScale(data.month))
      .attr("y", yScale(data[1]))
      .attr("height", function (d) {
        if ((data.inland === 0) & (data.ausland !== null)) {
          return height - yScale(data.ausland);
        } else {
          return height - yScale(data[1]);
        }
      })
      .attr("width", xScale.bandwidth());

    rects.exit().remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div style={{ width: width, height: height, margin: "auto" }}>
      <svg
        ref={container}
        style={{
          overflow: "visible",
          marginRight: "0px",
          marginLeft: "0px",
          marginTop: "0px",
          marginBottom: "0px",
          height: "100%",
          width: "100%",
        }}
      >
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

export default BarChartBundesland;
