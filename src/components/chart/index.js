import React, { useRef, useState } from "react";
import getConfig from "./config";
import useECharts from "./useEcharts.js";

function Chart(data) {
  const chartRef = useRef(null);
  const config = getConfig(data);
  useECharts(chartRef, config);

  return (
    <div>
      <div style={{ width: "100%", height: "500px" }} ref={chartRef} />
      
    </div>
  );
}

export default Chart;