import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const BackgroundChart = ({ data, keys, colors, bgKeys }) => {
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

    const yScale = d3
      .scaleLinear()
      // .domain([0, d3.max(data, d => d.hotels_badenWuerttemberg + d.hotels_bayern + d.hotels_brandenburg + d.hotels_bremen + d.hotels_hamburg + d.hotels_hessen + d.hotels_mecklenburgVorpommern + d.hotels_niedersachsen)])
      .domain([0, d3.max(data, e => e.hotels_bayern)])
      .range([height, 0]);

    // create the stacked bars
    //const stackedData = d3.stack().keys(["hotels_inland", "hotels_ohne_garnis_inland", "gasthöfe_inland", "pensionen_inland", "ferienhäuser_und_ferienwohnungen_inland", "jugendherbergen_inland", "campingplätze_inland", "sonstige_inland"])(data);
    const stackedData = d3.stack().keys(bgKeys)(data)

    // add bars
    svg
      .selectAll(".bar")
      .data(stackedData)
      .enter()
      .append("g")
      // .attr("fill", d.getElementsById => chooseColor(d[_].data.hotels_bayern))
      // .attr("fill", d => chooseColor(d[1].data.hotels_bayern))
      .attr("fill", d => colors[d.key])
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
    <div style={{ width: width, height: height, margin: "auto", position: "absolute", opacity: 0.5, top: 100, right:450  }}>
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

export default BackgroundChart;