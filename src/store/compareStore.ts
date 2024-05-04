import { create } from 'zustand';

export interface CompareStoreStateItem {
  id: string;
  name: string;
}

type State = CompareStoreStateItem[];

interface Actions {
  setCheckedBuildingIds: (val: State) => void;
}

interface Store {
  state: State;
  actions: Actions;
}

export const compareStore = create<Store>((set) => ({
  state: [
    {
      id: '',
      name: '',
    },
  ],
  actions: {
    setCheckedBuildingIds: (val) => {
      set({ state: val });
    },
  },
}));

export const useCompareStoreState = () => compareStore((store) => store.state);
export const useCompareStoreActions = () =>
  compareStore((store) => store.actions);
