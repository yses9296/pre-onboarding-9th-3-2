import { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { TooltipContainer, TooltipWrap } from "../styles/tooltipStyle";

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const targetData = payload[0].payload;
    return (
      <TooltipContainer>
        <TooltipWrap>
          <p>Date: {label}</p>
          <p>ID: {targetData.id}</p>
          <p>Area: {targetData.value_area}</p>
          <p>Bar: {targetData.value_bar}</p>
        </TooltipWrap>
      </TooltipContainer>
    );
  }

  return null;
};

export default CustomTooltip;
