import React from 'react';

import ButtonArea from 'components/main/buildingList/buttonArea/ButtonArea';
import { Skeleton } from 'components/ui/skeleton';

const SkeletonBuildingList = () => {
  return (
    <section>
      <ButtonArea />
      <Skeleton className="w-full sm:h-[250px] lg:h-[353px]" />
    </section>
  );
};

export default SkeletonBuildingList;
