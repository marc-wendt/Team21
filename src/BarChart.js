import React, { useRef, useEffect, useMemo } from "react";
import * as d3 from "d3";

const BarChart = ({ data, keys, colors, selectedInterval }) => {
  const container = useRef(null);

  // define dimensions of the chart
  const width = 1000;
  const height = 500;

  //data for only the selected interval
  var intervalData = useMemo(() => {
    var interval = [1, 30];
    if (selectedInterval != null) {
      interval = selectedInterval;
    }

    intervalData = [];
    var j = 0;
    for (let i = interval[0]; i <= interval[1] && i < data.length; i++) {
      intervalData[j] = data[i];
      j += 1;
    }

    return intervalData;
  }, [selectedInterval, data]);

  useEffect(() => {
    const svg = d3
      .select(container.current)
      .attr("width", width)
      .attr("height", height);

    // create scales
    const xScale = d3
      .scaleBand()
      .domain(intervalData.map((d) => d.month))
      .range([0, width])
      .padding(0.3);

    const yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(
          data,
          (d) =>
            d.hotels_ohne_garnis_inland +
            d.hotels_inland +
            d.gasthöfe_inland +
            d.pensionen_inland +
            d.ferienhäuser_und_ferienwohnungen_inland +
            d.jugendherbergen_inland +
            d.campingplätze_inland +
            d.sonstige_inland
        ),
      ])
      .range([height, 0]);

    // create the stacked bars
    const stackedData = d3.stack().keys(keys)(intervalData);

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
      .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
      .attr("width", xScale.bandwidth());

    // add legend
    const legend = svg
      .append("g")
      .attr("transform", `translate(${width - width + 3}, ${height + 132})`);

    legend
      .selectAll("rect")
      .data(stackedData)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * 20 + 35)
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", (d) => colors[d.key]);

    legend
      .selectAll("text")
      .data([
        "Hotels",
        "Hotels ohne garnis",
        "Gasthöfe",
        "Pensionen",
        "Ferienhäuser und -wohnungen",
        "Jugendherbergen",
        "Campingplätze",
        "Sonstige",
      ])
      .enter()
      .append("text")
      .attr("x", 20)
      .attr("y", (d, i) => i * 20 + 45)
      .style("fill", "whitesmoke")
      .style("font-size", "15px")
      .text((d) => d);

    // add axes
    const yAxis = d3.axisLeft(yScale);
    const xAxis = d3.axisBottom(xScale);

    svg.select(".y-axis").remove();
    svg.append("g").attr("class", "y-axis").call(yAxis);

    svg.selectAll(".x-axis").remove();
    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("transform", "rotate(-65)");

    svg.select(".y-axis").remove();
    svg.append("g").attr("class", "y-axis").call(yAxis);

    // update bar data
    rects
      .data(data)
      .merge(rects)
      .attr("x", (d) => xScale(d.month))
      .attr("y", (d) => yScale(d[1]))
      .attr("height", function (d) {
        if (
          Math.sign(
            height -
              (yScale(d.hotels_inland) +
                yScale(d.hotels_ohne_garnis_inland) +
                yScale(d.gasthöfe_inland) +
                yScale(d.pensionen_inland) +
                yScale(d.ferienhäuser_und_ferienwohnungen_inland) +
                yScale(d.jugendherbergen_inland) +
                yScale(d.campingplätze_inland) +
                yScale(d.sonstige_inland))
          ) !== 1
        ) {
          return 0;
        } else {
          return (
            height -
            (yScale(d.hotels_inland) +
              yScale(d.hotels_ohne_garnis_inland) +
              yScale(d.gasthöfe_inland) +
              yScale(d.pensionen_inland) +
              yScale(d.ferienhäuser_und_ferienwohnungen_inland) +
              yScale(d.jugendherbergen_inland) +
              yScale(d.campingplätze_inland) +
              yScale(d.sonstige_inland))
          );
        }
      })
      .attr("width", xScale.bandwidth());

    rects.exit().remove();
  }, [data, colors, keys, intervalData]);

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
            stroke: whitesmoke;
            shape-rendering: crispEdges;
          }
        `}
        </style>
      </svg>
    </div>
  );
};

export default BarChart;
