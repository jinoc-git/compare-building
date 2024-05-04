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
  const { transformVerticalDatas, getLowHighIdx } = useCompareDatas(buildingDetails);

  const datas = transformVerticalDatas();
  const { low, high } = getLowHighIdx();

  return (
    <section>
      <ScrollArea className="h-[390px] overflow-auto">
        <Table className=" min-w-[1800px] ">
          <CompareTableHeader buildingNames={buildingNames} />
          <TableBody>
            <CompareTableData title="이미지" data={datas.images} />
            <CompareTableData
              title="준공연도"
              data={datas.constructs}
              lowIdx={low.construct}
              highIdx={high.construct}
            />
            <CompareTableData
              title="연면적"
              data={datas.totalAreas}
              lowIdx={low.totalArea}
              highIdx={high.totalArea}
            />
            <CompareTableData
              title="보증금"
              data={datas.deposits}
              lowIdx={low.deposit}
              highIdx={high.deposit}
            />
            <CompareTableData
              title="임대료"
              data={datas.rentFees}
              lowIdx={low.rentFee}
              highIdx={high.rentFee}
            />
            <CompareTableData
              title="관리비"
              data={datas.maintenanceFees}
              lowIdx={low.maintenanceFee}
              highIdx={high.maintenanceFee}
            />
            <CompareTableData
              title="최근거래일"
              data={datas.transactionDates}
              lowIdx={low.transactionDate}
              highIdx={high.transactionDate}
            />
            <CompareTableData
              title="거래가"
              data={datas.transactionPrices}
              lowIdx={low.transactionPrice}
              highIdx={high.transactionPrice}
            />
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default CompareBuildingList;
