import { memo } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Label,
} from "recharts";
import { MockType } from "types/mockData.type";
import CustomTooltip from "./CustomTooltip";

const Chart = ({ data }: { data: MockType[] }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height="50%">
        <ComposedChart
          width={1600}
          height={300}
          data={data}
          margin={{ right: 50, left: 50 }}
        >
          <XAxis dataKey="date">
            <Label value="Date" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis yAxisId="left" orientation="right">
            <Label value="Bar " angle={90} position="right" />
          </YAxis>

          <YAxis yAxisId="right">
            <Label value="Area" angle={-90} position="left" />
          </YAxis>

          <Tooltip content={<CustomTooltip data={data} />} />
          <Legend verticalAlign="top" height={36} />
          <CartesianGrid stroke="#f5f5f5" />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="value_area"
            fill="#ADC8FF"
            stroke="#84A9FF"
          />
          <Bar
            yAxisId="left"
            dataKey="value_bar"
            barSize={5}
            fill="#1939B7"
          ></Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default memo(Chart);
