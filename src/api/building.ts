import axios from 'axios';

import type { BuildingType } from 'types/building.type';

export const fetchBuildings = async () => {
  const res = await axios.get<{ data: BuildingType[] }>('/buildings');

  return res.data.data;
};
