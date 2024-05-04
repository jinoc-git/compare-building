import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchBuildingChartById } from 'api/building';
import SkeletonChart from 'components/skeleton/main/buildingInfo/chart/SkeletonChart';

import ChartContentItem from './chartContentItem/ChartContentItem';

interface Props {
  buildingId: string;
}

const ChartContent = ({ buildingId }: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: ['buildingChart', buildingId],
    queryFn: () => fetchBuildingChartById(buildingId),
  });

  if (!data || isLoading) return <SkeletonChart />;

  return (
    <>
      <ChartContentItem data={data.rentFee} dataKey="임대료" lineColor={'#8070ED'} />
      <ChartContentItem data={data.maintenanceFee} dataKey="관리비" lineColor={'#66A4DF'} />
      <ChartContentItem data={data.vacancyRate} dataKey="공실률" lineColor={'#CA9EBF'} />
    </>
  );
};

export default ChartContent;
