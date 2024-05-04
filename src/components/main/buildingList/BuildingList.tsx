import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchBuildings } from 'api/building';
import SkeletonBuildingList from 'components/skeleton/main/buildingList/SkeletonBuildingList';
import { addCommas, changeAmountFormat } from 'lib/changeFormat';

import { columns } from './colunms/columns';
import CompareButton from './compareButton/CompareButton';
import DataTable from './data-table/DataTable';

const BuildingList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['buildings'],
    queryFn: fetchBuildings,
    select: (datas) => {
      const transformedDatas = datas.map((data) => {
        return {
          ...data,
          totalArea: addCommas(data.totalArea) + '평',
          nla: data.nla.toFixed(2) + '%',
          floor: `지하 ${data.floor.under}층 / 지상 ${data.floor.above}층`,
          deposit: changeAmountFormat(data.deposit) + '/평',
          rentFee: changeAmountFormat(data.rentFee) + '/평',
          maintenanceFee: changeAmountFormat(data.maintenanceFee) + '/평',
          vacancyRate: data.vacancyRate.toFixed(2) + '%',
        };
      });

      return transformedDatas;
    },
  });

  if (!data || isLoading) return <SkeletonBuildingList />;

  return (
    <section>
      <CompareButton />
      <DataTable columns={columns} data={data} />
    </section>
  );
};

export default BuildingList;
