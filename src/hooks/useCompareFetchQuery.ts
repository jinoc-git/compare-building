import { fetchBuildingDetailById } from 'api/building';

import type { CompareStoreStateItem } from 'store/compareStore';

const useCompareFetchQuery = () => {
  const makeSearchParams = (datas: CompareStoreStateItem[]) => {
    const ids = datas.map(({ id }) => id).join(',');
    const names = datas.map(({ name }) => name).join(',');

    return `ids=${ids}&names=${names}`;
  };

  const makeFetchQueries = (searchParam: string | null) => {
    if (!searchParam) {
      return [
        {
          queryKey: ['buildingDetail'],
          queryFn: () => fetchBuildingDetailById(''),
          enabled: false,
        },
      ];
    }

    const ids = searchParam.split(',');
    const query = ids.map((id) => ({
      queryKey: ['buildingDetail', id],
      queryFn: () => fetchBuildingDetailById(id),
    }));

    return query;
  };

  return { makeSearchParams, makeFetchQueries };
};

export default useCompareFetchQuery;
