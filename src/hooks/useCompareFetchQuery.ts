import { fetchBuildingDetailById } from 'api/building';

const useCompareFetchQuery = () => {
  const makeSearchParams = (ids: string[]) => {
    return ids.join(',');
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
