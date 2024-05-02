import React from 'react';

import { TableCell, TableRow } from 'components/ui/table';

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
      <TableCell>{totalArea}평</TableCell>
      <TableCell>{nla}</TableCell>
      <TableCell>
        지하 {floor.under} / 지상 {floor.above}
      </TableCell>
      <TableCell>{deposit}</TableCell>
      <TableCell>{rentFee}</TableCell>
      <TableCell>{maintenanceFee}</TableCell>
      <TableCell>{vacancyRate}</TableCell>
    </TableRow>
  );
};

export default ListItem;
