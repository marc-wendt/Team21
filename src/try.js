import React, { useRef, useEffect } from "react";
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import * as d3 from "d3";


const tryChart = ({ data, keys, colors }) => {

  const container = useRef(null);

  // define dimensions of the chart
  const width = 1000;
  const height = 500;

    const backgroundChartArea = {
      id: 'backgroundChartArea',
      beforeDatasetsDraw(chart, args, options) {
        const { ctx, chartArea: { top, bottom, left, right, width, height },
          scales: { x, y } } = chart;
        const startValue = data.datasets[0].data.find(value => value > 0);
        const startIndex = data.datasets[0].data.indexOf(startValue);
        let endIndex;
        for (let i = startIndex; i < data.datasets[0].data.length; i++) {
          if (data.datasets[0].data[i] === 0) {
            endIndex = i;
            break;
          }
        }
        const newWidth = x._gridLineItems[endIndex].x1 - x._gridLineItems[startIndex].x1;
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(x._gridLineItems[startIndex].x1, top, newWidth, height)
      }
    }
  
  const myChart = new Chart(document.getElementById("myChart").getContext("2d"), {
    type: 'bar',
    data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
    plugins: [backgroundChartArea]
  });


  return (
    <div style={{ width: width, height: height, margin: "auto", position: "absolute", opacity: 0.5, top: 100, right: 450 }}>
      <canvas ref={container} id="myChart" style={{
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
      </canvas>
      <script>

      </script>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js">
      </script>
    </div>
  );
};

export default tryChart;