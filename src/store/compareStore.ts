import { create } from 'zustand';

interface Actions {
  setCheckedBuildingIds: (ids: string[]) => void;
}

interface Store {
  state: string[];
  actions: Actions;
}

export const compareStore = create<Store>((set) => ({
  state: [],
  actions: {
    setCheckedBuildingIds: (ids: string[]) => {
      console.log(ids);
      set({ state: ids });
    },
  },
}));

export const useCompareStoreState = () => compareStore((store) => store.state);
export const useCompareStoreActions = () =>
  compareStore((store) => store.actions);
