import TimeSeriesChart from "./components/TimeSeriesChart";
import { fetchData } from "./utils/fetchData";

function App() {
  const data_list = fetchData();
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <h3>Flexsys </h3>
      <TimeSeriesChart data={data_list} />
    </div>
  );
}

export default App;
