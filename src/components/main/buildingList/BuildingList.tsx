import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchBuildings } from 'api/building';
import { addCommas, changeAmountFormat } from 'lib/changeFormat';

import { columns } from './colunms/columns';
import DataTable from './data-table/DataTable';

const BuildingList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['buildings'],
    queryFn: fetchBuildings,
    staleTime: 60 * 60,
    select: (datas) => {
      const transformedData = datas.map((data) => {
        return {
          ...data,
          totalArea: addCommas(data.totalArea) + '평',
          nla: data.nla.toFixed(2) + '%',
          floor: `지하 ${data.floor.under}층 / 지상 ${data.floor.above}층`,
          rentFee: changeAmountFormat(data.rentFee),
          maintenanceFee: changeAmountFormat(data.maintenanceFee),
          vacancyRate: data.vacancyRate.toFixed(2) + '%',
        };
      });

      return transformedData;
    },
  });

  if (!data) return null;
  console.log(data[0]);

  return (
    <section>
      <DataTable columns={columns} data={data} />
    </section>
  );
};

export default BuildingList;
