import axios from 'axios';

import type { BuildingDetailType, BuildingType } from 'types/building.type';

export const fetchBuildings = async () => {
  const res = await axios.get<{ data: BuildingType[] }>('/buildings');

  return res.data.data;
};

export const fetchBuildingDetailById = async (id: string) => {
  const res = await axios.get<{ data: BuildingDetailType }>(`/building/${id}`);

  return res.data.data;
};
