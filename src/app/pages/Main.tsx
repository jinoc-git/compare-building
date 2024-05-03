import React from 'react';

import RootLayout from 'components/common/layouts/RootLayout';
import BuildingInfo from 'components/main/buildingInfo/BuildingInfo';
import BuildingList from 'components/main/buildingList/BuildingList';
import MockSamples from 'components/MockSamples';

const Main = () => {
  return (
    <RootLayout>
      <BuildingList />
      <BuildingInfo />
      <MockSamples />
    </RootLayout>
  );
};

export default Main;
