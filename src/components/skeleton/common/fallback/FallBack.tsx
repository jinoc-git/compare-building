import React from 'react';

import RootLayout from 'components/common/layouts/RootLayout';
import { Skeleton } from 'components/ui/skeleton';

const FallBack = () => {
  return (
    <RootLayout>
      <Skeleton className="w-full h-[400px]" />
    </RootLayout>
  );
};

export default FallBack;
