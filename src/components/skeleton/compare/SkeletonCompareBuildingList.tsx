import React from 'react';

import RootLayout from 'components/common/layouts/RootLayout';
import { Skeleton } from 'components/ui/skeleton';

const SkeletonCompareBuildingList = () => {
  return (
    <RootLayout>
      <section>
        <Skeleton className="w-full h-[390px]" />
      </section>
    </RootLayout>
  );
};

export default SkeletonCompareBuildingList;
