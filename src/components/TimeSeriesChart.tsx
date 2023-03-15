import React, { useRef } from "react";
import { MockType } from "types/mockData.type";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController,
} from "chart.js";

import { Chart as ReactChart } from "react-chartjs-2";
import { dataAreaSet, dataBarSet } from "../utils/chartDataSet";
import { options } from "../utils/chartOption";
import { dataArr } from "../utils/fetchData";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController
);

const TimeSeriesChart = () => {
  const chartData = React.useRef({
    datasets: [dataAreaSet(dataArr), dataBarSet(dataArr)],
  });

  return <ReactChart type="bar" data={chartData.current} options={options} />;
};

export default TimeSeriesChart;
