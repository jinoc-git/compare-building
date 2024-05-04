import React from 'react';

import { Skeleton } from 'components/ui/skeleton';

const SkeletonChart = () => {
  return (
    <>
      <Skeleton className="w-[550px] h-[200px]" />
      <Skeleton className="w-[550px] h-[200px]" />
      <Skeleton className="w-[550px] h-[200px]" />
    </>
  );
};

export default SkeletonChart;
