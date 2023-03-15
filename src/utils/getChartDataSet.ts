import { getDataBarColor, getDataLinePointColor } from "./getDataColor";
import { dataArr } from "./fetchData";

export const X_AXIS_KEY = "x";
export const Y_AXIS_KEY = "y";

const getChartDataSet = (targetID: string | null) => {
  const id_DataArr = dataArr.map((item) => item.id);

  function dataAreaSet() {
    const value_area_DataArr = dataArr.map((val) => ({
      [X_AXIS_KEY]: val.date,
      [Y_AXIS_KEY]: val.value_area,
    }));

    return {
      type: "line" as const,
      label: "Area",
      data: value_area_DataArr,
      parsing: {
        xAxisKey: X_AXIS_KEY,
        yAxisKey: Y_AXIS_KEY,
      },
      yAxesID: "y",
      fill: true,
      tension: 0.1,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.35)",
      pointRadius: 4,
      pointBorderColor: getDataLinePointColor(id_DataArr, targetID),
    };
  }

  function dataBarSet() {
    const value_bar_DataArr = dataArr.map((val) => ({
      [X_AXIS_KEY]: val.date,
      [Y_AXIS_KEY]: val.value_bar,
    }));

    return {
      type: "bar" as const,
      label: "Bar",
      data: value_bar_DataArr,
      parsing: {
        xAxisKey: X_AXIS_KEY,
        yAxisKey: Y_AXIS_KEY,
      },
      yAxisID: "y1",
      borderWidth: 2,
      borderRadius: 3,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: getDataBarColor(id_DataArr, targetID),
    };
  }

  return { datasets: [dataAreaSet(), dataBarSet()] };
};

export default getChartDataSet;
