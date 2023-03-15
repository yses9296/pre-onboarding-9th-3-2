import { MockType } from "types/mockData.type";
import mockData from "../data/mockData.json";

export const fetchData = () => {
  const dataJson = mockData.response;
  const dataArr: MockType[] = Object.entries(dataJson).map(
    ([dateData, values]) => {
      return {
        date: dateData,
        ...values,
      };
    }
  );
  return dataArr;
};
