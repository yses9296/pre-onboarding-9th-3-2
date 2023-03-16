export type MockType = {
  date: string;
  id: string;
  value_area: value_area_Dataset;
  value_bar: value_bar_Dataset;
};

type value_area_Dataset = {
  x: string;
  y: number;
};

type value_bar_Dataset = {
  x: string;
  y: number;
};
