import { useEffect } from "react";
import * as echarts from "echarts";

function useECharts(chartRef, config) {
  let chartInstance = null;

  function renderChart() {
    const renderedInstance = echarts.getInstanceByDom(chartRef.current);
    if (renderedInstance) {
      chartInstance = renderedInstance;
    } else {
      chartInstance = echarts.init(chartRef.current);
    }
    chartInstance.setOption(config);

    chartInstance.on("click", function (params) {
      console.log("params：", params);
    });
  }

  useEffect(() => {
    renderChart();
  }, [config]);

  useEffect(() => {
    return () => {
      chartInstance && chartInstance.dispose();
    };
  }, []);

  return;
}

export default useECharts;