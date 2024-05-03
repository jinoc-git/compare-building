import { create } from 'zustand';

import type { BuildingDetailType } from 'types/building.type';

interface Actions {
  setBuildingDetail: (data: BuildingDetailType) => Promise<void>;
}

interface Store {
  state: BuildingDetailType | null;
  actions: Actions;
}

export const buildingStore = create<Store>((set, get) => ({
  state: null,
  actions: {
    setBuildingDetail: async (data) => {
      set({ state: data });
    },
  },
}));

export const useBuildingStoreState = () =>
  buildingStore((store) => store.state);
export const useBuildingStoreActions = () =>
  buildingStore((store) => store.actions);
