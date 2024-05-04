import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { useQueries } from '@tanstack/react-query';

import useCompareFetchQuery from 'hooks/useCompareFetchQuery';

const CompareBuildingList = () => {
  const [searchParams] = useSearchParams();
  const { makeFetchQueries } = useCompareFetchQuery();

  const buildingIds = searchParams.get('ids');

  const result = useQueries({
    queries: makeFetchQueries(buildingIds),
  });

  console.log(result);

  if (buildingIds === null) return <div>선택해주세요</div>;

  return (
    <div>
      <div>CompareBuildingList</div>
    </div>
  );
};

export default CompareBuildingList;
