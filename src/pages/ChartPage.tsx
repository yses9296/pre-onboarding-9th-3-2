import { useLocation } from "react-router-dom";
import FilterBar from "../components/FilterBar";
import TimeSeriesChart from "../components/TimeSeriesChart";
import { getQueryData } from "../utils/getQueryData";

const ChartPage = () => {
  const location = useLocation();
  const targetID = getQueryData(location.search);

  return (
    <>
      <h3 className=" text-center py-5 bg-sky-800 text-white text-2xl font-bold ">
        플렉시스 차트 데이터
      </h3>

      <FilterBar targetID={targetID} />
      <TimeSeriesChart targetID={targetID} />
    </>
  );
};

export default ChartPage;
