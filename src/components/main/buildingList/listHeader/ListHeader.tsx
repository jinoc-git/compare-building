import React from 'react';

import { TableHead, TableHeader, TableRow } from 'components/ui/table';

const ListHeader = () => {
  return (
    <TableHeader className="">
      <TableRow className="bg-[#F3F4F6]">
        <TableHead className="w-[32px]"></TableHead>
        <TableHead>건물명</TableHead>
        <TableHead>준공일(연도)</TableHead>
        <TableHead>준공일(분기)</TableHead>
        <TableHead>연면적</TableHead>
        <TableHead className="w-[80px]">전용률</TableHead>
        <TableHead className="w-[160px]">층수</TableHead>
        <TableHead>보증금</TableHead>
        <TableHead className="w-[120px]">임대료</TableHead>
        <TableHead>관리비</TableHead>
        <TableHead>공실률</TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default ListHeader;
