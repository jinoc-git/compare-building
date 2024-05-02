import axios from 'axios';

import type { BuildingDetailType, BuildingType } from 'types/building.type';
import type { ChartType } from 'types/chart.type';

export const fetchBuildings = async () => {
  const res = await axios.get<{ data: BuildingType[] }>('/buildings');

  return res.data.data;
};

export const fetchBuildingDetailById = async (id: string) => {
  const res = await axios.get<{ data: BuildingDetailType }>(`/building/${id}`);

  return res.data.data;
};

export const fetchBuildingChartById = async (id: string) => {
  const res = await axios.get<{ data: ChartType }>(`/chart/${id}`);

  return res.data.data;
};
