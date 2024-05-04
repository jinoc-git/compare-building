import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { useQueries } from '@tanstack/react-query';

import RootLayout from 'components/common/layouts/RootLayout';
import CompareBuildingList from 'components/compare/compareBuildingList/CompareBuildingList';
import useCompareFetchQuery from 'hooks/useCompareFetchQuery';

const Compare = () => {
  const [searchParams] = useSearchParams();
  const { makeFetchQueries } = useCompareFetchQuery();

  const buildingIds = searchParams.get('ids');

  const result = useQueries({
    queries: makeFetchQueries(buildingIds),
  });

  if (buildingIds === null) return <div>선택해주세요</div>;

  const isLoading = result.some((data) => data.isLoading);
  if (isLoading) return <div>로딩</div>;

  const buildingDetails = result.map((data) => data.data);

  return (
    <RootLayout>
      <CompareBuildingList buildingDetails={buildingDetails} />
    </RootLayout>
  );
};

export default Compare;
