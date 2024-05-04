import React, { useCallback, useEffect, useState } from 'react';

import { type ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { ScrollArea, ScrollBar } from 'components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'components/ui/table';
import useBuildingDetail from 'hooks/useBuildingDetail';
import { useCompareStoreActions } from 'store/compareStore';

import ButtonArea from '../buttonArea/ButtonArea';

import type { RowSelectionState } from '@tanstack/react-table';
import type { TransformedBuildingType } from 'types/building.type';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const DataTable = ({ columns, data }: DataTableProps<TransformedBuildingType, any>) => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const { getBuildingDetailByRow } = useBuildingDetail();
  const { setCheckedBuildingIds } = useCompareStoreActions();

  const table = useReactTable<TransformedBuildingType>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    enableRowSelection: Object.keys(rowSelection).length < 10,
  });

  const onClickRow = (row: TransformedBuildingType) => {
    getBuildingDetailByRow(row);
  };

  const onClickAllClear = useCallback(() => {
    setRowSelection({});
  }, []);

  useEffect(() => {
    const checkedIdsAndNames = table.getSelectedRowModel().rows.map(({ original }) => ({
      id: original.id,
      name: original.buildingName,
    }));

    setCheckedBuildingIds(checkedIdsAndNames);
  }, [table.getSelectedRowModel()]);

  useEffect(() => {
    const selected = sessionStorage.getItem('selected');

    if (selected) setRowSelection(JSON.parse(selected));
  }, []);

  useEffect(() => {
    const isEmpty = Object.keys(rowSelection).length === 0;
    if (isEmpty) sessionStorage.setItem('selected', JSON.stringify(rowSelection));

    return () => {
      sessionStorage.setItem('selected', JSON.stringify(rowSelection));
    };
  }, [rowSelection]);

  return (
    <>
      <ButtonArea onClickAllClear={onClickAllClear} />
      <ScrollArea className="sm:h-[250px] lg:h-[353px] overflow-auto">
        <Table className=" min-w-[1400px]">
          <TableHeader className="sticky top-0 shadow-tableTop">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, idx) => {
                  const className =
                    idx === 0
                      ? 'w-[32px]'
                      : idx === 6
                        ? 'w-[80px]'
                        : idx === 7
                          ? 'w-[160px]'
                          : idx === 8
                            ? 'w-[140px]'
                            : idx === 9
                              ? 'w-[140px]'
                              : '';
                  return (
                    <TableHead key={header.id} className={className}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="cursor-pointer"
                  onClick={() => onClickRow(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
};

export default DataTable;
