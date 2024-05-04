import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchBuildingDetailById } from 'api/building';
import { useBuildingStoreActions } from 'store/buildingStore';

import type { TransformedBuildingType } from 'types/building.type';

const useBuildingDetail = () => {
  const { setBuildingDetail, setIsLoading } = useBuildingStoreActions();

  const [buildingId, setBuildingId] = useState('');
  const [rowData, setRowData] = useState<TransformedBuildingType | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ['buildingDetail', buildingId],
    queryFn: () => fetchBuildingDetailById(buildingId),
    enabled: buildingId !== '',
  });

  const getBuildingDetailByRow = (row: TransformedBuildingType) => {
    setBuildingId(row.id);
    setRowData(row);
  };

  useEffect(() => {
    if (isLoading) setIsLoading(true);
    if (data && rowData) setBuildingDetail(data, rowData);
  }, [data, isLoading, rowData]);

  return { getBuildingDetailByRow };
};

export default useBuildingDetail;
