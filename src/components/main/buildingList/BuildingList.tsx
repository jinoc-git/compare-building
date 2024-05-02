import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchBuildings } from 'api/building';
import { Table, TableBody } from 'components/ui/table';

import ListHeader from './listHeader/ListHeader';

const BuildingList = () => {
  const { data } = useQuery({
    queryKey: ['buildings'],
    queryFn: fetchBuildings,
  });

  console.log(data?.[0]);

  return (
    <section>
      <Table>
        <ListHeader />
        <TableBody></TableBody>
      </Table>
    </section>
  );
};

export default BuildingList;
