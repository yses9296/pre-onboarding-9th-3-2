import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dataArr } from "../utils/fetchData";

type Props = {
  targetID: string | null;
};
const FilterBar = ({ targetID }: Props) => {
  const navigate = useNavigate();

  const placeArr = [...new Set<string>(dataArr.map((data) => data.id))];
  const [selected, isSelected] = React.useState<string>(targetID || "");

  useEffect(() => {
    isSelected(targetID || "");
  }, [navigate, targetID]);

  const onClickPlaceHandler = (e: React.MouseEvent<HTMLElement>) => {
    navigate(`/?targetId=${e.currentTarget.textContent}`);
  };

  return (
    <div>
      <div>
        {placeArr.map((place, idx) => (
          <button key={idx} value={place} onClick={onClickPlaceHandler}>
            {place}
          </button>
        ))}
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Clear
        </button>
      </div>
      {selected !== "" && <h2> {selected} </h2>}
    </div>
  );
};

export default FilterBar;
