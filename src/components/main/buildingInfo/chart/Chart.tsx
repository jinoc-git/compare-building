import React from 'react';

import { Button } from 'components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from 'components/ui/dialog';

import ChartContent from './chartContent/ChartContent';

interface Props {
  buildingId: string;
}

const Chart = ({ buildingId }: Props) => {
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
        <DialogContent className="min-w-[600px]">
          <ChartContent buildingId={buildingId} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Chart;
