import { create } from 'zustand';

import { addCommas } from 'lib/changeFormat';

import type {
  BuildingDetailType,
  TransformedBuildingDetailType,
  TransformedBuildingType,
} from 'types/building.type';

interface State {
  building: TransformedBuildingDetailType | null;
  isLoading: boolean;
}

interface Actions {
  setBuildingDetail: (data: BuildingDetailType, rowData: TransformedBuildingType) => void;
  setIsLoading: (val: boolean) => void;
}

interface Store {
  state: State;
  actions: Actions;
}

export const buildingStore = create<Store>((set) => ({
  state: {
    building: null,
    isLoading: false,
  },
  actions: {
    setBuildingDetail: (data, rowData) => {
      const coverageRatio = (data.architectureArea / data.platArea) * 100;

      const transformed: TransformedBuildingDetailType = {
        ...data,
        address: rowData.address,
        construct: rowData.construct,
        floor: rowData.floor,
        totalArea: rowData.totalArea,
        deposit: rowData.deposit,
        rentFee: rowData.rentFee,
        maintenanceFee: rowData.maintenanceFee,
        platArea: addCommas(data.platArea) + '평',
        architectureArea: addCommas(data.architectureArea) + '평',
        vlRat: data.vlRat.toFixed(2) + '%',
        coverageRatio: coverageRatio.toFixed(2) + '%',
      };

      set({ state: { building: transformed, isLoading: false } });
    },
    setIsLoading: (val: boolean) => {
      set(({ state }) => ({
        state: { ...state, isLoading: val },
      }));
    },
  },
}));

export const useBuildingStoreState = () => buildingStore((store) => store.state);
export const useBuildingStoreActions = () => buildingStore((store) => store.actions);
