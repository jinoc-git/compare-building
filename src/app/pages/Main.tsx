import React from 'react';

import RootLayout from 'components/common/layouts/RootLayout';
import BuildingList from 'components/main/buildingList/BuildingList';
import MockSamples from 'components/MockSamples';

const Main = () => {
  return (
    <RootLayout>
      <BuildingList />
      <MockSamples />
    </RootLayout>
  );
};

export default Main;
