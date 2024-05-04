import React from 'react';

import RootLayout from 'components/common/layouts/RootLayout';
import BuildingInfo from 'components/main/buildingInfo/BuildingInfo';
import BuildingList from 'components/main/buildingList/BuildingList';

const Main = () => {
  return (
    <RootLayout>
      <BuildingList />
      <BuildingInfo />
    </RootLayout>
  );
};

export default Main;
