import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

function GermanyMap() {
  const [svg, setSvg] = useState(null);

  useEffect(() => {
    if (!svg) {
      const newSvg = d3.select('#map')
        .append('svg')
        .attr('width', 1000)
        .attr('height', 800);

      const projection = d3.geoAlbers()
        .center([10.5, 51.3])
        .rotate([-10.5, 0])
        .scale(4000)
        .translate([1000, 400]);

      const path = d3.geoPath()
        .projection(projection);

      d3.json('https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/2_bundeslaender/4_niedrig.geo.json').then(geojson => {
        if (!document.querySelector('#map svg path')) {
          newSvg.selectAll('path')
            .data(geojson.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('fill', '#ccc')
            .attr('stroke', '#333')
            .on('click', (d) => {
              console.log(d.target.__data__.properties.name);
            });
        }
      });

      setSvg(newSvg);
    }
  }, [svg]);

  return <div id="map" />;
}

export default GermanyMap;