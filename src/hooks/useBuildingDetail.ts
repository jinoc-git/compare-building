import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchBuildingDetailById } from 'api/building';
import { useBuildingStoreActions } from 'store/buildingStore';

import type { TransformedBuildingType } from 'types/building.type';

const useBuildingDetail = () => {
  const { setBuildingDetail } = useBuildingStoreActions();

  const [buildingId, setBuildingId] = useState('');
  const [rowData, setRowData] = useState<TransformedBuildingType | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ['buildingDetail', buildingId],
    queryFn: () => fetchBuildingDetailById(buildingId),
    staleTime: 60 * 60 * 60,
    refetchOnWindowFocus: false,
    enabled: buildingId !== '',
  });

  const getBuildingDetailByRow = async (row: TransformedBuildingType) => {
    setBuildingId(row.id);
    setRowData(row);
  };

  console.log(data);

  useEffect(() => {
    if (data && rowData) setBuildingDetail(data, rowData);
  }, [data]);

  return { buildingDetail: data, isLoading, getBuildingDetailByRow };
};

export default useBuildingDetail;
