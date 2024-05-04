import React from 'react';

import CompareButton from 'components/main/buildingList/compareButton/CompareButton';
import { Skeleton } from 'components/ui/skeleton';

const SkeletonBuildingList = () => {
  return (
    <section>
      <CompareButton />
      <Skeleton className="w-full h-[353px]" />
    </section>
  );
};

export default SkeletonBuildingList;
