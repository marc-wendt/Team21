import React, { useRef, useEffect } from "react";
import * as d3 from "d3";


const BarChart = ({ data, keys, colors }) => {
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
      .domain([0, d3.max(data, d => d.hotels_inland + d.hotels_ohne_garnis_inland + d.gasthöfe_inland + d.pensionen_inland + d.ferienhäuser_und_ferienwohnungen_inland + d.jugendherbergen_inland + d.campingplätze_inland + d.sonstige_inland)])
      .range([height, 0]);

    // create the stacked bars
    //const stackedData = d3.stack().keys(["hotels_inland", "hotels_ohne_garnis_inland", "gasthöfe_inland", "pensionen_inland", "ferienhäuser_und_ferienwohnungen_inland", "jugendherbergen_inland", "campingplätze_inland", "sonstige_inland"])(data);
    const stackedData = d3.stack().keys(keys)(data)

        // Append two rect elements to the SVG element
        svg.append('rect')
          .attr('x', 0)
          .attr('y', 0)
          .attr('width', 300)
          .attr('height', 500)
          .style('fill', 'green');
    
        svg.append('rect')
          .attr('x', 300)
          .attr('y', 0)
          .attr('width', 100)
          .attr('height', 500)
          .style('fill', 'red');
    
        svg.append('rect')
          .attr('x', 400)
          .attr('y', 0)
          .attr('width', 100)
          .attr('height', 500)
          .style('fill', 'green');
    
        svg.append('rect')
          .attr('x', 500)
          .attr('y', 0)
          .attr('width', 150)
          .attr('height', 500)
          .style('fill', 'red');
    
        svg.append('rect')
          .attr('x', 650)
          .attr('y', 0)
          .attr('width', 120)
          .attr('height', 500)
          .style('fill', 'green');
    
        svg.append('rect')
          .attr('x', 770)
          .attr('y', 0)
          .attr('width', 80)
          .attr('height', 500)
          .style('fill', 'red');
    
        svg.append('rect')
          .attr('x', 850)
          .attr('y', 0)
          .attr('width', 150)
          .attr('height', 500)
          .style('fill', 'green'); 

    // Function for this - but not working
    // Select all the bars in the chart
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
      .selectAll(".bar")
      .each(function(d) {
        // Append a rect element for the bar background
        svg.select(this)
          .append("rect")
          .attr("class", "bar-bg")
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", xScale(d.value))
          .attr("height", 500)
          .style("fill", "green");
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