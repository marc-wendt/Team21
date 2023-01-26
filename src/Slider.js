import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { sliderBottom } from "d3-simple-slider";
import { data as database } from "./data";

const Slider = () => {
  const div = document.createElement('div');
  const divRef = useRef(null);

  const data = database.map(d => d.month)
  const datasave = ["Jan 19", "Feb 19", "Mar 19", "Apr 19", "May 19", "Jun 19", "Jul 19", "Aug 19"]
  const defaultValue = [0, data.length -1];

  const [selectedInterval, setSelectedInterval] = useState(defaultValue);

  //const selectedInterval = defaultValue;

  function dataFormat (d) {
    if (d % 3 == 0) {
      const x = (data[d][0] + data[d][1] + data[d][2] + " " + data[d][data[d].length -2] + data[d][data[d].length -1])
      return x
    }
    else {
      return  " "
    }
  }

  const p = d3.select(div)
    .append('p')
    .attr('id', 'value')
    .text(defaultValue.join('-'));

  const slider = sliderBottom()
    .min(0)
    .max(data.length - 1)
    .width(600)
    .step(1)
    .tickFormat(d => dataFormat(d))
    .ticks(data.length-1)
    .default(defaultValue)
    .fill('skyblue')
    .displayValue(false)
    .on('onchange', (val) => {
      console.log(val);
      setSelectedInterval(val);
    });

    useEffect(() => {
        if (divRef.current) {
            const g = d3.select(divRef.current)
                .append('svg')
                .attr('width', 700)
                .attr('height', 100)
                .append('g')
                .attr('transform', 'translate(30,30)');
            g.call(slider);
        }
        
          
    }, [divRef]);

  return <div id="slider" ref={divRef} />
}

export default Slider;