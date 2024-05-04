import React from 'react';

import { Skeleton } from 'components/ui/skeleton';

const SkeletonChart = () => {
  return (
    <>
      <Skeleton className="sm:h-[150px] sm:w-full lg:h-[200px] lg:w-[550px]" />
      <Skeleton className="sm:h-[150px] sm:w-full lg:h-[200px] lg:w-[550px]" />
      <Skeleton className="sm:h-[150px] sm:w-full lg:h-[200px] lg:w-[550px]" />
    </>
  );
};

export default SkeletonChart;
