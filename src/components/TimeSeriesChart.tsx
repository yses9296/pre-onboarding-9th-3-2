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
import useChartOption from "../hooks/useChartOption";
import useChartDataSet from "../hooks/useChartDataSet";
import { useTargetId } from "../hooks/useTargetId";

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
  const targetID = useTargetId();
  const chartDataSet = useChartDataSet(targetID);
  const chartOption = useChartOption(); //기존 코드

  return (
    <div className="w-10/12 mx-auto">
      <ReactChart type="bar" data={chartDataSet} options={chartOption} />
    </div>
  );
};

export default TimeSeriesChart;
