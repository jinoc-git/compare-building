'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchBuildingChartById } from 'api/building';
import SkeletonChart from 'components/skeleton/main/buildingInfo/chart/SkeletonChart';
import { Button } from 'components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from 'components/ui/dialog';

import ChartContentItem from './chartContentItem/ChartContentItem';

interface Props {
  buildingId: string;
}

const Chart = ({ buildingId }: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: ['buildingChart', buildingId],
    queryFn: () => fetchBuildingChartById(buildingId),
  });

  if (!data || isLoading) return <SkeletonChart />;

  return (
    <div className="flex justify-end items-center h-[64px]">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={'outline'}
            name="빌딩 정보 차트 보기 버튼"
            className="h-[35px] border-[#888] hover:border-[#8870ED] hover:text-[#8870ED]"
          >
            차트
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:min-w-[340px] lg:min-w-[600px]">
          <ChartContentItem data={data.rentFee} dataKey="임대료" lineColor={'#8070ED'} />
          <ChartContentItem data={data.maintenanceFee} dataKey="관리비" lineColor={'#66A4DF'} />
          <ChartContentItem data={data.vacancyRate} dataKey="공실률" lineColor={'#CA9EBF'} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Chart;
