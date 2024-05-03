import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchBuildingChartById } from 'api/building';
import { changeChartDataFormat } from 'lib/changeFormat';

import ChartContentItem from './chartContentItem/ChartContentItem';

interface Props {
  buildingId: string;
}

const ChartContent = ({ buildingId }: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: ['buildingChart', buildingId],
    queryFn: () => fetchBuildingChartById(buildingId),
  });

  if (!data) return null;

  console.log(data);
  const rentFeeData = changeChartDataFormat(data.rentFee, '임대료');

  return (
    <>
      <ChartContentItem />
      <ChartContentItem />
      <ChartContentItem />
    </>
  );
};

export default ChartContent;
