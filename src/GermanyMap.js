import React, { useState, useEffect, useContext } from "react";
import * as d3 from "d3";
import { StateContext, MapContext } from "./App";

function GermanyMap() {
  const [svg, setSvg] = useState(null);
  // eslint-disable-next-line
  const { currentState, changeState } = useContext(StateContext);
  // eslint-disable-next-line
  const { checkedMap, setCheckedMap } = useContext(MapContext);

  useEffect(() => {
    let newSvg;
    if (!svg) {
      // Select the SVG element, if it exists
      newSvg = d3.select("#map svg");

      // If the SVG element does not exist, create it
      if (newSvg.empty()) {
        newSvg = d3
          .select("#map")
          .append("svg")
          .attr("width", 600)
          .attr("height", 550);
      }

      var zoom = d3
        .zoom()
        .scaleExtent([1, 8])
        .on("zoom", function (event) {
          newSvg.selectAll("path").attr("transform", event.transform);
        });

      newSvg.call(zoom);

      const projection = d3
        .geoAlbers()
        .center([10.5, 51.3])
        .rotate([-10.5, 0])
        .scale(4000)
        .translate([750, 250]);
      const path = d3.geoPath().projection(projection);

      var div = d3
        .select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

      d3.json(
        "https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/2_bundeslaender/3_mittel.geo.json"
      ).then((geojson) => {
        if (!document.querySelector("#map svg path")) {
          newSvg
            .selectAll("path")
            .data(geojson.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("fill", "#ccc")
            .attr("stroke", "#333")
            .attr("stroke-width", 0.7) // Initial stroke width
            .on("click", function (d) {
              // Check if the state that was clicked is the same as the one with the clicked class
              // -- function remove clicked state
              if (this === d3.select(".clicked").node()) {
                d3.select(this)
                  .attr("stroke-width", 0.7)
                  .style("fill", d3.color("none"))
                  .classed("clicked", false);
                changeState("");
                setCheckedMap(false);
              } else {
                // -- funciton set clicked state or update clicked state
                d3.select(".clicked")
                  .attr("stroke-width", 0.7)
                  .style("fill", d3.color("none"))
                  .classed("clicked", false);
                d3.select(this)
                  .attr("stroke-width", 1.5)
                  .style("fill", d3.color("steelblue"))
                  .classed("clicked", true);
                changeState(d.target.__data__.properties.name);
                setCheckedMap(true);
              }
            })
            .on("mouseover", function (d, i) {
              console.log("mouseover on", i.properties.name);
              d3.select(this)
                .transition()
                .duration(100)
                .attr("r", 20)
                .attr("fill", d3.color("whitesmoke"));
              div.transition().duration(200).style("opacity", 0.9);
              div
                .html("<h3>" + i.properties.name + "</h3>")
                .style("left", d.pageX + "px")
                .style("top", d.pageY - 28 + "px");
            })
            .on("mouseout", function (d, i) {
              d3.select(this)
                .transition()
                .duration(100)
                .attr("r", 10)
                .attr("fill", "#ccc");
              div.transition().duration(200).style("opacity", 0);
            });
        }
      });

      setSvg(newSvg);
    }
  }, [svg, changeState, checkedMap, setCheckedMap]);

  return <div id="map" />;
}

export default GermanyMap;
