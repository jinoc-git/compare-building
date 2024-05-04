import React from 'react';

import { ScrollArea, ScrollBar } from 'components/ui/scroll-area';
import { Table, TableBody } from 'components/ui/table';
import { useCompareDatas } from 'hooks/useCompareDatas';

import CompareTableData from './compareTableData/CompareTableData';
import CompareTableHeader from './compareTableHeader/CompareTableHeader';

import type { CompareBuildingDataType } from 'types/building.type';

interface Props {
  buildingNames: string[];
  buildingDetails: CompareBuildingDataType;
}

const CompareBuildingList = ({ buildingNames, buildingDetails }: Props) => {
  const { transformVerticalDatas } = useCompareDatas();

  const datas = transformVerticalDatas(buildingDetails);

  return (
    <section>
      <ScrollArea className="h-[400px] overflow-auto">
        <Table className=" min-w-[1800px]">
          <CompareTableHeader buildingNames={buildingNames} />
          <TableBody>
            <CompareTableData title="이미지" data={datas.images} />
            <CompareTableData title="준공연도" data={datas.constructs} />
            <CompareTableData title="연면적" data={datas.totalAreas} />
            <CompareTableData title="보증금" data={datas.deposits} />
            <CompareTableData title="임대료" data={datas.rentFees} />
            <CompareTableData title="관리비" data={datas.maintenanceFees} />
            <CompareTableData title="최근거래일" data={datas.transactionDates} />
            <CompareTableData title="거래가" data={datas.transactionPrices} />
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default CompareBuildingList;
