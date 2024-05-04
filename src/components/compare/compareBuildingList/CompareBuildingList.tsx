import React from 'react';

import { ScrollArea } from '@radix-ui/react-scroll-area';
import { v4 as uuidv4 } from 'uuid';

import { ScrollBar } from 'components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'components/ui/table';
import { useCompareDatas } from 'hooks/useCompareDatas';

import type { CompareBuildingDataType } from 'types/building.type';

const tableRowName = ['이미지', '연면적', '보증금', '임대료', '관리비', '최근거래일', '거래가'];

interface Props {
  buildingNames: string[];
  buildingDetails: CompareBuildingDataType;
}

const CompareBuildingList = ({ buildingNames, buildingDetails }: Props) => {
  console.log(buildingNames, buildingDetails);
  const { transformVerticalDatas } = useCompareDatas();

  const datas = transformVerticalDatas(buildingDetails);

  return (
    <section>
      <ScrollArea>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>비교빌딩</TableHead>
              {buildingNames.map((name) => {
                return <TableHead key={uuidv4()}>{name}</TableHead>;
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {buildingDetails.map((data) => {
              return (
                <TableRow key={uuidv4()}>
                  <TableCell></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default CompareBuildingList;
