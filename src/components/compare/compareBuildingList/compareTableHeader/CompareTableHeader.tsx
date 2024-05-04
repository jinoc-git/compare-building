import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import { TableHead, TableHeader, TableRow } from 'components/ui/table';

interface Props {
  buildingNames: string[];
}

const CompareTableHeader = ({ buildingNames }: Props) => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>비교빌딩</TableHead>
        {buildingNames.map((name) => {
          return <TableHead key={uuidv4()}>{name}</TableHead>;
        })}
      </TableRow>
    </TableHeader>
  );
};

export default CompareTableHeader;
