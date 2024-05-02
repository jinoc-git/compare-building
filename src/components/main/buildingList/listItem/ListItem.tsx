import React from 'react';

import { TableCell, TableRow } from 'components/ui/table';
import { addCommas, changeAmountFormat } from 'lib/changeFormat';

import type { BuildingType } from 'types/building.type';

interface Props {
  data: BuildingType;
}

const ListItem = ({ data }: Props) => {
  const {
    id,
    address,
    buildingName,
    construct,
    totalArea,
    nla,
    floor,
    deposit,
    rentFee,
    maintenanceFee,
    vacancyRate,
  } = data;

  return (
    <TableRow>
      <TableCell>L</TableCell>
      <TableCell>{buildingName}</TableCell>
      <TableCell>{address}</TableCell>
      <TableCell>{construct.year}</TableCell>
      <TableCell>{construct.quarter}</TableCell>
      <TableCell>{addCommas(totalArea)}평</TableCell>
      <TableCell>{nla.toFixed(2)}%</TableCell>
      <TableCell>
        지하 {floor.under}층 / 지상 {floor.above}층
      </TableCell>
      <TableCell>{deposit}</TableCell>
      <TableCell>{changeAmountFormat(rentFee)}</TableCell>
      <TableCell>{maintenanceFee}</TableCell>
      <TableCell>{vacancyRate.toFixed(2)}%</TableCell>
    </TableRow>
  );
};

export default ListItem;
