import { Checkbox } from 'components/ui/checkbox';

import type { ColumnDef } from '@tanstack/react-table';
import type { TransformedBuildingType } from 'types/building.type';

export const columns: ColumnDef<TransformedBuildingType>[] = [
  {
    id: 'select',
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onClick={(e) => e.stopPropagation()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'buildingName',
    header: '건물명',
  },
  {
    accessorKey: 'address',
    header: '주소',
  },
  {
    accessorKey: 'construct.year',
    header: '준공일(연도)',
  },
  {
    accessorKey: 'construct.quarter',
    header: '준공일(분기)',
  },
  {
    accessorKey: 'totalArea',
    header: '연면적',
  },
  {
    accessorKey: 'nla',
    header: '전용률',
  },
  {
    accessorKey: 'floor',
    header: '층수',
  },
  {
    accessorKey: 'deposit',
    header: '보증금',
  },
  {
    accessorKey: 'rentFee',
    header: '임대료',
  },
  {
    accessorKey: 'maintenanceFee',
    header: '관리비',
  },
  {
    accessorKey: 'vacancyRate',
    header: '공실률',
  },
];
