import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/ui/button';
import { useCompareStoreState } from 'store/compareStore';

const CompareButton = () => {
  const navigate = useNavigate();
  const selectedBuildingIds = useCompareStoreState();

  const onClickCompareBtn = () => {
    if (selectedBuildingIds.length < 2) return;

    const query = selectedBuildingIds.join(',');

    navigate(`/compare?ids=${query}`);
  };

  return (
    <div className="flex justify-end items-center w-full h-[50px]">
      <Button
        onClick={onClickCompareBtn}
        variant={'outline'}
        name="건물 비교하기 버튼"
        className="w-[80px] h-[30px] border-[#8870ED] text-[#8870ED] hover:text-[#8870ED] font-semibold"
      >
        비교하기
      </Button>
    </div>
  );
};

export default CompareButton;
