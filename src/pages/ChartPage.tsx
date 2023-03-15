import { useLocation } from "react-router-dom";
import FilterBar from "../components/FilterBar";
import TimeSeriesChart from "../components/TimeSeriesChart";
import { getQueryData } from "../utils/getQueryData";

const ChartPage = () => {
  const location = useLocation();
  const targetID = getQueryData(location.search);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <h3>플렉시스 차트 데이터</h3>

      <FilterBar targetID={targetID} />
      <TimeSeriesChart targetID={targetID} />
    </div>
  );
};

export default ChartPage;
