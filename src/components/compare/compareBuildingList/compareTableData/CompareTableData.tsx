import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import { TableCell, TableRow } from 'components/ui/table';

import type { TransformdCompareBuildingDatasType } from 'types/building.type';

type Title =
  | '이미지'
  | '준공연도'
  | '연면적'
  | '보증금'
  | '임대료'
  | '관리비'
  | '최근거래일'
  | '거래가';

interface Props {
  title: Title;
  data: TransformdCompareBuildingDatasType[keyof TransformdCompareBuildingDatasType];
}

const CompareTableData = ({ title, data }: Props) => {
  return (
    <TableRow>
      <TableCell>{title}</TableCell>
      {data.map((item) => {
        const isImage = title === '이미지' && typeof item === 'string';
        if (isImage) {
          return (
            <TableCell key={uuidv4()} className=" py-2">
              <img src={item} alt="빌딩 이미지" className="w-[110px]" />
            </TableCell>
          );
        }

        return <TableCell key={uuidv4()}>{item}</TableCell>;
      })}
    </TableRow>
  );
};

export default CompareTableData;
