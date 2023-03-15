import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 100%%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100px;
`;

export const Select = styled.select`
  position: absolute;
  right: 20px;
  width: 200px;
  padding: 10px 5px;
`;
export const Option = styled.option`
  padding: 10px 3px;
`;
export const SelectedHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SelectedTitle = styled.h3`
  margin-right: 10px;
`;
export const ClearButton = styled.button`
  background-color: transparent;
  border: none;
`;
