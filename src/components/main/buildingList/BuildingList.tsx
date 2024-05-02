import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchBuildings } from 'api/building';

const BuildingList = () => {
  const { data } = useQuery({
    queryKey: ['buildings'],
    queryFn: fetchBuildings,
  });

  console.log(data);

  return (
    <section>
      <div>BuildingList</div>
    </section>
  );
};

export default BuildingList;
