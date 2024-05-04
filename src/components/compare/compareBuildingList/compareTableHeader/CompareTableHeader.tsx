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
        <TableHead className="sticky left-0 bg-[#F3F4F6] shadow-tableLeft">비교빌딩</TableHead>
        {buildingNames.map((name) => {
          return (
            <TableHead key={uuidv4()} className=" text-center">
              {name}
            </TableHead>
          );
        })}
      </TableRow>
    </TableHeader>
  );
};

export default CompareTableHeader;
