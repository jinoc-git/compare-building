import React from 'react';

import { ScrollArea } from '@radix-ui/react-scroll-area';
import { v4 as uuidv4 } from 'uuid';

import { ScrollBar } from 'components/ui/scroll-area';
import { Table, TableHead, TableHeader, TableRow } from 'components/ui/table';

import type { BuildingDetailType } from 'types/building.type';

interface Props {
  buildingNames: string[];
  buildingDetails: (BuildingDetailType | undefined)[];
}

const CompareBuildingList = ({ buildingNames, buildingDetails }: Props) => {
  console.log(buildingNames, buildingDetails);

  return (
    <section>
      <ScrollArea>
        <Table>
          <TableHeader>
            <TableRow>
              {buildingDetails.map(() => {
                return <TableHead key={uuidv4()}></TableHead>;
              })}
            </TableRow>
          </TableHeader>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default CompareBuildingList;
