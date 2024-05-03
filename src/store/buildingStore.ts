import { create } from 'zustand';

import type {
  BuildingDetailType,
  TransformedBuildingDetailType,
  TransformedBuildingType,
} from 'types/building.type';

interface Actions {
  setBuildingDetail: (
    data: BuildingDetailType,
    rowData: TransformedBuildingType,
  ) => Promise<void>;
}

interface Store {
  state: TransformedBuildingDetailType | null;
  actions: Actions;
}

export const buildingStore = create<Store>((set) => ({
  state: null,
  actions: {
    setBuildingDetail: async (data, rowData) => {
      const transformed: TransformedBuildingDetailType = {
        ...data,
        address: rowData.address,
        construct: rowData.construct,
        floor: rowData.floor,
        totalArea: rowData.totalArea,
        deposit: rowData.deposit,
        rentFee: rowData.rentFee,
        maintenanceFee: rowData.maintenanceFee,
      };

      set({ state: transformed });
    },
  },
}));

export const useBuildingStoreState = () =>
  buildingStore((store) => store.state);
export const useBuildingStoreActions = () =>
  buildingStore((store) => store.actions);
