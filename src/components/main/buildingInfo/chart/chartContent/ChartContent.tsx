import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchBuildingChartById } from 'api/building';

interface Props {
  buildingId: string;
}

const ChartContent = ({ buildingId }: Props) => {
  const {} = useQuery({
    queryKey: ['buildingChart', buildingId],
    queryFn: () => fetchBuildingChartById(buildingId),
  });

  return (
    <>
      <div>ChartContent</div>
      <div>{buildingId}</div>
    </>
  );
};

export default ChartContent;
