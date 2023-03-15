import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  ClearButton,
  FilterContainer,
  Select,
  SelectedHeader,
  SelectedTitle,
} from "../styles/chartStyle";

type Props = {
  placeArr: string[];
  selected: string;
  isSelected: React.Dispatch<React.SetStateAction<string>>;
};

const FilterBar = ({ placeArr, selected, isSelected }: Props) => {
  return (
    <FilterContainer>
      <Select
        value={selected}
        onChange={(e) => {
          isSelected(e.target.value);
        }}
      >
        <option value="">Select option</option>
        {placeArr.map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ))}
      </Select>

      <SelectedHeader>
        <SelectedTitle>{selected}</SelectedTitle>
        {selected && (
          <ClearButton onClick={() => isSelected("")}>
            <AiOutlineCloseCircle
              style={{ width: "24px", height: "24px", color: "#777" }}
            />
          </ClearButton>
        )}
      </SelectedHeader>
    </FilterContainer>
  );
};

export default FilterBar;
