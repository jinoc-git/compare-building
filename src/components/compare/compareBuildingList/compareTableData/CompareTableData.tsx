import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import ImgSkeleton from 'components/skeleton/common/imgSkeleton/ImgSkeleton';
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
  lowIdx?: number;
  highIdx?: number;
}

const CompareTableData = ({ title, data, lowIdx, highIdx }: Props) => {
  return (
    <TableRow>
      <TableCell className="sticky left-0 bg-white shadow-tableLeft">{title}</TableCell>
      {data.map((item, idx) => {
        const isImage = title === '이미지' && typeof item === 'string';
        if (isImage) {
          return (
            <TableCell key={uuidv4()} className="py-2">
              <ImgSkeleton
                src={item}
                alt="빌딩 이미지"
                className="w-[110px] h-[110px] mx-auto"
                trigger={item}
              />
            </TableCell>
          );
        }

        const lowTextColor = idx === lowIdx ? 'text-[#F49898]' : '';
        const highTextColor = idx === highIdx ? 'text-[#8870ED]' : '';

        return (
          <TableCell key={uuidv4()} className={`${lowTextColor} ${highTextColor}`}>
            {item}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default CompareTableData;
