import React, { useState } from 'react';

import { addCommas } from 'lib/changeFormat';
import { useBuildingStoreState } from 'store/buildingStore';

import Chart from './chart/Chart';
import InfoItem from './infoItem/InfoItem';

const BuildingInfo = () => {
  const { building, isLoading } = useBuildingStoreState();
  const [imgIsLoading, setImgIsLoading] = useState(true);

  if (building === null) return null;

  console.log(building, isLoading);

  return (
    <section className="flex justify-between mt-[10px] p-[10px] border-t-2">
      <img
        src={building.image}
        alt="건물 이미지"
        className="w-[300px] h-[300px] border"
      />
      <div className="w-1/3 pt-4 space-y-3">
        <InfoItem title="용도지역" content={building.landPurpose} />
        <InfoItem title="연면적" content={building.totalArea} />
        <InfoItem title="건폐율" content={building.coverageRatio} />
        <InfoItem title="층수" content={building.floor} />
        <InfoItem
          title="총 주차대수"
          content={addCommas(building.totalPark) + '대'}
        />
        <InfoItem
          title="준공연도"
          content={`${building.construct.year}년 (${building.construct.quarter})`}
        />
      </div>
      <div className="w-1/3 pt-4 space-y-3">
        <InfoItem title="대지면적" content={building.platArea} />
        <InfoItem title="건축면적" content={building.architectureArea} />
        <InfoItem title="용적율" content={building.vlRat} />
        <InfoItem title="주용도" content={building.mainPurpose} />
        <Chart buildingId={building.id} />
      </div>
    </section>
  );
};

export default BuildingInfo;
