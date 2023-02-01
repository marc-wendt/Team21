import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import { sliderBottom } from "d3-simple-slider";
import { dataGermany as database } from "./data";

const Slider = ({ selectedInterval, setSelectedInterval }) => {
  const div = document.createElement("div");
  const divRef = useRef(null);

  const data = database.map((d) => d.month);
  const defaultValue = [0, data.length - 1];

  //select every 3rd value to be displayed on the slider
  function dataFormat(d) {
    if (d % 3 === 0) {
      const x =
        data[d][0] +
        data[d][1] +
        data[d][2] +
        " " +
        data[d][data[d].length - 2] +
        data[d][data[d].length - 1];
      return x;
    } else {
      return " ";
    }
  }

  const p = d3.select(div);
  p.append("p").attr("id", "value").text(defaultValue.join("-"));

  const slider = sliderBottom()
    .min(0)
    .max(data.length - 1)
    .width(980)
    .step(1)
    .tickFormat((d) => dataFormat(d))
    .ticks(data.length - 1)
    .default(defaultValue)
    .fill("skyblue")
    .displayValue(false)
    .on("onchange", (val) => {
      setSelectedInterval((prevSelectedInterval) => {
        return val;
      });
    });

  function createSlider(divRef) {
    const g = d3
      .select(divRef)
      .append("svg")
      .attr("width", 1200)
      .attr("height", 100)
      .append("g")
      .attr("transform", "translate(30,30)");
    g.call(slider);
  }

  useEffect(() => {
    if (divRef.current) {
      d3.select(divRef.current).selectAll("svg").remove();
      createSlider(divRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [divRef]);

  return <div id="slider" ref={divRef}></div>;
};

export default Slider;
