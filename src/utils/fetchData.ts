import { MockType } from "types/mockData.type";
import mockData from "../data/mockData.json";

const dataJson = mockData.response;
export const dataArr: MockType[] = Object.entries(dataJson).map(
  ([dateData, values]) => {
    return {
      date: dateData,
      ...values,
    };
  }
);
