import { ChartOptions } from "chart.js";
import { dataArr } from "./fetchData";

const Y_AXIS_MAX = 200;

export const options: ChartOptions = {
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
          const id = findId(tooltipItem[0].label);
          return `ID: ${id}`;
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
};

export function findId(date: string) {
  const findItem = dataArr.find((targetData) => targetData.date === date);

  if (!findItem) return undefined;

  return findItem.id;
}
