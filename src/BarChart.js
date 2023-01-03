import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import { functionExpression } from "@babel/types";

const BarChart = ({ data, keys, colors, bgColors }) => {
  const container = useRef(null);

  // define dimensions of the chart
  const width = 1000;
  const height = 500;
  
  useEffect(() => {
    const svg = d3.select(container.current);

    // create scales
    const xScale = d3
      .scaleBand()
      .domain(data.map(d => d.month))
      .range([0, width])
      .padding(0.3);

let xDi = width / data.length
console.log(xDi);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.hotels_inland + d.hotels_ohne_garnis_inland + d.gasthöfe_inland + d.pensionen_inland + d.ferienhäuser_und_ferienwohnungen_inland + d.jugendherbergen_inland + d.campingplätze_inland + d.sonstige_inland)])
      .range([height, 0]);

    // create the stacked bars
    //const stackedData = d3.stack().keys(["hotels_inland", "hotels_ohne_garnis_inland", "gasthöfe_inland", "pensionen_inland", "ferienhäuser_und_ferienwohnungen_inland", "jugendherbergen_inland", "campingplätze_inland", "sonstige_inland"])(data);
    const stackedData = d3.stack().keys(keys)(data)
    let xIndex = 3.31;
    data.forEach(element => {
      svg.append('rect')
          .attr('x', xIndex)
          .attr('y', 0)
          .attr('width', 25.5)
          .attr('height', 500)
          .style('fill',
          function(d) {
          let value = element.hotels_bayern;
            if (value == 0)
            {
              return "#00FF00";
            }
            if(value == 1)
            {
              return "#FFFF00";
            }
            if(value == 2)
            {
              return "#FF0000";
            }
          }
    ); 
          xIndex += 19;
    });

    // add bars
    svg
      .selectAll(".bar")
      .data(stackedData)
      .enter()
      .append("g")
      .attr("fill", d => colors[d.key])
      .selectAll("rect")
      .data(d => d)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d.data.month))
      .attr("y", d => yScale(d[1]))
      .attr("height", d => yScale(d[0]) - yScale(d[1]))
      .attr("width", xScale.bandwidth())
    .append('title')
    .text(function(d){
      const value = d.data.hotels_bayern;
      if (value == 0)
      {
        return "Keine Maßnahmen";
      }
      if(value == 1)
      {
        return "Maßnahmen vorhanden";
      }
      if(value == 2)
      {
        return "Ausgangssperre";
      }
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
      .attr("fill", d => colors[d.key]);

    legend
      .selectAll("text")
      .data(["Hotels", "Hotels ohne garnis", "Gasthöfe", "Pensionen", "Ferienhäuser und Ferienwohnungen", "Jugendherbergen", "Campingplätze", "Sonstige"])
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