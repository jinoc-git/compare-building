import React from 'react';

import { Button } from 'components/ui/button';
import { Skeleton } from 'components/ui/skeleton';

const SkeletonBuildingInfo = () => {
  return (
    <section className="flex justify-between mt-[10px] p-[10px] border-t-2">
      <Skeleton className="w-[300px] h-[300px]" />
      <div className="w-1/3 pt-4 space-y-3">
        <Skeleton className="w-full min-w-[300px] h-8" />
        <Skeleton className="w-full min-w-[300px] h-8" />
        <Skeleton className="w-full min-w-[300px] h-8" />
        <Skeleton className="w-full min-w-[300px] h-8" />
        <Skeleton className="w-full min-w-[300px] h-8" />
        <Skeleton className="w-full min-w-[300px] h-8" />
      </div>
      <div className="w-1/3 pt-4 space-y-3">
        <Skeleton className="w-full min-w-[300px] h-8" />
        <Skeleton className="w-full min-w-[300px] h-8" />
        <Skeleton className="w-full min-w-[300px] h-8" />
        <Skeleton className="w-full min-w-[300px] h-8" />
        <div className="flex justify-end items-center h-[64px]">
          <Button
            variant={'outline'}
            name="빌딩 정보 차트 보기 버튼"
            className="h-[35px] border-[#888] hover:border-[#8870ED] hover:text-[#8870ED]"
          >
            차트
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkeletonBuildingInfo;
