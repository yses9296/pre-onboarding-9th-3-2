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
import getChartOption from "../utils/getChartOption";
import getChartDataSet from "../utils/getChartDataSet";

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

type Props = {
  targetID: string | null;
};

const TimeSeriesChart = ({ targetID }: Props) => {
  const chartDataSet = getChartDataSet(targetID);
  const chartOption = getChartOption();

  return <ReactChart type="bar" data={chartDataSet} options={chartOption} />;
};

export default TimeSeriesChart;
