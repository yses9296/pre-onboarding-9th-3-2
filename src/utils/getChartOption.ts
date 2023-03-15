import { useNavigate } from "react-router-dom";
import { ChartOptions } from "chart.js";
import { dataArr } from "./fetchData";

const Y_AXIS_MAX = 200;

const getChartOption = () => {
  const navigate = useNavigate();

  const options: ChartOptions = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Area-Bar Chart",
      },
      tooltip: {
        callbacks: {
          afterTitle: (tooltipItem) => {
            return `ID: ${dataArr[tooltipItem[0].dataIndex].id}`;
          },
        },
      },
    },
    scales: {
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
        title: { display: true, text: "Area" },
        max: Y_AXIS_MAX,
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
        title: { display: true, text: "Bar" },
        grid: {
          drawOnChartArea: false,
        },
      },
    },

    onClick: function (event, element) {
      navigate(`?targetId=${dataArr[element[0].index].id}`);
    },
  };

  return options;
};

export default getChartOption;
