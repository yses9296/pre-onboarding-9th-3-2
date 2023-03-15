import FilterBar from "../components/FilterBar";
import TimeSeriesChart from "../components/TimeSeriesChart";

const ChartPage = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <h3>플렉시스 차트 데이터</h3>

      <FilterBar />
      <TimeSeriesChart />
    </div>
  );
};

export default ChartPage;
