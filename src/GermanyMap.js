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
          .attr("width", 480)
          .attr("height", 700);
      }

      const projection = d3
        .geoAlbers()
        .center([10.5, 51.3])
        .rotate([-10.5, 0])
        .scale(4000)
        .translate([700, 250]);

      const path = d3.geoPath().projection(projection);

      d3.json(
        "https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/2_bundeslaender/4_niedrig.geo.json"
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
            .attr("stroke-width", 1) // Initial stroke width
            .on("click", function (d) {
              // Check if the state that was clicked is the same as the one with the clicked class
              // -- function remove clicked state
              if (this === d3.select(".clicked").node()) {
                d3.select(this)
                  .attr("stroke-width", 1)
                  .classed("clicked", false);
                changeState("");
                setCheckedMap(false);
              } else {
                // -- funciton set clicked state or update clicked state
                d3.select(".clicked")
                  .attr("stroke-width", 1)
                  .classed("clicked", false);
                d3.select(this)
                  .attr("stroke-width", 3)
                  .classed("clicked", true);
                changeState(d.target.__data__.properties.name);
                setCheckedMap(true);
              }
            });
        }
      });

      setSvg(newSvg);
    }
  }, [svg, changeState, checkedMap, setCheckedMap]);

  return <div id="map" />;
}

export default GermanyMap;
