import React from 'react';

import type { BuildingDetailType } from 'types/building.type';

interface Props {
  buildingDetails: (BuildingDetailType | undefined)[];
}

const CompareBuildingList = ({ buildingDetails }: Props) => {
  console.log(buildingDetails);

  return (
    <section>
      <div>CompareBuildingList</div>
    </section>
  );
};

export default CompareBuildingList;
