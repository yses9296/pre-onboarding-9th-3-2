import { useState } from "react";
import { MockType } from "types/mockData.type";
import mockData from "../data/mockData.json";
import Chart from "../components/Chart";
import FilterBar from "../components/FilterBar";
import { Container, Header } from "../styles/layoutStyle";

const ChartPage = () => {
  const dataJson = JSON.parse(JSON.stringify(mockData.response));
  const dataArr: MockType[] = Object.keys(dataJson).map(function (_) {
    return Object.assign({ date: _ }, dataJson[_]);
  });
  const placeArr = [...new Set<string>(dataArr.map((data) => data.id))];
  const [selected, isSelected] = useState<string>("");

  return (
    <Container>
      <Header>플렉시스 차트 데이터</Header>

      <FilterBar
        placeArr={placeArr}
        selected={selected}
        isSelected={isSelected}
      />
      <Chart data={dataArr} selected={selected} isSelected={isSelected} />
    </Container>
  );
};

export default ChartPage;
